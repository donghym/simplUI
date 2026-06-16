import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { jsonSchemaRenderVariants } from './json-schema-render-variants'

/** JSON Schema 字段定义 */
export interface SchemaField {
  /** 字段名 */
  name: string
  /** 标签文本 */
  label: string
  /** 字段类型 */
  type: 'string' | 'number' | 'boolean' | 'select' | 'multi-select' | 'date' | 'textarea'
  /** 是否必填 */
  required?: boolean
  /** 占位文本 */
  placeholder?: string
  /** 默认值 */
  defaultValue?: unknown
  /** 选项列表（select/multi-select 类型时使用） */
  options?: Array<{ label: string; value: string }>
  /** 最小值/最小长度 */
  min?: number
  /** 最大值/最大长度 */
  max?: number
  /** 校验正则 */
  pattern?: string
  /** 校验失败提示 */
  patternMessage?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 字段描述 */
  description?: string
}

/** JsonSchemaRender 组件属性 */
export interface JsonSchemaRenderProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onChange' | 'onSubmit'>, VariantProps<typeof jsonSchemaRenderVariants> {
  /** JSON Schema 字段定义数组 */
  schema: SchemaField[]
  /** 表单初始值 */
  initialValues?: Record<string, unknown>
  /** 表单提交回调 */
  onSubmit?: (values: Record<string, unknown>) => void
  /** 值变化回调 */
  onChange?: (values: Record<string, unknown>) => void
  /** 提交按钮文本，默认 '提交' */
  submitText?: string
  /** 是否显示重置按钮，默认 true */
  showReset?: boolean
  /** 重置按钮文本，默认 '重置' */
  resetText?: string
  /** 布局模式，默认 'vertical' */
  layout?: 'vertical' | 'horizontal'
}
