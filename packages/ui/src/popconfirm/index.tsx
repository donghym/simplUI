import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { popconfirmVariants, arrowVariants } from './popconfirm-variants'
import type { PopconfirmProps, PopconfirmPlacement } from './types'

function getArrowDirection(placement: PopconfirmPlacement): 'top' | 'bottom' | 'left' | 'right' {
  if (placement.startsWith('top')) return 'bottom'
  if (placement.startsWith('bottom')) return 'top'
  if (placement.startsWith('left')) return 'right'
  return 'left'
}

export const Popconfirm = forwardRef<HTMLSpanElement, PopconfirmProps>(({
  title,
  description,
  okText = '确定',
  cancelText = '取消',
  onConfirm,
  onCancel,
  open: controlledOpen,
  onOpenChange,
  trigger = 'click',
  icon = (
    <svg viewBox="64 64 896 896" width="16" height="16" fill="#faad14">
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
    </svg>
  ),
  disabled = false,
  children,
  style,
  className,
  placement = 'top',
}, ref) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const triggerRef = useRef<HTMLSpanElement | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange],
  )

  const handleConfirm = useCallback(() => {
    setOpen(false)
    onConfirm?.()
  }, [setOpen, onConfirm])

  const handleCancel = useCallback(() => {
    setOpen(false)
    onCancel?.()
  }, [setOpen, onCancel])

  useEffect(() => {
    if (trigger !== 'click') return
    const handleDocClick = (e: MouseEvent) => {
      if (!open) return
      const target = e.target as Node
      if (
        triggerRef.current?.contains(target) ||
        popoverRef.current?.contains(target)
      ) {
        return
      }
      setOpen(false)
    }
    document.addEventListener('mousedown', handleDocClick)
    return () => document.removeEventListener('mousedown', handleDocClick)
  }, [open, trigger, setOpen])

  const triggerProps: React.HTMLAttributes<HTMLSpanElement> = {}
  if (!disabled) {
    if (trigger === 'click') {
      triggerProps.onClick = (e) => {
        e.stopPropagation()
        setOpen(!open)
      }
    } else if (trigger === 'hover') {
      triggerProps.onMouseEnter = () => setOpen(true)
      triggerProps.onMouseLeave = () => setOpen(false)
    } else if (trigger === 'focus') {
      triggerProps.onFocus = () => setOpen(true)
      triggerProps.onBlur = () => setOpen(false)
    }
  }

  const setTriggerRef = useCallback(
    (el: HTMLSpanElement | null) => {
      triggerRef.current = el
      if (ref) {
        if (typeof ref === 'function') ref(el)
        else Object.assign(ref, { current: el })
      }
    },
    [ref],
  )

  const arrowDir = getArrowDirection(placement)

  return (
    <span
      ref={setTriggerRef}
      className="sui-popconfirm-trigger relative inline-block"
    >
      <span {...triggerProps}>{children}</span>
      {open && (
        <div
          ref={popoverRef}
          className={cn('sui-popconfirm', popconfirmVariants({ placement }), className)}
          style={style}
        >
          <div className="sui-popconfirm__inner">
            <div className="sui-popconfirm__body">
              {icon && <span className="sui-popconfirm__icon">{icon}</span>}
              <div className="sui-popconfirm__content">
                {title && <div className="sui-popconfirm__title">{title}</div>}
                {description && (
                  <div className="sui-popconfirm__description">{description}</div>
                )}
              </div>
            </div>
            <div className="sui-popconfirm__footer">
              <button
                type="button"
                className="sui-popconfirm__btn sui-popconfirm__btn--cancel"
                onClick={handleCancel}
              >
                {cancelText}
              </button>
              <button
                type="button"
                className="sui-popconfirm__btn sui-popconfirm__btn--ok"
                onClick={handleConfirm}
              >
                {okText}
              </button>
            </div>
          </div>
          <div
            className={cn('sui-popconfirm__arrow', arrowVariants({ arrowPlacement: arrowDir }))}
            aria-hidden="true"
          />
        </div>
      )}
    </span>
  )
})

Popconfirm.displayName = 'Popconfirm'
