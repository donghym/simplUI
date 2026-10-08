import { cva } from 'class-variance-authority'

/** 时间线基础样式 */
export const timelineVariants = cva(
  'relative w-full',
  { variants: { mode: { left: '', right: '', alternate: '' } }, defaultVariants: { mode: 'left' } }
)

/** 时间线项样式 */
export const timelineItemVariants = cva(
  'relative pb-8 last:pb-0',
  { variants: { status: { completed: '', active: '', pending: '', success: '', warning: '', danger: '', processing: '' } }, defaultVariants: { status: 'pending' } }
)

/** 时间线节点圆圈样式 */
export const timelineDotVariants = cva(
  'w-10 h-10 rounded-full flex items-center justify-center mr-4 z-10 shrink-0 text-sm font-medium',
  {
    variants: {
      status: {
        completed: 'bg-slate-900 text-white',
        active: 'border-2 border-slate-900 text-slate-900 bg-white',
        pending: 'border-2 border-gray-200 text-gray-400 bg-white',
        success: 'bg-success-500 border-2 border-background',
        warning: 'bg-warning-500 border-2 border-background',
        danger: 'bg-danger-500 border-2 border-background',
        processing: 'bg-primary-500 border-2 border-background animate-pulse',
      },
    },
    defaultVariants: { status: 'pending' },
  }
)

/** 增强时间线圆点样式（用于 alternate 模式） */
export const enhanceTimelineDotVariants = cva(
  'absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-background z-10',
  {
    variants: {
      status: {
        default: 'bg-muted-foreground',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        danger: 'bg-danger-500',
        processing: 'bg-primary-500 animate-pulse',
      },
    },
    defaultVariants: { status: 'default' },
  }
)

/** 时间线连接线样式 */
export const timelineLineVariants = cva(
  'absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-gray-200 z-0',
  {
    variants: {
      status: {
        completed: 'bg-slate-900',
        active: 'bg-gray-200',
        pending: 'bg-gray-200',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        danger: 'bg-danger-500',
        processing: 'bg-primary-500',
      },
    },
    defaultVariants: { status: 'pending' },
  }
)

/** 增强时间线线条样式（用于 alternate 模式） */
export const enhanceTimelineLineVariants = cva(
  'absolute left-[5px] top-3 w-0.5 bg-border',
  { variants: {} }
)

/** 时间线内容区域样式 */
export const timelineContentVariants = cva('flex-1')

/** 增强时间线内容区域样式 */
export const enhanceTimelineContentVariants = cva(
  'min-h-0',
  { variants: { mode: { left: '', alternate: '' } }, defaultVariants: { mode: 'left' } }
)

/** 时间线标题样式 */
export const timelineTitleVariants = cva(
  'font-semibold mb-1',
  {
    variants: {
      status: {
        completed: 'text-slate-900',
        active: 'text-slate-900',
        pending: 'text-gray-400',
        success: 'text-success-500',
        warning: 'text-warning-500',
        danger: 'text-danger-500',
        processing: 'text-primary-500',
      },
    },
    defaultVariants: { status: 'pending' },
  }
)

/** 时间线状态标签样式 */
export const timelineStatusVariants = cva(
  'text-xs inline-block px-2 py-0.5 rounded-full mt-1',
  {
    variants: {
      status: {
        completed: 'bg-success-50 text-success-600',
        active: 'bg-primary-50 text-primary-700',
        pending: 'bg-gray-100 text-gray-500',
        success: 'bg-success-50 text-success-600',
        warning: 'bg-warning-50 text-warning-600',
        danger: 'bg-danger-50 text-danger-600',
        processing: 'bg-primary-50 text-primary-600',
      },
    },
    defaultVariants: { status: 'pending' },
  }
)

/** 时间线时间样式 */
export const timelineTimeVariants = cva('text-xs text-gray-400 mt-1')

/** 增强时间线折叠按钮样式 */
export const enhanceTimelineCollapseVariants = cva(
  'flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 cursor-pointer transition-colors duration-150 mt-2',
  { variants: {} }
)

/** 增强时间线节点行样式 */
export const enhanceTimelineItemVariants = cva(
  'relative pb-8 last:pb-0',
  { variants: { mode: { left: 'pl-8', alternate: 'pl-0' } }, defaultVariants: { mode: 'left' } }
)

/** 状态颜色映射 */
export const STATUS_TEXT: Record<string, string> = {
  default: 'text-muted-foreground',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  processing: 'text-primary-500',
}
