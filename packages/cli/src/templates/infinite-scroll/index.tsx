import { forwardRef, useEffect, useRef, useCallback } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { infiniteScrollVariants, infiniteScrollStatusVariants } from './infinite-scroll-variants'
import type { InfiniteScrollProps } from './types'

/**
 * InfiniteScroll 无限滚动
 *
 * Intersection Observer 监听底部哨兵元素进入视口时触发 onLoadMore。
 */
const InfiniteScroll = forwardRef<HTMLDivElement, InfiniteScrollProps>(({
  children,
  loading,
  hasMore,
  onLoadMore,
  loadingText = '加载中...',
  noMoreText = '没有更多了',
  threshold = 100,
  className,
  ...rest
}, ref) => {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const onLoadMoreRef = useRef(onLoadMore)
  onLoadMoreRef.current = onLoadMore

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (entry?.isIntersecting && hasMore && !loading) {
      onLoadMoreRef.current()
    }
  }, [hasMore, loading])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: `${threshold}px`,
    })
    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersect, threshold])

  return (
    <div ref={ref} className={cn(infiniteScrollVariants(), className)} {...rest}>
      {children}

      {/* 底部状态区 */}
      <div className={cn(infiniteScrollStatusVariants())}>
        {loading && (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            {loadingText}
          </span>
        )}
        {!loading && !hasMore && noMoreText}
      </div>

      {/* 哨兵元素 */}
      {hasMore && <div ref={sentinelRef} className="h-1" aria-hidden="true" />}
    </div>
  )
})

InfiniteScroll.displayName = 'InfiniteScroll'

export { InfiniteScroll }
export type { InfiniteScrollProps } from './types'
export { infiniteScrollVariants } from './infinite-scroll-variants'

export default InfiniteScroll
