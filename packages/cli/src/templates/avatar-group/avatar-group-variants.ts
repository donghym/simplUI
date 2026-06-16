import { cva } from 'class-variance-authority'

/** 头像组容器样式 */
export const avatarGroupVariants = cva(
  'sui-avatar-group flex -space-x-2',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 头像组单项样式 */
export const avatarGroupItemVariants = cva(
  'relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-muted text-muted-foreground text-sm font-medium overflow-hidden transition-transform hover:z-10 hover:scale-110',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 头像组超出数量样式 */
export const avatarGroupExcessVariants = cva(
  'relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-muted text-muted-foreground text-xs font-medium cursor-pointer hover:z-10 hover:bg-gray-200',
  {
    variants: {},
    defaultVariants: {},
  },
)
