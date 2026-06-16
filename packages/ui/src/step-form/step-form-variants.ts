import { cva } from 'class-variance-authority'

/** 分步表单基础样式 */
export const stepFormVariants = cva(
  'sui-step-form w-full',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 步骤指示器样式 */
export const stepFormIndicatorVariants = cva(
  'sui-step-form-indicator flex items-center mb-6',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 步骤内容区样式 */
export const stepFormContentVariants = cva(
  'sui-step-form-content min-h-[120px] mb-6',
  {
    variants: {},
    defaultVariants: {},
  }
)

/** 步骤导航按钮区样式 */
export const stepFormActionsVariants = cva(
  'sui-step-form-actions flex items-center justify-end gap-3',
  {
    variants: {},
    defaultVariants: {},
  }
)
