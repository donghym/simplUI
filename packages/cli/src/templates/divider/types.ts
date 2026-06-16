import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { dividerVariants } from './divider-variants'

/** 分割线方向 */
export type DividerType = 'horizontal' | 'vertical'

/** 分割线样式变体 */
export type DividerVariant = 'solid' | 'dashed' | 'dotted'

/** 分割线文字位置（仅 type='horizontal' 时生效） */
export type DividerOrientation = 'left' | 'center' | 'right'

/**
 * Divider Props
 *
 * 分割线组件，用于分割页面内容区域。支持水平/垂直方向、线型和内嵌文字。
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
  /** 分割线方向，'horizontal' 为水平线、'vertical' 为竖线，默认 'horizontal' */
  type?: DividerType
  /** 分割线样式，solid=实线 dashed=虚线 dotted=点线，默认 'solid' */
  variant?: DividerVariant
  /** 文字位置，仅 type='horizontal' 且存在 children 时生效，默认 'center' */
  orientation?: DividerOrientation
  /** 自定义类名，会通过 cn() 合并到容器元素上 */
  className?: string
}