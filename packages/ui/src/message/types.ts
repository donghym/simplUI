import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { messageVariants } from './message-variants'

/** 消息类型：success 成功、error 错误、warning 警告、info 信息、loading 加载中 */
export type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading'

/**
 * Message 消息提示组件属性
 *
 * 全局展示操作反馈信息，支持 5 种消息类型和自动关闭。
 * 可通过命令式 API `messageApi` 便捷调用。
 */
export interface MessageProps extends VariantProps<typeof messageVariants> {
  /** 消息类型，控制图标、颜色风格。默认 'info' */
  type?: MessageType
  /** 消息内容，支持 ReactNode */
  content: ReactNode
  /** 是否为可见状态。默认 true（内部管理，组件挂载时显示，关闭后隐藏） */
  visible?: boolean
  /** 自动关闭延时（毫秒），设为 0 则不自动关闭。默认 3000 */
  duration?: number
  /** 是否显示关闭按钮。默认 true */
  closable?: boolean
  /** 消息关闭时的回调 */
  onClose?: () => void
  /** 自定义图标，不传则按 type 自动匹配默认图标 */
  icon?: ReactNode
  /** 自定义类名，通过 cn() 合并，用户可覆盖默认样式 */
  className?: string
}

/** 命令式 API 调用参数，排除 visible 和 onClose（由 API 内部管理） */
export interface MessageApiOptions extends Omit<MessageProps, 'visible' | 'onClose'> {
  /** 消息关闭时的回调 */
  onClose?: () => void
}