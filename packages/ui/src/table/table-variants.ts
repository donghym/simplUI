import { cva } from 'class-variance-authority'

/** 表格容器变体 */
export const tableVariants = cva('w-full', {
  variants: { bordered: { true: 'border border-border rounded-md', false: '' } },
  defaultVariants: { bordered: false },
})

/** 表头单元格变体 */
export const headerCellVariants = cva(
  'font-medium text-foreground bg-muted border-b border-border select-none',
  {
    variants: {
      tableSize: { default: 'py-3 px-4', middle: 'py-2 px-3', small: 'py-1.5 px-2' },
      align: { left: 'text-left', center: 'text-center', right: 'text-right' },
      sortable: { true: 'cursor-pointer hover:bg-muted transition-colors', false: '' },
    },
    defaultVariants: { tableSize: 'default', align: 'left', sortable: false },
  }
)

/** 数据行变体 */
export const rowVariants = cva('border-b border-muted transition-colors', {
  variants: { selected: { true: 'bg-primary-50', false: 'hover:bg-muted' } },
  defaultVariants: { selected: false },
})

/** 数据单元格变体 */
export const cellVariants = cva('text-foreground', {
  variants: {
    tableSize: { default: 'py-3 px-4', middle: 'py-2 px-3', small: 'py-1.5 px-2' },
    align: { left: 'text-left', center: 'text-center', right: 'text-right' },
    ellipsis: { true: 'truncate max-w-0', false: '' },
    fixedLeft: { true: 'sticky left-0 bg-white z-10 shadow-[2px_0_4px_rgba(0,0,0,0.05)]', false: '' },
    fixedRight: { true: 'sticky right-0 bg-white z-10 shadow-[-2px_0_4px_rgba(0,0,0,0.05)]', false: '' },
  },
  defaultVariants: { tableSize: 'default', align: 'left', ellipsis: false },
})

/** 空状态/加载状态变体 */
export const emptyVariants = cva('text-center py-8 text-muted-foreground')
export const loadingVariants = cva('absolute inset-0 bg-white/80 flex items-center justify-center z-20')