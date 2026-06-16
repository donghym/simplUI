#!/bin/bash
set -euo pipefail

# ================= 基础配置 =================
PROJECT_DIR="/var/www/UI2/simplUI"
LOG_DIR="/var/www/UI2/simplUI/deploy"
LOG_PAGE="${LOG_DIR}/index.html"
LOG_FILE="${LOG_DIR}/deploy-$(date +%Y%m%d).log"
NGINX_ROOT="/var/www/UI2/simplUI/storybook-static"

mkdir -p "${LOG_DIR}"

# 日志输出
exec 1> >(tee -a "${LOG_FILE}")
exec 2> >(tee -a "${LOG_FILE}" >&2)

log_info() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] $1"
}
log_error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [ERROR] $1" >&2
}

# =============== 初始化与代码更新 ===============
cd "${PROJECT_DIR}" || exit 1

# 修复：区分空仓库 / 正常仓库
if git rev-parse HEAD >/dev/null 2>&1; then
    PREV_COMMIT=$(git rev-parse HEAD)
else
    PREV_COMMIT=""
fi
log_info "部署前版本: ${PREV_COMMIT:-empty}"

log_info "正在拉取最新代码..."
git fetch --all
git reset --hard origin/main
git clean -fd

NEW_COMMIT=$(git rev-parse HEAD)
DEPLOY_TIME=$(date '+%Y-%m-%d %H:%M:%S')
log_info "部署后版本: ${NEW_COMMIT:0:8}"

# =============== 安装依赖与构建 ===============
log_info "安装依赖..."
if [ -f "pnpm-lock.yaml" ]; then
    if ! pnpm install --dry-run --frozen-lockfile 2>/dev/null; then
        log_info "检测到 lockfile 损坏，重新生成..."
        rm -f pnpm-lock.yaml
        rm -rf node_modules
    fi
fi
pnpm install

log_info "构建文档..."
npm run storybook:build
log_info "部署静态文件到 Nginx 目录..."

# =============== 生成部署历史记录 ===============
mkdir -p "${LOG_DIR}"

# 初始化HTML页面骨架
if [ ! -f "${LOG_PAGE}" ]; then
    log_info "创建首次部署HTML页面..."
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

# ========== 修复核心：分两种场景生成提交记录 ==========
COMMIT_HTML=""
CHANGED_FILES=""

if [[ -z "${PREV_COMMIT}" ]]; then
    # 场景1：首次部署，无之前版本，取全部提交
    log_info "首次部署，拉取全量提交记录"
    CHANGED_FILES=$(git diff --name-only "${NEW_COMMIT}^!" 2>/dev/null | tr '\n' ' ')
    COMMIT_HTML=$(git log --pretty=format:"<div class='commit-item'><div class='commit-hash'>%h</div><div class='deploy-time'>部署时间：${DEPLOY_TIME}</div><div class='commit-time'>提交时间：%ad</div><div class='commit-author'>提交人：%an</div><div class='commit-msg'>提交说明：%s</div><div class='file-list'>变更文件：${CHANGED_FILES}</div></div>" --date=format:"%Y-%m-%d %H:%M:%S" "${NEW_COMMIT}")
elif [[ "${PREV_COMMIT}" != "${NEW_COMMIT}" ]]; then
    # 场景2：正常更新，两个版本有差异
    log_info "检测到代码更新，生成变更记录"
    CHANGED_FILES=$(git diff --name-only "${PREV_COMMIT}" "${NEW_COMMIT}" 2>/dev/null | tr '\n' ' ')
    COMMIT_HTML=$(git log --pretty=format:"<div class='commit-item'><div class='commit-hash'>%h</div><div class='deploy-time'>部署时间：${DEPLOY_TIME}</div><div class='commit-time'>提交时间：%ad</div><div class='commit-author'>提交人：%an</div><div class='commit-msg'>提交说明：%s</div><div class='file-list'>变更文件：${CHANGED_FILES}</div></div>" --date=format:"%Y-%m-%d %H:%M:%S" "${PREV_COMMIT}..${NEW_COMMIT}")
else
    log_info "代码无变更，不新增部署记录"
fi

# 修复awk传参乱码问题：改用临时文件中转HTML内容
if [[ -n "${COMMIT_HTML}" ]]; then
    log_info "写入本次部署记录到HTML"
    TEMP_HTML=$(mktemp)
    TEMP_CONTENT=$(mktemp)
    echo "${COMMIT_HTML}" > "${TEMP_CONTENT}"

    # 在commitList标签下方插入新记录
    awk '
        /<div class="commit-list" id="commitList">/ {
            print $0
            while ((getline line < "'"${TEMP_CONTENT}"'") > 0) { print line }
            close("'"${TEMP_CONTENT}"'")
            next
        }
        { print }
    ' "${LOG_PAGE}" > "${TEMP_HTML}"

    mv "${TEMP_HTML}" "${LOG_PAGE}"
    rm -f "${TEMP_CONTENT}"
fi

log_info "部署完成!"
log_info "日志文件: ${LOG_FILE}"
log_info "部署记录: ${LOG_PAGE}"
echo "更新记录页面已生成,请访问: https://donghy.top/simplUI/deploy/index.html"