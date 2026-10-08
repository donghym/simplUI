import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { tagVariants } from './tag-variants'

/** 标签语义变体：default 默认灰、primary 主色蓝、success 成功绿、warning 警告橙、danger 危险红 */
export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger'

/**
 * Tag 标签组件属性
 *
 * 用于标记、分类或筛选的小型标签，支持关闭操作。
 */
export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  /** 标签语义变体，控制背景色和文字色。默认 'default' */
  variant?: TagVariant
  /** 是否可关闭，true 时右侧显示 X 关闭按钮。默认 false */
  closable?: boolean
  /** 关闭按钮的回调，仅在 closable=true 时触发 */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void
  /** 前置图标，显示在文字左侧 */
  icon?: ReactNode
  /** 标签内容 */
  children?: ReactNode
}