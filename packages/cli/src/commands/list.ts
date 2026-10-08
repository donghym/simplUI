import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import { logger } from '../utils/logger.js'
import { findProjectRoot } from '../utils/package.js'

const TEMPLATES_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'templates')

export function listCommand(): void {
  const projectRoot = findProjectRoot()
  if (!projectRoot) {
    logger.error('package.json not found. Please run this command in a project directory.')
    process.exit(1)
  }
  // 读取所有可用模板的 manifest
  if (!fs.existsSync(TEMPLATES_DIR)) {
    logger.error('Templates directory not found.')
    return
  }
  const allTemplates = fs
    .readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      try {
        const m = fs.readJsonSync(path.join(TEMPLATES_DIR, d.name, 'manifest.json'))
        return { name: String(m.name || d.name) }
      } catch {
        return { name: d.name }
      }
    })
  const uiDir = path.join(projectRoot, 'src', 'components', 'ui')
  const installed = fs.existsSync(uiDir)
    ? fs
        .readdirSync(uiDir, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name)
    : []
  logger.info('Available components:')
  for (const c of allTemplates) {
    const tag = installed.includes(c.name) ? '[installed]' : ''
    console.log(`  - ${c.name} ${tag}`)
  }
  if (installed.length > 0) {
    logger.info(`\nInstalled: ${installed.length} component(s)`)
  }
}
