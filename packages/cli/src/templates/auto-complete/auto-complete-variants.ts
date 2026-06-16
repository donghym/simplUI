import { cva } from 'class-variance-authority'

/** 自动完成输入框变体样式 */
export const autoCompleteVariants = cva(
  'flex h-[40px] w-full rounded-md border bg-white px-3 text-sm transition-colors ' +
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
    defaultVariants: {},
  }
)

/** 下拉菜单变体样式 */
export const autoCompleteDropdownVariants = cva(
  'absolute z-50 w-full mt-1 rounded-md border border-border bg-background shadow-lg ' +
    'overflow-y-auto py-1',
  {
    variants: {
      open: {
        true: 'opacity-100 translate-y-0',
        false: 'opacity-0 translate-y-[-4px] pointer-events-none',
      },
    },
    defaultVariants: { open: false },
  }
)

/** 选项变体样式 */
export const autoCompleteOptionVariants = cva(
  'px-3 py-2 text-sm cursor-pointer transition-colors select-none ' +
    'flex items-center justify-between gap-2',
  {
    variants: {
      highlighted: {
        true: 'bg-muted',
      },
      selected: {
        true: 'bg-primary-500/10 text-primary-500',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
    },
    compoundVariants: [
      {
        highlighted: true,
        selected: true,
        className: 'bg-primary-500/20',
      },
    ],
    defaultVariants: {},
  }
)
