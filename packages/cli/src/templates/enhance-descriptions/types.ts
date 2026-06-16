import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { enhanceDescriptionsVariants } from './enhance-descriptions-variants'

/** EnhanceDescriptions 详情面板项 */
export interface EnhanceDescriptionsItem {
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

/** EnhanceDescriptions 组件属性 */
export interface EnhanceDescriptionsProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof enhanceDescriptionsVariants> {
  /** 标题 */
  title?: string
  /** 详情项数组 */
  items: EnhanceDescriptionsItem[]
  /** 列数，默认 3 */
  columns?: number
  /** 是否显示边框，默认 true */
  bordered?: boolean
  /** 是否可折叠，默认 false */
  collapsible?: boolean
  /** 默认折叠行数，超过此行数折叠，默认不折叠 */
  defaultCollapsedRows?: number
}
