import { cva } from 'class-variance-authority'

/**
 * Empty 组件变体配置
 */
export const emptyVariants = cva(
  'flex flex-col items-center justify-center text-center',
  {
    variants: {},
    defaultVariants: {},
  }
)

/**
 * Empty 图片容器变体配置
 */
export const emptyImageVariants = cva('mb-4', {
  variants: {},
  defaultVariants: {},
})

/**
 * Empty 描述文字变体配置
 */
export const emptyDescriptionVariants = cva('text-sm text-muted-foreground', {
  variants: {},
  defaultVariants: {},
})

/**
 * Empty 内容区域变体配置
 */
export const emptyContentVariants = cva('mt-4', {
  variants: {},
  defaultVariants: {},
})
