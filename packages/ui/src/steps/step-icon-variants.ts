import { cva } from 'class-variance-authority'

/** 点状图标容器样式 */
export const stepDotVariants = cva('flex items-center justify-center rounded-full', {
  variants: {
    status: {
      wait: 'bg-muted',
      process: 'bg-primary-500',
      finish: 'bg-primary-500',
      error: 'bg-danger-500',
    },
    stepSize: { default: 'w-2 h-2', small: 'w-1.5 h-1.5' },
  },
  defaultVariants: { status: 'wait', stepSize: 'default' },
})

/** inline 变体图标样式 */
export const stepInlineIconVariants = cva(
  'flex items-center justify-center rounded-full font-medium transition-all duration-200',
  {
    variants: {
      status: {
        wait: 'bg-muted text-muted-foreground',
        process: 'bg-primary-500 text-white',
        finish: 'bg-primary-500/10 text-primary-500',
        error: 'bg-danger-500/10 text-danger-500',
      },
      stepSize: {
        default: 'w-6 h-6 text-xs',
        small: 'w-5 h-5 text-xs',
      },
    },
    defaultVariants: { status: 'wait', stepSize: 'default' },
  }
)

/** outlined 变体图标样式 */
export const stepOutlinedIconVariants = cva(
  'flex items-center justify-center rounded-full border-2 font-medium transition-all duration-200',
  {
    variants: {
      status: {
        wait: 'border-border text-muted-foreground bg-transparent',
        process: 'border-primary-500 text-primary-500 bg-transparent',
        finish: 'border-primary-500 bg-primary-500 text-white',
        error: 'border-danger-500 bg-danger-500 text-white',
      },
      stepSize: {
        default: 'w-8 h-8 text-sm',
        small: 'w-6 h-6 text-xs',
      },
    },
    defaultVariants: { status: 'wait', stepSize: 'default' },
  }
)