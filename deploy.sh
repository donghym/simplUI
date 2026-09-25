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
