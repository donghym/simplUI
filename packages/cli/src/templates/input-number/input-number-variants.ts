import { cva } from 'class-variance-authority'

export const inputNumberVariants = cva(
  'flex h-[40px] w-full rounded-md border border-gray-400 bg-white px-3 text-sm transition-colors ' +
    'placeholder:text-muted-foreground ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ' +
    'disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      status: {
        error: 'border-danger-500 focus-visible:ring-danger-500',
        warning: 'border-warning-500 focus-visible:ring-warning-500',
      },
    },
  },
)