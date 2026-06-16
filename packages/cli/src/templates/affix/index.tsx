import React, { forwardRef, useState, useEffect, useRef, useCallback, type CSSProperties } from 'react'
import { cn } from '../lib/utils'
import type { AffixProps } from './types'

export type { AffixProps }

/**
 * Affix 固钉组件
 *
 * 将页面元素钉在可视范围。
 *
 * ### 何时使用
 * - 当内容区域比较长，需要滚动页面时，用于将区域标题固定在可视范围
 * - 常用于侧边菜单或返回顶部按钮
 *
 * ### 示例
 * ```tsx
 * <Affix offsetTop={64}>
 *   <Button>Fixed Button</Button>
 * </Affix>
 * ```
 */
export const Affix = forwardRef<HTMLDivElement, AffixProps>(({
  offsetTop,
  offsetBottom,
  onChange,
  children,
  style,
  className,
  target,
}, ref) => {
  const [affixed, setAffixed] = useState(false)
  const [wrapperStyle, setWrapperStyle] = useState<CSSProperties>({})
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const fixedNodeRef = useRef<HTMLDivElement>(null)

  const getTarget = useCallback(() => {
    if (!target) return window
    return target() || window
  }, [target])

  const updatePosition = useCallback(() => {
    const targetElement = getTarget()
    if (!wrapperRef.current || !fixedNodeRef.current) return

    const wrapperRect = wrapperRef.current.getBoundingClientRect()

    let nextAffixed = false
    let targetRect: DOMRect

    if (targetElement === window) {
      targetRect = {
        top: 0,
        left: 0,
        bottom: window.innerHeight,
        right: window.innerWidth,
        width: window.innerWidth,
        height: window.innerHeight,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect
    } else if (targetElement instanceof HTMLElement) {
      targetRect = targetElement.getBoundingClientRect()
    } else {
      targetRect = { top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 0, toJSON: () => ({}) } as DOMRect
    }

    if (offsetTop !== undefined) {
      nextAffixed = wrapperRect.top - targetRect.top <= offsetTop
    } else if (offsetBottom !== undefined) {
      nextAffixed = targetRect.bottom - wrapperRect.bottom <= offsetBottom
    }

    if (nextAffixed !== affixed) {
      setAffixed(nextAffixed)
      onChange?.(nextAffixed)
    }

    if (nextAffixed) {
      const offsetLeft = wrapperRect.left - targetRect.left
      const width = wrapperRect.width
      setWrapperStyle({
        width: `${width}px`,
        height: `${wrapperRect.height}px`,
      })
      if (fixedNodeRef.current) {
        fixedNodeRef.current.style.left = `${offsetLeft}px`
        fixedNodeRef.current.style.width = `${width}px`
      }
    } else {
      setWrapperStyle({})
    }
  }, [offsetTop, offsetBottom, affixed, onChange, getTarget])

  useEffect(() => {
    const targetElement = getTarget()
    if (!targetElement) return

    targetElement.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)
    updatePosition()
    return () => {
      targetElement.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [updatePosition, getTarget])

  const affixStyle: React.CSSProperties = affixed
    ? {
        position: 'fixed',
        top: offsetTop !== undefined ? offsetTop : undefined,
        bottom: offsetBottom !== undefined ? offsetBottom : undefined,
        zIndex: 1000,
      }
    : {}

  return (
    <div ref={(el) => { wrapperRef.current = el; if (ref) { if (typeof ref === 'function') { ref(el); } else { const r = ref; r.current = el; } } }} className={cn('sui-affix', className)} style={{ ...style, ...wrapperStyle /* 定位计算 style 允许保留 */ }}>
      <div
        ref={fixedNodeRef}
        style={affixStyle /* 定位计算 style 允许保留 */}
      >
        {children}
      </div>
    </div>
  )
})

Affix.displayName = 'Affix'
