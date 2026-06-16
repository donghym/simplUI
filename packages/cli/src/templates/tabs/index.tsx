import { forwardRef, useState, Children, isValidElement, useCallback } from 'react'
import { cn } from '../lib/utils'
import { tabsVariants, tabItemVariants, tabContentClass } from './tabs-variants'
import type { TabsProps, TabPaneProps, TabsPosition } from './types'

/**
 * 从 children 中提取所有 TabPane 组件的属性数据。
 * 通过检查 props.tab 字段存在与否判断是否为 TabPane 子节点。
 */
function extractTabPanes(children: TabsProps['children']): TabPaneProps[] {
  const result: TabPaneProps[] = []
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return
    const props = child.props as Record<string, unknown>
    if (props.tab !== undefined) {
      result.push({
        key: String(child.key ?? ''),
        tab: props.tab as TabPaneProps['tab'],
        disabled: Boolean(props.disabled),
        children: props.children as TabPaneProps['children'],
      })
    }
  })
  return result
}

/**
 * 根据 tabPosition 返回容器的 flex 方向布局类名。
 * top/bottom 为垂直布局（flex-col），left/right 为水平布局（flex-row）。
 */
function getContainerFlexClass(tabPosition: TabsPosition): string {
  return tabPosition === 'left' || tabPosition === 'right' ? 'flex-row' : 'flex-col'
}

/**
 * Tabs 选项卡组件
 *
 * 提供多标签页切换功能，支持 line/card/edgeless 三种变体，
 * 支持 top/bottom/left/right 四种位置排列，支持受控与非受控模式。
 */
const Tabs = forwardRef<HTMLDivElement, TabsProps>(({
  variant,
  activeKey: controlledActiveKey,
  defaultActiveKey,
  onChange,
  tabPosition = 'top',
  className,
  children,
}, ref) => {
  const panes = extractTabPanes(children)
  const firstKey = panes[0]?.key ?? ''

  const isControlled = controlledActiveKey !== undefined
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey ?? firstKey)
  const activeKey = isControlled ? controlledActiveKey : internalActiveKey

  const handleTabClick = useCallback(
    (key: string) => {
      if (!isControlled) {
        setInternalActiveKey(key)
      }
      onChange?.(key)
    },
    [isControlled, onChange],
  )

  const activePane = panes.find((pane) => pane.key === activeKey)

  const tabBar = (
    <div
      role="tablist"
      aria-orientation={tabPosition === 'left' || tabPosition === 'right' ? 'vertical' : 'horizontal'}
      className={cn(
        tabsVariants({ variant, tabPosition }),
        variant === 'line' &&
          (tabPosition === 'left' || tabPosition === 'right'
            ? 'border-r'
            : 'border-b'),
        variant === 'card' && 'gap-1',
        variant === 'edgeless' && 'gap-1',
        (tabPosition === 'left' || tabPosition === 'right') && 'flex-col',
      )}
    >
      {panes.map((pane) => (
        <button
          key={pane.key}
          type="button"
          role="tab"
          id={`tab-${pane.key}`}
          aria-selected={pane.key === activeKey}
          aria-disabled={pane.disabled}
          aria-controls={`tabpanel-${pane.key}`}
          disabled={pane.disabled}
          tabIndex={pane.key === activeKey ? 0 : -1}
          onClick={() => handleTabClick(pane.key)}
          className={tabItemVariants({
            variant,
            active: pane.key === activeKey,
            disabled: pane.disabled,
          })}
        >
          {pane.tab}
        </button>
      ))}
    </div>
  )

  return (
    <div ref={ref} className={cn('sui-tabs', 'flex', getContainerFlexClass(tabPosition), className)}>
      {/* tabPosition=bottom 时面板内容在上 */}
      {tabPosition === 'bottom' || tabPosition === 'right' ? (
        <div
          id={`tabpanel-${activeKey}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeKey}`}
          className={tabContentClass}
        >
          {activePane?.children}
        </div>
      ) : null}

      {tabBar}

      {/* tabPosition=top 或 left 时面板内容在下/右 */}
      {tabPosition === 'top' || tabPosition === 'left' ? (
        <div
          id={`tabpanel-${activeKey}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeKey}`}
          className={tabContentClass}
        >
          {activePane?.children}
        </div>
      ) : null}
    </div>
  )
})

Tabs.displayName = 'Tabs'

/**
 * TabPane 选项卡面板
 *
 * 仅作为数据载体，不渲染任何 DOM。
 * 其 props 由父组件 Tabs 读取并渲染。
 */
const TabPane: React.FC<TabPaneProps> = () => null

TabPane.displayName = 'TabPane'

export { Tabs, TabPane }
export type { TabsProps, TabPaneProps, TabsVariant, TabsPosition } from './types'
export { tabsVariants, tabItemVariants } from './tabs-variants'

export default Object.assign(Tabs, { TabPane })