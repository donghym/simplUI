import { cva } from 'class-variance-authority'

/** 悬浮按钮变体 */
export const floatButtonVariants = cva(
  'sui-float-button relative inline-flex items-center justify-center h-10 shadow-[0_2px_8px_rgba(0,0,0,0.15)] cursor-pointer gap-1',
  {
    variants: {
      type: {
        default: 'bg-white text-[#262626] border border-[#f0f0f0]',
        primary: 'bg-[#1677FF] text-white border-none',
      },
      shapeVariant: {
        circle: 'w-10 rounded-full p-0',
        square: 'w-auto rounded-lg px-3',
      },
    },
    defaultVariants: { type: 'default', shapeVariant: 'circle' },
  },
)

/** 悬浮按钮提示气泡变体 */
export const floatButtonTooltipVariants = cva(
  'absolute bg-[#262626] text-white px-2 py-1 rounded text-xs whitespace-nowrap z-[1070]',
  {
    variants: {
      placement: {
        right: 'left-full ml-2',
        left: 'right-full mr-2',
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
      },
    },
    defaultVariants: { placement: 'right' },
  },
)