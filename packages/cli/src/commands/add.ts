import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import { logger } from '../utils/logger.js'
import { findProjectRoot, readPackageJson, writePackageJson, mergeDependencies } from '../utils/package.js'

const TEMPLATES_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'templates')

const DEPENDENCY_VERSIONS: Record<string, string> = {
  '@radix-ui/react-slot': '^1.1.0',
  'class-variance-authority': '^0.7.0',
  clsx: '^2.1.1',
  'tailwind-merge': '^2.5.4',
  'lucide-react': '^0.460.0',
  'react-virtuoso': '^4.18.7',
}

interface ComponentManifest {
  files: string[]
  dependencies: string[]
}

function getAvailableComponents(): string[] {
  if (!fs.existsSync(TEMPLATES_DIR)) return []
  return fs
    .readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

function readManifest(componentName: string): ComponentManifest {
  const manifestPath = path.join(TEMPLATES_DIR, componentName, 'manifest.json')
  return fs.readJsonSync(manifestPath)
}

export function addCommand(componentNames: string[]): void {
  const projectRoot = findProjectRoot()
  if (!projectRoot) {
    logger.error('E002: package.json not found. Please cd to your project root.')
    process.exit(1)
  }
  const pkg = readPackageJson(projectRoot)
  if (!pkg) {
    logger.error('E002: package.json not found. Please cd to your project root.')
    process.exit(1)
  }
  // 校验 React 依赖
  const deps = (pkg.dependencies || {}) as Record<string, string>
  const reactVersion = deps['react']
  if (!reactVersion) {
    logger.error('E103: React not found in package.json. Install React 18+ first.')
    process.exit(1)
  }
  const uiDir = path.join(projectRoot, 'src', 'components', 'ui')
  if (!fs.existsSync(uiDir)) {
    logger.error('E104: src/components/ui not found. Run `simplui init` first.')
    process.exit(1)
  }
  const available = getAvailableComponents()
  const installed: string[] = []
  const allNewDeps: Record<string, string> = {}
  for (const name of componentNames) {
    // 校验组件名
    if (!available.includes(name)) {
      logger.error(`E101: Component "${name}" does not exist. Available: ${available.join(', ')}`)
      continue
    }
    // 校验是否已安装
    const destDir = path.join(uiDir, name)
    if (fs.existsSync(destDir)) {
      logger.error(`E102: Component "${name}" already exists. Delete it first, then re-run.`)
      continue
    }
    // 复制模板
    const templateDir = path.join(TEMPLATES_DIR, name)
    const manifest = readManifest(name)
    fs.ensureDirSync(destDir)
    for (const file of manifest.files) {
      fs.copySync(path.join(templateDir, file), path.join(destDir, file))
    }
    // 收集依赖
    for (const dep of manifest.dependencies) {
      const version = DEPENDENCY_VERSIONS[dep]
      if (version) {
        allNewDeps[dep] = version
      }
    }
    // 追加 export 到 index.ts
    const indexFile = path.join(uiDir, 'index.ts')
    const exportLine = `export * from './${name}'\n`
    const currentContent = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf-8') : ''
    if (!currentContent.includes(exportLine.trim())) {
      fs.appendFileSync(indexFile, exportLine, 'utf-8')
    }
    installed.push(name)
    logger.success(`Added ${name} component.`)
  }
  // 合并依赖到 package.json
  if (Object.keys(allNewDeps).length > 0) {
    const updatedPkg = mergeDependencies(pkg, allNewDeps)
    writePackageJson(projectRoot, updatedPkg)
    logger.success('Updated package.json dependencies.')
  }
  // 输出安装报告
  if (installed.length > 0) {
    logger.info(`Installed ${installed.length} component(s): ${installed.join(', ')}`)
    logger.info('Run `pnpm install` to install new dependencies.')
  }
}
