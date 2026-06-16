import { cva } from 'class-variance-authority'

/** Select 触发器样式 */
export const selectVariants = cva(
  'flex w-full items-center rounded-md border bg-white transition-all duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:border-primary-500 ' +
    'disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:border-border',
  {
    variants: {
      status: {
        error: 'border-danger-500 focus-visible:ring-danger-500/20 focus-visible:border-danger-500 hover:border-danger-500',
        warning: 'border-warning-500 focus-visible:ring-warning-500/20 focus-visible:border-warning-500 hover:border-warning-500',
      },
      componentSize: {
        large: 'h-10 px-4 text-base',
        default: 'h-[40px] px-3 text-sm',
        small: 'h-7 px-2 text-xs',
      },
      open: {
        true: 'border-primary-500 ring-2 ring-primary-500/20',
        false: '',
      },
    },
    defaultVariants: { componentSize: 'default' },
    compoundVariants: [
      {
        status: undefined,
        open: false,
        class: 'border-border hover:border-primary-500',
      },
    ],
  }
)

/** 下拉选项样式 */
export const optionVariants = cva(
  'px-3 py-2 text-sm cursor-pointer select-none transition-colors rounded-sm mx-1',
  {
    variants: {
      state: {
        default: 'text-foreground hover:bg-muted',
        active: 'bg-muted text-foreground',
        selected: 'bg-primary-50 text-primary-600 font-medium',
        disabled: 'text-muted-foreground/30 cursor-not-allowed hover:bg-transparent',
      },
    },
    defaultVariants: { state: 'default' },
  }
)

/** 下拉面板样式 */
export const selectDropdownVariants = cva(
  'absolute z-50 mt-1.5 w-full rounded-lg border border-border bg-background shadow-xl ' +
    'max-h-60 overflow-auto py-1 origin-top',
  {
    variants: {
      open: {
        true: 'opacity-100 scale-100 translate-y-0',
        false: 'opacity-0 scale-95 -translate-y-1 pointer-events-none',
      },
    },
    defaultVariants: { open: false },
  }
)
