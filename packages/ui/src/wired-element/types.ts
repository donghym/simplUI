import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { wiredElementVariants } from './wired-element-variants'

/** 手绘风元素类型 */
export type WiredElementType = 'button' | 'card' | 'input'

/**
 * WiredElement 手绘风组件集 Props
 *
 * 提供手绘/草图风格的 Button、Card、Input 元素。
 * 使用 SVG 生成不规则的手绘线条边框，呈现真实的"草图"质感。
 */
export interface WiredElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof wiredElementVariants> {
  /** 手绘风元素类型 */
  elementType: WiredElementType
  /** 元素内容 */
  children?: ReactNode
  /** 点击回调（button 类型时） */
  onClick?: () => void
  /** 输入值（input 类型时） */
  value?: string
  /** 输入变化回调（input 类型时） */
  onChange?: (value: string) => void
  /** 占位文本（input 类型时） */
  placeholder?: string
  /** 手绘填充色，不传时 button 默认使用 stroke 色 */
  fill?: string
  /** 手绘线条颜色，默认 #1a1a1a */
  stroke?: string
  /** 线条粗细，默认 1.5 */
  strokeWidth?: number
  /** 线条粗糙度，默认 2 */
  roughness?: number
}
