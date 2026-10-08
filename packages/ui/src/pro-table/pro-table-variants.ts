import { cva } from 'class-variance-authority'

/** ProTable 容器变体 */
export const proTableVariants = cva('w-full flex flex-col border border-border rounded-md', {
  variants: {},
  defaultVariants: {},
})

/** 工具栏变体 */
export const proTableToolbarVariants = cva(
  'flex items-center justify-between py-2 px-4 border-b border-border bg-background',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 搜索栏变体 */
export const proTableSearchVariants = cva(
  'flex items-center gap-2 py-2 px-4 border-b border-border bg-muted/30',
  {
    variants: {
      collapsed: { true: 'hidden', false: '' },
    },
    defaultVariants: { collapsed: false },
  }
)

/** 分页容器变体 */
export const proTablePaginationVariants = cva(
  'flex items-center justify-end py-2 px-4 border-t border-border',
  {
    variants: {},
    defaultVariants: {},
  }
)
