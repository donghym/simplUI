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

# =============== 生成部署历史记录 ===============
log_info "生成部署历史记录..."
log_info "PREV_COMMIT: ${PREV_COMMIT:0:8}"
log_info "NEW_COMMIT: ${NEW_COMMIT:0:8}"

if [ "${PREV_COMMIT}" != "${NEW_COMMIT}" ]; then
    log_info "检测到新提交，生成 HTML 记录..."
    
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
        </div>
    </div>
</body>
</html>
HTMLEOF
    fi
    
    # 获取变更文件列表
    CHANGED_FILES=$(git diff --name-only "${PREV_COMMIT}" "${NEW_COMMIT}" 2>/dev/null | tr '\n' ' ' || echo "无")
    log_info "变更文件: ${CHANGED_FILES:0:100}..."
    
    # 生成本次提交的详细信息
    COMMIT_HTML=$(git log --pretty=format:"<div class='commit-item'><div class='commit-hash'>%h</div><div class='deploy-time'>部署时间：${DEPLOY_TIME}</div><div class='commit-time'>提交时间：%ad</div><div class='commit-author'>提交人：%an</div><div class='commit-msg'>提交说明：%s</div><div class='file-list'>变更文件：${CHANGED_FILES}</div></div>" --date=format:"%Y-%m-%d %H:%M:%S" "${PREV_COMMIT}..${NEW_COMMIT}")
    
    log_info "生成的 HTML 长度: ${#COMMIT_HTML}"
    
    # 使用 Python 插入新内容（更可靠）
    if command -v python3 &> /dev/null; then
        # 将 commit HTML 写入临时文件
        echo "${COMMIT_HTML}" > /tmp/commit_html.tmp
        
        python3 << 'PYEOF'
import os

log_page = "/var/www/UI/simplUI/deploy/index.html"

# 读取 commit HTML
with open("/tmp/commit_html.tmp", "r", encoding="utf-8") as f:
    html_content = f.read().strip()

# 读取原文件
with open(log_page, "r", encoding="utf-8") as f:
    content = f.read()

# 在 commitList div 中插入新内容
old_div = '<div id="commitList">\n        </div>'
new_div = '<div id="commitList">\n' + html_content + '\n        </div>'

if old_div in content:
    content = content.replace(old_div, new_div)
    print("找到插入点，更新成功")
else:
    # 尝试其他格式
    old_div2 = '<div id="commitList">\n</div>'
    if old_div2 in content:
        content = content.replace(old_div2, new_div)
        print("找到插入点(格式2)，更新成功")
    else:
        print("警告：未找到插入点")

with open(log_page, "w", encoding="utf-8") as f:
    f.write(content)

print("HTML 更新完成")
PYEOF
        
        rm -f /tmp/commit_html.tmp
    else
        # 备用方案：使用 sed
        log_info "使用 sed 插入内容..."
        # 删除旧的结束标签
        sed -i 's|</div>\s*</body>\s*</html>||' "${LOG_PAGE}"
        # 插入新内容
        echo "${COMMIT_HTML}" >> "${LOG_PAGE}"
        # 添加结束标签
        echo "        </div>" >> "${LOG_PAGE}"
        echo "    </div>" >> "${LOG_PAGE}"
        echo "</body>" >> "${LOG_PAGE}"
        echo "</html>" >> "${LOG_PAGE}"
    fi
    
    log_info "HTML 记录已生成: ${LOG_PAGE}"
else
    log_info "没有新的提交，跳过 HTML 生成"
fi

log_info "部署完成!"
echo "更新记录页面: https://donghy.top/simplUI/log"
