import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { breadcrumbSeparatorVariants } from './breadcrumb-variants'
import type { BreadcrumbSeparatorProps } from './types'

/**
 * Breadcrumb.Separator 分隔符组件
 */
export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  (props, ref) => {
    const { className, children, ...rest } = props
    return (
      <span
        ref={ref}
        className={cn(breadcrumbSeparatorVariants(), className)}
        aria-hidden="true"
        {...rest}
      >
        {children}
      </span>
    )
  }
)
BreadcrumbSeparator.displayName = 'Breadcrumb.Separator'