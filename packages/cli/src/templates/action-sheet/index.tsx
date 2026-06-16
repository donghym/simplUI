import { forwardRef, useEffect, useCallback } from 'react'
import { cn } from '../lib/utils'
import {
  actionSheetVariants,
  actionSheetOverlayVariants,
  actionSheetItemVariants,
  actionSheetCancelVariants,
} from './action-sheet-variants'
import type { ActionSheetProps, ActionSheetItem } from './types'

/**
 * ActionSheet 底部动作面板
 *
 * iOS 风格底部弹出选项列表，支持标题、操作区和取消按钮。
 */
const ActionSheet = forwardRef<HTMLDivElement, ActionSheetProps>(({
  open,
  onClose,
  actions,
  title,
  cancelText = '取消',
  maskClosable = true,
  className,
  ...rest
}, ref) => {
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

  const handleMaskClick = useCallback(() => {
    if (maskClosable) onClose()
  }, [maskClosable, onClose])

  const handleActionClick = useCallback((action: ActionSheetItem) => {
    if (action.disabled) return
    action.onClick?.()
    onClose()
  }, [onClose])

  if (!open) return null

  return (
    <>
      {/* 遮罩层 */}
      <div
        className={cn(actionSheetOverlayVariants({ visible: open }))}
        onClick={handleMaskClick}
        aria-hidden="true"
      />

      {/* 面板 */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(actionSheetVariants({ visible: open }), className)}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {/* 标题区 */}
        {title && (
          <div className="border-b border-border px-4 py-3 text-center text-sm text-muted-foreground">
            {title}
          </div>
        )}

        {/* 操作区 */}
        <div className="divide-y divide-border">
          {actions.map((action, index) => (
            <button
              key={index}
              type="button"
              disabled={action.disabled}
              className={cn(actionSheetItemVariants({
                danger: action.danger,
                disabled: action.disabled,
              }))}
              onClick={() => handleActionClick(action)}
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* 分隔线 + 取消区 */}
        <div className="h-2 bg-muted" />
        <button
          type="button"
          className={cn(actionSheetCancelVariants())}
          onClick={onClose}
        >
          {cancelText}
        </button>
      </div>
    </>
  )
})

ActionSheet.displayName = 'ActionSheet'

export { ActionSheet }
export type { ActionSheetProps, ActionSheetItem } from './types'
export { actionSheetVariants } from './action-sheet-variants'

export default ActionSheet
