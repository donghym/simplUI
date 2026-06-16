import { cva } from 'class-variance-authority'

/**
 * TreeSelect 选择器变体样式
 */
export const treeSelectVariants = cva(
  'relative flex h-[40px] w-full cursor-pointer items-center justify-between ' +
    'rounded-md border border-border bg-background px-3 text-sm ' +
    'transition-colors duration-200 ' +
    'focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-1 ' +
    'disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      disabled: { true: 'pointer-events-none' },
      open: { true: 'ring-2 ring-primary-500 ring-offset-1' },
    },
    defaultVariants: { disabled: false, open: false },
  }
)

/**
 * 下拉面板变体样式
 */
export const treeSelectDropdownVariants = cva(
  'absolute left-0 top-full z-50 mt-1 w-full overflow-auto rounded-md border border-border bg-background shadow-lg',
  {
    variants: {
      open: {
        true: 'animate-in fade-in-0 slide-in-from-top-1 duration-200',
        false: 'animate-out fade-out-0 slide-out-to-top-1 duration-200',
      },
    },
    defaultVariants: { open: true },
  }
)

/**
 * 树节点变体样式
 */
export const treeNodeVariants = cva(
  'flex cursor-pointer items-center gap-1 px-2 py-1.5 text-sm transition-colors hover:bg-muted',
  {
    variants: {
      selected: { true: 'bg-primary-500/10 text-primary-500 font-medium', false: 'text-foreground' },
      disabled: { true: 'cursor-not-allowed opacity-50 pointer-events-none', false: '' },
      expanded: { true: '', false: '' },
    },
    defaultVariants: { selected: false, disabled: false, expanded: false },
  }
)

/**
 * 搜索框变体样式
 */
export const treeSelectSearchVariants = cva('w-full border-b border-border p-2')