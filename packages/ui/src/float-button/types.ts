import type { CSSProperties, ReactNode } from 'react'

export interface FloatButtonProps {
  /** 按钮图标 */
  icon?: ReactNode
  /** 按钮文字描述 */
  description?: ReactNode
  /** 设置按钮类型 */
  type?: 'default' | 'primary'
  /** 设置按钮形状 */
  shapeVariant?: 'circle' | 'square'
  /** 点击回调 */
  onClick?: () => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 提示气泡 */
  tooltip?: ReactNode
  /** 提示气泡弹出位置 */
  placement?: 'top' | 'left' | 'right' | 'bottom'
}

export interface FloatButtonGroupProps {
  /** 触发方式 */
  trigger?: 'click' | 'hover'
  /** 设置按钮类型 */
  type?: 'default' | 'primary'
  /** 设置按钮形状 */
  shapeVariant?: 'circle' | 'square'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 子按钮 */
  children: ReactNode
}
