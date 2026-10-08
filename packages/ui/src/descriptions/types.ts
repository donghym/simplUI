import type { CSSProperties, ReactNode } from 'react'

export interface DescriptionsItemProps {
  /** 标签 */
  label?: ReactNode
  /** 内容 */
  children: ReactNode
  /** 占据列数 */
  span?: number
  /** 是否可复制。true 时显示复制按钮 */
  copyable?: boolean
  /** 是否可编辑。true 时显示编辑按钮，点击进入编辑态 */
  editable?: boolean
  /** 编辑回调 */
  onEdit?: (newValue: string) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface DescriptionsItemConfig {
  /** 字段标签 */
  label: string
  /** 字段值 */
  value: ReactNode
  /** 是否可复制。true 时显示复制按钮 */
  copyable?: boolean
  /** 是否可编辑。true 时显示编辑按钮，点击进入编辑态 */
  editable?: boolean
  /** 编辑回调 */
  onEdit?: (newValue: string) => void
  /** 跨列数，默认 1 */
  span?: number
}

export interface DescriptionsProps {
  /** 标题 */
  title?: ReactNode
  /** 是否显示边框 */
  bordered?: boolean
  /** 一行的描述项数量 */
  column?: number
  /** 列表的大小 */
  componentSize?: 'default' | 'middle' | 'small'
  /** 描述布局 */
  layout?: 'horizontal' | 'vertical'
  /** 子元素（DescriptionsItem 或 items 配置） */
  children?: ReactNode
  /** items 配置模式，传入配置数组替代 children */
  items?: DescriptionsItemConfig[]
  /** 列数，仅在 items 模式下生效，默认 3 */
  columns?: number
  /** 是否可折叠。true 时超过指定行数后折叠，默认 false */
  collapsible?: boolean
  /** 默认折叠行数，超过此行数折叠，默认不折叠 */
  defaultCollapsedRows?: number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
