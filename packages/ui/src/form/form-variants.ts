import { cva } from 'class-variance-authority'

/**
 * Form 容器
 *
 * 样式对齐 antd：
 * - vertical/horizontal 默认上下间距 24px
 * - inline 模式水平排列
 */
export const formVariants = cva('', {
  variants: {
    layout: {
      horizontal: 'flex flex-col gap-6',
      vertical: 'flex flex-col gap-6',
      inline: 'flex flex-wrap items-center gap-4',
    },
  },
  defaultVariants: { layout: 'vertical' },
})

/**
 * FormItem 行
 *
 * - horizontal: flex row，label 右对齐 + 垂直居中
 * - vertical:   flex col，label 在上
 * - inline:     flex col，label 在上
 */
export const formItemVariants = cva('flex', {
  variants: {
    layout: {
      horizontal: 'flex-row items-center w-full',
      vertical: 'flex-col',
      inline: 'flex-col',
    },
  },
  defaultVariants: { layout: 'vertical' },
})
