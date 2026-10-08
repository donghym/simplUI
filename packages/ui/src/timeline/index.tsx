import {
  forwardRef,
  useState,
  useCallback,
  Children,
  isValidElement,
  type ReactElement,
} from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
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
  enhanceTimelineItemVariants,
  enhanceTimelineDotVariants,
  enhanceTimelineLineVariants,
  enhanceTimelineContentVariants,
  enhanceTimelineCollapseVariants,
  STATUS_TEXT,
} from './timeline-variants'
import type {
  TimelineProps,
  TimelineItemProps,
  TimelineItem as TimelineItemType,
} from './types'

export type {
  TimelineItemProps,
  TimelineItemType,
}

type EnhanceTimelineStatus = 'default' | 'success' | 'warning' | 'danger' | 'processing'

function normalizeEnhanceStatus(status: TimelineItemType['status']): EnhanceTimelineStatus {
  switch (status) {
    case 'completed':
    case 'success':
      return 'success'
    case 'active':
    case 'processing':
      return 'processing'
    case 'warning':
    case 'danger':
      return status
    case 'pending':
    default:
      return 'default'
  }
}

/* ------------------------------------------------------------------ */
/*  基础 TimelineItem（children 模式）                                 */
/* ------------------------------------------------------------------ */

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
            icon || <Check className="w-4 h-4" />
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
  },
)
TimelineItem.displayName = 'TimelineItem'

/* ------------------------------------------------------------------ */
/*  增强 TimelineItem（items 模式，支持 alternate、content、折叠）       */
/* ------------------------------------------------------------------ */

/** 增强时间线节点 */
function EnhanceTimelineNode({
  item,
  index,
  isLast,
  mode,
}: {
  item: TimelineItemType
  index: number
  isLast: boolean
  mode: 'left' | 'alternate'
}) {
  const status = normalizeEnhanceStatus(item.status)
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
        {item.description && (
          <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  主 Timeline 组件                                                   */
/* ------------------------------------------------------------------ */

/** 时间线组件 */
export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      className,
      mode = 'left',
      items,
      children,
      collapsible = false,
      collapseCount = 3,
      ...rest
    } = props

    const [expanded, setExpanded] = useState(false)

    // items 模式（增强模式，支持 alternate、content、折叠）
    if (items && items.length > 0) {
      const needCollapse = collapsible && items.length > collapseCount
      const visibleItems = needCollapse && !expanded ? items.slice(0, collapseCount) : items

      const handleToggle = useCallback(() => setExpanded((v) => !v), [])

      return (
        <div ref={ref} className={cn(timelineVariants({ mode }), className)} {...rest}>
          {visibleItems.map((item, index) => (
            <EnhanceTimelineNode
              key={index}
              item={item}
              index={index}
              isLast={index === visibleItems.length - 1 && !needCollapse}
              mode={mode === 'right' ? 'left' : mode}
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
    }

    // children 模式（基础模式）
    const renderItems = () => {
      if (children) {
        return Children.map(children, (child) => {
          if (isValidElement(child)) {
            return (child as ReactElement<TimelineItemProps>)
          }
          return null
        })
      }
      return null
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
  },
)
Timeline.displayName = 'Timeline'

export { TimelineItem }

// 导出 EnhanceTimeline 作为别名保持向后兼容
export { Timeline as EnhanceTimeline }
