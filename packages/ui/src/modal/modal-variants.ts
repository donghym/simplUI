import { cva } from 'class-variance-authority'

export const modalVariants = cva(
  'fixed inset-y-0 z-50 flex items-center justify-center',
  {
    variants: {
      centered: { true: 'items-center', false: 'items-start pt-[10vh]' },
    },
    defaultVariants: { centered: true },
  },
)

export const overlayVariants = cva('fixed inset-0 z-40 bg-black/50 transition-opacity', {
  variants: {
    visible: { true: 'opacity-100', false: 'opacity-0 pointer-events-none' },
  },
  defaultVariants: { visible: true },
})