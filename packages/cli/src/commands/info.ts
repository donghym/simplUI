import { execSync } from 'node:child_process'
import { logger } from '../utils/logger.js'

function getVersion(cmd: string): string {
  try {
    return execSync(cmd, { encoding: 'utf-8' }).trim()
  } catch {
    return 'not installed'
  }
}

export function infoCommand(): void {
  logger.info('Environment check:')
  console.log(`  Node.js:     ${process.version}`)
  console.log(`  pnpm:        ${getVersion('pnpm --version')}`)
  console.log(`  npm:         ${getVersion('npm --version')}`)
  console.log(`  React:       ${getVersion('node -e "try{console.log(require(\'react\').version)}catch{console.log(\'not installed\')}"')}`)
  console.log(`  Tailwind:    ${getVersion('npx tailwindcss --help 2>/dev/null | head -1') || 'not installed'}`)
  logger.success('Check complete.')
}
