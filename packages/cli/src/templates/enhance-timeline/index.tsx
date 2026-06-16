import { forwardRef, useState, useCallback } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  enhanceTimelineVariants,
  enhanceTimelineItemVariants,
  enhanceTimelineDotVariants,
  enhanceTimelineLineVariants,
  enhanceTimelineContentVariants,
  enhanceTimelineCollapseVariants,
} from './enhance-timeline-variants'
import type { EnhanceTimelineProps, EnhanceTimelineItem, TimelineNodeStatus } from './types'

export type { EnhanceTimelineProps, EnhanceTimelineItem, TimelineNodeStatus } from './types'

/** 状态颜色映射 */
const STATUS_TEXT: Record<TimelineNodeStatus, string> = {
  default: 'text-muted-foreground',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  processing: 'text-primary-500',
}

/** 单个时间线节点 */
function TimelineNode({
  item,
  index,
  isLast,
  mode,
}: {
  item: EnhanceTimelineItem
  index: number
  isLast: boolean
  mode: 'left' | 'alternate'
}) {
  const status = item.status ?? 'default'
  const isAlternateLeft = mode === 'alternate' && index % 2 === 0

  return (
    <div className={cn(enhanceTimelineItemVariants({ mode }))}>
      {/* 圆点 */}
      <div
        className={cn(
          enhanceTimelineDotVariants({ status }),
          item.icon && 'flex items-center justify-center w-auto h-auto p-1 bg-transparent border-0',
          mode === 'alternate' && (isAlternateLeft ? 'left-auto right-[calc(50%-6px)]' : 'left-[calc(50%-6px)]'),
        )}
      >
        {item.icon}
      </div>

      {/* 线条 */}
      {!isLast && (
        <div
          className={cn(
            enhanceTimelineLineVariants(),
            mode === 'alternate' && (isAlternateLeft ? 'left-auto right-[calc(50%-1px)]' : 'left-[calc(50%-1px)]'),
          )}
        />
      )}

      {/* 内容 */}
      <div
        className={cn(
          enhanceTimelineContentVariants({ mode }),
          mode === 'alternate' && (isAlternateLeft ? 'pr-[calc(50%+20px)] text-right' : 'pl-[calc(50%+20px)]'),
        )}
      >
        <div className="flex items-baseline gap-2">
          <span className={cn('text-sm font-medium text-foreground', STATUS_TEXT[status])}>
            {item.title}
          </span>
          {item.time && (
            <span className="text-xs text-muted-foreground">{item.time}</span>
          )}
        </div>
        {item.content && (
          <div className="text-sm text-muted-foreground mt-1">{item.content}</div>
        )}
      </div>
    </div>
  )
}

/** 高级时间线组件 */
export const EnhanceTimeline = forwardRef<HTMLDivElement, EnhanceTimelineProps>(
  (props, ref) => {
    const {
      items,
      mode = 'left',
      collapsible = false,
      collapseCount = 3,
      className,
      ...rest
    } = props

    const [expanded, setExpanded] = useState(false)
    const needCollapse = collapsible && items.length > collapseCount
    const visibleItems = needCollapse && !expanded ? items.slice(0, collapseCount) : items

    const handleToggle = useCallback(() => setExpanded((v) => !v), [])

    return (
      <div ref={ref} className={cn(enhanceTimelineVariants({ mode }), className)} {...rest}>
        {visibleItems.map((item, index) => (
          <TimelineNode
            key={index}
            item={item}
            index={index}
            isLast={index === visibleItems.length - 1 && !needCollapse}
            mode={mode}
          />
        ))}
        {needCollapse && (
          <div
            role="button"
            tabIndex={0}
            className={cn(enhanceTimelineCollapseVariants())}
            onClick={handleToggle}
            onKeyDown={(e) => { if (e.key === 'Enter') handleToggle() }}
          >
            {expanded ? (
              <>收起 <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>展开更多 ({items.length - collapseCount}) <ChevronDown className="w-4 h-4" /></>
            )}
          </div>
        )}
      </div>
    )
  },
)

EnhanceTimeline.displayName = 'EnhanceTimeline'
