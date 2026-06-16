import { cva } from 'class-variance-authority'

/** 思维链容器变体 */
export const thoughtChainVariants = cva(
  'flex flex-col',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 思维步骤项变体 */
export const thoughtStepVariants = cva(
  'relative flex gap-3 pb-6',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 步骤图标容器变体，根据状态控制颜色 */
export const thoughtStepIconVariants = cva(
  'relative z-10 flex shrink-0 w-7 h-7 items-center justify-center rounded-full border-2 text-xs font-medium',
  {
    variants: {
      status: {
        waiting: 'border-muted bg-muted text-muted-foreground',
        running: 'border-primary bg-primary/10 text-primary',
        done: 'border-primary bg-primary text-primary-foreground',
        error: 'border-danger bg-danger text-danger-foreground',
      },
    },
    defaultVariants: { status: 'waiting' },
  },
)

/** 步骤内容区变体 */
export const thoughtStepContentVariants = cva(
  'flex-1 min-w-0 pt-0.5',
  {
    variants: {},
    defaultVariants: {},
  },
)
