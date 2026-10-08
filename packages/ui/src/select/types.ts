import type { ReactNode, SelectHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { selectVariants } from './select-variants'

/** Select 状态变体：error 表示校验失败，warning 表示警告 */
export type SelectStatus = 'error' | 'warning'

/** Select 选项定义 */
export interface SelectOption {
  /** 选项显示文本 */
  label: string
  /** 选项值，用作唯一标识 */
  value: string
  /** 是否禁用该选项 */
  disabled?: boolean
}

/**
 * Select Props
 *
 * 下拉选择器组件，支持选项列表展开/收起、搜索过滤、状态样式、清空操作。
 */
export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'prefix'>,
    VariantProps<typeof selectVariants> {
  /** 当前选中值（受控模式） */
  value?: string
  /** 默认选中值（非受控模式） */
  defaultValue?: string
  /** 选中值变化回调，参数为选中的值，清空时为 '' */
  onChange?: (value: string) => void
  /** 选项列表 */
  options: SelectOption[]
  /** 占位文本，未选中时显示 */
  placeholder?: string
  /** 状态变体：error 显示红色边框，warning 显示黄色边框 */
  status?: SelectStatus
  /** 是否禁用整个选择器 */
  disabled?: boolean
  /** 是否显示清空按钮，仅在已选中且未禁用时显示 */
  allowClear?: boolean
  /** 输入框前缀图标或文字 */
  prefix?: ReactNode
  /** 自定义类名，通过 twMerge 合并 */
  className?: string
}