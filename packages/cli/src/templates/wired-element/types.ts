import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { wiredElementVariants } from './wired-element-variants'

/** 手绘风元素类型 */
export type WiredElementType = 'button' | 'card' | 'input'

/**
 * WiredElement 手绘风组件集 Props
 *
 * 手绘线条风格的 Button/Card/Input。
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
}
