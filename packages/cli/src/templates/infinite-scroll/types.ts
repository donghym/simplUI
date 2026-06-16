import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { infiniteScrollVariants } from './infinite-scroll-variants'

/**
 * InfiniteScroll Props
 *
 * 无限滚动组件，底部监听加载更多数据。
 */
export interface InfiniteScrollProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof infiniteScrollVariants> {
  /** 子元素 */
  children: ReactNode
  /** 是否正在加载 */
  loading: boolean
  /** 是否还有更多数据 */
  hasMore: boolean
  /** 加载更多回调 */
  onLoadMore: () => void
  /** 加载中提示文本，默认 '加载中...' */
  loadingText?: string
  /** 无更多数据提示文本，默认 '没有更多了' */
  noMoreText?: string
  /** 触发距离像素，默认 100 */
  threshold?: number
}
