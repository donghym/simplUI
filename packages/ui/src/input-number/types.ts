import type { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { inputNumberVariants } from './input-number-variants'

/** InputNumber 状态变体：error 表示校验失败，warning 表示警告 */
export type InputNumberStatus = 'error' | 'warning'

/**
 * InputNumber Props
 *
 * 数字输入框组件，支持步进控制、范围限制、精度控制。
 */
export interface InputNumberProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'prefix' | 'suffix' | 'type' | 'value' | 'defaultValue' | 'onChange'
    >,
    VariantProps<typeof inputNumberVariants> {
  /** 当前数值（受控模式），null 表示空值 */
  value?: number | null
  /** 默认数值（非受控模式），null 表示空值 */
  defaultValue?: number | null
  /** 数值变化回调，参数为新的数值，null 表示已清空 */
  onChange?: (value: number | null) => void
  /** 最小值，超出范围时自动修正到边界 */
  min?: number
  /** 最大值，超出范围时自动修正到边界 */
  max?: number
  /** 每次加减的步长，默认 1 */
  step?: number
  /** 小数精度（保留几位小数），不传时不强制格式化 */
  precision?: number
  /** 状态变体：error 显示红色边框，warning 显示黄色边框 */
  status?: InputNumberStatus
  /** 输入框前缀图标或文字 */
  prefix?: ReactNode
  /** 输入框后缀图标或文字 */
  suffix?: ReactNode
  /** 是否显示清空按钮，仅在值非空且未禁用时显示 */
  allowClear?: boolean
  /** 自定义类名，通过 twMerge 合并 */
  className?: string
}