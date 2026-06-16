import { cva } from 'class-variance-authority'

/** 无限滚动容器变体 */
export const infiniteScrollVariants = cva(
  'w-full',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 底部状态区变体 */
export const infiniteScrollStatusVariants = cva(
  'py-4 text-center text-sm text-muted-foreground',
  {
    variants: {},
    defaultVariants: {},
  },
)
