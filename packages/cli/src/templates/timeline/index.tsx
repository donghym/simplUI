import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import {
  timelineVariants,
  timelineItemVariants,
  timelineDotVariants,
  timelineLineVariants,
  timelineContentVariants,
  timelineTitleVariants,
  timelineStatusVariants,
  timelineTimeVariants,
} from './timeline-variants'
import type { TimelineProps, TimelineItemProps, TimelineItem as TimelineItemType } from './types'

/** 时间线项组件 */
const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    const {
      className,
      status = 'pending',
      title,
      description,
      time,
      icon,
      index,
      isLast,
      ...rest
    } = props

    return (
      <div
        ref={ref}
        role="listitem"
        className={cn(timelineItemVariants({ status }), className)}
        {...rest}
      >
        {/* 连接线 - 最后一项不显示 */}
        {!isLast && (
          <div className={cn(timelineLineVariants({ status }))} />
        )}

        {/* 节点圆圈 */}
        <div className={cn(timelineDotVariants({ status }))}>
          {status === 'completed' ? (
            icon || <span className="w-4 h-4">V</span>
          ) : (
            icon || (index !== undefined ? index + 1 : null)
          )}
        </div>

        {/* 内容区域 */}
        <div className={cn(timelineContentVariants())}>
          {title && (
            <div className={cn(timelineTitleVariants({ status }))}>
              {title}
            </div>
          )}
          {description && (
            <div className={cn(timelineStatusVariants({ status }))}>
              {description}
            </div>
          )}
          {time && (
            <div className={cn(timelineTimeVariants())}>
              {time}
            </div>
          )}
        </div>
      </div>
    )
  }
)
TimelineItem.displayName = 'TimelineItem'

/** 时间线组件 */
export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      className,
      mode = 'left',
      items,
      children,
      ...rest
    } = props

    // 渲染 items 数组
    const renderItems = () => {
      if (items && items.length > 0) {
        return items.map((item, index) => (
          <TimelineItem
            key={index}
            status={item.status}
            title={item.title}
            description={item.description}
            time={item.time}
            icon={item.icon}
            index={index}
            isLast={index === items.length - 1}
          />
        ))
      }
      return children
    }

    return (
      <div
        ref={ref}
        role="list"
        className={cn(timelineVariants({ mode }), className)}
        {...rest}
      >
        {renderItems()}
      </div>
    )
  }
)
Timeline.displayName = 'Timeline'

export { TimelineItem }
export type { TimelineItemProps, TimelineItemType }