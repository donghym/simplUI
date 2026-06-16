#!/bin/bash
set -euo pipefail

# ================= 基础配置 =================
# 1. 修改为你的项目实际路径
PROJECT_DIR="/var/www/UI2/SimplUI"

# 2. 修改为你的日志页面存放路径（刚才创建的目录）
LOG_DIR="/var/www/UI2/SimplUI/deploy"
LOG_PAGE="${LOG_DIR}/index.html"

# 3. Nginx 静态文件目录
NGINX_ROOT="/var/www/UI2/SimplUI/storybook-static"

# 日志输出函数
log_info() {
    echo "[INFO] $1"
}

# =============== 初始化与代码更新 ===============
# 创建日志目录并进入项目目录
mkdir -p "${LOG_DIR}"
cd "${PROJECT_DIR}" || exit 1

# 获取更新前的版本号
PREV_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "empty")
log_info "部署前版本: ${PREV_COMMIT:0:8}"

# 拉取最新代码
log_info "正在拉取最新代码..."
git fetch --all
git reset --hard origin/main  # 如果是 master 分支请改为 master
git clean -fd

# 获取更新后的版本号
NEW_COMMIT=$(git rev-parse HEAD)
DEPLOY_TIME=$(date '+%Y-%m-%d %H:%M:%S')
log_info "部署后版本: ${NEW_COMMIT:0:8}"

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
# rm -rf "${NGINX_ROOT:?}"/*
# =============== 生成部署历史记录 ===============
if [ "${PREV_COMMIT}" != "${NEW_COMMIT}" ]; then
    log_info "生成部署历史记录..."
    
    # 确保日志目录存在
    mkdir -p "${LOG_DIR}"
    
    # 如果是首次部署,创建 HTML 骨架
    if [ ! -f "${LOG_PAGE}" ]; then
        cat > "${LOG_PAGE}" <<HTML
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
HTML
    fi
    
    # 生成本次提交的详细信息区块（按时间倒序，最新的在最前面）
    TEMP_CONTENT=$(git log --pretty=format:" \
        <div class='commit-item'> \
            <div class='commit-hash'>%h</div> \
            <div class='deploy-time'>部署时间：${DEPLOY_TIME}</div> \
            <div class='commit-time'>提交时间：%ad</div> \
            <div class='commit-author'>提交人：%an</div> \
            <div class='commit-msg'>提交说明：%s</div> \
            <div class='file-list'>变更文件：$(git diff --name-only ${PREV_COMMIT} ${NEW_COMMIT} | tr '\n' ' ')</div> \
        </div>" \
        --date=format:"%Y-%m-%d %H:%M:%S" \
        "${PREV_COMMIT}..${NEW_COMMIT}")

    # 将新内容插入到 commitList 的开头（最新的在最上面）
    sed -i -e '/<\/div><\/body><\/html>/d' "${LOG_PAGE}"
    sed -i -e '/<div id="commitList">/r /dev/stdin' "${LOG_PAGE}" <<< "${TEMP_CONTENT}"
    echo "</div></body></html>" >> "${LOG_PAGE}"
fi

log_info "部署完成!"
echo "更新记录页面已生成,请访问: http://110.42.255.239/simplUI/deploy/index.html"

