import { cva } from 'class-variance-authority'

/** Result 组件的 cva 变体配置 */
export const resultVariants = cva(
  'sui-result flex flex-col items-center justify-center py-12 px-4',
  {
    variants: {
      status: {
        success: 'sui-result--success',
        error: 'sui-result--error',
        info: 'sui-result--info',
        warning: 'sui-result--warning',
        '404': 'sui-result--404',
        '403': 'sui-result--403',
        '500': 'sui-result--500',
      },
    },
    defaultVariants: {
      status: 'info',
    },
  },
)