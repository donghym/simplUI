import { useRef, useEffect, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { generateRoughRectPath, generateFillPath } from './wired-element-utils'

/** WiredBackground Props */
export interface WiredBackgroundProps {
  /** 容器宽度 */
  width: number
  /** 容器高度 */
  height: number
  /** 填充颜色 */
  fill?: string
  /** 线条颜色 */
  stroke: string
  /** 线条粗细 */
  strokeWidth: number
  /** 粗糙度 */
  roughness: number
  /** 是否草图风格 */
  sketchy?: boolean | null
  /** 子元素 */
  children: React.ReactNode
  /** 自定义类名 */
  className?: string
}

/** 手绘风 SVG 背景装饰组件 */
export function WiredBackground({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  roughness,
  sketchy,
  children,
  className,
}: WiredBackgroundProps) {
  const [borderPath, setBorderPath] = useState('')
  const [fillPath, setFillPath] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const regeneratePaths = useCallback(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setBorderPath(generateRoughRectPath(dimensions.width, dimensions.height, roughness))
      if (fill) {
        setFillPath(generateFillPath(dimensions.width, dimensions.height))
      }
    }
  }, [dimensions.width, dimensions.height, roughness, fill])

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setDimensions({ width: rect.width, height: rect.height })
    }
  }, [width, height])

  useEffect(() => {
    regeneratePaths()
  }, [regeneratePaths])

  const dashArray = sketchy ? '6 4' : undefined

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        {/* 填充层 */}
        {fill && fillPath && (
          <path
            d={fillPath}
            fill="none"
            stroke={fill}
            strokeWidth={strokeWidth * 2}
            strokeLinecap="round"
            opacity={0.15}
          />
        )}
        {/* 边框层 - 绘制两次增加手绘感 */}
        <path
          d={borderPath}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dashArray}
          opacity={0.6}
        />
        <path
          d={borderPath}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth * 0.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dashArray}
          opacity={0.8}
          style={{ transform: 'translate(0.5px, 0.5px)' }}
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}