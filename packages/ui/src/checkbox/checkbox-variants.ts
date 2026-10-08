import { cva } from 'class-variance-authority'

/**
 * Checkbox cva 变体配置
 *
 * 定义复选框视觉框的样式：选中时蓝色填充、未选中时白色边框、
 * 禁用时灰色半透明。半选状态的视觉框复用选中状态样式。
 */
export const checkboxVariants = cva(
  'inline-flex items-center justify-center h-4 w-4 rounded border border-solid ' +
    'transition-colors duration-200 select-none ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1',
  {
    variants: {
      checked: {
        true: 'bg-primary-500 border-primary-500 text-white hover:bg-primary-600',
        false: 'bg-background border-border hover:border-primary-500',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50 border-border',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
)