import { cva } from 'class-variance-authority'

/** 列表组件基础样式变体 */
export const listVariants = cva('flex flex-col', {
  variants: {
    bordered: {
      true: 'border border-solid border-border rounded-md',
      false: '',
    },
    loading: {
      true: 'pointer-events-none',
    },
  },
  defaultVariants: {
    bordered: false,
    loading: false,
  },
})

/** 列表项样式变体 */
export const listItemVariants = cva(
  'flex items-center gap-3 px-4 py-3 transition-colors duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
  {
    variants: {
      disabled: {
        true: 'pointer-events-none opacity-50',
      },
      clickable: {
        true: 'cursor-pointer hover:bg-muted active:bg-muted',
      },
    },
    defaultVariants: {
      disabled: false,
      clickable: false,
    },
  }
)

/** 列表项元信息样式变体 */
export const listItemMetaVariants = cva('flex items-start gap-3', {
  variants: {},
  defaultVariants: {},
})

/** 列表头部样式变体 */
export const listHeaderVariants = cva('px-4 py-2 text-foreground font-medium border-b border-solid border-border', {
  variants: {},
  defaultVariants: {},
})

/** 列表底部样式变体 */
export const listFooterVariants = cva('px-4 py-2 text-muted-foreground border-t border-solid border-border', {
  variants: {},
  defaultVariants: {},
})

/** 列表分割线样式变体 */
export const listDividerVariants = cva('h-px bg-border', {
  variants: {},
  defaultVariants: {},
})