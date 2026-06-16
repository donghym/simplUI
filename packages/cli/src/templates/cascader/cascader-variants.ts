import { cva } from 'class-variance-authority'

/** 级联选择器输入框变体样式 */
export const cascaderVariants = cva(
  'flex h-[40px] w-full rounded-md border bg-white px-3 text-sm transition-colors ' +
    'cursor-pointer items-center justify-between ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ' +
    'disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      status: {
        error: 'border-danger-500 focus-visible:ring-danger-500',
        warning: 'border-warning-500 focus-visible:ring-warning-500',
      },
      open: {
        true: 'border-primary-500 ring-1 ring-primary-500',
      },
    },
    defaultVariants: {},
  }
)

/** 下拉菜单变体样式 */
export const cascaderDropdownVariants = cva(
  'absolute z-50 mt-1 rounded-md border border-border bg-background shadow-lg ' +
    'flex overflow-hidden',
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

/** 级联列变体样式 */
export const cascaderColumnVariants = cva(
  'min-w-[180px] max-w-[280px] border-r border-border overflow-y-auto py-1 last:border-r-0',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 选项变体样式 */
export const cascaderOptionVariants = cva(
  'px-3 py-2 text-sm cursor-pointer transition-colors select-none ' +
    'flex items-center justify-between gap-2',
  {
    variants: {
      active: {
        true: 'bg-primary-500/10 text-primary-500',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {},
  }
)
