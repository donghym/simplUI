import { cva } from 'class-variance-authority'

/** MorphButton 按钮样式变体 */
export const morphButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium select-none ' +
    'transition-all duration-300 ease-out whitespace-nowrap ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1 ' +
    'disabled:pointer-events-none disabled:opacity-50 ' +
    'h-[40px] px-4 text-sm rounded-md',
  {
    variants: {
      variant: {
        default:
          'bg-background text-foreground border border-solid border-border ' +
          'hover:scale-105 hover:rounded-xl hover:border-primary-500 hover:text-primary-500 ' +
          'active:scale-95 active:rounded-md',
        primary:
          'bg-primary-500 text-white border border-solid border-primary-500 ' +
          'hover:scale-105 hover:rounded-xl hover:bg-primary-600 ' +
          'active:scale-95 active:rounded-md active:bg-primary-700',
        outline:
          'bg-transparent text-primary-500 border-2 border-solid border-primary-500 ' +
          'hover:scale-105 hover:rounded-xl hover:bg-primary-50 ' +
          'active:scale-95 active:rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
