import { cva } from 'class-variance-authority'

/** 树组件容器变体 */
export const treeVariants = cva('relative w-full text-sm text-foreground select-none', {
  variants: {
    showLine: { true: 'border-l border-border ml-3 pl-3', false: '' },
  },
  defaultVariants: { showLine: false },
})

/** 树节点变体 */
export const treeNodeVariants = cva(
  'relative flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
  {
    variants: {
      selected: { true: 'bg-primary-500/10 text-primary-500 font-medium', false: '' },
      disabled: { true: 'opacity-50 pointer-events-none cursor-not-allowed', false: '' },
    },
    defaultVariants: { selected: false, disabled: false },
  },
)

/** 树节点内容变体 */
export const treeNodeContentVariants = cva('flex items-center gap-1.5 flex-1 min-w-0', { variants: {} })

/** 展开/折叠图标变体 */
export const treeExpandIconVariants = cva(
  'flex-shrink-0 w-4 h-4 text-muted-foreground transition-transform duration-200',
  {
    variants: { expanded: { true: 'rotate-90', false: '' } },
    defaultVariants: { expanded: false },
  },
)

/** 搜索框变体 */
export const treeSearchVariants = cva('mb-2 w-full', { variants: {} })
