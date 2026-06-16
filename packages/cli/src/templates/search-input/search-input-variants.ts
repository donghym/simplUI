import { cva } from 'class-variance-authority'

/** 搜索输入框变体样式 */
export const searchInputVariants = cva(
  'flex h-[40px] w-full rounded-md border bg-white pl-9 pr-3 text-sm transition-colors ' +
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

/** 搜索下拉菜单变体样式 */
export const searchDropdownVariants = cva(
  'absolute z-50 w-full mt-1 rounded-md border border-border bg-background shadow-lg ' +
    'overflow-y-auto py-1',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 搜索建议项变体样式 */
export const searchOptionVariants = cva(
  'px-3 py-2 text-sm cursor-pointer transition-colors select-none ' +
    'flex items-center justify-between gap-2',
  {
    variants: {
      highlighted: {
        true: 'bg-muted',
      },
      isHistory: {
        true: 'text-muted-foreground',
      },
    },
    defaultVariants: {},
  }
)
