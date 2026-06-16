import { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cascaderVariants } from './cascader-variants'

/** 级联选择器选项数据结构 */
export interface CascaderOption {
  /** 选项值 */
  value: string
  /** 选项显示文本 */
  label: ReactNode
  /** 子选项，存在时表示可展开 */
  children?: CascaderOption[]
  /** 是否禁用 */
  disabled?: boolean
}

/** 级联选择器选中值路径 */
export type CascaderValue = string[]

/** 级联选择器状态 */
export type CascaderStatus = 'error' | 'warning'

export interface CascaderProps
  extends VariantProps<typeof cascaderVariants> {
  /** 选项数据源 */
  options: CascaderOption[]
  /** 选中值，受控模式，值为完整路径 */
  value?: CascaderValue
  /** 默认选中值，非受控模式 */
  defaultValue?: CascaderValue
  /** 选中值变化回调 */
  onChange?: (value: CascaderValue, selectedOptions: CascaderOption[]) => void
  /** 占位文本，默认 '请选择' */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否允许清空 */
  allowClear?: boolean
  /** 输入框状态 */
  status?: CascaderStatus
  /** 下拉菜单是否可见，受控模式 */
  open?: boolean
  /** 下拉菜单显隐变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 默认下拉菜单是否可见，非受控模式 */
  defaultOpen?: boolean
  /** 自定义显示函数，返回选中后输入框显示的内容 */
  displayRender?: (selectedOptions: CascaderOption[]) => ReactNode
  /** 自定义字段名映射 */
  fieldNames?: { label?: string; value?: string; children?: string }
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
  /** 下拉菜单的 className */
  dropdownClassName?: string
  /** 无数据时的提示内容 */
  notFoundContent?: ReactNode
}

/** 级联选择器列属性 */
export interface CascaderColumnProps {
  /** 当前列的选项 */
  options: CascaderOption[]
  /** 当前选中值 */
  activeValue?: string
  /** 已选中的路径值 */
  selectedPath: string[]
  /** 点击选项回调 */
  onOptionClick: (option: CascaderOption, index: number) => void
  /** 列索引 */
  columnIndex: number
}
