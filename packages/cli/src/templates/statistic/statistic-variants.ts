import { cva } from 'class-variance-authority'

/** 统计数值基础样式 */
export const statisticVariants = cva('flex flex-col gap-1', {
  variants: {},
  defaultVariants: {},
})

/** 数值标题样式 */
export const statisticTitleVariants = cva('text-sm text-muted-foreground', {
  variants: {},
  defaultVariants: {},
})

/** 数值内容样式 */
export const statisticValueVariants = cva('text-3xl font-semibold text-foreground', {
  variants: {},
  defaultVariants: {},
})
