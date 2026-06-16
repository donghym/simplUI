import { forwardRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import {
  progressVariants,
  progressTrackVariants,
  progressFillVariants,
} from './progress-variants'
import type { ProgressProps } from './types'

/** 进度条组件 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      className,
      percent = 0,
      progressShape = 'line',
      status = 'normal',
      showText = true,
      strokeWidth,
      circleSize = 120,
      format,
      steps,
      ...rest
    } = props

    // 限制 percent 在 0-100 范围内
    const normalizedPercent = Math.min(100, Math.max(0, percent))

    // 自动判断状态：100% 时自动变为 success
    const actualStatus = normalizedPercent >= 100 ? 'success' : status

    // 格式化进度文字
    const formatPercent = useMemo(() => {
      if (format) {
        return format(normalizedPercent)
      }
      return `${Math.round(normalizedPercent)}%`
    }, [normalizedPercent, format])

    // 渲染线性进度条
    const renderLineProgress = () => {
      // 步进进度条
      if (steps && steps > 0) {
        const activeSteps = Math.round((normalizedPercent / 100) * steps)
        return (
          <div className={cn('sui-progress', 'flex gap-1', className)} ref={ref} role="progressbar" aria-valuenow={normalizedPercent} aria-valuemin={0} aria-valuemax={100} aria-label={`进度 ${formatPercent}`} {...rest}>
            {Array.from({ length: steps }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  'flex-1 h-2 rounded-sm transition-colors duration-300',
                  index < activeSteps
                    ? actualStatus === 'success'
                      ? 'bg-success-500'
                      : actualStatus === 'error'
                      ? 'bg-danger-500'
                      : 'bg-primary-500'
                    : 'bg-muted'
                )}
              />
            ))}
          </div>
        )
      }

      return (
        <div
          className={cn('sui-progress', 'flex items-center gap-3', className)}
          ref={ref}
          role="progressbar"
          aria-valuenow={normalizedPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`进度 ${formatPercent}`}
          {...rest}
        >
          <div
            className={progressTrackVariants({ progressShape })}
            style={strokeWidth ? { height: `${strokeWidth}px` } /* 动态描边宽度，允许保留 */ : undefined}
          >
            <div
              className={progressFillVariants({ progressShape, status: actualStatus })}
              style={{ width: `${normalizedPercent}%` } /* 动态百分比，允许保留 */}
            />
          </div>
          {showText && (
            <span className="text-sm text-muted-foreground min-w-[3em] text-right">
              {formatPercent}
            </span>
          )}
        </div>
      )
    }

    // 渲染圆形进度条
    const renderCircleProgress = () => {
      const radius = (circleSize - 8) / 2
      const circumference = 2 * Math.PI * radius
      const strokeDashoffset = circumference - (normalizedPercent / 100) * circumference

      return (
        <div
          className={cn('sui-progress', progressVariants({ progressShape, status }), className)}
          ref={ref}
          role="progressbar"
          aria-valuenow={normalizedPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`进度 ${formatPercent}`}
          {...rest}
        >
          <svg width={circleSize} height={circleSize} className="-rotate-90">
            {/* 背景圆 */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth ?? 6}
              className="text-border"
            />
            {/* 进度圆 */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth ?? 6}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={cn(
                'transition-all duration-300 ease-out',
                actualStatus === 'success' && 'text-success-500',
                actualStatus === 'error' && 'text-danger-500',
                actualStatus === 'normal' && 'text-primary-500'
              )}
            />
          </svg>
          {showText && (
            <span className="absolute text-lg font-medium text-foreground">
              {formatPercent}
            </span>
          )}
        </div>
      )
    }

    return progressShape === 'circle' ? renderCircleProgress() : renderLineProgress()
  }
)
Progress.displayName = 'Progress'
