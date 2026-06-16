import { forwardRef, useCallback, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { pullToRefreshVariants, pullIndicatorClass, refreshingTextClass } from './pull-to-refresh-variants'
import type { PullToRefreshProps, PullToRefreshStatus } from './types'

/**
 * PullToRefresh 下拉刷新组件
 *
 * 提供顶部下拉回弹、加载状态切换、自定义刷新内容等功能。
 * 通过 touch 事件监听实现手势交互，使用 CSS transition 实现回弹动画。
 */
export const PullToRefresh = forwardRef<HTMLDivElement, PullToRefreshProps>(
  (props, ref) => {
    const {
      className,
      children,
      refreshing,
      onRefresh,
      threshold = 80,
      maxDistance = 150,
      pullingText = '下拉刷新',
      canReleaseText = '释放刷新',
      refreshingText = '刷新中...',
      indicator,
      disabled = false,
      variant,
      ...rest
    } = props

    const [pullDistance, setPullDistance] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const touchStartY = useRef(0)
    const scrollTop = useRef(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    /** 获取当前下拉状态 */
    const getStatus = useCallback(
      (distance: number): PullToRefreshStatus => {
        if (refreshing) return 'refreshing'
        if (distance >= threshold) return 'canRelease'
        return 'pulling'
      },
      [refreshing, threshold],
    )

    /** 渲染指示器内容 */
    const renderIndicator = (status: PullToRefreshStatus) => {
      if (indicator) return indicator(status)

      const textMap: Record<PullToRefreshStatus, string> = {
        pulling: pullingText,
        canRelease: canReleaseText,
        refreshing: refreshingText,
      }

      return (
        <span className={cn(status === 'refreshing' && refreshingTextClass)}>
          {textMap[status]}
        </span>
      )
    }

    const status = getStatus(pullDistance)

    const handleTouchStart = useCallback(
      (e: React.TouchEvent) => {
        if (disabled) return
        const container = containerRef.current
        if (!container) return
        scrollTop.current = container.scrollTop
        if (scrollTop.current > 0) return
        const touch = e.touches[0]
        if (!touch) return
        touchStartY.current = touch.clientY
        setIsTransitioning(false)
      },
      [disabled],
    )

    const handleTouchMove = useCallback(
      (e: React.TouchEvent) => {
        if (disabled) return
        if (refreshing) return
        if (scrollTop.current > 0) return
        const touch = e.touches[0]
        if (!touch) return
        const deltaY = touch.clientY - touchStartY.current
        if (deltaY <= 0) {
          setPullDistance(0)
          return
        }
        // 阻尼效果：越拉越难拉
        const dampened = deltaY * 0.5
        const clamped = Math.min(dampened, maxDistance)
        setPullDistance(clamped)
      },
      [disabled, refreshing, maxDistance],
    )

    const handleTouchEnd = useCallback(() => {
      if (disabled) return
      if (refreshing) return
      if (pullDistance >= threshold) {
        setIsTransitioning(true)
        setPullDistance(threshold)
        onRefresh()
      } else {
        setIsTransitioning(true)
        setPullDistance(0)
      }
    }, [disabled, refreshing, pullDistance, threshold, onRefresh])

    /** refreshing 变为 false 时回弹 */
    const prevRefreshing = useRef(refreshing)
    if (prevRefreshing.current && !refreshing) {
      setIsTransitioning(true)
      setPullDistance(0)
    }
    prevRefreshing.current = refreshing

    const indicatorHeight = pullDistance > 0 ? pullDistance : (refreshing ? threshold : 0)

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          pullToRefreshVariants({ variant }),
          className,
        )}
        {...rest}
      >
        {/* 下拉指示器 */}
        <div
          className={pullIndicatorClass}
          style={{
            height: indicatorHeight,
            transition: isTransitioning ? 'height 0.3s ease' : 'none',
          } /* 动态高度+过渡计算，允许保留 */}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          {indicatorHeight > 0 && renderIndicator(status)}
        </div>

        {/* 内容区域 */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {children}
        </div>
      </div>
    )
  },
)

PullToRefresh.displayName = 'PullToRefresh'

export type { PullToRefreshProps, PullToRefreshStatus } from './types'
export { pullToRefreshVariants } from './pull-to-refresh-variants'
export default PullToRefresh
