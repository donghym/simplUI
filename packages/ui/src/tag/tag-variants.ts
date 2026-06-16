import { cva } from 'class-variance-authority'

/**
 * Tag 组件的 cva 变体配置
 *
 * 基础样式：28px 高度、水平排列、小字号、圆角、边框、过渡动画。
 * 5 种语义变体：default / primary / success / warning / danger。
 */
export const tagVariants = cva(
  'inline-flex items-center gap-1 h-[28px] px-2 text-xs rounded font-medium ' +
    'transition-colors duration-200 border border-solid select-none',
  {
    variants: {
      variant: {
        default:
          'bg-muted text-foreground border-border',
        primary:
          'bg-primary-50 text-primary-700 border-primary-200',
        success:
          'bg-success-50 text-success-700 border-success-200',
        warning:
          'bg-warning-50 text-warning-700 border-warning-200',
        danger:
          'bg-danger-50 text-danger-700 border-danger-200',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)