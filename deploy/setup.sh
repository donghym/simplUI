#!/bin/bash
# SimplUI Webhook 自动部署安装脚本
# 在服务器上执行此脚本完成所有配置

set -e

echo "========================================"
echo "SimplUI Webhook 自动部署安装脚本"
echo "========================================"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 配置
PROJECT_DIR="/var/www/UI2/simplUI"
WEBHOOK_PORT=9002
WEBHOOK_SECRET="your-secret-key-here"  # 建议修改为自己的密钥

# 检查 root 权限
if [ "$EUID" -ne 0 ]; then 
   echo -e "${RED}请使用 sudo 运行此脚本${NC}"
   exit 1
fi

echo -e "${GREEN}[1/6] 检查并安装依赖...${NC}"
# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js 未安装，正在安装...${NC}"
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

# 检查 pnpm
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}pnpm 未安装，正在安装...${NC}"
    npm install -g pnpm
fi

# 检查 nginx
if ! command -v nginx &> /dev/null; then
    echo -e "${YELLOW}Nginx 未安装，请先安装 Nginx${NC}"
    exit 1
fi

echo -e "${GREEN}[2/6] 创建项目目录...${NC}"
mkdir -p $PROJECT_DIR
mkdir -p $PROJECT_DIR/deploy

# 确保目录权限正确
chown -R ubuntu:ubuntu $PROJECT_DIR

echo -e "${GREEN}[3/6] 配置 Nginx...${NC}"
# 创建 Nginx 配置
cat > /etc/nginx/sites-available/simplui << 'EOF'
# SimplUI Storybook 配置
server {
    listen 80;
    server_name donghy.top www.donghy.top;
    
    # UI2 - SimplUI Storybook
    location /ui2 {
        alias /var/www/UI2/simplUI/storybook-static;
        index index.html index.htm;
        try_files $uri $uri/ /ui2/index.html;
        
        # 禁用缓存（开发环境）
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate";
        add_header Pragma "no-cache";
        
        # 允许跨域
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
        add_header Access-Control-Allow-Headers "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type";
    }
    
    # Webhook 服务（内部访问）
    location /webhook/ui2 {
        proxy_pass http://127.0.0.1:9002/webhook;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Content-Type "application/json";
        
        # GitHub 特定的 Header
        proxy_set_header X-GitHub-Delivery $http_x_github_delivery;
        proxy_set_header X-GitHub-Event $http_x_github_event;
        proxy_set_header X-Hub-Signature-256 $http_x_hub_signature_256;
        
        # 超时设置
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Webhook 健康检查
    location /webhook/ui2/health {
        proxy_pass http://127.0.0.1:9002/health;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        access_log off;
    }
}
EOF

# 启用配置
ln -sf /etc/nginx/sites-available/simplui /etc/nginx/sites-enabled/simplui

# 测试并重载 Nginx
nginx -t && systemctl reload nginx

echo -e "${GREEN}[4/6] 安装 Systemd 服务...${NC}"
# 创建 webhook 服务
cat > /etc/systemd/system/simplui-webhook.service << EOF
[Unit]
Description=SimplUI Storybook Webhook Auto Deploy Service
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=$PROJECT_DIR
Environment="WEBHOOK_SECRET=$WEBHOOK_SECRET"
Environment="NODE_ENV=production"
ExecStart=/usr/bin/node $PROJECT_DIR/deploy/webhook-server.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
SyslogIdentifier=simplui-webhook

[Install]
WantedBy=multi-user.target
EOF

# 重载 systemd
systemctl daemon-reload

echo -e "${GREEN}[5/6] 设置权限...${NC}"
# 确保 ubuntu 用户可以写入 node_modules
chown -R ubuntu:ubuntu /var/www/UI2
chmod -R 755 /var/www/UI2

echo -e "${GREEN}[6/6] 启动服务...${NC}"
# 启动 webhook 服务
systemctl enable simplui-webhook
systemctl start simplui-webhook

# 检查服务状态
sleep 2
if systemctl is-active --quiet simplui-webhook; then
    echo -e "${GREEN}✓ Webhook 服务启动成功${NC}"
else
    echo -e "${RED}✗ Webhook 服务启动失败，请检查日志: journalctl -u simplui-webhook${NC}"
    exit 1
fi

echo ""
echo "========================================"
echo -e "${GREEN}安装完成！${NC}"
echo "========================================"
echo ""
echo "访问地址:"
echo "  - Storybook: http://donghy.top/ui2"
echo "  - Webhook Health: http://donghy.top/webhook/ui2/health"
echo ""
echo "GitHub Webhook 配置:"
echo "  - Payload URL: http://donghy.top/webhook/ui2"
echo "  - Content type: application/json"
echo "  - Secret: $WEBHOOK_SECRET"
echo ""
echo "常用命令:"
echo "  查看服务状态: sudo systemctl status simplui-webhook"
echo "  查看日志: sudo journalctl -u simplui-webhook -f"
echo "  重启服务: sudo systemctl restart simplui-webhook"
echo "  手动部署: curl -X POST -H 'Authorization: Bearer $WEBHOOK_SECRET' http://localhost:9002/deploy"
echo ""
echo -e "${YELLOW}注意: 请修改 WEBHOOK_SECRET 为安全的密钥！${NC}"
echo "========================================"
