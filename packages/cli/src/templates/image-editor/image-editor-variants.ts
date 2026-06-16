import { cva } from 'class-variance-authority'

/** 图片编辑器容器样式 */
export const imageEditorVariants = cva(
  'relative flex flex-col rounded-lg border border-border bg-background overflow-hidden',
  {
    variants: {
      /** 编辑器状态 */
      status: {
        /** 默认状态 */
        default: '',
        /** 裁剪模式 */
        cropping: 'ring-2 ring-primary-500',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  }
)

/** 工具栏样式 */
export const toolbarVariants = cva(
  'flex items-center gap-1 border-t border-border bg-muted/30 px-3 py-2'
)

/** 工具按钮样式 */
export const toolButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md p-2 text-sm ' +
    'text-foreground transition-colors hover:bg-muted hover:text-primary-600 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      /** 按钮激活状态 */
      active: {
        true: 'bg-primary-50 text-primary-600',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)
