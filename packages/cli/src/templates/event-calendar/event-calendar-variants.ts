import { cva } from 'class-variance-authority'

/** 日历容器样式 */
export const eventCalendarVariants = cva('w-full bg-background rounded-lg border border-border overflow-hidden', { variants: {} })
/** 日历头部样式 */
export const eventCalendarHeaderVariants = cva('flex items-center justify-between px-4 py-3 border-b border-border', { variants: {} })
/** 日历标题样式 */
export const eventCalendarTitleVariants = cva('text-base font-semibold text-foreground', { variants: {} })
/** 日历导航按钮样式 */
export const eventCalendarNavVariants = cva(
  'inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  { variants: {} },
)
/** 日历网格样式 */
export const eventCalendarGridVariants = cva('grid grid-cols-7', { variants: {} })
/** 日历星期标题样式 */
export const eventCalendarWeekdayVariants = cva('py-2 text-center text-xs font-medium text-muted-foreground', { variants: {} })
/** 日历单元格样式 */
export const eventCalendarCellVariants = cva(
  'relative h-24 p-1 border-b border-r border-muted cursor-pointer transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',
  {
    variants: {
      isCurrentMonth: { true: 'bg-background', false: 'bg-muted/50 text-muted-foreground' },
      isToday: { true: '', false: '' },
      isSelected: { true: 'bg-primary-500/5', false: '' },
    },
    defaultVariants: { isCurrentMonth: true, isToday: false, isSelected: false },
  },
)
/** 日历日期数字样式 */
export const eventCalendarDateVariants = cva('inline-flex items-center justify-center w-7 h-7 text-sm rounded-full', {
  variants: {
    isToday: { true: 'bg-primary-500 text-white font-semibold', false: 'text-foreground' },
    isSelected: { true: 'ring-2 ring-primary-500 ring-offset-1', false: '' },
  },
  defaultVariants: { isToday: false, isSelected: false },
})
/** 事件标记点样式 */
export const eventCalendarDotVariants = cva('w-1.5 h-1.5 rounded-full', { variants: {} })
