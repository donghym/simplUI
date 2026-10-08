import type { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { checkboxVariants } from './checkbox-variants'

/**
 * Checkbox 组件 Props
 *
 * 复选框组件，支持选中/未选中/半选三种状态，支持受控/非受控模式。
 * 点击复选框或其标签文本切换选中状态。
 */
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange' | 'children'>,
    VariantProps<typeof checkboxVariants> {
  /** 受控模式下的选中状态，true 为选中，false 为未选中 */
  checked?: boolean
  /** 非受控模式下的初始选中状态，默认 false */
  defaultChecked?: boolean
  /** 禁用状态，true 时不可交互、灰色半透明显示 */
  disabled?: boolean
  /** 半选状态，显示横线图标，优先级高于 checked 的视觉表现 */
  indeterminate?: boolean
  /** 选中状态变化时触发，参数为变化后的 checked 值 */
  onChange?: (checked: boolean) => void
  /** 复选框标签文本，点击标签文本可切换选中状态 */
  children?: ReactNode
  /** 复选框的值（原生 input 的 value 属性） */
  value?: string
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
}