import { cva } from 'class-variance-authority'

/** ElasticToggle 轨道样式变体 */
export const elasticToggleVariants = cva(
  'relative inline-flex items-center rounded-full ' +
    'transition-colors duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1',
  {
    variants: {
      checked: {
        true: 'bg-primary-500',
        false: 'bg-muted-foreground/30',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
)

/** ElasticToggle 滑块样式变体 */
export const elasticHandleVariants = cva(
  'absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300',
  {
    variants: {
      checked: {
        true: 'right-0.5 left-auto',
        false: 'left-0.5 right-auto',
      },
      animating: {
        true: 'scale-x-125 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
        false: 'ease-[cubic-bezier(0.4,0,0.2,1)]',
      },
    },
    defaultVariants: {
      checked: false,
      animating: false,
    },
  },
)
