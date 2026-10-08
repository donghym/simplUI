import type { FormHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import type { ResponsiveCol } from './responsive-col-types'
export type { ResponsiveCol, ColSpan } from './responsive-col-types'
/** 表单验证状态 */
export type ValidateStatus = 'success' | 'warning' | 'error' | 'validating' | ''

/** 表单布局方向 */
export type FormLayout = 'horizontal' | 'vertical' | 'inline'

/** label 文本对齐方向（horizontal 模式下生效） */
export type LabelAlign = 'left' | 'right'

/**
 * Form Props
 */
export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /**
   * 表单布局方向
   *
   * - `horizontal`：label 在左，控件在右（antd 风格）
   * - `vertical`：label 在上，控件在下
   * - `inline`：所有控件水平排列
   *
   * 默认 `'vertical'`。
   */
  layout?: FormLayout
  /**
   * 标签列宽度配置（horizontal 模式下生效）
   *
   * 默认 `{ span: 5 }`（antd 风格）。
   * 可传数字简写，如 `5` 等价于 `{ span: 5 }`。
   */
  labelCol?: ResponsiveCol
  /**
   * 控件列宽度配置（horizontal 模式下生效）
   *
   * 默认 `{ span: 19 }`（与 labelCol 互补到 24）。
   */
  wrapperCol?: ResponsiveCol
  /**
   * label 文本后是否显示冒号
   *
   * 默认 `false`。中文场景下建议设为 `true`。
   */
  colon?: boolean
  /**
   * label 文本对齐方向（horizontal 模式）
   *
   * 默认 `'right'`（antd 风格）。
   */
  labelAlign?: LabelAlign
  /**
   * 必填标记位置
   *
   * - `start`：红星在 label 文字前（antd 风格）
   * - `end`：红星在 label 文字后
   * - `hide`：不显示红星
   */
  requiredMark?: 'start' | 'end' | 'hide'
  /**
   * 提交回调
   *
   * 接收 FormItem 注册收集的 `{ [name]: value }` 对象。
   */
  onSubmit?: (values: Record<string, unknown>) => void
}

/**
 * FormItem Props
 */
export interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  /** 标签文本 */
  label?: ReactNode
  /** 字段名，用于表单数据收集 */
  name?: string
  /** 是否必填，显示红色星号 */
  required?: boolean
  /**
   * 校验状态
   *
   * - `success` / `warning` / `error` / `validating`：边框/帮助文字带状态色
   * - `''`：不展示状态
   */
  validateStatus?: ValidateStatus
  /** 帮助信息/错误提示 */
  help?: ReactNode
  /** 额外说明，置于 help 之上 */
  extra?: ReactNode
  /**
   * 单独覆盖当前 FormItem 的 labelCol（不传则用 Form 上的）
   */
  labelCol?: ResponsiveCol
  /**
   * 单独覆盖当前 FormItem 的 wrapperCol（不传则用 Form 上的）
   */
  wrapperCol?: ResponsiveCol
  /** 自定义类名 */
  className?: string
  children?: ReactNode
}
