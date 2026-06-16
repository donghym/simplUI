import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { badgeVariants } from './badge-variants'

/** 徽标语义变体：default 灰、primary 蓝、success 绿、warning 橙、danger 红 */
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger'

/**
 * Badge 徽标组件属性
 *
 * 用于在子元素右上角显示数字或状态点，常用于通知数量、状态标记等场景。
 */
export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  /** 展示的数字。大于 overflowCount 时显示 "{overflowCount}+"。不传或 dot=true 时不显示数字 */
  count?: number
  /** 封顶数字，超出后显示 "{overflowCount}+"。默认 99 */
  overflowCount?: number
  /** 不展示数字，只显示一个小红点。默认 false。dot=true 时 count 被忽略 */
  dot?: boolean
  /** count 为 0 时是否显示徽标。默认 false（count=0 时隐藏） */
  showZero?: boolean
  /** 语义变体，控制徽标背景色。默认 'danger' */
  variant?: BadgeVariant
  /** 徽标的子元素，徽标相对于子元素右上角定位。不传时徽标独立渲染 */
  children?: ReactNode
}