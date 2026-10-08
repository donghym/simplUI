import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { spinVariants } from './spin-variants'

/**
 * Spin 尺寸类型
 */
export type SpinSize = 'small' | 'default' | 'large'

/**
 * Spin 组件属性
 */
export interface SpinProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'size'>,
    Omit<VariantProps<typeof spinVariants>, 'size'> {
  /** 加载状态。true 时显示加载动画，false 时隐藏。默认 true */
  spinning?: boolean
  /** 加载延迟时间（毫秒）。设置后，spinning 变为 true 时延迟指定时间后再显示，避免闪烁。默认 0（无延迟） */
  delay?: number
  /** 自定义加载指示器。提供时替换默认的旋转图标 */
  indicator?: ReactNode
  /** 包裹的内容。提供时 Spin 作为容器，加载状态时显示遮罩层 */
  children?: ReactNode
  /** 加载提示文字。显示在加载图标下方 */
  tip?: string
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
  /** Spin 尺寸 */
  spinSize?: SpinSize
}
