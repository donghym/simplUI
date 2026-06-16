import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { statisticVariants } from './statistic-variants'

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
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/** 倒计时组件属性 */
export interface CountdownProps extends Omit<StatisticProps, 'value' | 'formatter'> {
  /** 目标时间，可以是时间戳（毫秒）或 Date 对象 */
  value?: number | Date
  /** 倒计时结束时触发的回调 */
  onFinish?: () => void
  /** 自定义格式化函数，接收剩余毫秒数 */
  format?: (remaining: number) => string
}
