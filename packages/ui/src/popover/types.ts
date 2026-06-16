import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { popoverVariants } from './popover-variants'

/** 气泡卡片弹出方向 */
export type PopoverPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'

/** 触发方式：click 点击触发、hover 悬停触发 */
export type PopoverTrigger = 'click' | 'hover'

/**
 * Popover 气泡卡片组件属性
 *
 * 在触发元素附近弹出浮层卡片，常用于展示快捷操作、详情信息等。
 * 支持受控和非受控两种模式，支持 8 个弹出方向。
 */
export interface PopoverProps
  extends VariantProps<typeof popoverVariants> {
  /** 气泡卡片中展示的内容 */
  content: ReactNode
  /** 气泡卡片标题，不传则无标题栏 */
  title?: ReactNode
  /** 弹出位置，相对触发元素的方位，默认 'top' */
  placement?: PopoverPlacement
  /** 触发方式，默认 'click'。hover 模式鼠标移入显示、移出隐藏 */
  trigger?: PopoverTrigger
  /** 是否显示箭头，默认 true */
  arrow?: boolean
  /** 是否可见（受控模式），传入时接管 open 状态 */
  open?: boolean
  /** 可见性变化回调（受控模式），在弹出/关闭时触发 */
  onOpenChange?: (open: boolean) => void
  /** 默认是否可见（非受控模式），默认 false */
  defaultOpen?: boolean
  /** 触发元素，Popover 会包裹此子元素作为触发区域 */
  children: ReactNode
  /** 自定义类名，通过 cn() 合并到浮层容器上 */
  className?: string
}