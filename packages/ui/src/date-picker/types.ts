import type { ReactNode, InputHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { datePickerVariants } from './date-picker-variants'

/** DatePicker 状态变体：error 表示校验失败，warning 表示警告 */
export type DatePickerStatus = 'error' | 'warning'

/**
 * DatePicker 日期解析结果
 *
 * 内部使用，将 YYYY-MM-DD 字符串解析为年月日数值。
 */
export interface DatePickerParsed {
  /** 年份，如 2026 */
  year: number
  /** 月份，0-11 */
  month: number
  /** 日期，1-31 */
  day: number
}

/**
 * DatePicker Props
 *
 * 日期选择器组件，提供输入框 + 日历面板下拉的交互模式。
 * 支持受控/非受控、状态样式、清空操作、前缀图标。
 */
export interface DatePickerProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'value' | 'defaultValue' | 'onChange' | 'type' | 'prefix'
    >,
    VariantProps<typeof datePickerVariants> {
  /** 当前选中日期（受控模式），格式为 YYYY-MM-DD */
  value?: string
  /** 默认选中日期（非受控模式），格式为 YYYY-MM-DD */
  defaultValue?: string
  /** 日期变化回调，参数为 YYYY-MM-DD 格式字符串，清空时为空字符串 */
  onChange?: (date: string) => void
  /** 占位文本，未选择日期时显示，默认为"请选择日期" */
  placeholder?: string
  /** 状态变体：error 显示红色边框和 focus ring，warning 显示黄色边框和 focus ring */
  status?: DatePickerStatus
  /** 是否禁用整个选择器，禁用后不可展开日历面板 */
  disabled?: boolean
  /** 是否显示清空按钮，仅在已选择日期且未禁用时显示 */
  allowClear?: boolean
  /** 输入框左侧前缀图标或文字 */
  prefix?: ReactNode
  /** 自定义类名，通过 twMerge 合并覆盖默认样式 */
  className?: string
}