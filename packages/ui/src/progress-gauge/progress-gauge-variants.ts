import { cva } from 'class-variance-authority'

/** 仪表盘进度基础样式 */
export const progressGaugeVariants = cva(
  'sui-progress-gauge relative inline-flex items-center justify-center',
  {
    variants: {
      type: {
        arc: '',
        circle: '',
      },
    },
    defaultVariants: {
      type: 'arc',
    },
  }
)
