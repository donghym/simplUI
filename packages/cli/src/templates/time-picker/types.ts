import type { ReactNode, InputHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { timePickerVariants } from './time-picker-variants'

/** TimePicker 状态变体：error 表示校验失败，warning 表示警告 */
export type TimePickerStatus = 'error' | 'warning'

/**
 * TimePicker 时间解析结果
 *
 * 内部使用，将 HH:mm 字符串解析为小时和分钟数值。
 */
export interface TimePickerParsed {
  /** 小时，0-23 */
  hour: number
  /** 分钟，0-59 */
  minute: number
}

/**
 * TimePicker Props
 *
 * 时间选择器组件，提供输入框 + 时间面板下拉的交互模式。
 * 支持受控/非受控、状态样式、清空操作、前缀图标、12/24小时制切换。
 */
export interface TimePickerProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'value' | 'defaultValue' | 'onChange' | 'type' | 'prefix'
    >,
    VariantProps<typeof timePickerVariants> {
  /** 当前选中时间（受控模式），格式为 HH:mm（24小时制） */
  value?: string
  /** 默认选中时间（非受控模式），格式为 HH:mm（24小时制） */
  defaultValue?: string
  /** 时间变化回调，参数为 HH:mm 格式字符串，清空时为空字符串 */
  onChange?: (time: string) => void
  /** 占位文本，未选择时间时显示，默认为"请选择时间" */
  placeholder?: string
  /** 状态变体：error 显示红色边框和 focus ring，warning 显示黄色边框和 focus ring */
  status?: TimePickerStatus
  /** 是否禁用整个选择器，禁用后不可展开时间面板 */
  disabled?: boolean
  /** 是否显示清空按钮，仅在已选择时间且未禁用时显示 */
  allowClear?: boolean
  /** 输入框左侧前缀图标或文字 */
  prefix?: ReactNode
  /** 时间格式：12 小时制或 24 小时制，默认 24 小时制 */
  format?: '12' | '24'
  /** 时间间隔（分钟），默认 30 分钟，用于生成可选时间列表 */
  step?: number
  /** 自定义类名，通过 twMerge 合并覆盖默认样式 */
  className?: string
}
