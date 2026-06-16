import type { CSSProperties, ReactNode } from 'react'

export interface TransferItem {
  key: string
  title: ReactNode
  description?: ReactNode
  disabled?: boolean
}

export interface TransferProps {
  /** 数据源 */
  dataSource: TransferItem[]
  /** 右侧已选中的 key */
  targetKeys?: string[]
  /** 默认已选中的 key */
  defaultTargetKeys?: string[]
  /** 选中项变化回调 */
  onChange?: (targetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void
  /** 是否显示搜索框 */
  showSearch?: boolean
  /** 搜索框占位符 */
  searchPlaceholder?: string
  /** 左侧标题 */
  titles?: [ReactNode, ReactNode]
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
}
