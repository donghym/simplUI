import { forwardRef, useRef, useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { wiredElementVariants } from './wired-element-variants'
import { WiredBackground } from './wired-element-background'
import type { WiredElementProps } from './types'

/** WiredElement 手绘风组件集
 *
 * 提供手绘/草图风格的 Button、Card、Input 元素。
 * 使用 SVG 生成不规则的手绘线条边框，呈现真实的"草图"质感。
 */
export const WiredElement = forwardRef<HTMLDivElement, WiredElementProps>((props, ref) => {
  const {
    className,
    elementType,
    children,
    onClick,
    value,
    onChange,
    placeholder,
    sketchy = false,
    fill,
    stroke = '#1a1a1a',
    strokeWidth = 1.5,
    roughness = 2,
    ...rest
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setDims({ width, height })
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const wiredBgProps = {
    width: dims.width,
    height: dims.height,
    fill: fill || (elementType === 'button' ? stroke : undefined),
    stroke,
    strokeWidth,
    roughness,
    sketchy,
  }

  if (elementType === 'input') {
    return (
      <div ref={ref} className={cn('sui-wired-element', className)} {...rest}>
        <div ref={containerRef} className="relative">
          <WiredBackground {...wiredBgProps} className="absolute inset-0">
            <span />
          </WiredBackground>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className={cn(
              wiredElementVariants({ elementType: 'input', sketchy }),
              'relative z-10 bg-transparent w-full px-3 py-2',
            )}
          />
        </div>
      </div>
    )
  }

  if (elementType === 'button') {
    return (
      <div ref={ref} className={cn('sui-wired-element', className)} {...rest}>
        <div ref={containerRef} className="relative inline-block">
          <WiredBackground {...wiredBgProps}>
            <button
              type="button"
              onClick={onClick}
              className={cn(
                wiredElementVariants({ elementType: 'button', sketchy }),
                'relative z-10 bg-transparent',
              )}
            >
              {children}
            </button>
          </WiredBackground>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={cn('sui-wired-element', className)} {...rest}>
      <div ref={containerRef} className="relative">
        <WiredBackground {...wiredBgProps}>
          <div className={cn(wiredElementVariants({ elementType: 'card', sketchy }), 'relative z-10 bg-transparent')}>
            {children}
          </div>
        </WiredBackground>
      </div>
    </div>
  )
})

WiredElement.displayName = 'WiredElement'

export type { WiredElementProps, WiredElementType } from './types'
export { wiredElementVariants } from './wired-element-variants'
export { WiredBackground } from './wired-element-background'
export type { WiredBackgroundProps } from './wired-element-background'