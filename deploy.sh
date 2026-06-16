#!/bin/bash
set -euo pipefail

# ================= 基础配置 =================
# 1. 修改为你的项目实际路径
PROJECT_DIR="/var/www/UI2/simplUI"

# 2. 修改为你的日志页面存放路径（刚才创建的目录）
LOG_DIR="/var/www/UI2/simplUI/deploy"
LOG_PAGE="${LOG_DIR}/index.html"
LOG_FILE="${LOG_DIR}/deploy-$(date +%Y%m%d).log"

# 3. Nginx 静态文件目录
NGINX_ROOT="/var/www/UI2/simplUI/storybook-static"

# 先创建日志目录
mkdir -p "${LOG_DIR}"

# 开启日志输出（同时输出到控制台和文件）
exec 1> >(tee -a "${LOG_FILE}")
exec 2> >(tee -a "${LOG_FILE}" >&2)

# 日志输出函数
log_info() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] $1"
}

log_error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [ERROR] $1" >&2
}

# =============== 初始化与代码更新 ===============
# 进入项目目录
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

# =============== 生成部署历史记录 ===============
log_info "生成部署历史记录..."

# 确保日志目录存在
mkdir -p "${LOG_DIR}"

# 如果是首次部署,创建 HTML 骨架
if [ ! -f "${LOG_PAGE}" ]; then
    log_info "创建首次部署的 HTML 页面..."
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
        .commit-list{padding:0}
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
        <div class="commit-list" id="commitList">
        </div>
    </div>
</body>
</html>
HTMLEOF
fi

# 生成本次提交的详细信息区块
if [ "${PREV_COMMIT}" != "${NEW_COMMIT}" ]; then
    log_info "添加新的提交记录到 HTML..."
    
    # 获取变更文件列表
    CHANGED_FILES=$(git diff --name-only "${PREV_COMMIT}" "${NEW_COMMIT}" 2>/dev/null | tr '\n' ' ' || echo "无")
    
    # 生成提交信息 HTML
    COMMIT_HTML=$(git log --pretty=format:"<div class='commit-item'><div class='commit-hash'>%h</div><div class='deploy-time'>部署时间：${DEPLOY_TIME}</div><div class='commit-time'>提交时间：%ad</div><div class='commit-author'>提交人：%an</div><div class='commit-msg'>提交说明：%s</div><div class='file-list'>变更文件：${CHANGED_FILES}</div></div>" --date=format:"%Y-%m-%d %H:%M:%S" "${PREV_COMMIT}..${NEW_COMMIT}")
    
    log_info "生成的提交记录: ${COMMIT_HTML:0:100}..."
    
    # 使用临时文件方式插入新内容
    TEMP_FILE=$(mktemp)
    
    # 读取原文件，在 commitList div 后插入新内容
    awk -v content="${COMMIT_HTML}" '
        /<div class="commit-list" id="commitList">/ {
            print
            print content
            next
        }
        { print }
    ' "${LOG_PAGE}" > "${TEMP_FILE}"
    
    mv "${TEMP_FILE}" "${LOG_PAGE}"
    
    log_info "提交记录已添加到 HTML"
else
    log_info "没有新的提交，跳过 HTML 更新"
fi

log_info "部署完成!"
log_info "日志文件: ${LOG_FILE}"
log_info "部署记录: ${LOG_PAGE}"
echo "更新记录页面已生成,请访问: http://110.42.255.239/simplUI/deploy/index.html"
