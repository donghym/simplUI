import type { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { inputVariants } from './input-variants'

/** 输入框状态类型，error 时边框 danger 色 + aria-invalid，warning 时边框 warning 色 */
export type InputStatus = 'error' | 'warning'

/**
 * Input 组件 Props
 *
 * 支持受控和非受控两种模式，支持前缀/后缀、清空按钮、字数统计等功能。
 */
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
