import { cva } from 'class-variance-authority'

export const spaceVariants = cva('inline-flex', {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: { direction: 'horizontal' },
})