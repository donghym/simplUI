import { cva } from 'class-variance-authority'

// BackTop 按钮变体
export const backTopVariants = cva(
  'fixed bottom-12 right-12 z-50 h-10 w-10 rounded-full bg-background border border-solid border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-primary-500 hover:border-primary-500 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  {
    variants: {
      visible: {
        true: 'opacity-100 translate-y-0 pointer-events-auto',
        false: 'opacity-0 translate-y-4 pointer-events-none',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: { visible: false, disabled: false },
  }
)
