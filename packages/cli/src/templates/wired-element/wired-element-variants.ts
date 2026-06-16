import { cva } from 'class-variance-authority'

/**
 * WiredElement 手绘风样式变体
 *
 * 使用 rough-notation 风格的 SVG 手绘线条效果。
 * 核心特征：
 * - 不规则的圆角（非对称 border-radius）
 * - 轻微抖动的边框线条
 * - 手绘填充色（不均匀的色块）
 * - 整体呈现"草图/线框"质感
 */
export const wiredElementVariants = cva(
  'relative inline-block select-none',
  {
    variants: {
      elementType: {
        button:
          'px-5 py-2.5 text-sm font-medium text-foreground ' +
          'cursor-pointer transition-transform duration-100 ' +
          'active:scale-[0.98]',
        card:
          'p-5 text-foreground',
        input:
          'w-full text-sm text-foreground ' +
          'focus:outline-none',
      },
      sketchy: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      elementType: 'card',
      sketchy: false,
    },
  },
)
