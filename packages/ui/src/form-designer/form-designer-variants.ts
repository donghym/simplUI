import { cva } from 'class-variance-authority'

/** 表单设计器容器样式 */
export const formDesignerVariants = cva(
  'flex gap-4 rounded-lg border border-border bg-background p-4 min-h-[400px]'
)

/** 组件面板样式 */
export const paletteVariants = cva(
  'flex w-48 flex-shrink-0 flex-col gap-2 rounded-md border border-border bg-muted/20 p-3'
)

/** 设计区域样式 */
export const designAreaVariants = cva(
  'flex-1 rounded-md border border-border bg-background p-3 overflow-y-auto min-h-[300px]'
)

/** 属性面板样式 */
export const propertyPanelVariants = cva(
  'w-56 flex-shrink-0 rounded-md border border-border bg-muted/20 p-3'
)

/** 面板项样式（可拖拽） */
export const paletteItemVariants = cva(
  'flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm ' +
    'cursor-grab select-none transition-colors hover:border-primary-500 hover:bg-primary-50 ' +
    'active:cursor-grabbing'
)

/** 设计区域中的表单项样式 */
export const designItemVariants = cva(
  'flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm ' +
    'transition-colors',
  {
    variants: {
      /** 是否选中 */
      selected: {
        true: 'border-primary-500 bg-primary-50',
        false: 'hover:border-primary-300',
      },
    },
    defaultVariants: { selected: false },
  }
)
