import { cva } from 'class-variance-authority'

/**
 * Breadcrumb 容器变体
 */
export const breadcrumbVariants = cva(
  'flex items-center flex-wrap gap-0 text-sm text-muted-foreground',
  {
    variants: {},
    defaultVariants: {},
  }
)

/**
 * Breadcrumb.Item 单项变体
 */
export const breadcrumbItemVariants = cva(
  'inline-flex items-center gap-1 transition-colors',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
      isLast: {
        true: 'font-medium text-foreground',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
      isLast: false,
    },
  }
)

/**
 * Breadcrumb 链接样式
 */
export const breadcrumbLinkVariants = cva(
  'hover:text-primary-500 transition-colors cursor-pointer',
  {
    variants: {},
    defaultVariants: {},
  }
)

/**
 * Breadcrumb.Separator 分隔符变体
 */
export const breadcrumbSeparatorVariants = cva(
  'mx-2 text-muted-foreground select-none',
  {
    variants: {},
    defaultVariants: {},
  }
)