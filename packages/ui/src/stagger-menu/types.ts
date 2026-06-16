import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { staggerMenuVariants } from './stagger-menu-variants'

/** 菜单项定义 */
export interface StaggerMenuItem {
  /** 菜单项内容 */
  label: ReactNode
  /** 点击回调 */
  onClick?: () => void
  /** 是否禁用 */
  disabled?: boolean
}

/**
 * StaggerMenu 逐帧展开菜单 Props
 *
 * 菜单子项逐个飞入动画。
 */
export interface StaggerMenuProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof staggerMenuVariants> {
  /** 菜单项数组 */
  items: StaggerMenuItem[]
  /** 是否展开，默认 true */
  open?: boolean
  /** 每项动画延迟毫秒，默认 50 */
  staggerDelay?: number
  /** 动画方向，默认 'down' */
  direction?: 'down' | 'up' | 'left' | 'right'
}
