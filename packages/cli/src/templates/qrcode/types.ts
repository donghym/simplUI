import type { CSSProperties } from 'react'

export interface QRCodeProps {
  /** 二维码的值 */
  value: string
  /** 二维码尺寸 */
  size?: number
  /** 二维码颜色 */
  color?: string
  /** 背景颜色 */
  bgColor?: string
  /** 边框是否有留白 */
  bordered?: boolean
  /** 是否显示状态 */
  status?: 'active' | 'expired' | 'loading' | 'scanned'
  /** 点击刷新回调 */
  onRefresh?: () => void
  /** 自定义图标 */
  icon?: string
  /** 图标尺寸 */
  iconSize?: number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
