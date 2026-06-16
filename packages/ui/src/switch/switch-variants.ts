import { cva } from 'class-variance-authority'

/** Switch 轨道 cva，定义开关容器样式 - 参考 Uiverse 滑动开关效果 */
export const switchTrackVariants = cva(
  'relative inline-flex items-center rounded-full cursor-pointer transition-colors duration-300 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  {
    variants: {
      checked: {
        true: 'bg-success-500',
        false: 'bg-danger-500',
      },
      loading: {
        true: 'cursor-wait opacity-75',
        false: '',
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

/** Switch 滑块 cva - 使用 translateX 实现滑动动画 */
export const switchHandleVariants = cva(
  'absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-out',
  {
    variants: {
      checked: {
        true: 'translate-x-4',
        false: 'translate-x-0',
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
)
