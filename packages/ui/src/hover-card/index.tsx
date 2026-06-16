import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { hoverCardVariants } from './hover-card-variants'
import type { HoverCardProps } from './types'

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>((props, ref) => {
  const {
    className,
    children,
    lift = 8,
    shadow = 'lg',
    rotate = 0,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn(
        'sui-hover-card',
        hoverCardVariants({ shadow }),
        className,
      )}
      style={{
        '--hover-lift': `${lift}px`,
        '--hover-rotate': `${rotate}deg`,
      } as React.CSSProperties /* CSS 变量设置，允许保留 */}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = `translateY(calc(-1 * var(--hover-lift))) rotate(var(--hover-rotate))`
        rest.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0) rotate(0deg)'
        rest.onMouseLeave?.(e)
      }}
      {...rest}
    >
      {children}
    </div>
  )
})

HoverCard.displayName = 'HoverCard'

export type { HoverCardProps } from './types'
export { hoverCardVariants } from './hover-card-variants'
