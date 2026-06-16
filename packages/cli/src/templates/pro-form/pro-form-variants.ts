import { cva } from 'class-variance-authority'

/** ProForm 容器变体 */
export const proFormVariants = cva('', {
  variants: {
    layout: {
      horizontal: 'flex flex-col gap-6',
      vertical: 'flex flex-col gap-6',
      inline: 'flex flex-wrap items-center gap-4',
    },
  },
  defaultVariants: { layout: 'horizontal' },
})

/** ProForm 网格容器 */
export const proFormGridVariants = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
  },
  defaultVariants: { columns: 2 },
})

/** ProForm 提交按钮区域 */
export const proFormActionsVariants = cva('flex items-center gap-3 pt-4', {
  variants: {
    layout: {
      horizontal: '',
      vertical: '',
      inline: '',
    },
  },
  defaultVariants: { layout: 'horizontal' },
})

/** ProForm 表单项容器 */
export const proFormItemVariants = cva('flex', {
  variants: {
    layout: {
      horizontal: 'flex-row items-center w-full',
      vertical: 'flex-col',
      inline: 'flex-col',
    },
  },
  defaultVariants: { layout: 'horizontal' },
})

/** ProFormList 项容器 */
export const proFormListItemVariants = cva(
  'border border-border rounded-lg p-4 mb-3 relative',
)

/** ProFormList 操作按钮容器 */
export const proFormListActionsVariants = cva(
  'flex items-center gap-2',
)
