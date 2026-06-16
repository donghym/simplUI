import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { pullToRefreshVariants } from './pull-to-refresh-variants'

/** 下拉刷新状态 */
export type PullToRefreshStatus = 'pulling' | 'canRelease' | 'refreshing'

/** PullToRefresh 组件属性 */
export interface PullToRefreshProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof pullToRefreshVariants> {
  /** 子元素 */
  children: ReactNode
  /** 是否正在刷新 */
  refreshing: boolean
  /** 刷新回调，下拉释放时触发 */
  onRefresh: () => void
  /** 触发刷新的下拉距离像素，默认 80 */
  threshold?: number
  /** 最大下拉距离像素，默认 150 */
  maxDistance?: number
  /** 下拉提示文本 */
  pullingText?: string
  /** 释放提示文本 */
  canReleaseText?: string
  /** 刷新中文本 */
  refreshingText?: string
  /** 自定义下拉指示器渲染 */
  indicator?: (status: PullToRefreshStatus) => ReactNode
  /** 是否禁用下拉刷新，默认 false */
  disabled?: boolean
}
