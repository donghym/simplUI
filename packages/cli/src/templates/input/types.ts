import type { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { inputVariants } from './input-variants'

export type InputStatus = 'error' | 'warning'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'>,
  VariantProps<typeof inputVariants> {
  /** 状态变体：error 或 warning */
  status?: InputStatus
  /** 输入框前缀图标或文字 */
  prefix?: ReactNode
  /** 输入框后缀图标或文字 */
  suffix?: ReactNode
  /** 是否显示清空按钮 */
  allowClear?: boolean
  /** 最大输入长度 */
  maxLength?: number
  /** 是否显示字数计数（需配合 maxLength 使用） */
  showCount?: boolean
  /** 自定义类名，通过 twMerge 合并 */
  className?: string
}
