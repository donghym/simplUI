import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { batchOperationVariants } from './batch-operation-variants'

/** 批量操作项 */
export interface BatchAction {
  /** 操作按钮文本 */
  label: string
  /** 点击回调 */
  onClick: () => void
  /** 是否为危险操作（红色按钮），默认 false */
  danger?: boolean
  /** 是否禁用 */
  disabled?: boolean
}

/** BatchOperation 组件属性 */
export interface BatchOperationProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof batchOperationVariants> {
  /** 已选中数量 */
  selectedCount: number
  /** 操作按钮列表 */
  actions: BatchAction[]
  /** 清空选择回调 */
  onClear?: () => void
  /** 位置，默认 'bottom' */
  position?: 'top' | 'bottom'
}
