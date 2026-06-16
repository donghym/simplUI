import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { modalVariants } from './modal-variants'

/** 弹窗宽度 */
export type ModalWidth = number | string

/**
 * Modal Props
 *
 * 模态对话框，支持标题、内容、底部操作区和遮罩层。
 */
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, VariantProps<typeof modalVariants> {
  /** 弹窗是否可见，受控 */
  open: boolean
  /** 关闭回调（点击遮罩或关闭按钮时触发） */
  onClose: () => void
  /** 弹窗标题 */
  title?: ReactNode
  /** 弹窗宽度，默认 520 */
  width?: ModalWidth
  /** 底部内容，不传时为空 */
  footer?: ReactNode
  /** 点击遮罩层是否关闭，默认 true */
  maskClosable?: boolean
  /** 是否显示关闭按钮，默认 true */
  closable?: boolean
  /** 关闭后的回调 */
  afterClose?: () => void
  /** 自定义类名 */
  className?: string
}

/** ModalHeader Props */
export type ModalHeaderProps = HTMLAttributes<HTMLDivElement>

/** ModalBody Props */
export type ModalBodyProps = HTMLAttributes<HTMLDivElement>

/** ModalFooter Props */
export type ModalFooterProps = HTMLAttributes<HTMLDivElement>