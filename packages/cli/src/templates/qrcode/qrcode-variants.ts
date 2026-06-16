import { cva } from 'class-variance-authority'

/** 二维码容器变体 */
export const qrcodeVariants = cva(
  'sui-qrcode inline-block',
  {
    variants: {
      status: {
        active: '',
        expired: 'opacity-50',
        loading: '',
      },
    },
    defaultVariants: { status: 'active' },
  },
)

/** 二维码蒙层变体 */
export const qrcodeMaskVariants = cva(
  'absolute inset-0 flex items-center justify-center bg-white/80',
)

/** 二维码刷新按钮变体 */
export const qrcodeRefreshButtonVariants = cva(
  'inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-primary-600 text-white text-sm font-medium shadow-sm hover:bg-primary-700 transition-colors cursor-pointer',
)