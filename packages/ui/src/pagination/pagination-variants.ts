import { cva } from 'class-variance-authority'

/** 分页组件基础样式变体 */
export const paginationVariants = cva(
  'inline-flex items-center gap-1 text-sm select-none',
  {
    variants: {
      disabled: {
        true: 'pointer-events-none opacity-50',
      },
      simple: {
        true: 'gap-2',
      },
    },
    defaultVariants: {
      disabled: false,
      simple: false,
    },
  }
)

/** 分页项样式变体 */
export const paginationItemVariants = cva(
  'inline-flex items-center justify-center min-w-[32px] h-[32px] px-2 rounded-md ' +
    'transition-colors duration-200 cursor-pointer ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
  {
    variants: {
      active: {
        true: 'bg-primary-500 text-white border border-solid border-primary-500',
        false: 'bg-background text-foreground border border-solid border-border hover:border-primary-500 hover:text-primary-500',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 bg-muted text-muted-foreground border-border',
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  }
)

/** 分页跳转输入框样式变体 */
export const paginationJumperVariants = cva(
  'inline-flex items-center gap-1 text-muted-foreground',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 分页总数文本样式变体 */
export const paginationTotalVariants = cva(
  'text-muted-foreground mr-2',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 分页每页条数选择器样式变体 */
export const paginationSizeChangerVariants = cva(
  'inline-flex items-center gap-1 ml-2',
  {
    variants: {},
    defaultVariants: {},
  }
)