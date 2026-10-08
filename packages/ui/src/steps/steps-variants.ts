import { cva } from 'class-variance-authority'

/** 步骤条基础样式 */
export const stepsVariants = cva('flex', {
  variants: {
    direction: { horizontal: 'flex-row', vertical: 'flex-col' },
    stepSize: { default: '', small: '' },
    variant: { default: '', outlined: '', inline: 'bg-muted rounded-lg p-2' },
  },
  defaultVariants: { direction: 'horizontal', stepSize: 'default', variant: 'default' },
})

/** 步骤项样式 */
export const stepItemVariants = cva('relative', {
  variants: {
    direction: { horizontal: 'flex-1 flex flex-col items-center', vertical: 'flex flex-row items-start pb-6 last:pb-0' },
    status: { wait: '', process: '', finish: '', error: '' },
    stepSize: { default: '', small: '' },
    variant: { default: '', outlined: '', inline: '' },
    clickable: { true: 'cursor-pointer', false: '' },
    disabled: { true: 'cursor-not-allowed opacity-50', false: '' },
    progressDot: { true: '', false: '' },
    labelPlacement: { horizontal: '', vertical: '' },
  },
  defaultVariants: { direction: 'horizontal', status: 'wait', stepSize: 'default', variant: 'default' },
})

/** 步骤图标容器样式 */
export const stepIconVariants = cva('flex items-center justify-center rounded-full border-2 font-medium transition-all duration-200', {
  variants: {
    status: {
      wait: 'border-border text-muted-foreground bg-transparent',
      process: 'border-primary-500 bg-primary-500 text-white',
      finish: 'border-primary-500 bg-primary-500 text-white',
      error: 'border-danger-500 bg-danger-500 text-white',
    },
    stepSize: { default: 'w-8 h-8 text-sm', small: 'w-6 h-6 text-xs' },
    progressDot: { true: 'w-2 h-2 border-0', false: '' },
  },
  defaultVariants: { status: 'wait', stepSize: 'default', progressDot: false },
})