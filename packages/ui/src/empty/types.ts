import { HTMLAttributes, ReactNode } from 'react'

/**
 * Empty 组件 Props
 * 用于展示空状态，常用于列表、表格等无数据时的占位展示
 */
export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 空状态图片地址。内置 PRESENTED_IMAGE_SIMPLE 和 PRESENTED_IMAGE_PAGE_SIMPLE 两种风格 */
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

/**
 * Empty 内置图片常量
 */
export const EmptyImage = {
  /** 默认空状态图片（完整风格） */
  PRESENTED_IMAGE_SIMPLE: 'https://picsum.photos/200/130',
  /** 简洁风格空状态图片 */
  PRESENTED_IMAGE_PAGE_SIMPLE: 'https://picsum.photos/160/100',
} as const

export type EmptyImageType = (typeof EmptyImage)[keyof typeof EmptyImage]
