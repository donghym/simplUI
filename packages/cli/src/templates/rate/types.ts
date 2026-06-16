import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { rateVariants } from './rate-variants'

/**
 * Rate Props
 *
 * 评分组件，用于对事物进行评级或打分。
 * 支持半星选择、只读模式、自定义图标、自定义字符。
 */
export interface RateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'defaultValue'>,
    VariantProps<typeof rateVariants> {
  /** 当前评分值（受控模式），范围 0 到 count */
  value?: number
  /** 默认评分值（非受控模式），范围 0 到 count */
  defaultValue?: number
  /** 评分变化回调，参数为新评分值 */
  onChange?: (value: number) => void
  /** 星星总数，默认 5 */
  count?: number
  /** 是否允许半星选择，默认 false */
  allowHalf?: boolean
  /** 是否只读，只读模式下不可交互，默认 false */
  readonly?: boolean
  /** 是否禁用，禁用后不可交互且显示灰色，默认 false */
  disabled?: boolean
  /** 自定义字符，用于替换默认星星图标 */
  character?: ReactNode
  /** 提示信息数组，鼠标悬停时显示对应提示 */
  tooltips?: string[]
  /** 自定义类名，通过 twMerge 合并覆盖默认样式 */
  className?: string
}

/**
 * 单个星星 Props
 *
 * 内部使用，渲染单个星星项。
 */
export interface StarProps {
  /** 当前星星索引，从 0 开始 */
  index: number
  /** 当前评分值 */
  value: number
  /** 是否允许半星 */
  allowHalf?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义字符 */
  character?: ReactNode
  /** 鼠标移动回调 */
  onHover?: (value: number) => void
  /** 点击回调 */
  onClick?: (value: number) => void
}
