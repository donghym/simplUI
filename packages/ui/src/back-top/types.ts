import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { backTopVariants } from './back-top-variants'

/**
 * BackTop 组件属性
 */
export interface BackTopProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'>,
    VariantProps<typeof backTopVariants> {
  /** 显示回到顶部按钮的滚动高度阈值。默认 400 */
  visibilityHeight?: number
  /** 点击时的回调函数 */
  onClick?: () => void
  /** 滚动到顶部的目标容器。默认 window */
  getContainer?: () => HTMLElement | Window
  /** 滚动持续时间（毫秒）。默认 450 */
  duration?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义图标 */
  icon?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}
