import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { dropdownVariants, dropdownMenuVariants, dropdownItemVariants } from './dropdown-variants'
import type { DropdownProps, DropdownMenuProps, DropdownItemProps, DropdownDividerProps } from './types'

/**
 * Dropdown 下拉菜单
 *
 * 点击触发元素后弹出菜单列表，支持受控和非受控两种模式。
 * 点击菜单外部或按 ESC 键可关闭菜单。
 */
const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({
  children,
  menu,
  placement = 'bottomLeft',
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  disabled = false,
  className,
}, forwardedRef) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

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

  // 点击触发元素切换菜单
  const handleClick = useCallback(() => {
    if (disabled) return
    setVisible(!visible)
  }, [disabled, visible, setVisible])

  // 点击外部关闭
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!visible) return
      const target = e.target as Node
      if (
        wrapperRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return
      }
      setVisible(false)
    },
    [visible, setVisible],
  )

  // ESC 关闭
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) {
        setVisible(false)
      }
    },
    [visible, setVisible],
  )

  // 全局事件绑定
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClickOutside, handleKeyDown])

  return (
    <div
      ref={setWrapperRef}
      className={cn(dropdownVariants(), className)}
      onClick={handleClick}
      aria-haspopup="menu"
      aria-expanded={visible}
    >
      {/* 触发元素 */}
      {children}

      {/* 下拉菜单 */}
      {visible && menu && (
        <div
          ref={menuRef}
          role="menu"
          tabIndex={-1}
          className={cn(dropdownMenuVariants({ placement }))}
        >
          {menu}
        </div>
      )}
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

/**
 * DropdownMenu 下拉菜单列表
 *
 * 包裹 DropdownItem 和 DropdownDivider 的容器组件。
 */
const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(({
  children,
  className,
}, ref) => {
  return (
    <div ref={ref} className={cn('flex flex-col', className)}>
      {children}
    </div>
  )
})

DropdownMenu.displayName = 'DropdownMenu'

/**
 * DropdownItem 下拉菜单项
 *
 * 单个可点击的菜单项，支持图标、禁用、破坏性样式。
 */
const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(({
  itemKey,
  children,
  icon,
  disabled = false,
  destructive = false,
  onClick,
  className,
}, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick?.(itemKey)
  }

  return (
    <div
      ref={ref}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      className={cn(
        dropdownItemVariants({ disabled, destructive }),
        className,
      )}
      onClick={handleClick}
      aria-disabled={disabled || undefined}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </div>
  )
})

DropdownItem.displayName = 'DropdownItem'

/**
 * DropdownDivider 下拉菜单分割线
 *
 * 用于分隔不同类型的菜单项。
 */
const DropdownDivider = forwardRef<HTMLDivElement, DropdownDividerProps>(({
  className,
}, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={cn('h-px bg-border my-1', className)}
    />
  )
})

DropdownDivider.displayName = 'DropdownDivider'

export { Dropdown, DropdownMenu, DropdownItem, DropdownDivider }
export type { DropdownProps, DropdownMenuProps, DropdownItemProps, DropdownDividerProps, DropdownPlacement, DropdownItemKey } from './types'
export { dropdownVariants, dropdownMenuVariants, dropdownItemVariants } from './dropdown-variants'
export default Object.assign(Dropdown, { Menu: DropdownMenu, Item: DropdownItem, Divider: DropdownDivider })