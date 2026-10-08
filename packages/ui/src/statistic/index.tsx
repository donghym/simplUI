import { forwardRef, useMemo } from 'react'
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  statisticVariants,
  statisticTitleVariants,
  statisticValueVariants,
  statisticCardVariants,
  statisticCardTitleVariants,
  statisticCardValueVariants,
  statisticCardTrendVariants,
} from './statistic-variants'
import type { StatisticProps, StatisticTrend } from './types'

export type { StatisticProps, StatisticTrend }

/** 趋势方向对应图标 */
const trendIconMap: Record<StatisticTrend, typeof ArrowUpRight> = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: Minus,
}

/** 格式化数字 */
const formatNumber = (
  value: number,
  precision?: number,
  groupSeparator: string = ',',
  decimalSeparator: string = '.'
): string => {
  // 处理精度
  const fixedValue =
    precision !== undefined ? value.toFixed(precision) : String(value)

  const [integerPart, decimalPart] = fixedValue.split('.')

  // 添加千分位分隔符
  const formattedInteger = (integerPart ?? '').replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)

  // 组合结果
  return decimalPart !== undefined
    ? `${formattedInteger}${decimalSeparator}${decimalPart}`
    : formattedInteger
}

/** 统计数值组件 */
export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (props, ref) => {
    const {
      className,
      title,
      prefix,
      suffix,
      value,
      precision,
      groupSeparator = ',',
      decimalSeparator = '.',
      formatter,
      valueStyle,
      variant = 'default',
      trend,
      trendValue,
      icon,
      footer,
      loading = false,
      ...rest
    } = props

    // 格式化数值
    const formattedValue = useMemo(() => {
      if (value === undefined || value === null) {
        return '-'
      }

      if (formatter) {
        return formatter(value)
      }

      if (typeof value === 'string') {
        return value
      }

      return formatNumber(value, precision, groupSeparator, decimalSeparator)
    }, [value, precision, groupSeparator, decimalSeparator, formatter])

    const TrendIcon = trend ? trendIconMap[trend] : null

    // card 模式
    if (variant === 'card') {
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
    }

    // default 模式
    return (
      <div ref={ref} role="status" aria-label={typeof title === 'string' ? title : '统计数据'} className={cn('sui-statistic', statisticVariants(), className)} {...rest}>
        {title && <div className={statisticTitleVariants()}>{title}</div>}
        <div className={statisticValueVariants()} style={valueStyle}>
          {prefix && <span className="mr-1">{prefix}</span>}
          {formattedValue}
          {suffix && <span className="ml-1">{suffix}</span>}
        </div>
      </div>
    )
  },
)
Statistic.displayName = 'Statistic'

// 导出 StatisticCard 作为别名保持向后兼容
export { Statistic as StatisticCard }
