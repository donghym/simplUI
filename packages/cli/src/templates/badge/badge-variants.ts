import { cva } from 'class-variance-authority'

/**
 * Badge 组件的 cva 变体配置
 *
 * 基础样式：绝对定位在右上角、最小宽度 20px、高度 20px、水平内边距 6px、
 * 圆角胶囊形、白色文字、小字号、不可选中、不可点击穿透。
 * 5 种语义变体控制背景色：default / primary / success / warning / danger。
 */
export const badgeVariants = cva(
  'absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center ' +
    'rounded-full text-[11px] font-semibold leading-none text-white ' +
    'whitespace-nowrap pointer-events-none select-none z-10 ' +
    'shadow-sm ring-2 ring-white',
  {
    variants: {
      variant: {
        default: 'bg-gray-500',
        primary: 'bg-primary-500',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        danger: 'bg-danger-500',
      },
    },
    defaultVariants: { variant: 'danger' },
  },
)