import { cva } from 'class-variance-authority'

/** 遮罩层变体 */
export const actionSheetOverlayVariants = cva(
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

/** 面板容器变体 */
export const actionSheetVariants = cva(
  'fixed inset-x-0 bottom-0 z-50 rounded-t-xl bg-background shadow-xl transition-transform duration-300',
  {
    variants: {
      visible: {
        true: 'translate-y-0',
        false: 'translate-y-full',
      },
    },
    defaultVariants: { visible: true },
  },
)

/** 选项按钮变体 */
export const actionSheetItemVariants = cva(
  'flex w-full items-center justify-center px-4 py-3.5 text-base transition-colors',
  {
    variants: {
      danger: {
        true: 'text-danger',
        false: 'text-foreground',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'active:bg-muted cursor-pointer',
      },
    },
    defaultVariants: { danger: false, disabled: false },
  },
)

/** 取消按钮变体 */
export const actionSheetCancelVariants = cva(
  'flex w-full items-center justify-center rounded-none px-4 py-3.5 text-base font-semibold text-foreground active:bg-muted cursor-pointer',
  {
    variants: {},
    defaultVariants: {},
  },
)
