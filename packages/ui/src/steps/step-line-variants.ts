import { cva } from 'class-variance-authority'

/** 连接线颜色样式（定位在组件中处理） */
export const stepLineVariants = cva('h-full w-full', {
  variants: {
    status: {
      wait: 'bg-muted',
      process: 'bg-muted',
      finish: 'bg-primary-500',
      error: 'bg-danger-500',
    },
  },
  defaultVariants: { status: 'wait' },
})

/** 进度条样式（用于 percent） */
export const stepProgressVariants = cva('absolute h-full bg-primary-500 transition-all duration-300', {
  variants: {
    direction: {
      horizontal: 'top-0',
      vertical: 'left-0',
    },
  },
  defaultVariants: { direction: 'horizontal' },
})