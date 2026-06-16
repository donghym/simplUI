import { cva } from 'class-variance-authority'

/** StaggerMenu 容器样式变体 */
export const staggerMenuVariants = cva(
  'flex flex-col',
  {
    variants: {
      open: {
        true: '',
        false: 'hidden',
      },
    },
    defaultVariants: {
      open: true,
    },
  },
)

/** StaggerMenu 菜单项样式变体 */
export const staggerMenuItemVariants = cva(
  'px-4 py-2 text-sm text-foreground transition-[opacity,transform] duration-300 ease-out ' +
    'hover:bg-muted cursor-pointer select-none',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
      open: {
        true: 'opacity-100 translate-x-0 translate-y-0',
        false: '',
      },
      direction: {
        down: '',
        up: '',
        left: '',
        right: '',
      },
    },
    compoundVariants: [
      { open: false, direction: 'down', className: 'opacity-0 -translate-y-2.5' },
      { open: false, direction: 'up', className: 'opacity-0 translate-y-2.5' },
      { open: false, direction: 'left', className: 'opacity-0 translate-x-2.5' },
      { open: false, direction: 'right', className: 'opacity-0 -translate-x-2.5' },
    ],
    defaultVariants: {
      disabled: false,
      open: true,
      direction: 'down',
    },
  },
)
