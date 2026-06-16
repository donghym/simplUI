import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { timelineVariants, timelineItemVariants } from './timeline-variants'

/** 时间线节点状态 */
export type TimelineStatus = 'completed' | 'active' | 'pending'

/** 时间线节点位置 */
export type TimelineMode = 'left' | 'right' | 'alternate'

/** 时间线项数据 */
export interface TimelineItem {
  /** 节点状态 */
  status?: TimelineStatus
  /** 标题 */
  title?: ReactNode
  /** 描述/状态标签 */
  description?: ReactNode
  /** 时间 */
  time?: ReactNode
  /** 自定义图标 */
  icon?: ReactNode
}

/** 时间线项属性 */
export interface TimelineItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title'>,
    VariantProps<typeof timelineItemVariants> {
  /** 节点状态 */
  status?: TimelineStatus
  /** 标题 */
  title?: ReactNode
  /** 描述/状态标签 */
  description?: ReactNode
  /** 时间 */
  time?: ReactNode
  /** 自定义图标 */
  icon?: ReactNode
  /** 索引 */
  index?: number
  /** 是否为最后一项 */
  isLast?: boolean
  /** 自定义 className */
  className?: string
}

/** 时间线组件属性 */
export interface TimelineProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof timelineVariants> {
  /** 时间线节点位置模式 */
  mode?: TimelineMode
  /** 时间线项数组 */
  items?: TimelineItem[]
  /** 子元素（TimelineItem） */
  children?: ReactNode
  /** 自定义 className */
  className?: string
}
