import { cva } from 'class-variance-authority'

/** HoverCard 卡片样式变体 */
export const hoverCardVariants = cva(
  'rounded-lg border border-solid border-border bg-background p-4 ' +
    'transition-all duration-300 ease-out cursor-pointer',
  {
    variants: {
      shadow: {
        sm: 'hover:shadow-sm',
        md: 'hover:shadow-md',
        lg: 'hover:shadow-lg',
        xl: 'hover:shadow-xl',
      },
    },
    defaultVariants: {
      shadow: 'lg',
    },
  },
)
