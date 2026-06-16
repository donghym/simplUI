import { cva } from 'class-variance-authority'

/** 日历容器变体 */
export const calendarVariants = cva(
  'w-full bg-background rounded-lg border border-border overflow-hidden',
  {
    variants: {},
  }
)

/** 日历头部变体 */
export const calendarHeaderVariants = cva(
  'flex items-center justify-between px-4 py-3 border-b border-border',
  {
    variants: {},
  }
)

/** 日历头部标题变体 */
export const calendarTitleVariants = cva(
  'text-base font-semibold text-foreground',
  {
    variants: {},
  }
)

/** 日历导航按钮变体 */
export const calendarNavButtonVariants = cva(
  'inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground ' +
    'hover:bg-muted transition-colors duration-150 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

/** 日历网格变体 */
export const calendarGridVariants = cva(
  'grid grid-cols-7',
  {
    variants: {},
  }
)
