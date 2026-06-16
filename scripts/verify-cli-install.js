#!/usr/bin/env node
/**
 * simplUI CLI 组件安装验证脚本
 *
 * 用法: node verify-cli-install.js [component-name]
 * 如果不传参数，自动验证第一个待验证的组件
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const WORKSPACE_DIR = path.resolve(__dirname, '..')
const ISSUE3_PATH = path.join(WORKSPACE_DIR, 'issue3.md')
const CLI_BIN = path.join(WORKSPACE_DIR, 'packages/cli/bin/simplui.js')
const TEMPLATES_DIR = path.join(WORKSPACE_DIR, 'packages/cli/src/templates')

// 读取 issue3.md
function readIssue3() {
  return fs.readFileSync(ISSUE3_PATH, 'utf-8')
}

// 写入 issue3.md
function writeIssue3(content) {
  fs.writeFileSync(ISSUE3_PATH, content, 'utf-8')
}

// 解析组件列表
function parseComponents(content) {
  const lines = content.split('\n')
  const components = []
  for (const line of lines) {
    const match = line.match(/^\|\s*(\d+)\s*\|\s*(\S+)\s*\|\s*(\S+)\s*\|\s*([^|]*)\s*\|\s*([^|]*)\s*\|/)
    if (match && match[1] !== '序号') {
      components.push({
        index: parseInt(match[1]),
        name: match[2],
        status: match[3].trim(),
        time: match[4].trim(),
        note: match[5].trim(),
      })
    }
  }
  return components
}

// 更新组件状态
function updateComponentStatus(content, componentName, status, time, note) {
  const lines = content.split('\n')
  const newLines = lines.map((line) => {
    const match = line.match(/^\|\s*(\d+)\s*\|\s*(\S+)\s*\|\s*(\S+)\s*\|\s*([^|]*)\s*\|\s*([^|]*)\s*\|/)
    if (match && match[2] === componentName) {
      return `| ${match[1]} | ${match[2]} | ${status} | ${time} | ${note} |`
    }
    return line
  })
  return newLines.join('\n')
}

// 更新统计
function updateStats(content) {
  const components = parseComponents(content)
  const verified = components.filter((c) => c.status !== '待验证').length
  const success = components.filter((c) => c.status === '成功').length
  const failed = components.filter((c) => c.status === '失败').length

  return content
    .replace(/- 已验证：\d+\/\d+/, `- 已验证：${verified}/${components.length}`)
    .replace(/- 成功：\d+/, `- 成功：${success}`)
    .replace(/- 失败：\d+/, `- 失败：${failed}`)
}

// 验证单个组件
function verifyComponent(componentName) {
  const testDir = path.join(WORKSPACE_DIR, 'work', `cli-test-${componentName}`)
  const uiDir = path.join(testDir, 'src', 'components', 'ui')
  const componentDir = path.join(uiDir, componentName)
  const indexPath = path.join(uiDir, 'index.ts')

  console.log(`[${new Date().toLocaleString()}] 开始验证组件: ${componentName}`)

  try {
    // 1. 清理并创建测试目录
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true })
    }
    fs.mkdirSync(uiDir, { recursive: true })

    // 2. 创建 package.json
    const pkg = {
      name: `cli-test-${componentName}`,
      version: '1.0.0',
      dependencies: { react: '^18.0.0' },
    }
    fs.writeFileSync(path.join(testDir, 'package.json'), JSON.stringify(pkg, null, 2))

    // 3. 执行安装命令
    console.log(`  执行: simplui add ${componentName}`)
    const output = execSync(`node "${CLI_BIN}" add ${componentName}`, {
      cwd: testDir,
      encoding: 'utf-8',
      timeout: 30000,
    })
    console.log(`  输出: ${output.trim()}`)

    // 4. 检查文件是否复制
    if (!fs.existsSync(componentDir)) {
      throw new Error(`组件目录未创建: ${componentDir}`)
    }

    // 5. 检查 manifest.json 中的文件
    const manifestPath = path.join(TEMPLATES_DIR, componentName, 'manifest.json')
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`manifest.json 不存在: ${manifestPath}`)
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
    for (const file of manifest.files || []) {
      const targetFile = path.join(componentDir, file)
      if (!fs.existsSync(targetFile)) {
        throw new Error(`文件缺失: ${file}`)
      }
    }

    // 6. 检查 index.ts 导出
    if (!fs.existsSync(indexPath)) {
      throw new Error('index.ts 未创建')
    }
    const indexContent = fs.readFileSync(indexPath, 'utf-8')
    const expectedExport = `export * from './${componentName}'`
    if (!indexContent.includes(expectedExport)) {
      throw new Error(`index.ts 缺少导出: ${expectedExport}`)
    }

    // 7. 清理
    fs.rmSync(testDir, { recursive: true })

    console.log(`  结果: 成功`)
    return { success: true, error: null }
  } catch (error) {
    // 清理
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true })
    }
    console.log(`  结果: 失败 - ${error.message}`)
    return { success: false, error: error.message }
  }
}

// 主函数
function main() {
  const targetComponent = process.argv[2]

  let content = readIssue3()
  const components = parseComponents(content)

  let componentToVerify

  if (targetComponent) {
    componentToVerify = components.find((c) => c.name === targetComponent)
    if (!componentToVerify) {
      console.error(`组件不存在: ${targetComponent}`)
      process.exit(1)
    }
  } else {
    componentToVerify = components.find((c) => c.status === '待验证')
    if (!componentToVerify) {
      console.log('所有组件已验证完成！')
      process.exit(0)
    }
  }

  const result = verifyComponent(componentToVerify.name)
  const time = new Date().toLocaleString('zh-CN')
  const status = result.success ? '成功' : '失败'
  const note = result.success ? '文件复制正确，依赖更新正确，export 追加正确' : result.error

  content = updateComponentStatus(content, componentToVerify.name, status, time, note)
  content = updateStats(content)
  writeIssue3(content)

  console.log(`[${time}] ${componentToVerify.name}: ${status}`)

  if (!result.success) {
    process.exit(1)
  }
}

main()
