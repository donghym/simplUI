import { cva } from 'class-variance-authority'

export const timePickerVariants = cva(
  'flex h-[40px] w-full rounded-md border bg-white px-3 text-sm transition-colors ' +
    'placeholder:text-muted-foreground ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ' +
    'disabled:cursor-not-allowed disabled:opacity-50 ' +
    'border-border focus-visible:ring-primary-500',
  {
    variants: {
      status: {
        error: 'border-danger-500 focus-visible:ring-danger-500',
        warning: 'border-warning-500 focus-visible:ring-warning-500',
      },
    },
    defaultVariants: {},
  },
)

/**
 * 时间面板中时间选项的样式变体
 *
 * 根据选中状态决定视觉样式。
 */
export const timeOptionVariants = cva(
  'px-3 py-2 text-sm rounded flex items-center justify-center ' +
    'transition-colors cursor-pointer',
  {
    variants: {
      selected: {
        true: 'bg-primary-500 text-white hover:bg-primary-600',
        false: 'hover:bg-muted',
      },
    },
    defaultVariants: { selected: false },
  },
)
