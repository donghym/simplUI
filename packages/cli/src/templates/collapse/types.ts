import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

/** Collapse 单个面板的 Props */
export interface CollapsePanelProps {
  /** 面板唯一标识 */
  panelKey: string
  /** 面板标题 */
  header: ReactNode
  /** 面板内容 */
  children: ReactNode
  /** 是否禁用展开 */
  disabled?: boolean
  /** 是否显示箭头图标。默认 true */
  showArrow?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
}

/** Collapse 组件 Props */
export interface CollapseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** 当前激活的面板 key 数组（受控模式） */
  activeKey?: string[]
  /** 默认激活的面板 key 数组（非受控模式） */
  defaultActiveKey?: string[]
  /** 展开面板时的回调 */
  onChange?: (activeKey: string[]) => void
  /** 是否允许同时展开多个面板。默认 true */
  accordion?: boolean
  /** 子元素（CollapsePanel） */
  children?: ReactNode
  /** 是否显示边框。默认 true */
  bordered?: boolean
  /** 自定义类名，通过 cn() + twMerge 合并 */
  className?: string
}