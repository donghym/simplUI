import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import type { IconProps } from './types'

interface IconBaseProps extends IconProps {
  children: React.ReactNode
}

export const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    const {
      className,
      rotate,
      spin,
      size = '1em',
      style,
      children,
      width,
      height,
      ...rest
    } = props

    const w = width ?? size
    const h = height ?? size

    const mergedStyle: React.CSSProperties = {
      width: w,
      height: h,
      ...(rotate !== undefined && { transform: `rotate(${rotate}deg)` }),
      ...style,
    }

    const svgProps = rest as React.SVGProps<SVGSVGElement>

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(
          'inline-block shrink-0 align-middle',
          spin && 'animate-spin',
          className
        )}
        style={mergedStyle}
        aria-hidden="true"
        focusable="false"
        {...svgProps}
      >
        {children}
      </svg>
    )
  }
)

IconBase.displayName = 'IconBase'
