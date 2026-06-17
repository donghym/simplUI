const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// ================= 配置区 =================
const PORT = 9002;
const DEPLOY_SCRIPT_PATH = '/var/www/UI/simplUI/deploy.sh';
const LOG_DIR = '/var/www/UI/simplUI/deploy';
const LOG_FILE = path.join(LOG_DIR, 'index.html');
// ==========================================

// 部署状态
let isDeploying = false;

// 日志函数
const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

// 确保日志目录存在
fs.mkdirSync(LOG_DIR, { recursive: true });

// 执行部署
const deploy = () => {
    if (isDeploying) {
        log('⚠️ 部署进行中，跳过本次请求');
        return;
    }
    
    isDeploying = true;
    log('🚀 开始部署...');
    
    exec(`bash ${DEPLOY_SCRIPT_PATH}`, (error, stdout, stderr) => {
        isDeploying = false;
        if (error) {
            log(`❌ 部署失败: ${error.message}`);
            return;
        }
        log(`✅ 部署成功`);
        if (stdout) log(stdout);
    });
};

// 路由处理
const routes = {
    'GET /': (req, res) => {
        if (fs.existsSync(LOG_FILE)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(fs.readFileSync(LOG_FILE, 'utf-8'));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('暂无部署记录');
        }
    },
    'POST /webhook': (req, res) => {
        log('🔔 收到 Webhook 触发');
        deploy();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Webhook received, deploying...');
    }
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const route = routes[`${req.method} ${req.url}`];
    if (route) {
        route(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    log(`🚀 Webhook Server running at http://localhost:${PORT}/`);
    log(`📄 日志页面: http://localhost:${PORT}/`);
    log(`🔗 Webhook: POST http://localhost:${PORT}/webhook`);
});