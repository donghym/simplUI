import { cva } from 'class-variance-authority'

/** 时间线容器样式 */
export const enhanceTimelineVariants = cva('relative w-full', {
  variants: { mode: { left: '', alternate: '' } },
  defaultVariants: { mode: 'left' },
})
/** 时间线节点行样式 */
export const enhanceTimelineItemVariants = cva('relative pb-8 last:pb-0', {
  variants: { mode: { left: 'pl-8', alternate: 'pl-0' } },
  defaultVariants: { mode: 'left' },
})
/** 时间线圆点样式 */
export const enhanceTimelineDotVariants = cva('absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-background z-10', {
  variants: {
    status: { default: 'bg-muted-foreground', success: 'bg-success-500', warning: 'bg-warning-500', danger: 'bg-danger-500', processing: 'bg-primary-500 animate-pulse' },
  },
  defaultVariants: { status: 'default' },
})
/** 时间线线条样式 */
export const enhanceTimelineLineVariants = cva('absolute left-[5px] top-3 w-0.5 bg-border', { variants: {} })
/** 时间线内容样式 */
export const enhanceTimelineContentVariants = cva('min-h-0', {
  variants: { mode: { left: '', alternate: '' } },
  defaultVariants: { mode: 'left' },
})
/** 时间线折叠按钮样式 */
export const enhanceTimelineCollapseVariants = cva(
  'flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 cursor-pointer transition-colors duration-150 mt-2',
  { variants: {} },
)
