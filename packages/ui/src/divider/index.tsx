import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { dividerVariants } from './divider-variants'
import type { DividerProps, DividerVariant } from './types'

/** 线型到 Tailwind 类的映射 */
const VARIANT_CLASS: Record<DividerVariant, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
}

/**
 * Divider 分割线组件
 *
 * 用于分割页面内容区域。支持水平/垂直方向、三种线型和内嵌文字。
 * 当 type='horizontal' 且有 children 时，文字将嵌入在分割线中间。
 */
const Divider = forwardRef<HTMLDivElement, DividerProps>(({
  type = 'horizontal',
  variant = 'solid',
  orientation = 'center',
  className,
  children,
  ...rest
}, ref) => {
  // 垂直分割线：无文字支持，只渲染竖线
  if (type === 'vertical') {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="vertical"
        className={cn(dividerVariants({ type }), VARIANT_CLASS[variant], className)}
        {...rest}
      />
    )
  }

  // 无文字的水平分割线：只渲染横线
  if (!children) {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn(dividerVariants({ type }), VARIANT_CLASS[variant], className)}
        {...rest}
      />
    )
  }

  // 带文字的水平分割线
  // orientation=center 时左右都有线；left 时只有右侧有线；right 时只有左侧有线
  const lineClass = cn(
    'flex-1 border border-t-0 border-l-0 border-r-0',
    VARIANT_CLASS[variant],
    'border-border',
  )

  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={cn('flex items-center my-4', className)}
      {...rest}
    >
      {(orientation === 'center' || orientation === 'right') && <span className={lineClass} aria-hidden="true" />}
      <span
        className={cn(
          'text-sm text-muted-foreground whitespace-nowrap shrink-0',
          orientation === 'center' && 'px-4',
          orientation === 'left' && 'pr-4',
          orientation === 'right' && 'pl-4',
        )}
      >
        {children}
      </span>
      {(orientation === 'center' || orientation === 'left') && <span className={lineClass} aria-hidden="true" />}
    </div>
  )
})

Divider.displayName = 'Divider'

export { Divider }
export type { DividerProps, DividerType, DividerVariant, DividerOrientation } from './types'
export { dividerVariants } from './divider-variants'
export default Divider