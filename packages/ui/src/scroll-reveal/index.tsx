import { forwardRef, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../lib/utils'
import { scrollRevealVariants } from './scroll-reveal-variants'
import type { ScrollRevealProps, RevealDirection } from './types'

/** 根据方向获取初始偏移类名 */
function getDirectionClass(direction: RevealDirection): string {
  const map: Record<RevealDirection, string> = {
    up: 'translate-y-[var(--reveal-distance)]',
    down: '-translate-y-[var(--reveal-distance)]',
    left: 'translate-x-[var(--reveal-distance)]',
    right: '-translate-x-[var(--reveal-distance)]',
    none: '',
  }
  return map[direction]
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>((props, ref) => {
  const {
    className,
    children,
    direction = 'up',
    duration = 600,
    delay = 0,
    threshold = 0.1,
    once = true,
    distance = 30,
    ...rest
  } = props

  const [visible, setVisible] = useState(false)
  const innerRef = useRef<HTMLDivElement | null>(null)

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      innerRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
    },
    [ref],
  )

  useEffect(() => {
    const el = innerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={setRef}
      className={cn(
        'sui-scroll-reveal',
        scrollRevealVariants({ visible }),
        !visible && getDirectionClass(direction),
        className,
      )}
      style={{
        '--reveal-distance': `${distance}px`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      } as React.CSSProperties /* CSS 变量设置，允许保留 */}
      {...rest}
    >
      {children}
    </div>
  )
})

ScrollReveal.displayName = 'ScrollReveal'

export type { ScrollRevealProps, RevealDirection } from './types'
export { scrollRevealVariants } from './scroll-reveal-variants'
