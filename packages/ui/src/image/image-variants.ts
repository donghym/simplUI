import { cva } from 'class-variance-authority'

/** 图片容器变体 */
export const imageVariants = cva(
  'sui-image relative inline-block',
  {
    variants: {
      preview: {
        true: 'sui-image--preview',
        false: '',
      },
      error: {
        true: 'sui-image--error',
        false: '',
      },
    },
    defaultVariants: { preview: false, error: false },
  },
)
