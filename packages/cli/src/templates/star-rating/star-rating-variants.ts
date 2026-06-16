import { cva } from 'class-variance-authority'

/** StarRating 容器样式变体 */
export const starRatingVariants = cva(
  'inline-flex items-center gap-1 text-2xl select-none',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
)

/** 单个星星样式变体 */
export const starRatingItemVariants = cva(
  'relative cursor-pointer transition-all duration-200',
  {
    variants: {
      readonly: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: {
      readonly: false,
    },
  },
)
