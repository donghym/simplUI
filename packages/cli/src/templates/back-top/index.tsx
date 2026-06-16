import { forwardRef, useEffect, useState, useCallback, useRef } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '../lib/utils'
import { backTopVariants } from './back-top-variants'
import type { BackTopProps } from './types'

/**
 * BackTop 回到顶部
 *
 * 当页面滚动到一定高度时显示，点击平滑滚动回页面顶部。
 * 支持自定义容器、滚动持续时间、显示阈值。
 */
const BackTop = forwardRef<HTMLButtonElement, BackTopProps>((props, ref) => {
  const {
    className,
    visibilityHeight = 400,
    onClick,
    getContainer,
    duration = 450,
    icon,
    disabled,
    ...rest
  } = props

  const [visible, setVisible] = useState(false)
  const scrollRef = useRef<number>(0)

  // 获取滚动容器
  const getScrollContainer = useCallback(() => {
    return getContainer?.() || window
  }, [getContainer])

  // 获取当前滚动位置
  const getScrollTop = useCallback(() => {
    const container = getScrollContainer()
    if (container === window) {
      return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
    return (container as HTMLElement).scrollTop
  }, [getScrollContainer])

  // 设置滚动位置
  const setScrollTop = useCallback(
    (top: number) => {
      const container = getScrollContainer()
      if (container === window) {
        window.scrollTo(0, top)
        document.documentElement.scrollTop = top
        document.body.scrollTop = top
      } else {
        ;(container as HTMLElement).scrollTop = top
      }
    },
    [getScrollContainer]
  )

  // 监听滚动事件
  useEffect(() => {
    const container = getScrollContainer()

    const handleScroll = () => {
      const scrollTop = getScrollTop()
      setVisible(scrollTop >= visibilityHeight)
    }

    handleScroll()

    if (container === window) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      ;(container as HTMLElement).addEventListener('scroll', handleScroll)
      return () => (container as HTMLElement).removeEventListener('scroll', handleScroll)
    }
  }, [visibilityHeight, getScrollContainer, getScrollTop])

  // 平滑滚动到顶部
  const scrollToTop = useCallback(() => {
    const scrollTop = getScrollTop()

    if (duration === 0) {
      setScrollTop(0)
      onClick?.()
      return
    }

    const startTime = Date.now()
    const startTop = scrollTop

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

    const scroll = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutQuad(progress)
      const currentTop = startTop * (1 - easeProgress)

      setScrollTop(currentTop)

      if (progress < 1) {
        scrollRef.current = requestAnimationFrame(scroll)
      } else {
        onClick?.()
      }
    }

    scrollRef.current = requestAnimationFrame(scroll)
  }, [duration, getScrollContainer, getScrollTop, setScrollTop, onClick])

  // 清理动画帧
  useEffect(() => {
    return () => {
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    if (disabled) return
    scrollToTop()
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-label="回到顶部"
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cn(backTopVariants({ visible, disabled }), className)}
      onClick={handleClick}
      {...rest}
    >
      {icon || <ChevronUp className="h-5 w-5" aria-hidden="true" />}
    </button>
  )
})

BackTop.displayName = 'BackTop'

export { BackTop }
export type { BackTopProps } from './types'
export { backTopVariants } from './back-top-variants'

export default BackTop
