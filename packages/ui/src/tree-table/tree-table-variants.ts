import { cva } from 'class-variance-authority'

/** 树形表格容器变体 */
export const treeTableVariants = cva('w-full text-sm', {
  variants: {
    bordered: {
      true: 'border border-gray-300 rounded-md',
      false: '',
    },
  },
  defaultVariants: { bordered: true },
})

/** 树形表格表头行变体 */
export const treeTableHeaderVariants = cva(
  'bg-muted font-medium text-foreground select-none',
)

/** 树形表格表头单元格变体 */
export const treeTableHeaderCellVariants = cva(
  'py-3 px-4 text-left border-b border-border',
)

/** 树形表格数据行变体 */
export const treeTableRowVariants = cva(
  'border-b border-muted transition-colors hover:bg-muted/50',
  {
    variants: {
      selected: { true: 'bg-primary-50', false: '' },
    },
    defaultVariants: { selected: false },
  },
)

/** 树形表格数据单元格变体 */
export const treeTableCellVariants = cva('py-2.5 px-4 text-foreground')

/** 展开/收起图标变体 */
export const treeTableExpandIconVariants = cva(
  'inline-flex items-center justify-center w-5 h-5 cursor-pointer text-muted-foreground transition-transform duration-200 hover:text-foreground',
  {
    variants: { expanded: { true: 'rotate-90', false: '' } },
    defaultVariants: { expanded: false },
  },
)

/** 缩进占位变体 */
export const treeTableIndentVariants = cva('inline-block')
