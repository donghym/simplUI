import { cva } from 'class-variance-authority'

/** Switch 轨道 cva，定义开关容器样式 */
export const switchTrackVariants = cva(
  'relative inline-flex items-center rounded-full transition-colors duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1',
  {
    variants: {
      checked: {
        true: 'bg-primary-500',
        false: 'bg-muted-foreground/30',
      },
      loading: {
        true: 'cursor-wait opacity-75',
        false: 'cursor-pointer',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      loading: false,
      disabled: false,
    },
  },
)

/** Switch 滑块 cva，定义滑动圆点样式，使用 left/right 定位以支持动态宽度 */
export const switchHandleVariants = cva(
  'absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200',
  {
    variants: {
      checked: {
        true: 'right-0.5 left-auto',
        false: 'left-0.5 right-auto',
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
)