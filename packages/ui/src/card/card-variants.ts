import { cva } from 'class-variance-authority'

/**
 * Card 卡片 cva 变体配置
 *
 * 控制卡片的边框、背景色与圆角。
 * variant: default（带边框白色）、filled（浅灰背景无边框）、borderless（无边框无背景）。
 */
export const cardVariants = cva('rounded-lg', {
  variants: {
    variant: {
      default: 'border border-solid border-border bg-background',
      filled: 'bg-muted',
      borderless: '',
    },
  },
  defaultVariants: { variant: 'default' },
})

/** 卡片头部标题区域的容器样式 */
export const cardHeadClass = 'flex items-center justify-between px-4 py-3 font-medium'

/** 卡片封面图片样式 */
export const cardCoverClass = 'w-full object-cover'

/** 卡片主体内容容器样式 */
export const cardBodyClass = 'px-4 py-3 text-sm text-foreground'

/** 卡片骨架屏加载占位样式 */
export const skeletonClass = 'h-4 animate-pulse rounded bg-muted'

/** 卡片底部操作栏容器样式 */
export const cardActionsClass = 'flex items-center divide-x divide-border border-t border-border'