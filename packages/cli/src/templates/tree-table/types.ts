import { HTMLAttributes, ReactNode } from 'react'

/** 树形表格列配置 */
export interface TreeTableColumn<T> {
  /** 列标题 */
  title: string
  /** 数据字段名 */
  dataIndex: string
  /** 列宽度 */
  width?: number | string
  /** 自定义渲染函数 */
  render?: (value: unknown, record: T, index: number) => ReactNode
}

/** 树形表格行选择配置 */
export interface TreeTableRowSelection<T> {
  /** 选择类型：checkbox 多选，radio 单选 */
  type: 'checkbox' | 'radio'
  /** 已选中的行 key 数组（受控模式） */
  selectedRowKeys?: (string | number)[]
  /** 选中变化回调 */
  onChange?: (keys: (string | number)[], rows: T[]) => void
  /** 父子是否联动。false 时父子独立选择，默认 true */
  checkStrictly?: boolean
}

/** TreeTable 组件属性 */
export interface TreeTableProps<T extends Record<string, unknown> = Record<string, unknown>>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 列配置数组 */
  columns: TreeTableColumn<T>[]
  /** 树形数据源，子节点通过 childrenKey 字段嵌套 */
  dataSource: T[]
  /** 行数据唯一标识字段名，默认 'key' */
  rowKey: string | ((record: T) => string | number)
  /** 子节点字段名，默认 'children' */
  childrenKey?: string
  /** 点击行是否展开/收起，默认 false */
  expandRowByClick?: boolean
  /** 默认展开所有节点，默认 false */
  defaultExpandAll?: boolean
  /** 默认展开的节点 key 数组 */
  defaultExpandedKeys?: (string | number)[]
  /** 展开/收起变化回调 */
  onExpand?: (expanded: boolean, record: T) => void
  /** 行选择配置 */
  rowSelection?: TreeTableRowSelection<T>
  /** 是否显示边框，默认 true */
  bordered?: boolean
  /** 自定义 className */
  className?: string
  /** 表格高度，设置后启用虚拟滚动 */
  height?: number
}

/** 扁平化后的行数据（内部使用） */
export interface FlatRow<T> {
  /** 原始行数据 */
  record: T
  /** 行唯一标识 */
  key: string | number
  /** 层级深度，0 为根节点 */
  indentLevel: number
  /** 是否有子节点 */
  hasChildren: boolean
}
