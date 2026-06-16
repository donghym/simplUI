import type { CSSProperties, ReactNode } from 'react'

export interface WatermarkProps {
  /** 水印文字 */
  content?: string | string[]
  /** 子元素 */
  children?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 水印文字颜色 */
  color?: string
  /** 水印文字大小 */
  fontSize?: number
  /** 水印文字字体 */
  fontFamily?: string
  /** 水印旋转角度 */
  rotate?: number
  /** 水印之间的水平间距 */
  gapX?: number
  /** 水印之间的垂直间距 */
  gapY?: number
  /** 水印不透明度 */
  opacity?: number
  /** 是否全屏 */
  fullScreen?: boolean
}
