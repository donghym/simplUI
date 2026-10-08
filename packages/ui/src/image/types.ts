import type { CSSProperties, ReactNode, ImgHTMLAttributes } from 'react'

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /** 图片地址 */
  src: string
  /** 图片描述 */
  alt?: string
  /** 图片宽度 */
  width?: number | string
  /** 图片高度 */
  height?: number | string
  /** 加载占位 */
  placeholder?: ReactNode
  /** 是否可预览 */
  preview?: boolean
  /** 预览图片地址 */
  previewSrc?: string
  /** 加载失败时显示的内容 */
  fallback?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
