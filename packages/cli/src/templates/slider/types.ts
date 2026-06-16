import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { sliderVariants } from './slider-variants'

/**
 * Slider Props
 *
 * 滑动输入条组件，用于在给定范围内选择数值。
 * 支持单滑块、双滑块（范围选择）、步长、标记点、禁用状态。
 */
export interface SliderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'defaultValue'>,
    VariantProps<typeof sliderVariants> {
  /** 当前值（受控模式），单滑块时为数字，双滑块时为 [start, end] */
  value?: number | [number, number]
  /** 默认值（非受控模式），单滑块时为数字，双滑块时为 [start, end] */
  defaultValue?: number | [number, number]
  /** 值变化回调，参数为当前值 */
  onChange?: (value: number | [number, number]) => void
  /** 最小值，默认 0 */
  min?: number
  /** 最大值，默认 100 */
  max?: number
  /** 步长，默认 1 */
  step?: number
  /** 是否禁用，禁用后不可交互且显示灰色，默认 false */
  disabled?: boolean
  /** 是否为范围选择（双滑块），默认 false */
  range?: boolean
  /** 是否显示刻度标记 */
  marks?: SliderMark[]
  /** 是否显示 tooltip，默认 true */
  showTooltip?: boolean
  /** 滑动条尺寸，控制轨道高度和手柄大小，默认 'middle' */
  componentSize?: 'small' | 'middle' | 'large'
  /** 自定义类名，通过 twMerge 合并覆盖默认样式 */
  className?: string
}

/**
 * 刻度标记定义
 *
 * 在滑动条上显示标记点和标签。
 */
export interface SliderMark {
  /** 标记点位置值 */
  value: number
  /** 标记点标签，不提供则只显示标记点 */
  label?: string
}
