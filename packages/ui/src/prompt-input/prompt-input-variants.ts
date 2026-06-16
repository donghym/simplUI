import { cva } from 'class-variance-authority'

/** 输入框容器变体 */
export const promptInputVariants = cva(
  'flex flex-col rounded-lg border border-border bg-background transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: { disabled: false },
  },
)

/** 文本区域变体 */
export const promptTextareaVariants = cva(
  'w-full resize-none bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 底部工具栏变体 */
export const promptToolbarVariants = cva(
  'flex items-center justify-between border-t border-border px-3 py-2',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 发送按钮变体 */
export const promptSendBtnVariants = cva(
  'rounded-md px-3 py-1 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 模板下拉菜单变体 */
export const promptTemplateMenuVariants = cva(
  'absolute bottom-full left-0 mb-1 w-56 rounded-md border border-border bg-background shadow-lg z-10 overflow-hidden',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 模板菜单项变体 */
export const promptTemplateItemVariants = cva(
  'px-3 py-2 text-sm text-foreground hover:bg-muted cursor-pointer truncate',
  {
    variants: {},
    defaultVariants: {},
  },
)
