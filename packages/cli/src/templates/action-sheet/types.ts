import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { actionSheetVariants } from './action-sheet-variants'

/** 动作面板选项 */
export interface ActionSheetItem {
  /** 选项文本 */
  label: string
  /** 点击回调 */
  onClick?: () => void
  /** 是否为危险操作（红色文字） */
  danger?: boolean
  /** 是否禁用 */
  disabled?: boolean
}

/**
 * ActionSheet Props
 *
 * iOS 风格底部弹出选项面板，支持标题、操作列表和取消按钮。
 */
export interface ActionSheetProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof actionSheetVariants> {
  /** 是否可见 */
  open: boolean
  /** 关闭回调 */
  onClose: () => void
  /** 选项列表 */
  actions: ActionSheetItem[]
  /** 标题 */
  title?: string
  /** 取消按钮文本，默认 '取消' */
  cancelText?: string
  /** 点击遮罩是否关闭，默认 true */
  maskClosable?: boolean
}
