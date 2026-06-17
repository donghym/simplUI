# SimplUI Storybook 自动部署指南

## 快速开始

### 1. 在服务器上执行安装

```bash
# 进入项目目录
cd /var/www/UI/simplUI

# 执行安装脚本（需要 root 权限）
sudo bash deploy/setup.sh
```

### 2. GitHub Webhook 配置

1. 进入 GitHub 仓库 → Settings → Webhooks → Add webhook
2. 填写配置：
   - **Payload URL**: `http://donghy.top/webhook/UI`
   - **Content type**: `application/json`
   - **Secret**: `your-secret-key-here`（建议修改为自定义密钥）
   - **Events**: 选择 "Just the push event"
3. 点击 "Add webhook"

### 3. 验证部署

```bash
# 检查 webhook 服务状态
curl http://donghy.top/webhook/UI/health

# 手动触发部署
curl -X POST -H 'Authorization: Bearer your-secret-key-here' http://localhost:9002/deploy

# 查看部署日志
sudo journalctl -u simplui-webhook -f
```

## 文件说明

| 文件 | 说明 |
|------|------|
| `deploy/webhook-server.js` | Webhook 服务主程序 |
| `deploy/simplui-webhook.service` | Systemd 服务配置 |
| `deploy/setup.sh` | 一键安装脚本 |
| `nginx.ini` | Nginx 配置参考 |

## 目录结构

```
/var/www/UI/simplUI/
├── storybook-static/      # Storybook 构建输出
├── deploy/
│   ├── webhook-server.js  # Webhook 服务
│   ├── webhook.log        # 部署日志
│   └── setup.sh           # 安装脚本
└── ...
```

## 常见问题

### 1. 权限问题

```bash
# 修复权限
sudo chown -R ubuntu:ubuntu /var/www/UI
sudo chmod -R 755 /var/www/UI
```

### 2. 构建失败

```bash
# 手动执行构建排查问题
cd /var/www/UI/simplUI
pnpm install
pnpm run storybook:build
```

### 3. 修改 Webhook Secret

```bash
# 编辑服务配置
sudo systemctl edit simplui-webhook

# 添加环境变量
[Service]
Environment="WEBHOOK_SECRET=your-new-secret"

# 重启服务
sudo systemctl daemon-reload
sudo systemctl restart simplui-webhook
```

## 安全建议

1. **修改默认 Secret**: 将 `your-secret-key-here` 替换为随机字符串
2. **使用 HTTPS**: 配置 SSL 证书后修改 webhook URL 为 https
3. **防火墙限制**: 仅允许 GitHub IP 访问 webhook 端口
