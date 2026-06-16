import { cva } from 'class-variance-authority'

/** 时间线基础样式 */
export const timelineVariants = cva(
  'relative bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]',
  { variants: { mode: { left: '', right: '', alternate: '' } }, defaultVariants: { mode: 'left' } }
)

/** 时间线项样式 */
export const timelineItemVariants = cva(
  'relative flex mb-8 last:mb-0',
  { variants: { status: { completed: '', active: '', pending: '' } }, defaultVariants: { status: 'pending' } }
)

/** 时间线节点圆圈样式 */
export const timelineDotVariants = cva(
  'w-10 h-10 rounded-full flex items-center justify-center mr-4 z-10 shrink-0 text-sm font-medium',
  {
    variants: { status: { completed: 'bg-slate-900 text-white', active: 'border-2 border-slate-900 text-slate-900 bg-white', pending: 'border-2 border-gray-200 text-gray-400 bg-white' } },
    defaultVariants: { status: 'pending' },
  }
)

/** 时间线连接线样式 */
export const timelineLineVariants = cva(
  'absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-gray-200 z-0',
  {
    variants: { status: { completed: 'bg-slate-900', active: 'bg-gray-200', pending: 'bg-gray-200' } },
    defaultVariants: { status: 'pending' },
  }
)

/** 时间线内容区域样式 */
export const timelineContentVariants = cva('flex-1')

/** 时间线标题样式 */
export const timelineTitleVariants = cva(
  'font-semibold mb-1',
  {
    variants: { status: { completed: 'text-slate-900', active: 'text-slate-900', pending: 'text-gray-400' } },
    defaultVariants: { status: 'pending' },
  }
)

/** 时间线状态标签样式 */
export const timelineStatusVariants = cva(
  'text-xs inline-block px-2 py-0.5 rounded-full mt-1',
  {
    variants: { status: { completed: 'bg-success-50 text-success-600', active: 'bg-primary-50 text-primary-700', pending: 'bg-gray-100 text-gray-500' } },
    defaultVariants: { status: 'pending' },
  }
)

/** 时间线时间样式 */
export const timelineTimeVariants = cva('text-xs text-gray-400 mt-1')