import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { rowVariants, colVariants } from './grid-variants'
import { getSpanClass, getResponsiveClass } from './grid-utils'
import type { RowProps, ColProps } from './types'

/**
 * Row 栅格行
 *
 * 基于 flexbox 的 24 列栅格行容器。
 * gutter 通过负 margin 实现列间距。
 */
const Row = forwardRef<HTMLDivElement, RowProps>(
  ({ gutter = 0, align = 'top', justify = 'start', wrap = true, className, children, ...rest }, ref) => {
    // 计算 gutter 对应的负 margin（动态值，不在 cva 中处理）
    const [hGutter, vGutter] = typeof gutter === 'number' ? [gutter, gutter] : gutter
    const gapClass = hGutter > 0 ? `-mx-[${hGutter / 2}px]` : ''
    const rowGapClass = vGutter > 0 ? `-my-[${vGutter / 2}px]` : ''

    return (
      <div
        ref={ref}
        className={cn(
          rowVariants({ align, justify, wrap }),
          gapClass,
          rowGapClass,
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Row.displayName = 'Row'

/**
 * Col 栅格列
 *
 * 基于百分比宽度的 24 列栅格列，支持响应式断点。
 */
const Col = forwardRef<HTMLDivElement, ColProps>(
  ({
    span = 24,
    offset,
    flex,
    order,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    className,
    children,
    ...rest
  }, ref) => {
    // 计算基础类名（动态值，通过 grid-utils.ts 处理）
    const baseSpan = getSpanClass(span, offset)
    const flexStyle = flex !== undefined ? `flex-[${flex}]` : ''
    const orderClass = order !== undefined ? `order-${order}` : ''

    // 响应式类名
    const responsiveClasses = [
      getResponsiveClass('xs', xs),
      getResponsiveClass('sm', sm),
      getResponsiveClass('md', md),
      getResponsiveClass('lg', lg),
      getResponsiveClass('xl', xl),
      getResponsiveClass('xxl', xxl),
    ]
      .filter(Boolean)
      .join(' ')

    // span 为 0 时隐藏
    const hiddenClass = span === 0 ? 'hidden' : ''

    return (
      <div
        ref={ref}
        className={cn(
          colVariants(),
          baseSpan,
          flexStyle,
          orderClass,
          responsiveClasses,
          hiddenClass,
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Col.displayName = 'Col'

export { Row, Col }
export type { RowProps, ColProps, RowAlign, RowJustify, ColResponsive } from './types'
export { rowVariants, colVariants } from './grid-variants'
export { getSpanClass, getResponsiveClass } from './grid-utils'