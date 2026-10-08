import { cva } from 'class-variance-authority'

export const rateVariants = cva(
  'inline-flex items-center gap-1 text-2xl select-none',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: { disabled: false },
  },
)

/**
 * 单个星星的样式变体
 *
 * 根据填充状态决定视觉样式。
 */
export const starVariants = cva(
  'relative cursor-pointer transition-colors duration-150',
  {
    variants: {
      filled: {
        true: 'text-warning-500',
        false: 'text-muted-foreground/30',
      },
      readonly: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: { filled: false, readonly: false },
  },
)
