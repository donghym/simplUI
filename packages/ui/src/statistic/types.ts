import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { statisticVariants } from './statistic-variants'

/** 趋势方向 */
export type StatisticTrend = 'up' | 'down' | 'flat'

/** 统计数值组件属性 */
export interface StatisticProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'>,
    VariantProps<typeof statisticVariants> {
  /** 数值标题，显示在数值上方 */
  title?: ReactNode
  /** 数值前缀，显示在数值左侧 */
  prefix?: ReactNode
  /** 数值后缀，显示在数值右侧 */
  suffix?: ReactNode
  /** 数值内容，可以是数字或字符串 */
  value?: number | string
  /** 数值精度，小数点后位数。仅当 value 为数字时生效 */
  precision?: number
  /** 千分位分隔符，默认 ',' */
  groupSeparator?: string
  /** 小数点分隔符，默认 '.' */
  decimalSeparator?: string
  /** 自定义格式化函数，优先级高于 precision/groupSeparator/decimalSeparator */
  formatter?: (value: number | string) => ReactNode
  /** 数值样式 */
  valueStyle?: React.CSSProperties
  /** 变体模式。default 为纯文本，card 为卡片样式 */
  variant?: 'default' | 'card'
  /** 趋势方向。up 显示上升箭头+涨色，down 显示下降箭头+跌色 */
  trend?: StatisticTrend
  /** 趋势值文本，如 '+12.5%' */
  trendValue?: string
  /** 图标，仅 card 变体下显示在右上角 */
  icon?: ReactNode
  /** 底部内容 */
  footer?: ReactNode
  /** 加载中状态 */
  loading?: boolean
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}
