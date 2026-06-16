import { forwardRef, useMemo } from 'react'
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  statisticCardVariants,
  statisticCardTitleVariants,
  statisticCardValueVariants,
  statisticCardTrendVariants,
} from './statistic-card-variants'
import type { StatisticCardProps, StatisticTrend } from './types'

/** 趋势方向对应图标 */
const trendIconMap: Record<StatisticTrend, typeof ArrowUpRight> = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: Minus,
}

/** 格式化数值 */
const formatValue = (
  value: number | string,
  precision?: number,
): string => {
  if (typeof value === 'string') return value
  if (precision !== undefined && precision > 0) {
    return value.toFixed(precision)
  }
  return value.toLocaleString()
}

/** 统计卡片组件 */
export const StatisticCard = forwardRef<HTMLDivElement, StatisticCardProps>(
  (props, ref) => {
    const {
      className,
      title,
      value,
      suffix,
      prefix,
      trend,
      trendValue,
      precision,
      loading = false,
      icon,
      footer,
      ...rest
    } = props

    const formattedValue = useMemo(
      () => formatValue(value, precision),
      [value, precision],
    )

    const TrendIcon = trend ? trendIconMap[trend] : null

    return (
      <div
        ref={ref}
        className={cn(statisticCardVariants(), className)}
        {...rest}
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className={statisticCardTitleVariants()}>{title}</div>
            <div className={statisticCardValueVariants()}>
              {loading ? (
                <span className="inline-block h-7 w-24 animate-pulse rounded bg-muted" />
              ) : (
                <>
                  {prefix && <span className="mr-1 text-base font-normal">{prefix}</span>}
                  {formattedValue}
                  {suffix && <span className="ml-1 text-base font-normal text-muted-foreground">{suffix}</span>}
                </>
              )}
            </div>
            {trend && !loading && (
              <div className={statisticCardTrendVariants({ trend })}>
                {TrendIcon && <TrendIcon className="h-3.5 w-3.5" />}
                {trendValue && <span>{trendValue}</span>}
              </div>
            )}
          </div>
          {icon && (
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
              {icon}
            </div>
          )}
        </div>
        {footer && (
          <div className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground">
            {footer}
          </div>
        )}
      </div>
    )
  },
)

StatisticCard.displayName = 'StatisticCard'

export type { StatisticCardProps, StatisticTrend } from './types'
export {
  statisticCardVariants,
  statisticCardTitleVariants,
  statisticCardValueVariants,
  statisticCardTrendVariants,
} from './statistic-card-variants'
