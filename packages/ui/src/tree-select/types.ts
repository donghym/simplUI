import { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { treeSelectVariants } from './tree-select-variants'

/** 树节点数据结构 */
export interface TreeNode {
  /** 节点唯一标识，必填 */
  value: string
  /** 节点显示文本，必填 */
  title: string
  /** 子节点数组，存在则为父节点 */
  children?: TreeNode[]
  /** 禁用该节点，不可选不可展开 */
  disabled?: boolean
  /** 禁用复选框（多选模式），不可选但可展开 */
  disableCheckbox?: boolean
  /** 是否为叶子节点，不传则根据 children 判断 */
  isLeaf?: boolean
  /** 是否选中（受控模式） */
  selected?: boolean
  /** 是否展开（受控模式） */
  expanded?: boolean
  /** 自定义数据，用于回调中传递 */
  data?: unknown
}

/** 树节点渲染属性 */
export interface TreeNodeRenderProps {
  /** 当前节点数据 */
  node: TreeNode
  /** 节点层级深度，根节点为 0 */
  depth: number
  /** 是否展开 */
  expanded: boolean
  /** 是否选中 */
  selected: boolean
  /** 是否禁用 */
  disabled: boolean
}

/** TreeSelect 组件属性 */
export interface TreeSelectProps
  extends VariantProps<typeof treeSelectVariants> {
  /** 选中值（受控）。单选 string，多选 string[] */
  value?: string | string[]
  /** 默认选中值（非受控）。单选 string，多选 string[] */
  defaultValue?: string | string[]
  /** 选中值变化回调 */
  onChange?: (value: string | string[] | undefined, nodes: TreeNode | TreeNode[] | undefined) => void
  /** 树节点数据源 */
  treeData: TreeNode[]
  /** 占位文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否多选模式 */
  multiple?: boolean
  /** 是否可搜索 */
  searchable?: boolean
  /** 搜索过滤函数 */
  filterTreeNode?: (node: TreeNode, searchValue: string) => boolean
  /** 默认展开的节点 value 数组 */
  defaultExpandedKeys?: string[]
  /** 展开节点变化回调 */
  onExpand?: (expandedKeys: string[]) => void
  /** 异步加载子节点 */
  loadData?: (node: TreeNode) => Promise<TreeNode[]>
  /** 下拉面板最大高度，默认 256px */
  maxDropdownHeight?: number
  /** 自定义节点渲染函数 */
  treeNodeRender?: (props: TreeNodeRenderProps) => ReactNode
  /** 自定义选中项渲染（多选模式标签） */
  tagRender?: (node: TreeNode, onClose: () => void) => ReactNode
  /** 是否显示展开图标，默认 true */
  showExpand?: boolean
  /** 自定义 className */
  className?: string
  /** 下拉面板 className */
  dropdownClassName?: string
  /** 无数据时显示的内容 */
  notFoundContent?: ReactNode
  /** 允许清空 */
  allowClear?: boolean
}

/** 内部树节点状态（用于渲染） */
export interface InternalTreeNode extends TreeNode {
  /** 内部唯一 key */
  _key: string
  /** 父节点引用 */
  _parent?: InternalTreeNode
  /** 层级深度 */
  _depth: number
  /** 是否匹配搜索条件 */
  _matched?: boolean
  /** 是否在搜索结果中（自身或子节点匹配） */
  _inSearchResult?: boolean
}
