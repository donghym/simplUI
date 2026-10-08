import path from 'node:path'
import fs from 'fs-extra'
import { logger } from '../utils/logger.js'
import { findProjectRoot, readPackageJson, writePackageJson } from '../utils/package.js'

export async function initCommand(): Promise<void> {
  const projectRoot = findProjectRoot()
  if (!projectRoot) {
    logger.error('package.json not found. Please run this command in a project directory.')
    process.exit(1)
  }
  // 创建 src/components/ui 目录和 index.ts
  const uiDir = path.join(projectRoot, 'src', 'components', 'ui')
  const indexFile = path.join(uiDir, 'index.ts')
  if (!fs.existsSync(uiDir)) {
    fs.ensureDirSync(uiDir)
    logger.success(`Created ${path.relative(projectRoot, uiDir)}/`)
  }
  if (!fs.existsSync(indexFile)) {
    fs.writeFileSync(indexFile, '// Components will be exported here\n', 'utf-8')
    logger.success(`Created ${path.relative(projectRoot, indexFile)}`)
  }
  // 写入 cn() 工具函数
  const libDir = path.join(uiDir, 'lib')
  const utilsFile = path.join(libDir, 'utils.ts')
  if (!fs.existsSync(utilsFile)) {
    fs.ensureDirSync(libDir)
    const utilsContent = [
      "import { clsx, type ClassValue } from 'clsx'",
      "import { twMerge } from 'tailwind-merge'",
      '',
      'export function cn(...inputs: ClassValue[]) {',
      '  return twMerge(clsx(inputs))',
      '}',
      '',
    ].join('\n')
    fs.writeFileSync(utilsFile, utilsContent, 'utf-8')
    logger.success(`Created ${path.relative(projectRoot, utilsFile)}`)
  }
  // 合并运行时依赖到 package.json
  const pkg = readPackageJson(projectRoot)
  if (pkg) {
    const deps = (pkg.dependencies || {}) as Record<string, string>
    const newDeps: Record<string, string> = {
      'class-variance-authority': '^0.7.0',
      clsx: '^2.1.1',
      'tailwind-merge': '^2.5.4',
      'lucide-react': '^0.460.0',
      '@radix-ui/react-slot': '^1.1.0',
    }
    let changed = false
    for (const [name, version] of Object.entries(newDeps)) {
      if (!deps[name]) {
        deps[name] = version
        changed = true
      }
    }
    if (changed) {
      pkg.dependencies = deps
      writePackageJson(projectRoot, pkg)
      logger.success('Updated package.json dependencies.')
    }
  }
  logger.success('Initialization complete. Run `simplui add <component>` to add components.')
  logger.info('Make sure to install new dependencies: pnpm install')
}
