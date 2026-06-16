import { forwardRef, useState, useCallback, Children, isValidElement } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { collapseVariants, collapsePanelVariants, collapseContentVariants } from './collapse-variants'
import type { CollapseProps, CollapsePanelProps } from './types'

export type { CollapseProps, CollapsePanelProps }

interface PanelElementProps extends Omit<CollapsePanelProps, 'panelKey'> {
  panelKey?: string
}

/**
 * Collapse 折叠面板组件
 *
 * 用于展示可折叠的内容区域。
 *
 * ### 何时使用
 * - 对复杂信息进行分组和隐藏
 * - 手风琴模式：只允许一个面板展开
 *
 * ### 示例
 * ```tsx
 * <Collapse accordion>
 *   <CollapsePanel panelKey="1" header="标题一">内容一</CollapsePanel>
 *   <CollapsePanel panelKey="2" header="标题二">内容二</CollapsePanel>
 * </Collapse>
 * ```
 */
export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    const {
      activeKey,
      defaultActiveKey = [],
      onChange,
      accordion = false,
      bordered = true,
      children,
      className,
      ...rest
    } = props

    const [internalActiveKey, setInternalActiveKey] = useState<string[]>(defaultActiveKey)
    const isControlled = activeKey !== undefined
    const currentActiveKey = isControlled ? activeKey : internalActiveKey

    const togglePanel = useCallback(
      (key: string) => {
        let newActiveKey: string[]
        if (accordion) {
          newActiveKey = currentActiveKey.includes(key) ? [] : [key]
        } else {
          if (currentActiveKey.includes(key)) {
            newActiveKey = currentActiveKey.filter((k) => k !== key)
          } else {
            newActiveKey = [...currentActiveKey, key]
          }
        }
        if (!isControlled) {
          setInternalActiveKey(newActiveKey)
        }
        onChange?.(newActiveKey)
      },
      [currentActiveKey, accordion, isControlled, onChange],
    )

    const panels = Children.toArray(children).filter(isValidElement)

    return (
      <div
        ref={ref}
        className={cn(collapseVariants({ bordered }), className)}
        {...rest}
      >
        {panels.map((panel, index) => {
          const panelProps = panel.props as PanelElementProps & { children?: React.ReactNode }
          const key = panelProps.panelKey || String(index)
          const isActive = currentActiveKey.includes(key)
          const isDisabled = panelProps.disabled

          return (
            <div
              key={key}
              className={cn(collapsePanelVariants({ bordered }), panelProps.className)}
              style={panelProps.style}
            >
              <button
                type="button"
                className="sui-collapse-panel__header w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => !isDisabled && togglePanel(key)}
                disabled={isDisabled}
                aria-expanded={isActive}
                aria-controls={`collapse-content-${key}`}
              >
                <span className="font-medium">{panelProps.header}</span>
                {panelProps.showArrow !== false && (
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isActive && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                )}
              </button>
              <div
                id={`collapse-content-${key}`}
                className={cn(
                  collapseContentVariants({ expanded: isActive }),
                  isActive && 'py-3 px-4',
                )}
                aria-hidden={!isActive}
              >
                {isActive && panelProps.children}
              </div>
            </div>
          )
        })}
      </div>
    )
  },
)

Collapse.displayName = 'Collapse'

/** CollapsePanel 子组件 */
export const CollapsePanel: React.FC<CollapsePanelProps> = () => {
  return null
}

CollapsePanel.displayName = 'CollapsePanel'