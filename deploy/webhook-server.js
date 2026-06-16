#!/usr/bin/env node
/**
 * Git Webhook 自动部署服务
 * 监听 GitHub/GitLab 推送事件，自动拉取代码并构建 Storybook
 */

const http = require('http');
const { execSync } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// ==================== 配置区域 ====================
const CONFIG = {
  // 服务器监听端口
  port: 9002,
  
  // 项目路径
  projectPath: '/var/www/UI2/simplUI',
  
  // 构建输出目录
  buildOutputDir: '/var/www/UI2/simplUI/storybook-static',
  
  // Git 分支
  branch: 'main',
  
  // Webhook Secret (用于验证请求，建议设置)
  // 在 GitHub/GitLab 仓库设置中配置相同的 secret
  secret: process.env.WEBHOOK_SECRET || 'your-secret-key-here',
  
  // 日志文件路径
  logFile: '/var/www/UI2/simplUI/deploy/webhook.log',
  
  // 构建锁文件（防止并发构建）
  lockFile: '/tmp/simplui-build.lock',
  
  // 最大构建等待时间（秒）
  buildTimeout: 600,
};

// ==================== 日志工具 ====================
function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}\n`;
  
  console.log(logMessage.trim());
  
  // 写入日志文件
  const logDir = path.dirname(CONFIG.logFile);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  fs.appendFileSync(CONFIG.logFile, logMessage);
}

// ==================== 构建锁 ====================
function acquireLock() {
  if (fs.existsSync(CONFIG.lockFile)) {
    const lockTime = fs.statSync(CONFIG.lockFile).mtime;
    const now = new Date();
    const diffMinutes = (now - lockTime) / 1000 / 60;
    
    // 如果锁超过 30 分钟，认为是死锁，强制释放
    if (diffMinutes > 30) {
      log('检测到死锁，强制释放', 'WARN');
      releaseLock();
      return true;
    }
    return false;
  }
  
  fs.writeFileSync(CONFIG.lockFile, String(process.pid));
  return true;
}

function releaseLock() {
  if (fs.existsSync(CONFIG.lockFile)) {
    fs.unlinkSync(CONFIG.lockFile);
  }
}

// ==================== 执行命令 ====================
function execCommand(command, options = {}) {
  const defaultOptions = {
    cwd: CONFIG.projectPath,
    encoding: 'utf8',
    timeout: CONFIG.buildTimeout * 1000,
    stdio: 'pipe',
  };
  
  try {
    log(`执行命令: ${command}`);
    const result = execSync(command, { ...defaultOptions, ...options });
    return { success: true, output: result.toString() };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      stderr: error.stderr?.toString(),
      stdout: error.stdout?.toString(),
    };
  }
}

// ==================== 验证 Webhook 签名 ====================
function verifySignature(payload, signature, secret) {
  if (!signature) return false;
  
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

// ==================== 部署流程 ====================
async function deploy() {
  log('========== 开始部署流程 ==========');
  
  // 检查构建锁
  if (!acquireLock()) {
    log('已有构建任务在进行中，跳过本次部署', 'WARN');
    return { success: false, message: 'Build in progress' };
  }
  
  try {
    // 1. 进入项目目录
    if (!fs.existsSync(CONFIG.projectPath)) {
      throw new Error(`项目目录不存在: ${CONFIG.projectPath}`);
    }
    
    // 2. 拉取最新代码
    log('拉取最新代码...');
    const pullResult = execCommand('git pull origin ' + CONFIG.branch);
    if (!pullResult.success) {
      throw new Error(`Git pull 失败: ${pullResult.error}`);
    }
    log('代码拉取成功');
    
    // 3. 安装依赖（使用 pnpm，如果没有则使用 npm）
    log('安装依赖...');
    const pkgManager = fs.existsSync(path.join(CONFIG.projectPath, 'pnpm-lock.yaml')) 
      ? 'pnpm' 
      : 'npm';
    const installResult = execCommand(`${pkgManager} install`);
    if (!installResult.success) {
      throw new Error(`依赖安装失败: ${installResult.error}`);
    }
    log('依赖安装成功');
    
    // 4. 构建 Storybook
    log('开始构建 Storybook...');
    const buildResult = execCommand(`${pkgManager} run storybook:build`);
    if (!buildResult.success) {
      throw new Error(`构建失败: ${buildResult.error}\n${buildResult.stderr}`);
    }
    log('Storybook 构建成功');
    
    // 5. 验证构建输出
    if (!fs.existsSync(CONFIG.buildOutputDir)) {
      throw new Error(`构建输出目录不存在: ${CONFIG.buildOutputDir}`);
    }
    
    // 6. 设置权限
    execCommand(`chmod -R 755 ${CONFIG.buildOutputDir}`);
    log('权限设置完成');
    
    log('========== 部署成功 ==========');
    return { 
      success: true, 
      message: 'Deploy successful',
      timestamp: new Date().toISOString(),
    };
    
  } catch (error) {
    log(`部署失败: ${error.message}`, 'ERROR');
    return { 
      success: false, 
      message: error.message,
      timestamp: new Date().toISOString(),
    };
  } finally {
    releaseLock();
  }
}

// ==================== HTTP 服务器 ====================
const server = http.createServer(async (req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Hub-Signature-256, X-Gitlab-Token');
  
  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // 健康检查端点
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      project: CONFIG.projectPath,
    }));
    return;
  }
  
  // Webhook 端点
  if (req.url === '/webhook' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      try {
        // 验证签名（GitHub）
        const signature = req.headers['x-hub-signature-256'];
        if (signature && !verifySignature(body, signature, CONFIG.secret)) {
          log('签名验证失败', 'WARN');
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid signature' }));
          return;
        }
        
        // 解析 payload
        const payload = JSON.parse(body);
        log(`收到 Webhook 请求: ${payload.ref || 'unknown'}`);
        
        // 检查分支
        if (payload.ref && payload.ref !== `refs/heads/${CONFIG.branch}`) {
          log(`分支不匹配: ${payload.ref}，跳过部署`, 'INFO');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Branch not match, skipped' }));
          return;
        }
        
        // 执行部署
        res.writeHead(202, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Deploy started' }));
        
        // 异步执行部署
        deploy();
        
      } catch (error) {
        log(`Webhook 处理错误: ${error.message}`, 'ERROR');
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
    
    return;
  }
  
  // 手动触发部署端点（需要 token 验证）
  if (req.url === '/deploy' && req.method === 'POST') {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') 
      ? authHeader.slice(7) 
      : null;
    
    if (token !== CONFIG.secret) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }
    
    res.writeHead(202, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Deploy started' }));
    
    deploy();
    return;
  }
  
  // 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

// ==================== 启动服务 ====================
server.listen(CONFIG.port, '0.0.0.0', () => {
  log(`========================================`);
  log(`Webhook 服务已启动`);
  log(`监听端口: ${CONFIG.port}`);
  log(`项目路径: ${CONFIG.projectPath}`);
  log(`构建分支: ${CONFIG.branch}`);
  log(`========================================`);
  log(`健康检查: http://localhost:${CONFIG.port}/health`);
  log(`Webhook 地址: http://localhost:${CONFIG.port}/webhook`);
  log(`手动部署: POST http://localhost:${CONFIG.port}/deploy`);
  log(`========================================`);
});

// 优雅退出
process.on('SIGTERM', () => {
  log('收到 SIGTERM 信号，正在关闭服务...');
  server.close(() => {
    log('服务已关闭');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  log('收到 SIGINT 信号，正在关闭服务...');
  server.close(() => {
    log('服务已关闭');
    process.exit(0);
  });
});
