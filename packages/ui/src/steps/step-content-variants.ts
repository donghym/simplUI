import { cva } from 'class-variance-authority'

/** 步骤内容样式 */
export const stepContentVariants = cva('', {
  variants: {
    direction: { horizontal: 'mt-2 text-center', vertical: 'ml-4 flex-1' },
    stepSize: { default: '', small: '' },
    progressDot: { true: '', false: '' },
    labelPlacement: { horizontal: '', vertical: 'mt-2' },
  },
  defaultVariants: { direction: 'horizontal', stepSize: 'default', progressDot: false, labelPlacement: 'horizontal' },
})

/** 步骤标题样式 */
export const stepTitleVariants = cva('font-medium', {
  variants: {
    status: { wait: 'text-muted-foreground', process: 'text-foreground', finish: 'text-foreground', error: 'text-danger-500' },
    stepSize: { default: 'text-sm', small: 'text-xs' },
  },
  defaultVariants: { status: 'wait', stepSize: 'default' },
})

/** 步骤子标题样式 */
export const stepSubTitleVariants = cva('text-xs ml-2', {
  variants: {
    status: { wait: 'text-muted-foreground', process: 'text-muted-foreground', finish: 'text-muted-foreground', error: 'text-danger-500' },
  },
  defaultVariants: { status: 'wait' },
})

/** 步骤描述样式 */
export const stepDescriptionVariants = cva('', {
  variants: {
    status: { wait: 'text-muted-foreground', process: 'text-muted-foreground', finish: 'text-muted-foreground', error: 'text-danger-500' },
    stepSize: { default: 'text-xs mt-1', small: 'text-xs mt-0.5' },
  },
  defaultVariants: { status: 'wait', stepSize: 'default' },
})