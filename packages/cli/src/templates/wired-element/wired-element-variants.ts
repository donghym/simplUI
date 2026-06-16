import { cva } from 'class-variance-authority'

/** WiredElement 样式变体 */
export const wiredElementVariants = cva(
  'select-none',
  {
    variants: {
      elementType: {
        button:
          'inline-flex items-center justify-center px-4 py-2 text-sm font-medium ' +
          'bg-background text-foreground border-2 border-foreground ' +
          'rounded-[4px_12px_6px_14px/10px 4px 14px 6px] ' +
          'hover:bg-muted active:scale-95 ' +
          'transition-all duration-150 cursor-pointer',
        card:
          'rounded-[6px_14px 8px 16px/12px 6px 16px 8px] ' +
          'border-2 border-foreground bg-background p-4',
        input:
          'w-full px-3 py-2 text-sm bg-background text-foreground ' +
          'border-2 border-foreground ' +
          'rounded-[3px 10px 5px 12px/8px 3px 12px 5px] ' +
          'placeholder:text-muted-foreground ' +
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
      },
      sketchy: {
        true: 'border-dashed',
        false: '',
      },
    },
    defaultVariants: {
      elementType: 'card',
      sketchy: false,
    },
  },
)
