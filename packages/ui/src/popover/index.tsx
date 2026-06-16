import { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { popoverVariants, arrowVariants } from './popover-variants'
import { getArrowDirection, FLIP_MAP } from './popover-utils'
import type { PopoverPlacement } from './types'
import type { PopoverProps } from './types'

/** Popover 气泡卡片：在触发元素附近弹出浮层，支持 8 方向、click/hover 触发、受控/非受控模式、ESC/点击外部关闭、视口溢出自动翻转 */
const Popover = forwardRef<HTMLDivElement, PopoverProps>(({
  content,
  title,
  placement = 'top',
  trigger = 'click',
  arrow = true,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  children,
  className,
}, forwardedRef) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // 合并 forwarded ref 与内部 wrapperRef
  const setWrapperRef = useCallback(
    (node: HTMLDivElement | null) => {
      (wrapperRef as { current: HTMLDivElement | null }).current = node
      if (typeof forwardedRef === 'function') forwardedRef(node)
      else if (forwardedRef) (forwardedRef as { current: HTMLDivElement | null }).current = node
    },
    [forwardedRef],
  )

  // 受控/非受控状态管理
  const isControlled = controlledOpen !== undefined
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const visible = isControlled ? controlledOpen : internalOpen
  const setVisible = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange],
  )

  // 关闭浮层并将焦点返回触发元素
  const handleClose = useCallback(() => {
    setVisible(false)
    triggerRef.current?.focus()
  }, [setVisible])

  // click 触发：点击触发元素切换开关
  const handleClick = useCallback(() => {
    if (trigger === 'click') setVisible(!visible)
  }, [trigger, visible, setVisible])

  // 打开时聚焦浮层内容
  useEffect(() => {
    if (visible && contentRef.current) {
      contentRef.current.focus()
    }
  }, [visible])

  // 视口边界检测：浮层溢出时自动翻转方向
  const [adjustedPlacement, setAdjustedPlacement] = useState<PopoverPlacement>(placement)
  // placement prop 变化时重置
  useEffect(() => {
    setAdjustedPlacement(placement)
  }, [placement])

  // 浮层关闭时重置翻转状态
  useEffect(() => {
    if (!visible) {
      setAdjustedPlacement(placement)
    }
  }, [visible, placement])

  useLayoutEffect(() => {
    if (!visible || !contentRef.current) return

    // 已翻转过则不再重复检测，避免来回翻转
    if (adjustedPlacement !== placement) return

    const rect = contentRef.current.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight

    if (placement.startsWith('top') && rect.top < 0) {
      setAdjustedPlacement(FLIP_MAP[placement])
    } else if (placement.startsWith('bottom') && rect.bottom > vh) {
      setAdjustedPlacement(FLIP_MAP[placement])
    } else if (placement === 'left' && rect.left < 0) {
      setAdjustedPlacement('right')
    } else if (placement === 'right' && rect.right > vw) {
      setAdjustedPlacement('left')
    }
  }, [visible, placement, adjustedPlacement])

  // 点击外部关闭并返回焦点
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!visible) return
      const target = e.target as Node
      if (wrapperRef.current?.contains(target)) {
        return
      }
      handleClose()
    },
    [visible, handleClose],
  )

  // ESC 关闭并返回焦点
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) {
        handleClose()
      }
    },
    [visible, handleClose],
  )

  // hover 触发：鼠标进入显示、离开隐藏
  const handleMouseEnter = useCallback(() => {
    if (trigger === 'hover') setVisible(true)
  }, [trigger, setVisible])

  const handleMouseLeave = useCallback(() => {
    if (trigger === 'hover') setVisible(false)
  }, [trigger, setVisible])

  // 全局事件绑定：mousedown 检测点击外部、keydown 监听 ESC
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClickOutside, handleKeyDown])

  const arrowDir = getArrowDirection(adjustedPlacement)

  return (
    <div
      ref={setWrapperRef}
      tabIndex={-1}
      className="relative inline-block"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-haspopup="dialog"
      aria-expanded={visible}
    >
      {/* 触发元素 */}
      <span ref={triggerRef}>{children}</span>

      {/* 浮层卡片 */}
      {visible && (
        <div
          ref={contentRef}
          role="dialog"
          aria-label={typeof title === 'string' ? title : undefined}
          tabIndex={-1}
          className={cn(
            'sui-popover',
            popoverVariants({ placement: adjustedPlacement }),
            className,
          )}
        >
          {/* 箭头：指向触发元素 */}
          {arrow && (
            <div
              className={arrowVariants({ arrowPlacement: arrowDir })}
              aria-hidden="true"
            />
          )}

          {/* 标题栏 */}
          {title !== undefined && (
            <div className="px-4 pt-3 pb-2 text-sm font-semibold text-foreground border-b border-muted">
              {title}
            </div>
          )}

          {/* 内容区 */}
          <div className="px-4 py-3 text-sm text-foreground">{content}</div>
        </div>
      )}
    </div>
  )
})

Popover.displayName = 'Popover'

export { Popover }
export type { PopoverProps, PopoverPlacement, PopoverTrigger } from './types'
export { popoverVariants, arrowVariants } from './popover-variants'
export default Popover
