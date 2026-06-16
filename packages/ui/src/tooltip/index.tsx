import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { tooltipVariants, tooltipArrowVariants } from './tooltip-variants'
import type { TooltipPlacement, TooltipProps } from './types'

/**
 * 根据 placement 反推箭头指向方向
 *
 * placement 表示 tooltip 出现在触发元素的哪个方位，
 * 箭头则需指向相反方向（指向触发元素）。
 * 例如 placement='top' 时 tooltip 在上方，箭头朝下。
 */
function getArrowDirection(placement: TooltipPlacement): 'top' | 'bottom' | 'left' | 'right' {
  if (placement === 'top') return 'bottom'
  if (placement === 'bottom') return 'top'
  if (placement === 'left') return 'right'
  return 'left'
}

/**
 * Tooltip 文字提示
 *
 * 鼠标悬停、聚焦或点击触发元素时显示文字提示气泡。
 * 支持受控（open/onOpenChange）和非受控（defaultOpen）两种模式。
 * 支持打开/关闭延迟，避免频繁闪烁。
 */
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      placement = 'top',
      trigger = 'hover',
      arrow = true,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      openDelay = 100,
      closeDelay = 100,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const openTimerRef = useRef<ReturnType<typeof setTimeout>>()
    const closeTimerRef = useRef<ReturnType<typeof setTimeout>>()

    // 合并 forwardedRef 与内部 wrapperRef
    const setWrapperRef = useCallback(
      (node: HTMLDivElement | null) => {
        (wrapperRef as { current: HTMLDivElement | null }).current = node
        if (typeof forwardedRef === 'function') forwardedRef(node)
        else if (forwardedRef) (forwardedRef as { current: HTMLDivElement | null }).current = node
      },
      [forwardedRef],
    )

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

    // 清除所有定时器
    const clearTimers = useCallback(() => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current)
        openTimerRef.current = undefined
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
        closeTimerRef.current = undefined
      }
    }, [])

    // 延迟打开
    const delayedOpen = useCallback(() => {
      clearTimers()
      openTimerRef.current = setTimeout(() => {
        setVisible(true)
      }, openDelay)
    }, [clearTimers, openDelay, setVisible])

    // 延迟关闭
    const delayedClose = useCallback(() => {
      clearTimers()
      closeTimerRef.current = setTimeout(() => {
        setVisible(false)
      }, closeDelay)
    }, [clearTimers, closeDelay, setVisible])

    // 立即关闭
    const instantClose = useCallback(() => {
      clearTimers()
      setVisible(false)
    }, [clearTimers, setVisible])

    // hover 触发：鼠标进入延迟打开，离开延迟关闭
    const handleMouseEnter = useCallback(() => {
      if (trigger === 'hover') delayedOpen()
    }, [trigger, delayedOpen])

    const handleMouseLeave = useCallback(() => {
      if (trigger === 'hover') delayedClose()
    }, [trigger, delayedClose])

    // focus 触发：focusin 延迟打开，focusout 延迟关闭
    const handleFocusIn = useCallback(() => {
      if (trigger === 'focus') delayedOpen()
    }, [trigger, delayedOpen])

    const handleFocusOut = useCallback(
      (e: React.FocusEvent) => {
        if (trigger === 'focus') {
          if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
            delayedClose()
          }
        }
      },
      [trigger, delayedClose],
    )

    // click 触发：点击切换
    const handleClick = useCallback(() => {
      if (trigger === 'click') setVisible(!visible)
    }, [trigger, visible, setVisible])

    // ESC 关闭
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape' && visible) {
          instantClose()
        }
      },
      [visible, instantClose],
    )

    // 全局 ESC 监听
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        clearTimers()
      }
    }, [handleKeyDown, clearTimers])

    const arrowDir = getArrowDirection(placement)

    return (
      <div
        ref={setWrapperRef}
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        onClick={handleClick}
        aria-expanded={visible}
        {...rest}
      >
        {children}
        <div
          role="tooltip"
          className={cn(
            tooltipVariants({ placement, visible }),
            className,
          )}
        >
          {content}
          {arrow && (
            <div
              className={tooltipArrowVariants({ arrowPlacement: arrowDir })}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    )
  },
)
Tooltip.displayName = 'Tooltip'

export { Tooltip }
export type { TooltipProps, TooltipPlacement, TooltipTrigger } from './types'
export { tooltipVariants, tooltipArrowVariants } from './tooltip-variants'

export default Tooltip