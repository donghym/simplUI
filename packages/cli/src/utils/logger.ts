import chalk from 'chalk'

export const logger = {
  info: (...args: string[]) => console.log(chalk.blue('[simplUI]'), ...args),
  success: (...args: string[]) => console.log(chalk.green('[simplUI]'), ...args),
  error: (...args: string[]) => console.error(chalk.red('[simplUI]'), ...args),
  warn: (...args: string[]) => console.warn(chalk.yellow('[simplUI]'), ...args),
}
