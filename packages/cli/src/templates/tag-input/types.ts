import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { tagInputVariants } from './tag-input-variants'

/** 标签输入框状态 */
export type TagInputStatus = 'error' | 'warning'

/** 标签输入框组件属性 */
export interface TagInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof tagInputVariants> {
  /** 当前标签值数组（受控模式） */
  value?: string[]
  /** 默认标签值数组（非受控模式） */
  defaultValue?: string[]
  /** 标签变化回调，参数为新的标签数组 */
  onChange?: (tags: string[]) => void
  /** 最大标签数量限制。达到上限后输入框禁用，默认无限制 */
  maxTags?: number
  /** 输入框占位文本 */
  placeholder?: string
  /** 触发创建标签的分隔符。默认按 Enter 和逗号创建 */
  delimiter?: string[]
  /** 是否禁用。禁用后不可输入和删除标签 */
  disabled?: boolean
  /** 是否只读。只读时标签不可删除、不可新增 */
  readonly?: boolean
  /** 输入框状态。error 时边框 danger 色 + aria-invalid，warning 时边框 warning 色 */
  status?: TagInputStatus
  /** 自定义标签渲染函数 */
  tagRender?: (tag: string, onClose: () => void) => ReactNode
  /** 是否允许重复标签。默认 false，重复时忽略 */
  allowDuplicate?: boolean
  /** 是否显示清空所有标签的按钮 */
  allowClear?: boolean
  /** 是否允许拖拽排序标签 */
  draggable?: boolean
}
