import { useEffect, useCallback, useRef, forwardRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { modalVariants, overlayVariants } from './modal-variants'
import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './types'

/**
 * Modal 模态对话框
 *
 * 弹窗遮盖层 + 居中内容面板，支持 ESC 关闭和遮罩点击关闭。
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  open,
  onClose,
  title,
  width = 520,
  footer,
  maskClosable = true,
  closable = true,
  afterClose,
  className,
  children,
  ...rest
}, ref) => {
  const afterCloseRef = useRef(afterClose)
  afterCloseRef.current = afterClose

  // 打开时禁止 body 滚动
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // ESC 关闭
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    },
    [open, onClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // 关闭后回调
  useEffect(() => {
    if (!open && afterCloseRef.current) {
      const timer = setTimeout(afterCloseRef.current, 200)
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!open) return null

  const handleMaskClick = () => {
    if (maskClosable) onClose()
  }

  return (
    <>
      {/* 遮罩层 */}
      <div className={overlayVariants({ visible: open })} onClick={handleMaskClick} />

      {/* 弹窗面板 */}
      <div className={modalVariants({ centered: true })} {...rest}>
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          style={{ width: typeof width === 'number' ? `${width}px` : width } /* 动态宽度，允许保留 */}
          className={cn(
            'relative bg-background rounded-lg shadow-xl z-50 flex flex-col max-h-[90vh]',
            className,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 标题栏 */}
          {(title || closable) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {closable && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="关闭"
                  className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          )}

          {/* 内容区 */}
          <div className="px-6 py-4 overflow-auto">{children}</div>

          {/* 底部操作区 */}
          {footer !== undefined && (
            <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  )
})

Modal.displayName = 'Modal'

/** ModalHeader 自定义头部 */
const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn('flex items-center justify-between px-6 py-4 border-b border-border', className)} {...rest} />
))

ModalHeader.displayName = 'ModalHeader'

/** ModalBody 自定义内容区 */
const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn('px-6 py-4', className)} {...rest} />
))

ModalBody.displayName = 'ModalBody'

/** ModalFooter 自定义底部 */
const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn('flex items-center justify-end gap-2 px-6 py-4 border-t border-border', className)} {...rest} />
))

ModalFooter.displayName = 'ModalFooter'

export { Modal, ModalHeader, ModalBody, ModalFooter }
export type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps, ModalWidth } from './types'
export { modalVariants, overlayVariants } from './modal-variants'

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})