import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { enhanceTimelineVariants } from './enhance-timeline-variants'

/** 时间线节点状态 */
export type TimelineNodeStatus = 'default' | 'success' | 'warning' | 'danger' | 'processing'

/** 时间线节点 */
export interface EnhanceTimelineItem {
  /** 节点标题 */
  title: string
  /** 节点内容 */
  content?: ReactNode
  /** 时间文本 */
  time?: string
  /** 节点状态，影响颜色 */
  status?: TimelineNodeStatus
  /** 自定义节点图标 */
  icon?: ReactNode
}

/** EnhanceTimeline 组件属性 */
export interface EnhanceTimelineProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof enhanceTimelineVariants> {
  /** 时间线节点数组 */
  items: EnhanceTimelineItem[]
  /** 布局模式。left 为左侧时间线，alternate 为左右交替，默认 'left' */
  mode?: 'left' | 'alternate'
  /** 是否可折叠。true 时超过指定数量后折叠，默认 false */
  collapsible?: boolean
  /** 折叠前显示的节点数量，默认 3 */
  collapseCount?: number
}
