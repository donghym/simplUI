import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { animateCountdownVariants } from './animate-countdown-variants'

/**
 * AnimateCountdown 动画倒计时 Props
 *
 * 数字翻转动效、背景渐变的倒计时组件。
 */
export interface AnimateCountdownProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animateCountdownVariants> {
  /** 目标时间 */
  targetDate: Date
  /** 格式化函数 */
  format?: (diff: { days: number; hours: number; minutes: number; seconds: number }) => string
  /** 倒计时结束回调 */
  onFinish?: () => void
}
