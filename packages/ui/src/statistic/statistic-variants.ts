import { cva } from 'class-variance-authority'

/** 统计数值基础样式 */
export const statisticVariants = cva('flex flex-col gap-1', {
  variants: {},
  defaultVariants: {},
})

/** 统计卡片容器样式 */
export const statisticCardVariants = cva(
  'sui-statistic-card rounded-lg border border-border bg-background p-4 shadow-sm',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 统计卡片标题样式 */
export const statisticCardTitleVariants = cva(
  'text-sm text-muted-foreground',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 统计卡片数值样式 */
export const statisticCardValueVariants = cva(
  'text-2xl font-semibold text-foreground tabular-nums',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 统计卡片趋势样式 */
export const statisticCardTrendVariants = cva(
  'inline-flex items-center gap-0.5 text-xs font-medium',
  {
    variants: {
      trend: {
        up: 'text-success-600',
        down: 'text-danger-600',
        flat: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      trend: 'flat',
    },
  },
)

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
