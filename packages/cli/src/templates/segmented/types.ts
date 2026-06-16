import type { CSSProperties, ReactNode } from 'react'

export interface SegmentedOption {
  label?: ReactNode
  value: string
  disabled?: boolean
  icon?: ReactNode
}

export interface SegmentedProps {
  /** 选项 */
  options: (string | SegmentedOption)[]
  /** 当前选中的值 */
  value?: string
  /** 默认选中的值 */
  defaultValue?: string
  /** 选中变化的回调 */
  onChange?: (value: string) => void
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸 */
  componentSize?: 'large' | 'middle' | 'small'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
