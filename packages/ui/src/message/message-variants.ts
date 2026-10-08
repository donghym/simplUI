import { cva } from 'class-variance-authority'

/**
 * Message 组件的 cva 变体配置
 *
 * 基础样式：弹性布局、图标与文字间距、内边距、圆角、阴影、小字号、边框。
 * 5 种消息类型变体：success / error / warning / info / loading。
 */
export const messageVariants = cva(
  'flex items-center gap-2 px-4 py-3 rounded-md shadow-lg text-sm ' +
    'border border-solid transition-all duration-300 ' +
    'max-w-md w-fit',
  {
    variants: {
      type: {
        success:
          'bg-success-50 text-success-800 border-success-200',
        error:
          'bg-danger-50 text-danger-800 border-danger-200',
        warning:
          'bg-warning-50 text-warning-800 border-warning-200',
        info:
          'bg-primary-50 text-primary-800 border-primary-200',
        loading:
          'bg-primary-50 text-primary-800 border-primary-200',
      },
    },
    defaultVariants: { type: 'info' },
  },
)