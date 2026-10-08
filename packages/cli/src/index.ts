import { Command } from 'commander'
import { infoCommand } from './commands/info.js'
import { listCommand } from './commands/list.js'
import { initCommand } from './commands/init.js'
import { addCommand } from './commands/add.js'

const program = new Command()

program
  .name('simplui')
  .description('simplUI CLI - add components to your project')
  .version('0.1.0')

program
  .command('init')
  .description('Initialize simplUI in your project')
  .action(() => initCommand())

program
  .command('add')
  .description('Add one or more components to your project')
  .argument('<names...>', 'Component names to add')
  .action((names) => addCommand(names))

program
  .command('list')
  .description('List installed components')
  .action(() => listCommand())

program
  .command('info')
  .description('Check environment and dependencies')
  .action(() => infoCommand())

program.parse(process.argv)
