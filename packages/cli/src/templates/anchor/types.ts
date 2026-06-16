import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { anchorVariants } from './anchor-variants'

/**
 * Anchor 锚点链接项
 */
export interface AnchorLinkItem {
  /** 锚点 ID，对应页面元素的 id 属性 */
  key: string
  /** 显示文字 */
  title: ReactNode
  /** 子锚点列表 */
  children?: AnchorLinkItem[]
}

/**
 * Anchor 组件属性
 */
export interface AnchorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof anchorVariants> {
  /** 锚点链接列表 */
  items: AnchorLinkItem[]
  /** 当前激活的锚点 key。受控模式 */
  activeKey?: string
  /** 默认激活的锚点 key。非受控模式 */
  defaultActiveKey?: string
  /** 激活锚点变化时的回调 */
  onChange?: (key: string) => void
  /** 滚动偏移量。点击锚点跳转时，目标位置额外偏移的像素值。默认 0 */
  offsetTop?: number
  /** 是否平滑滚动。默认 true */
  smooth?: boolean
  /** 容器获取方式。提供时监听该容器的滚动事件 */
  getContainer?: () => HTMLElement | Window
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/**
 * AnchorLink 子组件属性
 */
export interface AnchorLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'title' | 'onClick'> {
  /** 锚点 ID */
  href: string
  /** 显示文字 */
  title: ReactNode
  /** 是否激活 */
  active?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 点击回调 */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  /** 自定义 className */
  className?: string
}
