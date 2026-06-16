import { cva } from 'class-variance-authority'

/** 进度条基础样式 */
export const progressVariants = cva(
  'relative',
  {
    variants: {
      progressShape: {
        /** 线性进度条 */
        line: 'w-full',
        /** 圆形进度条 */
        circle: 'inline-flex items-center justify-center',
      },
      status: {
        /** 正常状态 */
        normal: '',
        /** 成功状态 */
        success: '',
        /** 错误状态 */
        error: '',
      },
    },
    defaultVariants: {
      progressShape: 'line',
      status: 'normal',
    },
  }
)

/** 进度条轨道样式 */
export const progressTrackVariants = cva(
  'bg-muted overflow-hidden',
  {
    variants: {
      progressShape: {
        line: 'rounded-full h-2',
        circle: '',
      },
    },
    defaultVariants: {
      progressShape: 'line',
    },
  }
)

/** 进度条填充样式 */
export const progressFillVariants = cva(
  'transition-all duration-300 ease-out',
  {
    variants: {
      progressShape: {
        line: 'h-full rounded-full',
        circle: '',
      },
      status: {
        normal: 'bg-primary-500',
        success: 'bg-success-500',
        error: 'bg-danger-500',
      },
    },
    defaultVariants: {
      progressShape: 'line',
      status: 'normal',
    },
  }
)
