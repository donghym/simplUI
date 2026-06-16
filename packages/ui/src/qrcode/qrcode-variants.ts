import { cva } from 'class-variance-authority'

/** 二维码容器变体 */
export const qrcodeVariants = cva(
  'sui-qrcode relative inline-block',
  {
    variants: {
      bordered: {
        true: 'p-3 border border-[#f0f0f0] rounded-lg',
        false: '',
      },
    },
    defaultVariants: { bordered: true },
  },
)
