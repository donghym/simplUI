import path from 'node:path'
import fs from 'fs-extra'

const ROOT = path.resolve(import.meta.dirname, '..')
const UI_SRC = path.join(ROOT, 'packages', 'ui', 'src')
const TEMPLATES_DIR = path.join(ROOT, 'packages', 'cli', 'src', 'templates')

/** 非组件目录白名单（共享工具，不参与元数据校验与模板同步） */
const NON_COMPONENT_DIRS = new Set(['lib'])

interface ComponentMeta {
  name: string
  version: string
  dependencies: string[]
  description: string
}

/** 列出源目录中的模板文件（排除 stories 与测试文件） */
function listSourceFiles(srcDir: string): string[] {
  return fs
    .readdirSync(srcDir)
    .filter(
      (file) =>
        /\.(ts|tsx)$/.test(file) && !/\.(stories|test)\.(ts|tsx)$/.test(file),
    )
    .sort()
}

/** 读取组件目录的 component.json 元数据 */
function loadComponentMeta(dirName: string): ComponentMeta | null {
  const metaPath = path.join(UI_SRC, dirName, 'component.json')
  if (!fs.existsSync(metaPath)) return null
  const raw: ComponentMeta = fs.readJsonSync(metaPath)
  return {
    name: raw.name,
    version: raw.version,
    dependencies: raw.dependencies,
    description: raw.description,
  }
}

console.log('校验组件元数据（component.json）...')

// 校验：磁盘组件目录与 component.json 双向对账
const dirNames = fs
  .readdirSync(UI_SRC, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

const missingMeta: string[] = []
const components: ComponentMeta[] = []

for (const dirName of dirNames) {
  if (NON_COMPONENT_DIRS.has(dirName)) continue
  const meta = loadComponentMeta(dirName)
  if (!meta) {
    missingMeta.push(dirName)
    continue
  }
  if (meta.name !== dirName) {
    console.error(`✗ ${dirName}/component.json 的 name "${meta.name}" 与目录名不一致`)
    process.exit(1)
  }
  components.push(meta)
}

if (missingMeta.length > 0) {
  console.error('✗ 以下目录缺少 component.json（已删除组件请 rm，新组件请补充元数据）：')
  for (const dirName of missingMeta) {
    console.error(`  - packages/ui/src/${dirName}/`)
  }
  process.exit(1)
}

console.log(`✓ 校验通过：${components.length} 个组件元数据齐全`)

// 生成：全量重建 CLI 模板目录（该目录是构建产物，已 gitignore）
console.log(`\n同步 ${components.length} 个组件到 packages/cli/src/templates/ ...`)

fs.emptyDirSync(TEMPLATES_DIR)

for (const meta of components) {
  const srcDir = path.join(UI_SRC, meta.name)
  const destDir = path.join(TEMPLATES_DIR, meta.name)

  const files = listSourceFiles(srcDir)
  if (files.length === 0) {
    console.error(`✗ ${meta.name} 目录中没有可同步的源文件`)
    process.exit(1)
  }

  fs.ensureDirSync(destDir)

  for (const file of files) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file))
  }

  // manifest.json 是 CLI 运行时读取的产物清单，files 字段从磁盘推导
  fs.writeJsonSync(
    path.join(destDir, 'manifest.json'),
    { ...meta, files },
    { spaces: 2 },
  )

  console.log(`  ✓ ${meta.name}（${files.length} 个文件）`)
}

console.log(`\n全部完成：${components.length} 个组件已同步。`)
console.log('packages/cli/src/templates/ 是构建产物（已 gitignore），请勿手动编辑。')
