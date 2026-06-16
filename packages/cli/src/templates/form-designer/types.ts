import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { formDesignerVariants } from './form-designer-variants'

/** 表单项类型 */
export type FormItemType = 'input' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'number' | 'date' | 'switch'

/** 表单项配置 */
export interface FormItemConfig {
  /** 唯一标识 */
  id: string
  /** 字段名 */
  name: string
  /** 标签文本 */
  label: string
  /** 表单项类型 */
  type: FormItemType
  /** 是否必填 */
  required?: boolean
  /** 占位文本 */
  placeholder?: string
  /** 选项列表（select/radio/checkbox 类型时使用） */
  options?: Array<{ label: string; value: string }>
  /** 默认值 */
  defaultValue?: unknown
}

/** FormDesigner 组件属性 */
export interface FormDesignerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof formDesignerVariants> {
  /** 表单项配置数组（受控模式） */
  items?: FormItemConfig[]
  /** 默认表单项配置（非受控模式） */
  defaultItems?: FormItemConfig[]
  /** 配置变化回调 */
  onChange?: (items: FormItemConfig[]) => void
  /** 可用的表单项类型列表。默认全部类型 */
  availableTypes?: FormItemType[]
  /** 是否显示预览区域，默认 true */
  showPreview?: boolean
  /** 是否显示 JSON 导出按钮，默认 true */
  showExport?: boolean
}
