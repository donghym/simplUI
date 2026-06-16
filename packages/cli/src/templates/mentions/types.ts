import type { CSSProperties, ReactNode, TextareaHTMLAttributes } from 'react'

export interface MentionsOptionProps {
  /** 选项值 */
  value: string
  /** 选项标签 */
  label?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface MentionsProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onSelect' | 'prefix'> {
  /** 触发字符 */
  prefix?: string | string[]
  /** 选项列表 */
  options: MentionsOptionProps[]
  /** 值 */
  value?: string
  /** 默认值 */
  defaultValue?: string
  /** 变化回调 */
  onChange?: (value: string) => void
  /** 选中选项回调 */
  onSelect?: (option: MentionsOptionProps, prefix: string) => void
  /** 是否禁用 */
  disabled?: boolean
  /** 占位符 */
  placeholder?: string
  /** 行数 */
  rows?: number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
