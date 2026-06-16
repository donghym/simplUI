import { cva } from 'class-variance-authority'

/**
 * Avatar 组件的 cva 样式配置
 *
 * 支持 size（尺寸）和 shape（形状）变体。
 */
export const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden ' +
    'bg-muted text-muted-foreground ' +
    'align-middle select-none font-medium',
  {
    variants: {
      size: {
        small: 'h-6 w-6 text-xs',
        default: 'h-10 w-10 text-sm',
        large: 'h-14 w-14 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'default',
      shape: 'circle',
    },
  },
)