import { createContext, forwardRef, useContext, type CSSProperties } from 'react'
import { cn } from '../lib/utils'
import { rowVariants, colVariants } from './grid-variants'
import { getSpanClass, getResponsiveClass } from './grid-utils'
import type { RowProps, ColProps } from './types'

type Gutter = [number, number]

const GutterContext = createContext<Gutter>([0, 0])

function normalizeGutter(gutter: RowProps['gutter'] = 0): Gutter {
  return typeof gutter === 'number' ? [gutter, gutter] : gutter
}

const Row = forwardRef<HTMLDivElement, RowProps>(
  ({ gutter = 0, align = 'top', justify = 'start', wrap = true, className, children, style, ...rest }, ref) => {
    const [hGutter, vGutter] = normalizeGutter(gutter)
    const gutterStyle: CSSProperties = {
      ...(hGutter > 0 ? { marginLeft: -hGutter / 2, marginRight: -hGutter / 2 } : {}),
      ...(vGutter > 0 ? { marginTop: -vGutter / 2, marginBottom: -vGutter / 2 } : {}),
      ...style,
    }

    return (
      <GutterContext.Provider value={[hGutter, vGutter]}>
        <div
          ref={ref}
          className={cn(rowVariants({ align, justify, wrap }), className)}
          style={gutterStyle}
          {...rest}
        >
          {children}
        </div>
      </GutterContext.Provider>
    )
  },
)

Row.displayName = 'Row'

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
    style,
    ...rest
  }, ref) => {
    const [hGutter, vGutter] = useContext(GutterContext)
    const baseSpan = getSpanClass(span, offset)
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

    const hiddenClass = span === 0 ? 'hidden' : ''
    const colStyle: CSSProperties = {
      ...(hGutter > 0 ? { paddingLeft: hGutter / 2, paddingRight: hGutter / 2 } : {}),
      ...(vGutter > 0 ? { paddingTop: vGutter / 2, paddingBottom: vGutter / 2 } : {}),
      ...(flex !== undefined ? { flex } : {}),
      ...(order !== undefined ? { order } : {}),
      ...style,
    }

    return (
      <div
        ref={ref}
        className={cn(
          colVariants(),
          baseSpan,
          responsiveClasses,
          hiddenClass,
          className,
        )}
        style={colStyle}
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