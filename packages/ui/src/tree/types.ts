import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { treeVariants } from './tree-variants'

/** 树节点唯一标识 */
export type TreeKey = string | number

/** 树节点数据结构 */
export interface TreeNodeData {
  /** 节点唯一标识，必填 */
  key: TreeKey
  /** 节点显示文本，必填 */
  title: ReactNode
  /** 子节点数组，存在则为非叶子节点 */
  children?: TreeNodeData[]
  /** 是否禁用，true 时不可选中、不可展开 */
  disabled?: boolean
  /** 是否为叶子节点，不传则根据 children 判断 */
  isLeaf?: boolean
  /** 自定义图标，显示在文本左侧 */
  icon?: ReactNode
  /** 节点额外数据，透传给回调函数 */
  [key: string]: unknown
}

/** 树节点选中模式 */
export type TreeSelectMode = 'none' | 'single' | 'multiple'

/** 树组件 Props */
export interface TreeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'title'>,
    VariantProps<typeof treeVariants> {
  /** 树节点数据源，必填 */
  treeData: TreeNodeData[]
  /** 选中模式。none 不可选中，single 单选，multiple 多选。默认 'none' */
  selectMode?: TreeSelectMode
  /** 当前选中的节点 key（受控） */
  selectedKeys?: TreeKey[]
  /** 默认选中的节点 key（非受控） */
  defaultSelectedKeys?: TreeKey[]
  /** 当前勾选的节点 key（受控，多选模式） */
  checkedKeys?: TreeKey[]
  /** 默认勾选的节点 key（非受控，多选模式） */
  defaultCheckedKeys?: TreeKey[]
  /** 当前展开的节点 key（受控） */
  expandedKeys?: TreeKey[]
  /** 默认展开的节点 key（非受控） */
  defaultExpandedKeys?: TreeKey[]
  /** 选中节点变化回调 */
  onSelect?: (selectedKeys: TreeKey[], info: TreeSelectInfo) => void
  /** 勾选节点变化回调 */
  onCheck?: (checkedKeys: TreeKey[], info: TreeCheckInfo) => void
  /** 展开节点变化回调 */
  onExpand?: (expandedKeys: TreeKey[], info: TreeExpandInfo) => void
  /** 是否显示连接线 */
  showLine?: boolean
  /** 是否默认展开所有节点 */
  defaultExpandAll?: boolean
  /** 是否可搜索 */
  searchable?: boolean
  /** 搜索过滤函数 */
  filterTreeNode?: (node: TreeNodeData, searchValue: string) => boolean
  /** 搜索框 placeholder */
  searchPlaceholder?: string
  /** 自定义 className */
  className?: string
}

/** 选中事件额外信息 */
export interface TreeSelectInfo {
  node: TreeNodeData
  selected: boolean
  selectedNodes: TreeNodeData[]
  nativeEvent: React.MouseEvent
}

/** 勾选事件额外信息 */
export interface TreeCheckInfo {
  node: TreeNodeData
  checked: boolean
  checkedNodes: TreeNodeData[]
  halfCheckedKeys: TreeKey[]
}

/** 展开事件额外信息 */
export interface TreeExpandInfo {
  node: TreeNodeData
  expanded: boolean
  expandedNodes: TreeNodeData[]
}
