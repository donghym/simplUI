import { cva } from 'class-variance-authority'

/** 批量操作栏基础样式 */
export const batchOperationVariants = cva(
  'sui-batch-operation fixed left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-background border shadow-lg transition-all duration-300',
  {
    variants: {
      position: {
        top: 'top-0 border-b',
        bottom: 'bottom-0 border-t',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
)
