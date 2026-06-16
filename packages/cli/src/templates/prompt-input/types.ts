import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { promptInputVariants } from './prompt-input-variants'

/** 提示词模板 */
export interface PromptTemplate {
  /** 模板名称 */
  label: string
  /** 模板内容，{variable} 为占位符 */
  content: string
}

/**
 * PromptInput Props
 *
 * 提示词输入框，支持多行自适应、模板插入和发送按钮。
 */
export interface PromptInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof promptInputVariants> {
  /** 当前值（受控模式） */
  value?: string
  /** 默认值（非受控模式） */
  defaultValue?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 发送回调，按 Ctrl+Enter 或点击发送按钮触发 */
  onSend?: (value: string) => void
  /** 占位文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 最大字符数 */
  maxLength?: number
  /** 提示词模板列表 */
  templates?: PromptTemplate[]
  /** 发送按钮文本，默认 '发送' */
  sendText?: string
}
