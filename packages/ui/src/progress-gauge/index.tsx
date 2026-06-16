import { forwardRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import { progressGaugeVariants } from './progress-gauge-variants'
import type { ProgressGaugeProps, GaugeType } from './types'

/** 计算弧形/圆形进度参数 */
const calcGaugeParams = (
  gaugeWidth: number,
  stroke: number,
  gaugeType: GaugeType,
) => {
  const radius = (gaugeWidth - stroke) / 2
  const cx = gaugeWidth / 2
  const cy = gaugeWidth / 2

  if (gaugeType === 'arc') {
    const circumference = Math.PI * radius
    return { radius, cx, cy, circumference }
  }

  const circumference = 2 * Math.PI * radius
  return { radius, cx, cy, circumference }
}

/** 渲染刻度线 */
const renderScale = (
  cx: number,
  cy: number,
  radius: number,
  stroke: number,
  gaugeType: GaugeType,
) => {
  const tickCount = 10
  const ticks = []

  if (gaugeType === 'arc') {
    for (let i = 0; i <= tickCount; i++) {
      const angle = Math.PI + (i / tickCount) * Math.PI
      const outerR = radius + stroke / 2 + 4
      const innerR = radius + stroke / 2 + 10
      const x1 = cx + outerR * Math.cos(angle)
      const y1 = cy + outerR * Math.sin(angle)
      const x2 = cx + innerR * Math.cos(angle)
      const y2 = cy + innerR * Math.sin(angle)
      ticks.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth={1.5}
          className="text-border"
        />,
      )
    }
  } else {
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * 2 * Math.PI - Math.PI / 2
      const outerR = radius + stroke / 2 + 4
      const innerR = radius + stroke / 2 + 10
      const x1 = cx + outerR * Math.cos(angle)
      const y1 = cy + outerR * Math.sin(angle)
      const x2 = cx + innerR * Math.cos(angle)
      const y2 = cy + innerR * Math.sin(angle)
      ticks.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth={1.5}
          className="text-border"
        />,
      )
    }
  }

  return ticks
}

/** 仪表盘进度组件 */
export const ProgressGauge = forwardRef<HTMLDivElement, ProgressGaugeProps>(
  (props, ref) => {
    const {
      className,
      value,
      max = 100,
      type = 'arc',
      showScale = false,
      gradient,
      format,
      width = 200,
      strokeWidth = 8,
      ...rest
    } = props

    const normalizedValue = Math.min(max, Math.max(0, value))
    const percent = max > 0 ? normalizedValue / max : 0

    const displayText = useMemo(() => {
      if (format) return format(normalizedValue)
      return `${Math.round(percent * 100)}%`
    }, [normalizedValue, percent, format])

    const { radius, cx, cy, circumference } = calcGaugeParams(width, strokeWidth, type)
    const strokeDashoffset = circumference - percent * circumference

    const svgHeight = type === 'arc' ? width / 2 + strokeWidth : width
    const gradientId = `sui-gauge-gradient-${Math.random().toString(36).slice(2, 9)}`

    const strokeColor = gradient
      ? `url(#${gradientId})`
      : 'currentColor'

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={normalizedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`进度 ${displayText}`}
        className={cn(
          'sui-progress-gauge',
          progressGaugeVariants({ type }),
          className,
        )}
        {...rest}
      >
        <svg
          width={width}
          height={svgHeight}
          viewBox={`0 0 ${width} ${svgHeight}`}
          className={type === 'arc' ? '-rotate-180' : '-rotate-90'}
        >
          {gradient && (
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradient.from} />
                <stop offset="100%" stopColor={gradient.to} />
              </linearGradient>
            </defs>
          )}
          {/* 背景轨道 */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-border"
            strokeDasharray={type === 'arc' ? circumference : undefined}
            strokeLinecap="round"
          />
          {/* 进度弧 */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={cn(
              'transition-all duration-300 ease-out',
              !gradient && 'text-primary-500',
            )}
          />
          {/* 刻度线 */}
          {showScale && renderScale(cx, cy, radius, strokeWidth, type)}
        </svg>
        <span
          className={cn(
            'absolute font-medium text-foreground',
            type === 'arc' ? 'bottom-2' : '',
          )}
        >
          {displayText}
        </span>
      </div>
    )
  }
)
ProgressGauge.displayName = 'ProgressGauge'

export type { ProgressGaugeProps, GaugeType } from './types'
export { progressGaugeVariants } from './progress-gauge-variants'
