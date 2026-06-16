import { createContext, useContext, useState, forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { menuVariants, menuItemVariants } from './menu-variants'
import type { MenuProps, MenuItemProps, SubMenuProps, MenuMode, MenuSelectedKey } from './types'

interface MenuContextValue {
  mode: MenuMode
  selectedKey: MenuSelectedKey | null
  onSelect: (key: MenuSelectedKey) => void
  level: number
}

const MenuContext = createContext<MenuContextValue>({
  mode: 'vertical',
  selectedKey: null,
  onSelect: () => {},
  level: 0,
})

/**
 * Menu 导航菜单
 *
 * 支持水平/垂直/内联模式，单项选择和子菜单展开。
 */
const Menu = forwardRef<HTMLUListElement, MenuProps>(({
  mode = 'vertical',
  selectedKey: controlledKey,
  defaultSelectedKey,
  onSelect,
  className,
  children,
  ...rest
}, ref) => {
  const [innerKey, setInnerKey] = useState<MenuSelectedKey | null>(defaultSelectedKey || null)
  const currentKey = controlledKey !== undefined ? controlledKey : innerKey

  const handleSelect = (key: MenuSelectedKey) => {
    if (controlledKey === undefined) setInnerKey(key)
    onSelect?.(key)
  }

  return (
    <MenuContext.Provider value={{ mode, selectedKey: currentKey, onSelect: handleSelect, level: 0 }}>
      <ul ref={ref} className={cn(menuVariants({ mode }), className)} role="menu" {...rest}>
        {children}
      </ul>
    </MenuContext.Provider>
  )
})

Menu.displayName = 'Menu'

/**
 * MenuItem 菜单项
 */
const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(({ itemKey, icon, disabled = false, className, children, onClick, ...rest }, ref) => {
  const { mode, selectedKey, onSelect } = useContext(MenuContext)
  const active = selectedKey === itemKey

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (disabled) return
    onClick?.(e)
    onSelect(itemKey)
  }

  return (
    <li
      ref={ref}
      role="menuitem"
      className={cn(menuItemVariants({ active, disabled, mode }), className)}
      onClick={handleClick}
      {...rest}
    >
      {icon}
      {children}
    </li>
  )
})

MenuItem.displayName = 'MenuItem'

/**
 * SubMenu 子菜单
 *
 * 可展开的菜单组，点击标题展开/收起子项。
 */
const SubMenu = forwardRef<HTMLLIElement, SubMenuProps>(({ title, icon, disabled = false, className, children }, ref) => {
  const { mode } = useContext(MenuContext)
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    if (disabled) return
    setOpen(!open)
  }

  return (
    <li ref={ref} className={cn('relative', className)}>
      <div
        className={cn(
          menuItemVariants({ active: false, disabled, mode }),
          'cursor-pointer',
        )}
        onClick={toggleOpen}
        role="button"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {icon}
        <span className="flex-1">{title}</span>
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </div>
      {open && <ul className="flex flex-col" role="menu">{children}</ul>}
    </li>
  )
})

SubMenu.displayName = 'SubMenu'

export { Menu, MenuItem, SubMenu }
export type { MenuProps, MenuItemProps, SubMenuProps, MenuMode, MenuSelectedKey } from './types'
export { menuVariants, menuItemVariants } from './menu-variants'

export default Object.assign(Menu, { Item: MenuItem, SubMenu })