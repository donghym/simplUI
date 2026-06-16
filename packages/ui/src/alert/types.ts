import type { CSSProperties, ReactNode } from 'react'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
  /** 警告提示样式 */
  type?: AlertType
  /** 是否显示图标 */
  showIcon?: boolean
  /** 可关闭 */
  closable?: boolean
  /** 关闭时的回调 */
  onClose?: () => void
  /** 自定义操作区 */
  action?: ReactNode
  /** 自定义关闭按钮 */
  closeIcon?: ReactNode
  /** 提示内容 */
  message?: ReactNode
  /** 辅助性文字介绍 */
  description?: ReactNode
  /** 自定义图标，showIcon 为 true 时有效 */
  icon?: ReactNode
  /** 顶部公告 */
  banner?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
