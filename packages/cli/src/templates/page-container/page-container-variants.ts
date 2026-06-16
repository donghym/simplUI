import { cva } from 'class-variance-authority'

/** PageContainer 容器变体 */
export const pageContainerVariants = cva(
  'sui-page-container flex flex-col min-h-full bg-background',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** PageContainer 头部区域变体 */
export const pageContainerHeaderVariants = cva(
  'flex items-center justify-between gap-4 pb-4',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** PageContainer 标题变体 */
export const pageContainerTitleVariants = cva(
  'text-xl font-semibold text-foreground m-0',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** PageContainer 内容区域变体 */
export const pageContainerContentVariants = cva(
  'flex-1 py-4',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** PageContainer 面包屑区域变体 */
export const pageContainerBreadcrumbVariants = cva(
  'pb-3',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** PageContainer 页脚区域变体 */
export const pageContainerFooterVariants = cva(
  'border-t border-border pt-4 pb-2',
  {
    variants: {},
    defaultVariants: {},
  }
)
