import { cva } from 'class-variance-authority'

/** JSON 表单渲染器容器样式 */
export const jsonSchemaRenderVariants = cva(
  'rounded-lg border border-border bg-background p-4',
  {
    variants: {
      /** 布局模式 */
      layout: {
        /** 垂直布局，标签在控件上方 */
        vertical: '',
        /** 水平布局，标签在控件左侧 */
        horizontal: '',
      },
    },
    defaultVariants: {
      layout: 'vertical',
    },
  }
)

/** 表单字段组样式 */
export const fieldGroupVariants = cva(
  'flex flex-col gap-1',
  {
    variants: {
      layout: {
        vertical: '',
        horizontal: 'flex-row items-start gap-3',
      },
    },
    defaultVariants: { layout: 'vertical' },
  }
)

/** 字段标签样式 */
export const fieldLabelVariants = cva(
  'text-sm font-medium text-foreground',
  {
    variants: {
      layout: {
        vertical: '',
        horizontal: 'w-28 flex-shrink-0 pt-1.5 text-right',
      },
    },
    defaultVariants: { layout: 'vertical' },
  }
)

/** 错误提示样式 */
export const fieldErrorVariants = cva(
  'text-xs text-danger-500 mt-0.5'
)
