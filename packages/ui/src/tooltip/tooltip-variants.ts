import { cva } from 'class-variance-authority'

export const tooltipVariants = cva(
  'absolute z-50 px-3 py-1.5 text-xs text-white bg-foreground rounded-md shadow-md ' +
    'max-w-xs break-words pointer-events-none ' +
    'transition-opacity duration-150',
  {
    variants: {
      placement: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-1.5',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-1.5',
        left: 'right-full top-1/2 -translate-y-1/2 mr-1.5',
        right: 'left-full top-1/2 -translate-y-1/2 ml-1.5',
      },
      visible: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      placement: 'top',
      visible: false,
    },
  }
)

/**
 * 箭头变体配置
 *
 * 使用旋转 45° 的正方形绘制三角形，方向指向触发元素。
 * 箭头方向与 placement 相反，例如 placement='top' 时箭头朝下指向触发元素。
 */
export const tooltipArrowVariants = cva(
  'absolute w-2 h-2 rotate-45 bg-foreground',
  {
    variants: {
      arrowPlacement: {
        top: '-bottom-1 left-1/2 -translate-x-1/2',
        bottom: '-top-1 left-1/2 -translate-x-1/2',
        left: '-right-1 top-1/2 -translate-y-1/2',
        right: '-left-1 top-1/2 -translate-y-1/2',
      },
    },
  }
)