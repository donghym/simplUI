import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { scrollRevealVariants } from './scroll-reveal-variants'

/** 滚动显隐动画方向 */
export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none'

/**
 * ScrollReveal 滚动显隐组件 Props
 *
 * 元素进入视口时自动淡入/滑入动画。
 */
export interface ScrollRevealProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollRevealVariants> {
  /** 子元素 */
  children: ReactNode
  /** 进入动画方向，默认 'up' */
  direction?: RevealDirection
  /** 动画持续时间毫秒，默认 600 */
  duration?: number
  /** 动画延迟毫秒，默认 0 */
  delay?: number
  /** 触发阈值 0-1，默认 0.1 */
  threshold?: number
  /** 是否只触发一次，默认 true */
  once?: boolean
  /** 位移距离像素，默认 30 */
  distance?: number
}
