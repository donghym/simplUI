import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { staggerMenuVariants } from './stagger-menu-variants'

/** 菜单项定义 */
export interface StaggerMenuItem {
  /** 菜单项内容，支持文本或 ReactNode */
  label: ReactNode
  /** 点击回调，禁用状态下不触发 */
  onClick?: () => void
  /** 是否禁用。true 时 opacity:50%、pointer-events:none、onClick 不触发 */
  disabled?: boolean
}

/**
 * StaggerMenu 逐帧展开菜单 Props
 *
 * 菜单子项逐个飞入动画，支持四个方向展开。
 */
export interface StaggerMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>,
    VariantProps<typeof staggerMenuVariants> {
  /** 菜单项数组，每个项包含 label、onClick、disabled */
  items: StaggerMenuItem[]
  /** 是否展开。true 时菜单可见，false 时隐藏并动画收起。默认 true */
  open?: boolean
  /** 每项动画延迟毫秒，控制交错动画速度。默认 50 */
  staggerDelay?: number
  /** 动画方向，决定子项飞入方向。默认 'down' */
  direction?: 'down' | 'up' | 'left' | 'right'
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}