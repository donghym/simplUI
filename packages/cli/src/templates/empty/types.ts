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
  PRESENTED_IMAGE_SIMPLE:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA2NCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzIgMjBDMzIgMjAgMzIgMjAgMzIgMjBDMzIgMjAgMzIgMjAgMzIgMjBaIiBmaWxsPSIjOTRBNEJFIi8+PHBhdGggZD0iTTY0IDIwQzY0IDMxLjA0NTcgNTUuMDQ1NyA0MCA0NCA0MEMzMi45NTQzIDQwIDI0IDMxLjA0NTcgMjQgMjBDMjQgOC45NTQzIDMyLjk1NDMgMCA0NCAwQzU1LjA0NTcgMCA2NCA4Ljk1NDMgNjQgMjBaIiBmaWxsPSIjRjVGNUY1Ii8+PHBhdGggZD0iTTQwIDIwQzQwIDI2LjYyNzQgNDUuMzcyNiAzMiA1MiAzMkM1OC42Mjc0IDMyIDY0IDI2LjYyNzQgNjQgMjBDNjQgMTMuMzcyNiA1OC42Mjc0IDggNTIgOEM0NS4zNzI2IDggNDAgMTMuMzcyNiA0MCAyMFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQ0IDE4QzQ0IDE5LjEwNDYgNDQuODk1NCAyMCA0NiAyMEM0Ny4xMDQ2IDIwIDQ4IDE5LjEwNDYgNDggMThDNDggMTYuODk1NCA0Ny4xMDQ2IDE2IDQ2IDE2QzQ0Ljg5NTQgMTYgNDQgMTYuODk1NCA0NCAxOFoiIGZpbGw9IiM5NEE0QkUiLz48L3N2Zz4=',
  /** 简洁风格空状态图片 */
  PRESENTED_IMAGE_PAGE_SIMPLE:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE2MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGNUY1RjUiLz48cGF0aCBkPSJNNTAgNjBIMTEwVjcwSDUwVjYwWiIgZmlsbD0iI0Q5RDlEOSIvPjxwYXRoIGQ9Ik02MCAzMEg4MFY1MEg2MFYzMFoiIGZpbGw9IiNEOUQ5RDkiLz48L3N2Zz4=',
} as const

export type EmptyImageType = (typeof EmptyImage)[keyof typeof EmptyImage]
