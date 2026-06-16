import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { starRatingVariants } from './star-rating-variants'

/**
 * StarRating 增强星级评分 Props
 *
 * 半星评分、hover 预览、动画填充。
 */
export interface StarRatingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof starRatingVariants> {
  /** 当前评分值（受控模式），0-5 支持小数 */
  value?: number
  /** 默认评分值（非受控模式） */
  defaultValue?: number
  /** 评分变化回调 */
  onChange?: (value: number) => void
  /** 是否允许半星，默认 true */
  allowHalf?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 星星总数，默认 5 */
  count?: number
  /** 自定义字符 */
  character?: string
}
