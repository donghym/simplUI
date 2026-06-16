import { HTMLAttributes, ReactNode, MouseEvent } from 'react'

/**
 * 面包屑单项配置
 */
export interface BreadcrumbItemType {
  /** 链接地址。提供时渲染为 <a> 标签 */
  href?: string
  /** 点击回调。与 href 同时存在时，点击先触发 onClick 再跳转 */
  onClick?: (e: MouseEvent<HTMLElement>) => void
  /** 下拉菜单内容。提供时该项显示下拉箭头，点击展开菜单 */
  dropdownMenu?: ReactNode
  /** 显示内容。可以是文本或自定义 ReactNode */
  title: ReactNode
  /** 禁用状态。true 时不可点击、opacity 降低 */
  disabled?: boolean
}

/**
 * Breadcrumb 容器 Props
 */
export interface BreadcrumbProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** 面包屑项数组。推荐使用方式，自动渲染分隔符 */
  items?: BreadcrumbItemType[]
  /** 分隔符。默认 '/'，可以是字符串或 ReactNode（如图标） */
  separator?: ReactNode
  /** 子组件方式。与 items 二选一，需手动使用 Breadcrumb.Item */
  children?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/**
 * Breadcrumb.Item 单项 Props
 */
export interface BreadcrumbItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  /** 链接地址。提供时渲染为 <a> 标签 */
  href?: string
  /** 点击回调 */
  onClick?: (e: MouseEvent<HTMLElement>) => void
  /** 下拉菜单内容。提供时该项显示下拉箭头 */
  dropdownMenu?: ReactNode
  /** 禁用状态。true 时不可点击、opacity 降低 */
  disabled?: boolean
  /** 是否为最后一项。true 时不加分隔符、文本加粗 */
  isLast?: boolean
  /** 自定义 className */
  className?: string
  /** 显示内容 */
  children?: ReactNode
}

/**
 * Breadcrumb.Separator 分隔符 Props
 */
export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** 自定义 className */
  className?: string
  /** 分隔符内容 */
  children?: ReactNode
}