import { cva } from 'class-variance-authority'

/** 拖拽表格容器变体 */
export const dragTableVariants = cva('w-full overflow-hidden', {
  variants: {
    bordered: {
      true: 'border border-border rounded-md',
      false: '',
    },
  },
  defaultVariants: {
    bordered: true,
  },
})

/** 表头行变体 */
export const dragHeaderVariants = cva(
  'flex items-center bg-muted border-b border-border select-none'
)

/** 表头单元格变体 */
export const dragHeaderCellVariants = cva(
  'font-medium text-foreground py-3 px-4'
)

/** 数据行变体 */
export const dragRowVariants = cva(
  'flex items-center border-b border-muted transition-colors',
  {
    variants: {
      dragging: { true: 'opacity-50 bg-primary-50', false: 'hover:bg-muted' },
      dragOver: { true: 'border-t-2 border-t-primary', false: '' },
      disabled: { true: 'cursor-default', false: 'cursor-grab active:cursor-grabbing' },
    },
    defaultVariants: {
      dragging: false,
      dragOver: false,
      disabled: false,
    },
  }
)

/** 数据单元格变体 */
export const dragCellVariants = cva('text-foreground py-3 px-4')

/** 拖拽手柄变体 */
export const dragHandleVariants = cva(
  'flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors',
  {
    variants: {
      disabled: { true: 'opacity-30 cursor-default', false: 'cursor-grab active:cursor-grabbing' },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)
