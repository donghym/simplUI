import { cva } from 'class-variance-authority'

/** 抽屉面板 cva 变体，根据 placement 控制位置和圆角 */
export const drawerVariants = cva(
  'fixed z-50 bg-white shadow-xl flex flex-col transition-transform duration-300',
  {
    variants: {
      placement: {
        left: 'inset-y-0 left-0 rounded-r-lg',
        right: 'inset-y-0 right-0 rounded-l-lg',
        top: 'inset-x-0 top-0 rounded-b-lg',
        bottom: 'inset-x-0 bottom-0 rounded-t-lg',
      },
    },
    defaultVariants: { placement: 'right' },
  },
)

/** 遮罩层 cva 变体，控制透明度过渡 */
export const overlayVariants = cva(
  'fixed inset-0 z-40 bg-black/50 transition-opacity',
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
    },
    defaultVariants: { visible: true },
  },
)