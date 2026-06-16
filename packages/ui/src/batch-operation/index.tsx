import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { batchOperationVariants } from './batch-operation-variants'
import type { BatchOperationProps, BatchAction } from './types'

/** 渲染单个操作按钮 */
const renderAction = (action: BatchAction, index: number) => {
  const { label, onClick, danger = false, disabled = false } = action
  return (
    <button
      key={index}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'sui-batch-operation-action px-3 py-1.5 text-sm rounded-md font-medium transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
        'disabled:pointer-events-none disabled:opacity-50',
        danger
          ? 'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700'
          : 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
      )}
    >
      {label}
    </button>
  )
}

/** 批量操作栏组件 */
export const BatchOperation = forwardRef<HTMLDivElement, BatchOperationProps>(
  (props, ref) => {
    const {
      className,
      selectedCount,
      actions,
      onClear,
      position = 'bottom',
      ...rest
    } = props

    if (selectedCount <= 0) return null

    return (
      <div
        ref={ref}
        role="toolbar"
        aria-label={`已选中 ${selectedCount} 项，批量操作栏`}
        className={cn(
          'sui-batch-operation',
          batchOperationVariants({ position }),
          className,
        )}
        {...rest}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            已选择 <span className="font-semibold text-primary-500">{selectedCount}</span> 项
          </span>
          {onClear && (
            <button
              type="button"
              onClick={onClear}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-2"
            >
              清空
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          {actions.map(renderAction)}
        </div>
      </div>
    )
  }
)
BatchOperation.displayName = 'BatchOperation'

export type { BatchOperationProps, BatchAction } from './types'
export { batchOperationVariants } from './batch-operation-variants'
