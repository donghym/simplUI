import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { siderVariants } from './layout-variants'

/** Sider 响应式断点 */
export type SiderBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/** 断点宽度映射，单位 px */
export const BREAKPOINT_MAP: Record<SiderBreakpoint, number> = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

/**
 * Layout 容器 Props
 */
export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  /** 子元素中包含 Sider 时设为 true，帮助内部布局正确计算 */
  hasSider?: boolean
}

/**
 * Layout.Header Props
 *
 * 顶部导航容器，默认高度 64px，深色背景。
 */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string
}

/**
 * Layout.Sider Props
 *
 * 侧边栏，支持收起/展开、响应式断点、亮暗主题。
 */
export interface SiderProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof siderVariants> {
  /** 侧边栏宽度，默认 200 */
  width?: number | string
  /** 收起后的宽度，默认 80；设为 0 时会出现特殊 trigger */
  collapsedWidth?: number
  /** 是否可收起，默认 false */
  collapsible?: boolean
  /** 当前收起状态（受控），不传时使用内部状态 */
  collapsed?: boolean
  /** 是否默认收起（非受控），默认 false */
  defaultCollapsed?: boolean
  /** 主题，'dark' 时深色背景白色文字，'light' 时白色背景深色文字，默认 'dark' */
  theme?: 'light' | 'dark'
  /** 响应式断点，窗口宽度小于断点时自动收起 */
  breakpoint?: SiderBreakpoint
  /** 翻转折叠箭头方向，Sider 在右侧时使用，默认 false */
  reverseArrow?: boolean
  /** 自定义触发器，设为 null 时隐藏触发器 */
  trigger?: ReactNode | null
  /** 收起/展开回调 */
  onCollapse?: (collapsed: boolean) => void
  /** 响应式断点触发回调 */
  onBreakpoint?: (broken: boolean) => void
  /** 自定义类名 */
  className?: string
  /** 触发器自定义类名 */
  triggerClassName?: string
}

/**
 * Layout.Content Props
 *
 * 主要内容区域，默认浅灰背景。
 */
export interface ContentProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string
}

/**
 * Layout.Footer Props
 *
 * 底部区域，默认浅灰背景。
 */
export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** 自定义类名 */
  className?: string
}