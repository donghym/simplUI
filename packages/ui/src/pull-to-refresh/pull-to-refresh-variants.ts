import { cva } from 'class-variance-authority'

/**
 * PullToRefresh 容器 cva 变体配置
 *
 * 控制下拉刷新容器的布局与溢出行为。
 * variant 控制指示器区域的视觉样式。
 */
export const pullToRefreshVariants = cva(
  'sui-pull-to-refresh relative overflow-hidden',
  {
    variants: {
      variant: {
        default: '',
        primary: '',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

/** 下拉指示器区域样式 */
export const pullIndicatorClass =
  'flex items-center justify-center text-sm text-muted-foreground select-none'

/** 刷新中文本样式 */
export const refreshingTextClass =
  'text-primary-500 font-medium'
