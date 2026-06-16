import { cva } from 'class-variance-authority'

/**
 * Alert 变体配置
 *
 * 定义警告提示组件的视觉风格变体。
 */
export const alertVariants = cva(
  'sui-alert sui-alert--with-description',
  {
    variants: {
      type: {
        /** 成功提示，绿色主题 */
        success: 'sui-alert--success',
        /** 信息提示，蓝色主题 */
        info: 'sui-alert--info',
        /** 警告提示，橙色主题 */
        warning: 'sui-alert--warning',
        /** 错误提示，红色主题 */
        error: 'sui-alert--error',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
)