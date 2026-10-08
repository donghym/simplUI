import { HTMLAttributes, ReactNode } from 'react'

/**
 * Empty 组件 Props
 * 用于展示空状态，常用于列表、表格等无数据时的占位展示
 */
export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 空状态图片地址或自定义节点。内置 PRESENTED_IMAGE_SIMPLE 和 PRESENTED_IMAGE_PAGE_SIMPLE 两种风格 */
  image?: string | ReactNode
  /** 图片样式。通过 className 覆盖 */
  imageStyle?: React.CSSProperties
  /** 描述文字。不传则显示默认文案"暂无数据" */
  description?: ReactNode
  /** 自定义图片容器 className */
  imageClassName?: string
  /** 自定义描述容器 className */
  descriptionClassName?: string
  /** 自定义内容区域 className */
  contentClassName?: string
  /** 子元素，常用于放置操作按钮 */
  children?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

const createEmptySvg = (width: number, height: number) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="${width * 0.18}" y="${height * 0.28}" width="${width * 0.64}" height="${height * 0.46}" rx="8" fill="#F2F3F5"/>
  <path d="M${width * 0.28} ${height * 0.44}h${width * 0.44}M${width * 0.28} ${height * 0.56}h${width * 0.28}" stroke="#C9CDD4" stroke-width="4" stroke-linecap="round"/>
  <path d="M${width * 0.36} ${height * 0.26}h${width * 0.28}l${width * 0.08} ${height * 0.12}H${width * 0.28}l${width * 0.08}-${height * 0.12}Z" fill="#E5E6EB"/>
</svg>
`)}`

export const EmptyImage = {
  PRESENTED_IMAGE_SIMPLE: createEmptySvg(200, 130),
  PRESENTED_IMAGE_PAGE_SIMPLE: createEmptySvg(160, 100),
} as const

export type EmptyImageType = (typeof EmptyImage)[keyof typeof EmptyImage]
