import { cva } from 'class-variance-authority'

/**
 * Notification 组件的 cva 变体配置
 *
 * 基础样式：弹性布局、图标与内容间距、内边距、圆角、阴影。
 * 4 种通知类型变体：success / error / warning / info。
 */
export const notificationVariants = cva(
  'flex items-start gap-3 p-4 rounded-lg shadow-lg border border-solid ' +
    'bg-white w-80 max-w-full transition-all duration-300',
  {
    variants: {
      type: {
        success: 'border-success-200',
        error: 'border-danger-200',
        warning: 'border-warning-200',
        info: 'border-primary-200',
      },
    },
    defaultVariants: { type: 'info' },
  },
)

/**
 * 图标容器变体配置
 *
 * 根据通知类型设置图标颜色和背景色。
 */
export const notificationIconVariants = cva('shrink-0 flex items-center justify-center ' +
  'w-8 h-8 rounded-full', {
  variants: {
    type: {
      success: 'bg-success-100 text-success-600',
      error: 'bg-danger-100 text-danger-600',
      warning: 'bg-warning-100 text-warning-600',
      info: 'bg-primary-100 text-primary-600',
    },
  },
  defaultVariants: { type: 'info' },
})
