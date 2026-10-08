import { cva } from 'class-variance-authority'

/** 骨架屏根容器样式 */
export const skeletonRootVariants = cva('flex gap-4', {
  variants: {},
})

/** 骨架屏基础样式 */
export const skeletonVariants = cva(
  'bg-gray-400 rounded',
  {
    variants: {
      variant: {
        /** 文本行状骨架 */
        text: 'h-4 rounded',
        /** 圆形骨架，用于头像占位 */
        circle: 'rounded-full',
        /** 矩形骨架，用于图片、卡片等占位 */
        rect: 'rounded-md',
      },
      active: {
        /** 启用动画 */
        true: 'animate-pulse',
        /** 禁用动画 */
        false: '',
      },
    },
    defaultVariants: {
      variant: 'text',
      active: true,
    },
  }
)
