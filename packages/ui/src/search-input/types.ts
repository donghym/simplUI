import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { searchInputVariants } from './search-input-variants'

/** 搜索输入框组件属性 */
export interface SearchInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'>,
    VariantProps<typeof searchInputVariants> {
  /** 当前输入值（受控模式） */
  value?: string
  /** 默认输入值（非受控模式） */
  defaultValue?: string
  /** 输入值变化回调 */
  onChange?: (value: string) => void
  /** 搜索提交回调，按 Enter 或选中建议项时触发 */
  onSearch?: (value: string) => void
  /** 搜索建议。字符串数组为静态建议，函数为异步建议 */
  suggestions?: string[] | ((value: string) => Promise<string[]>)
  /** 是否显示搜索历史。true 时从 localStorage 读取历史，默认 true */
  showHistory?: boolean
  /** 最大历史记录条数，默认 10 */
  maxHistory?: number
  /** 是否高亮匹配关键词。true 时建议列表中匹配部分高亮，默认 true */
  highlightMatch?: boolean
  /** 输入框占位文本，默认 '搜索...' */
  placeholder?: string
  /** 是否显示清空按钮。true 且有值时显示 X 按钮，默认 true */
  allowClear?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** localStorage 存储 key，默认 'simplui-search-history' */
  storageKey?: string
}

/** 搜索建议项 */
export interface SearchSuggestion {
  /** 建议文本 */
  text: string
  /** 是否为历史记录 */
  isHistory?: boolean
}
