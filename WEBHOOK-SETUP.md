# SimplUI Webhook 自动部署配置指南

## 文件说明

| 文件 | 说明 |
|------|------|
| `webhook.js` | Webhook 服务主程序 |
| `webhook.service` | Systemd 服务配置 |

## 快速部署

### 1. 上传文件到服务器

```bash
# 在本地执行，将文件上传到服务器
scp webhook.js webhook.service ubuntu@110.42.255.239:/var/www/UI/simplUI/
```

### 2. 服务器上配置

```bash
# SSH 登录服务器
ssh ubuntu@110.42.255.239

# 进入项目目录
cd /var/www/UI/simplUI

# 修改 webhook.js 权限
chmod +x webhook.js

# 修改配置（可选）
vim webhook.js
# 修改 CONFIG 中的 secret、branch 等配置
```

### 3. 安装 Systemd 服务

```bash
# 复制服务文件
sudo cp /var/www/UI/simplUI/webhook.service /etc/systemd/system/

# 修改服务配置中的 Secret（重要！）
sudo vim /etc/systemd/system/webhook.service
# 将 Environment="WEBHOOK_SECRET=your-secret-key-here" 改为你的密钥

# 重载 systemd
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start simplui-webhook

# 设置开机自启
sudo systemctl enable simplui-webhook

# 查看状态
sudo systemctl status simplui-webhook
```

### 4. 配置 Nginx

在 `/etc/nginx/sites-available/donghy.top` 中添加：

```nginx
# Webhook 服务
location /webhook/UI {
    proxy_pass http://127.0.0.1:9002/webhook;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Content-Type "application/json";
    
    # Git 平台特定的 Header
    proxy_set_header X-GitHub-Delivery $http_x_github_delivery;
    proxy_set_header X-GitHub-Event $http_x_github_event;
    proxy_set_header X-Hub-Signature-256 $http_x_hub_signature_256;
    proxy_set_header X-Gitea-Signature $http_x_gitea_signature;
    
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}

# Webhook 健康检查
location /webhook/UI/health {
    proxy_pass http://127.0.0.1:9002/health;
    proxy_http_version 1.1;
    access_log off;
}
```

然后重载 Nginx：

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 5. Git 仓库配置 Webhook

进入你的 Git 仓库（Gitea）管理界面：

1. 进入仓库 → Settings → Webhooks → Add Webhook
2. 选择 **Gitea** 类型
3. 填写配置：
   - **Target URL**: `https://donghy.top/webhook/UI`
   - **Secret**: `your-secret-key-here`（与 webhook.service 中的一致）
   - **Trigger On**: 勾选 **Push events**
   - **Branch filter**: `main`（或你的分支名）
4. 点击 **Add Webhook**

### 6. 测试

```bash
# 测试健康检查
curl https://donghy.top/webhook/UI/health

# 手动触发部署（替换为你的 secret）
curl -X POST -H 'Authorization: Bearer your-secret-key-here' https://donghy.top/webhook/UI/deploy

# 查看日志
sudo journalctl -u simplui-webhook -f
```

## 常用命令

```bash
# 查看服务状态
sudo systemctl status simplui-webhook

# 查看日志
sudo journalctl -u simplui-webhook -f

# 重启服务
sudo systemctl restart simplui-webhook

# 停止服务
sudo systemctl stop simplui-webhook

# 查看 webhook 日志文件
tail -f /var/www/UI/simplUI/deploy/webhook.log
```

## 部署流程

当收到 Git push 事件时：

1. 验证 Webhook 签名
2. 检查分支是否匹配
3. 拉取最新代码 (`git fetch` + `git reset`)
4. 执行 `deploy.sh` 脚本
5. 记录部署日志

## 安全建议

1. **修改默认 Secret**: 将 `your-secret-key-here` 替换为随机字符串
2. **使用 HTTPS**: Webhook URL 使用 https://
3. **防火墙限制**: 可以限制 webhook 端口仅允许本地访问（已通过 Nginx 代理）
