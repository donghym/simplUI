import { cva } from 'class-variance-authority'

/** 日历星期标题变体 */
export const calendarWeekdayVariants = cva(
  'py-2 text-center text-xs font-medium text-muted-foreground',
  {
    variants: {},
  }
)

/** 日历单元格变体 */
export const calendarCellVariants = cva(
  'relative h-24 p-1 border-b border-r border-muted cursor-pointer ' +
    'transition-colors duration-150 hover:bg-muted ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',
  {
    variants: {
      isCurrentMonth: {
        true: 'bg-background',
        false: 'bg-muted/50 text-muted-foreground',
      },
      isToday: {
        true: '',
        false: '',
      },
      isSelected: {
        true: 'bg-primary-500/5',
        false: '',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed bg-muted',
        false: '',
      },
    },
    defaultVariants: {
      isCurrentMonth: true,
      isToday: false,
      isSelected: false,
      disabled: false,
    },
  }
)

/** 日历日期数字变体 */
export const calendarDateNumberVariants = cva(
  'inline-flex items-center justify-center w-7 h-7 text-sm rounded-full',
  {
    variants: {
      isToday: {
        true: 'bg-primary-500 text-white font-semibold',
        false: 'text-foreground',
      },
      isSelected: {
        true: 'ring-2 ring-primary-500 ring-offset-1',
        false: '',
      },
    },
    defaultVariants: {
      isToday: false,
      isSelected: false,
    },
  }
)

/** 事件标记点样式 */
export const calendarDotVariants = cva('w-1.5 h-1.5 rounded-full', { variants: {} })
