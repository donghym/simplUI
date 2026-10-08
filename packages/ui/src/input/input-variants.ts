import { cva } from 'class-variance-authority'

/**
 * 输入框组件样式变体
 * 使用新的状态色系统：
 * - ring-primary-focus 聚焦时的发光环
 * - border-primary 聚焦时的边框颜色
 */
export const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-gray-400 bg-white px-3 text-sm transition-colors ' +
    'file:border-0 file:bg-transparent file:text-sm ' +
    'placeholder:text-muted-foreground ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus ' +
    'focus-visible:border-primary focus-visible:ring-offset-1 ' +
    'disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      status: {
        error: 'border-danger focus-visible:ring-danger-focus focus-visible:border-danger',
        warning: 'border-warning focus-visible:ring-warning-focus focus-visible:border-warning',
      },
    },
  },
)
