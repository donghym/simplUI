import { cva } from 'class-variance-authority'

/** ElasticToggle 轨道样式变体 - 参考 Switch 组件 */
export const elasticToggleVariants = cva(
  'relative inline-flex items-center rounded-full cursor-pointer transition-colors duration-300 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  {
    variants: {
      checked: {
        true: 'bg-success-500',
        false: 'bg-danger-500',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
)

/** ElasticToggle 滑块样式变体 - 使用 translateX 实现滑动动画 */
export const elasticHandleVariants = cva(
  'absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-out',
  {
    variants: {
      checked: {
        true: 'translate-x-4',
        false: 'translate-x-0',
      },
      animating: {
        true: 'scale-x-110',
        false: 'scale-x-100',
      },
    },
    defaultVariants: {
      checked: false,
      animating: false,
    },
  },
)
