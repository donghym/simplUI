import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { markdownEditorVariants } from './markdown-editor-variants'

/** 编辑器模式 */
export type MarkdownEditorMode = 'edit' | 'preview' | 'split'

/** 工具栏按钮配置 */
export interface ToolbarAction {
  /** 按钮标签或图标 */
  label: ReactNode
  /** 点击回调，参数为当前内容，返回插入后的新内容 */
  action: (content: string) => string
  /** tooltip 提示 */
  tooltip?: string
}

/** MarkdownEditor 组件属性 */
export interface MarkdownEditorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof markdownEditorVariants> {
  /** 当前内容（受控模式） */
  value?: string
  /** 默认内容（非受控模式） */
  defaultValue?: string
  /** 内容变化回调 */
  onChange?: (value: string) => void
  /** 编辑器模式，默认 split */
  mode?: MarkdownEditorMode
  /** 占位文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 最大字符数 */
  maxLength?: number
  /** 工具栏按钮列表，不提供时使用默认工具栏 */
  toolbar?: ToolbarAction[]
  /** 是否显示工具栏，默认 true */
  showToolbar?: boolean
}
