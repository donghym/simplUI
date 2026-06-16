import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { staggerMenuVariants, staggerMenuItemVariants } from './stagger-menu-variants'
import type { StaggerMenuProps } from './types'

export const StaggerMenu = forwardRef<HTMLDivElement, StaggerMenuProps>((props, ref) => {
  const {
    className,
    items,
    open = true,
    staggerDelay = 50,
    direction = 'down',
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn(
        'sui-stagger-menu',
        staggerMenuVariants({ open }),
        className,
      )}
      {...rest}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            staggerMenuItemVariants({ disabled: item.disabled, open, direction }),
          )}
          style={{ transitionDelay: open ? `${index * staggerDelay}ms` : '0ms' } /* 动态交错延迟，允许保留 */}
          onClick={() => {
            if (!item.disabled) item.onClick?.()
          }}
          role="menuitem"
          aria-disabled={item.disabled}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
})

StaggerMenu.displayName = 'StaggerMenu'

export type { StaggerMenuProps, StaggerMenuItem } from './types'
export { staggerMenuVariants, staggerMenuItemVariants } from './stagger-menu-variants'
