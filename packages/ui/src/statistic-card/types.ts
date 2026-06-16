import { HTMLAttributes, ReactNode } from 'react'

/** 趋势方向 */
export type StatisticTrend = 'up' | 'down' | 'flat'

/** StatisticCard 组件属性 */
export interface StatisticCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'> {
  /** 卡片标题 */
  title: string
  /** 数值，支持数字或字符串 */
  value: number | string
  /** 数值后缀，如 '%'、'元' */
  suffix?: string
  /** 数值前缀，如 '¥' */
  prefix?: ReactNode
  /** 趋势方向。up 显示上升箭头+涨色，down 显示下降箭头+跌色 */
  trend?: StatisticTrend
  /** 趋势值文本，如 '+12.5%' */
  trendValue?: string
  /** 小数精度，默认 0 */
  precision?: number
  /** 加载中状态 */
  loading?: boolean
  /** 左侧图标 */
  icon?: ReactNode
  /** 底部内容 */
  footer?: ReactNode
}