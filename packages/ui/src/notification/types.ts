import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { notificationVariants } from './notification-variants'

/** 通知类型：success 成功、error 错误、warning 警告、info 信息 */
export type NotificationType = 'success' | 'error' | 'warning' | 'info'

/** 通知位置：top-right 右上、top-left 左上、bottom-right 右下、bottom-left 左下 */
export type NotificationPlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

/**
 * Notification 通知提醒组件属性
 *
 * 在页面边缘展示通知提醒，支持 4 种通知类型和自动关闭。
 * 可通过命令式 API `notificationApi` 便捷调用。
 */
export interface NotificationProps extends VariantProps<typeof notificationVariants> {
  /** 通知类型，控制图标、颜色风格。默认 'info' */
  type?: NotificationType
  /** 通知标题 */
  title?: ReactNode
  /** 通知描述内容，支持 ReactNode */
  description?: ReactNode
  /** 是否为可见状态。默认 true（内部管理，组件挂载时显示，关闭后隐藏） */
  visible?: boolean
  /** 自动关闭延时（毫秒），设为 0 则不自动关闭。默认 4500 */
  duration?: number
  /** 是否显示关闭按钮。默认 true */
  closable?: boolean
  /** 通知关闭时的回调 */
  onClose?: () => void
  /** 自定义图标，不传则按 type 自动匹配默认图标 */
  icon?: ReactNode
  /** 自定义操作按钮区域，显示在通知底部 */
  action?: ReactNode
  /** 自定义类名，通过 cn() 合并，用户可覆盖默认样式 */
  className?: string
}

/** 命令式 API 调用参数，排除 visible 和 onClose（由 API 内部管理） */
export interface NotificationApiOptions extends Omit<NotificationProps, 'visible' | 'onClose'> {
  /** 通知关闭时的回调 */
  onClose?: () => void
  /** 通知显示位置。默认 'top-right' */
  placement?: NotificationPlacement
}
