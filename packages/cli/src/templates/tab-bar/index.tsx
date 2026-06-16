import { forwardRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { tabBarVariants, tabBarItemVariants, badgeDotClass, badgeNumberClass } from './tab-bar-variants'
import type { TabBarProps, TabBarItem } from './types'

/**
 * 渲染角标
 */
function renderBadge(item: TabBarItem) {
  if (!item.badge) return null

  if (item.badge.type === 'dot') {
    return <span className={badgeDotClass} />
  }

  const count = item.badge.count ?? 0
  if (count <= 0) return null

  return (
    <span className={badgeNumberClass}>
      {count > 99 ? '99+' : count}
    </span>
  )
}

/**
 * TabBar 底部标签栏组件
 *
 * 提供图标+文字的底部标签栏，支持角标、受控/非受控模式、固定底部布局。
 */
export const TabBar = forwardRef<HTMLDivElement, TabBarProps>(
  (props, ref) => {
    const {
      className,
      items,
      activeKey: controlledActiveKey,
      defaultActiveKey,
      onChange,
      fixed = false,
      bordered = true,
      variant,
      ...rest
    } = props

    const isControlled = controlledActiveKey !== undefined
    const [internalActiveKey, setInternalActiveKey] = useState(
      defaultActiveKey ?? items[0]?.key ?? '',
    )
    const activeKey = isControlled ? controlledActiveKey : internalActiveKey

    const handleItemClick = useCallback(
      (item: TabBarItem) => {
        if (item.disabled) return
        if (!isControlled) {
          setInternalActiveKey(item.key)
        }
        onChange?.(item.key)
      },
      [isControlled, onChange],
    )

    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(
          tabBarVariants({ variant, fixed, bordered }),
          className,
        )}
        {...rest}
      >
        {items.map((item) => {
          const isActive = item.key === activeKey
          const currentIcon = isActive && item.activeIcon ? item.activeIcon : item.icon

          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleItemClick(item)}
              className={tabBarItemVariants({ active: isActive, disabled: item.disabled })}
            >
              <span className="relative inline-flex">
                {currentIcon}
                {renderBadge(item)}
              </span>
              <span className="text-[10px] leading-tight">{item.label}</span>
            </button>
          )
        })}
      </div>
    )
  },
)

TabBar.displayName = 'TabBar'

export type { TabBarProps, TabBarItem, BadgeType } from './types'
export { tabBarVariants, tabBarItemVariants } from './tab-bar-variants'
export default TabBar
