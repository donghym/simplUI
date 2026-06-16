import { cva } from 'class-variance-authority'

/** 遮罩层变体 */
export const maskVariants = cva(
  'sui-tour__mask fixed inset-0 z-[1070]',
)

/** 高亮框变体 */
export const highlightVariants = cva(
  'fixed z-[1071] pointer-events-none rounded',
)

/** 弹窗变体 */
export const popupVariants = cva(
  'bg-background rounded-lg p-4 min-w-[240px] max-w-[320px] ' +
  'shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)]',
)

/** 标题变体 */
export const titleVariants = cva(
  'text-base font-medium mb-2 text-foreground',
)

/** 描述变体 */
export const descriptionVariants = cva(
  'text-sm text-muted-foreground mb-4',
)

/** 底部操作栏变体 */
export const footerVariants = cva(
  'flex justify-between items-center',
)

/** 步骤计数器变体 */
export const stepCounterVariants = cva(
  'text-xs text-muted-foreground/60',
)

/** 按钮组变体 */
export const btnGroupVariants = cva(
  'flex gap-2',
)

/** 按钮变体 */
export const btnVariants = cva(
  'px-3 py-1 rounded cursor-pointer text-sm border transition-colors',
  {
    variants: {
      variant: {
        default: 'border-border bg-background text-foreground hover:bg-muted',
        primary: 'border-primary-500 bg-primary-500 text-primary-foreground hover:bg-primary-600',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

/** 进度条轨道变体 */
export const progressTrackVariants = cva(
  'sui-tour__progress-track w-full h-1 bg-muted rounded-full overflow-hidden mb-3',
)

/** 进度条填充变体 */
export const progressFillVariants = cva(
  'h-full rounded-full bg-primary-500 transition-all duration-300',
)
