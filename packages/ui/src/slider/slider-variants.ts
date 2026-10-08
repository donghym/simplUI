import { cva } from 'class-variance-authority'

export const sliderVariants = cva(
  'relative w-full rounded-full bg-gray-400 select-none',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: 'cursor-pointer',
      },
      componentSize: {
        small: 'h-1',
        middle: 'h-2',
        large: 'h-3',
      },
    },
    defaultVariants: { disabled: false, componentSize: 'middle' },
  },
)

/**
 * 滑块轨道（已选择部分）样式
 */
export const sliderTrackVariants = cva(
  'absolute h-full rounded-full bg-primary-500',
  {
    variants: {
      disabled: {
        true: 'bg-muted-foreground',
        false: '',
      },
    },
    defaultVariants: { disabled: false },
  },
)

/**
 * 滑块手柄样式
 */
export const sliderHandleVariants = cva(
  'absolute rounded-full bg-white border-2 border-primary-500 ' +
    'shadow-sm transition-transform duration-150 ' +
    'hover:scale-110 active:scale-95 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  {
    variants: {
      disabled: {
        true: 'border-muted-foreground cursor-not-allowed hover:scale-100',
        false: 'cursor-grab active:cursor-grabbing',
      },
      componentSize: {
        small: 'w-3 h-3 -mt-[5px]',
        middle: 'w-4 h-4 -mt-1',
        large: 'w-5 h-5 -mt-[5px]',
      },
    },
    defaultVariants: { disabled: false, componentSize: 'middle' },
  },
)

/**
 * 刻度标记点样式
 */
export const sliderMarkVariants = cva(
  'absolute w-1 h-1 rounded-full bg-muted-foreground -translate-x-1/2',
  {
    variants: {
      active: {
        true: 'bg-primary-500',
        false: '',
      },
    },
    defaultVariants: { active: false },
  },
)
