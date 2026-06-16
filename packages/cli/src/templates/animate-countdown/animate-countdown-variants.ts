import { cva } from 'class-variance-authority'

/** AnimateCountdown 容器样式变体 */
export const animateCountdownVariants = cva(
  'inline-flex items-center gap-2 select-none',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        primary: 'text-primary-500',
        danger: 'text-danger-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

/** 单个数字块样式 */
export const countdownDigitClass =
  'relative inline-flex items-center justify-center w-12 h-14 rounded-md ' +
  'bg-muted text-2xl font-bold overflow-hidden'

/** 数字翻转动画样式 */
export const countdownFlipClass =
  'inline-block transition-transform duration-500 ease-out'
