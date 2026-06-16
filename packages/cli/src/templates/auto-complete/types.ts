import { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { autoCompleteVariants } from './auto-complete-variants'

/** 自动完成选项数据结构 */
export interface AutoCompleteOption {
  /** 选项值，选中后填入输入框 */
  value: string
  /** 选项显示内容，默认使用 value */
  label?: ReactNode
  /** 选项是否禁用 */
  disabled?: boolean
}

/** 自动完成选项渲染函数参数 */
export interface AutoCompleteOptionRenderProps {
  /** 选项数据 */
  option: AutoCompleteOption
  /** 选项索引 */
  index: number
  /** 是否选中 */
  isSelected: boolean
  /** 是否高亮（键盘导航） */
  isHighlighted: boolean
}

/** 自动完成状态 */
export type AutoCompleteStatus = 'error' | 'warning'

export interface AutoCompleteProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix' | 'onChange' | 'onSelect' | 'value'>,
    VariantProps<typeof autoCompleteVariants> {
  /** 输入框状态。error 时边框 danger 色 + aria-invalid，warning 时边框 warning 色 */
  status?: AutoCompleteStatus
  /** 选项数据源，可以是字符串数组或 AutoCompleteOption 数组 */
  options?: Array<string | AutoCompleteOption>
  /** 输入值变化时的回调，返回新的输入值 */
  onSearch?: (value: string) => void
  /** 选中选项时的回调，返回选中的值 */
  onSelect?: (value: string, option: AutoCompleteOption) => void
  /** 输入值变化时的回调 */
  onChange?: (value: string) => void
  /** 下拉菜单是否可见，受控模式 */
  open?: boolean
  /** 下拉菜单显隐变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 默认下拉菜单是否可见，非受控模式 */
  defaultOpen?: boolean
  /** 输入框默认值，非受控模式 */
  defaultValue?: string
  /** 输入框值，受控模式 */
  value?: string
  /** 是否允许清空，true 时显示清空按钮 */
  allowClear?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义选项渲染函数 */
  optionRender?: (props: AutoCompleteOptionRenderProps) => ReactNode
  /** 下拉菜单为空时的提示内容 */
  notFoundContent?: ReactNode
  /** 下拉菜单最大高度，默认 256px */
  maxDropdownHeight?: number
  /** 触发搜索的最小字符数，默认 0 */
  minSearchLength?: number
  /** 是否在选中后清空输入框，默认 false */
  clearOnSelect?: boolean
  /** 自定义过滤函数，返回 true 表示匹配 */
  filterOption?: (inputValue: string, option: AutoCompleteOption) => boolean
  /** 输入框前缀内容 */
  prefix?: ReactNode
  /** 输入框后缀内容 */
  suffix?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
  /** 下拉菜单的 className */
  dropdownClassName?: string
}
