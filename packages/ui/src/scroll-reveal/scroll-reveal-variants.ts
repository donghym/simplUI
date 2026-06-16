import { cva } from 'class-variance-authority'

/** ScrollReveal 容器样式变体 */
export const scrollRevealVariants = cva(
  'transition-all ease-out',
  {
    variants: {
      visible: {
        true: 'opacity-100 translate-x-0 translate-y-0',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
)
