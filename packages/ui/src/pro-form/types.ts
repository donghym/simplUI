import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { proFormVariants } from './pro-form-variants'

/** ProForm 布局模式 */
export type ProFormLayout = 'horizontal' | 'vertical' | 'inline'

/** 校验规则定义 */
export interface ProFormRule {
  /** 是否必填 */ required?: boolean
  /** 校验失败提示信息 */ message?: string
  /** 正则校验 */ pattern?: RegExp
  /** 最小长度 */ min?: number
  /** 最大长度 */ max?: number
}
/** ProForm 网格配置 */
export interface ProFormGridConfig {
  /** 列数，默认 2 */ columns: number
  /** 列间距，默认 16 */ gap?: number
}
/** ProForm 提交按钮配置 */
export interface ProFormSubmitterConfig {
  /** 自定义提交按钮渲染 */
  render?: (props: { onSubmit: () => void; onSubmitting: boolean }) => ReactNode
  /** 提交按钮文本，默认 '提交' */ submitText?: string
  /** 重置按钮文本，默认 '重置' */ resetText?: string
  /** 是否显示重置按钮，默认 true */ showReset?: boolean
}

/** ProForm 组件属性 */
export interface ProFormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'>, VariantProps<typeof proFormVariants> {
  /** 表单提交回调，返回 Promise 时自动管理 submitting 状态 */
  onFinish?: (values: Record<string, unknown>) => Promise<void> | void
  /** 表单初始值 */ initialValues?: Record<string, unknown>
  /** 布局模式，默认 'horizontal' */ layout?: ProFormLayout
  /** 网格布局配置，启用后表单项按列数自动排列 */ grid?: boolean | ProFormGridConfig
  /** 提交按钮配置，false 时不显示提交按钮 */ submitter?: boolean | ProFormSubmitterConfig
  /** 表单项 */ children?: ReactNode
  /** 自定义 className */ className?: string
}

/** ProFormText 组件属性 */
export interface ProFormTextProps {
  /** 字段名，对应表单值的 key */ name: string
  /** 标签文本 */ label?: string
  /** 校验规则数组 */ rules?: ProFormRule[]
  /** 依赖的其他字段名，依赖字段变化时重新校验当前字段 */ dependencies?: string[]
  /** 是否隐藏，函数形式时根据表单值动态判断 */ hidden?: boolean | ((values: Record<string, unknown>) => boolean)
  /** 输入框占位文本 */ placeholder?: string
  /** 是否禁用 */ disabled?: boolean
}
/** ProFormSelect 组件属性，继承 ProFormText 并增加 options */
export interface ProFormSelectProps extends ProFormTextProps {
  /** 选项列表 */ options: Array<{ label: string; value: string | number }>
}
/** ProFormList 动态表单项属性 */
export interface ProFormListProps {
  /** 字段名前缀 */ name: string
  /** 标签文本 */ label?: string
  /** 初始项数量，默认 1 */ initialCount?: number
  /** 新增按钮文本，默认 '添加一项' */ addButtonText?: string
  /** 删除按钮文本，默认 '删除' */ removeButtonText?: string
  /** 最大项数 */ maxItems?: number
  /** 渲染每一项的内容 */ children: (index: number, namePrefix: string) => ReactNode
}

/** ProForm 内部上下文值 */
export interface ProFormContextValue {
  /** 当前表单值 */ formValues: Record<string, unknown>
  /** 当前校验错误信息 */ errors: Record<string, string>
  /** 设置指定字段的值 */ setFieldValue: (name: string, value: unknown) => void
  /** 校验指定字段，返回错误信息或 undefined */ validateField: (name: string) => string | undefined
  /** 布局模式 */ layout: ProFormLayout
  /** 注册依赖关系 */ registerDependencies: (name: string, deps: string[]) => void
  /** 注册校验规则 */ registerRules: (name: string, rules: ProFormRule[]) => void
}
