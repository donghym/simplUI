import { forwardRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import {
  statisticVariants,
  statisticTitleVariants,
  statisticValueVariants,
} from './statistic-variants'
import type { StatisticProps } from './types'

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
  }
)
Statistic.displayName = 'Statistic'
