import { cva } from 'class-variance-authority'

/** CopyButton 按钮样式变体 */
export const copyButtonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm ' +
    'transition-colors duration-200 select-none ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1',
  {
    variants: {
      variant: {
        default:
          'bg-background text-foreground border border-solid border-border ' +
          'hover:border-primary-500 hover:text-primary-500',
        primary:
          'bg-primary-500 text-white border border-solid border-primary-500 ' +
          'hover:bg-primary-600',
        ghost:
          'bg-transparent text-muted-foreground border border-transparent ' +
          'hover:bg-muted hover:text-foreground',
      },
      copied: {
        true: 'border-success-500 text-success-500',
        false: '',
      },
      error: {
        true: 'border-danger-500 text-danger-500',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      copied: false,
      error: false,
    },
  },
)
