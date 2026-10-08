import { cva } from 'class-variance-authority'

// Anchor 容器变体
export const anchorVariants = cva('relative flex flex-col gap-1', {
  variants: {},
  defaultVariants: {},
})

// Anchor 链接项变体
export const anchorLinkVariants = cva(
  'text-sm text-muted-foreground hover:text-primary-500 transition-colors duration-200 cursor-pointer',
  {
    variants: {
      active: {
        true: 'text-primary-500 font-medium',
        false: '',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: { active: false, disabled: false },
  }
)

// Anchor 子链接容器变体
export const anchorSubLinkVariants = cva('flex flex-col gap-1 pl-4 mt-1', {
  variants: {},
  defaultVariants: {},
})

// Anchor 滚动指示器变体
export const anchorIndicatorVariants = cva(
  'absolute left-0 w-0.5 bg-primary-500 transition-all duration-200',
  {
    variants: {},
    defaultVariants: {},
  }
)
