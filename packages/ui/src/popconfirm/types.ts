import type { CSSProperties, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { popconfirmVariants } from './popconfirm-variants'

/** Popconfirm 弹出位置类型 */
export type PopconfirmPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'

/** Popconfirm 气泡确认框组件 Props */
export interface PopconfirmProps extends VariantProps<typeof popconfirmVariants> {
  /** 确认框标题，显示在气泡顶部 */
  title?: ReactNode
  /** 确认框描述内容，显示在标题下方 */
  description?: ReactNode
  /** 确认按钮文字。默认 '确定' */
  okText?: ReactNode
  /** 取消按钮文字。默认 '取消' */
  cancelText?: ReactNode
  /** 点击确认按钮时的回调函数 */
  onConfirm?: () => void
  /** 点击取消按钮时的回调函数 */
  onCancel?: () => void
  /** 是否显示气泡确认框。受控模式下使用 */
  open?: boolean
  /** 气泡确认框显示/隐藏状态变化时的回调函数 */
  onOpenChange?: (open: boolean) => void
  /** 触发方式。'click' 点击触发，'hover' 悬停触发，'focus' 焦点触发。默认 'click' */
  trigger?: 'click' | 'hover' | 'focus'
  /** 自定义图标，显示在标题左侧。默认为警告图标 */
  icon?: ReactNode
  /** 是否禁用。true 时无法触发气泡确认框 */
  disabled?: boolean
  /** 触发气泡确认框的子元素，必须为单个可交互元素 */
  children: ReactNode
  /** 自定义内联样式 */
  style?: CSSProperties
  /** 自定义类名，通过 cn() + twMerge 合并 */
  className?: string
  /** 气泡确认框弹出位置。默认 'top' */
  placement?: PopconfirmPlacement
}