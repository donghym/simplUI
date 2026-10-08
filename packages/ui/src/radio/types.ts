import type {
  InputHTMLAttributes,
  ReactNode,
  HTMLAttributes,
} from 'react'
import type { VariantProps } from 'class-variance-authority'
import { radioDotVariants, radioGroupVariants } from './radio-variants'

/**
 * Radio 组件 Props
 *
 * 单选框组件，用于在多个选项中选中一个。
 * 支持受控/非受控模式、禁用状态。
 * 在 Radio.Group 中使用时，选中状态由 Group 统一管理。
 */
export interface RadioProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'type' | 'onChange' | 'value' | 'children'
    >,
    VariantProps<typeof radioDotVariants> {
  /** 受控模式下的选中状态，true 为选中 */
  checked?: boolean
  /** 禁用状态，true 时不可交互、灰色半透明显示 */
  disabled?: boolean
  /** Radio 的值，在 Radio.Group 中用于标识选中项 */
  value?: string
  /** 选中状态变化时触发，参数为变化后的 checked 值 */
  onChange?: (checked: boolean) => void
  /** 单选框标签文本，点击可切换选中状态 */
  children?: ReactNode
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
}

/**
 * RadioGroup 组件 Props
 *
 * 单选框组容器，统一管理子 Radio 的选中状态。
 * 支持受控/非受控模式、禁用整组、options 快速生成、横/竖排列。
 */
export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>,
    VariantProps<typeof radioGroupVariants> {
  /** 受控模式下的选中值，对应子 Radio 的 value 属性 */
  value?: string
  /** 非受控模式下的初始选中值，默认 undefined */
  defaultValue?: string
  /** 是否禁用整组，true 时所有子 Radio 不可交互 */
  disabled?: boolean
  /** 选项列表，传入对象数组快速生成 Radio，label 为显示文本，value 为选中值 */
  options?: Array<{
    label: string
    value: string
    disabled?: boolean
  }>
  /** 排列方向，horizontal 为水平、vertical 为垂直，默认 vertical */
  direction?: 'horizontal' | 'vertical'
  /** 选中值变化时触发，参数为变化后的 value 值 */
  onChange?: (value: string) => void
  /** 子元素，传入 Radio 组件 */
  children?: ReactNode
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
}

/**
 * RadioGroup 上下文值
 *
 * 通过 React Context 向子 Radio 传递 Group 级别的选中值和变更回调。
 * 仅在 Radio.Group 内部使用，外部不可访问。
 */
export interface RadioGroupContextValue {
  /** Group 级别的当前选中值 */
  selectedValue: string | undefined
  /** Group 级别的选中值变更回调 */
  onSelect: (value: string) => void
  /** Group 级别的禁用状态 */
  disabled: boolean
}