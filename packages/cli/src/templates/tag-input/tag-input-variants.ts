import { cva } from 'class-variance-authority'

/**
 * TagInput 组件的 cva 变体配置
 *
 * 基础样式：flex-wrap 容器、圆角边框、聚焦环。
 * 2 种状态变体：error / warning，控制边框和聚焦环颜色。
 */
export const tagInputVariants = cva(
  'flex flex-wrap items-center gap-1.5 min-h-[38px] w-full rounded-md border border-gray-400 bg-white px-3 py-1.5 text-sm transition-colors ' +
    'focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1 ' +
    'disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      status: {
        error: 'border-danger focus-within:ring-danger',
        warning: 'border-warning focus-within:ring-warning',
      },
    },
    defaultVariants: {},
  },
)
