import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium select-none ' +
    'transition-colors duration-200 whitespace-nowrap ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1 ' +
    'disabled:pointer-events-none disabled:opacity-50 ' +
    'h-[40px] px-4 text-sm rounded-md',
  {
    variants: {
      variant: {
        default:
          'bg-background text-foreground border border-solid border-border ' +
          'hover:border-primary-500 hover:text-primary-500 ' +
          'active:border-primary-600',
        primary:
          'bg-primary-500 text-white border border-solid border-primary-500 ' +
          'hover:bg-primary-600 ' +
          'active:bg-primary-700',
        dashed:
          'bg-background text-foreground border border-dashed border-border ' +
          'hover:border-primary-500 hover:text-primary-500',
        link:
          'bg-transparent text-primary-500 border border-transparent ' +
          'hover:underline underline-offset-4 px-0',
        text:
          'bg-transparent text-foreground border border-transparent ' +
          'hover:bg-muted',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
