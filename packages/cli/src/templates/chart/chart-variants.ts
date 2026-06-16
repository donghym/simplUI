import { cva } from 'class-variance-authority'

// Chart 容器变体
export const chartVariants = cva('flex flex-col gap-4', {
  variants: {
    bordered: {
      true: 'border border-solid border-border rounded-lg p-4',
      false: '',
    },
  },
  defaultVariants: { bordered: false },
})

// Chart 头部变体
export const chartHeaderVariants = cva('flex flex-col gap-1', {
  variants: {},
  defaultVariants: {},
})

// Chart 标题变体
export const chartTitleVariants = cva('text-base font-medium text-foreground', {
  variants: {},
  defaultVariants: {},
})

// Chart 描述变体
export const chartDescriptionVariants = cva('text-sm text-muted-foreground', {
  variants: {},
  defaultVariants: {},
})

// Chart 内容区变体
export const chartBodyVariants = cva('flex-1 min-h-0', {
  variants: {},
  defaultVariants: {},
})
