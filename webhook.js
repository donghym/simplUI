#!/usr/bin/env node
/**
 * Git Webhook 自动部署服务
 * 监听 Git 推送事件，自动拉取代码并执行 deploy.sh
 */

const http = require('http');
const { exec, spawn } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// ==================== 配置区域 ====================
const CONFIG = {
  // 服务器监听端口
  port: 9002,

  // 项目路径
  projectDir: '/var/www/UI2/simplUI',

  // Git 仓库地址
  gitRepo: 'https://donghy.top/git/admin/simplUI.git',

  // Git 分支
  branch: 'main',

  // deploy.sh 脚本路径
  deployScript: '/var/www/UI2/simplUI/deploy.sh',

  // Webhook Secret (用于验证请求)
  secret: process.env.WEBHOOK_SECRET || 'your-secret-key-here',

  // 日志文件路径
  logFile: '/var/www/UI2/simplUI/deploy/webhook.log',

  // 部署锁文件（防止并发部署）
  lockFile: '/tmp/simplui-deploy.lock',

  // 最大部署等待时间（秒）
  deployTimeout: 600,
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

// ==================== 部署锁 ====================
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
  return new Promise((resolve, reject) => {
    const defaultOptions = {
      cwd: CONFIG.projectDir,
      timeout: CONFIG.deployTimeout * 1000,
      env: { ...process.env, FORCE_COLOR: '0' }
    };

    log(`执行命令: ${command}`);

    const child = exec(command, { ...defaultOptions, ...options }, (error, stdout, stderr) => {
      if (error) {
        reject({ error: error.message, stderr, stdout });
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

// ==================== 执行 deploy.sh ====================
function runDeployScript() {
  return new Promise((resolve, reject) => {
    log('开始执行 deploy.sh...');

    const child = spawn('bash', [CONFIG.deployScript], {
      cwd: CONFIG.projectDir,
      env: { ...process.env, FORCE_COLOR: '0' },
      stdio: ['ignore', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      const output = data.toString();
      stdout += output;
      log(`[deploy.sh] ${output.trim()}`);
    });

    child.stderr.on('data', (data) => {
      const output = data.toString();
      stderr += output;
      log(`[deploy.sh ERROR] ${output.trim()}`, 'ERROR');
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr, code });
      } else {
        reject({ error: `deploy.sh 退出码: ${code}`, stdout, stderr, code });
      }
    });

    child.on('error', (error) => {
      reject({ error: error.message, stdout, stderr });
    });

    // 超时处理
    setTimeout(() => {
      child.kill('SIGTERM');
      reject({ error: '部署超时', stdout, stderr });
    }, CONFIG.deployTimeout * 1000);
  });
}

// ==================== 验证 Webhook 签名 ====================
function verifySignature(payload, signature, secret) {
  // 如果没有 signature 或 signature 格式不正确，跳过验证
  if (!signature || signature === 'sha256=' || signature === 'sha1=') {
    log('Signature 为空，跳过验证');
    return true;
  }

  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(digest)
    );
  } catch {
    return false;
  }
}

// ==================== 部署流程 ====================
async function deploy() {
  log('========== 开始部署流程 ==========');

  // 检查部署锁
  if (!acquireLock()) {
    log('已有部署任务在进行中，跳过本次部署', 'WARN');
    return { success: false, message: 'Deploy in progress' };
  }

  try {
    // 1. 检查项目目录
    if (!fs.existsSync(CONFIG.projectDir)) {
      log('项目目录不存在，执行 git clone...', 'WARN');
      const cloneResult = await execCommand(
        `git clone ${CONFIG.gitRepo} ${CONFIG.projectDir}`,
        { cwd: path.dirname(CONFIG.projectDir) }
      );
      log('Git clone 完成');
    }

    // 2. 进入项目目录
    process.chdir(CONFIG.projectDir);

    // 3. 拉取最新代码
    log('拉取最新代码...');
    await execCommand('git fetch origin');
    await execCommand(`git reset --hard origin/${CONFIG.branch}`);
    await execCommand('git clean -fd');
    log('代码拉取完成');

    // 4. 执行 deploy.sh
    const deployResult = await runDeployScript();
    log('deploy.sh 执行成功');

    log('========== 部署成功 ==========');
    return {
      success: true,
      message: 'Deploy successful',
      timestamp: new Date().toISOString(),
    };

  } catch (error) {
    log(`部署失败: ${error.error || error.message}`, 'ERROR');
    if (error.stdout) log(`stdout: ${error.stdout}`, 'ERROR');
    if (error.stderr) log(`stderr: ${error.stderr}`, 'ERROR');

    return {
      success: false,
      message: error.error || error.message,
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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Hub-Signature-256, X-Gitlab-Token, Authorization');

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
      project: CONFIG.projectDir,
    }));
    return;
  }

  // Webhook 端点 - 接收 Git 推送事件
  if (req.url === '/webhook' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        // 验证签名（GitHub/Gitea 格式）
        const signature = req.headers['x-hub-signature-256'] || req.headers['x-gitea-signature'];
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

        // 立即响应，异步执行部署
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

  // 手动触发部署端点
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
  log(`项目路径: ${CONFIG.projectDir}`);
  log(`Git 仓库: ${CONFIG.gitRepo}`);
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
