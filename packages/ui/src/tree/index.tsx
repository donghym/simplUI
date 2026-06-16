import { forwardRef, useState, useCallback, useMemo, useRef } from 'react'
import { Search } from 'lucide-react'
import { cn } from '../lib/utils'
import { treeVariants, treeSearchVariants } from './tree-variants'
import { TreeNode } from './tree-node'
import { findNode, getAllKeys, filterTree } from './tree-utils'
import type { TreeProps, TreeNodeData, TreeKey } from './types'

/** 树组件 */
export const Tree = forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const {
    className, treeData, selectMode = 'none', selectedKeys, defaultSelectedKeys = [],
    checkedKeys, defaultCheckedKeys = [], expandedKeys, defaultExpandedKeys = [],
    onSelect, onCheck, onExpand, showLine = false, defaultExpandAll = false,
    searchable = false, filterTreeNode, searchPlaceholder = '搜索', ...rest
  } = props

  const [innerSelectedKeys, setInnerSelectedKeys] = useState<TreeKey[]>(defaultSelectedKeys)
  const [innerCheckedKeys, setInnerCheckedKeys] = useState<TreeKey[]>(defaultCheckedKeys)
  const [innerExpandedKeys, setInnerExpandedKeys] = useState<TreeKey[]>(
    defaultExpandAll ? getAllKeys(treeData) : defaultExpandedKeys,
  )
  const [searchValue, setSearchValue] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const isControlledSelected = selectedKeys !== undefined
  const isControlledChecked = checkedKeys !== undefined
  const isControlledExpanded = expandedKeys !== undefined

  const currentSelectedKeys = isControlledSelected ? selectedKeys : innerSelectedKeys
  const currentCheckedKeys = isControlledChecked ? checkedKeys : innerCheckedKeys
  const currentExpandedKeys = isControlledExpanded ? expandedKeys : innerExpandedKeys

  const filteredTreeData = useMemo(() => {
    if (!searchValue || !filterTreeNode) return treeData
    return filterTree(treeData, (node) => filterTreeNode(node, searchValue))
  }, [treeData, searchValue, filterTreeNode])

  // 使用 ref 存储回调函数，避免循环依赖
  const callbacksRef = useRef({
    handleToggleCheck: null as ((node: TreeNodeData) => void) | null,
  })

  const handleToggleExpand = useCallback(
    (node: TreeNodeData) => {
      if (node.disabled) return
      const isExpanded = currentExpandedKeys.includes(node.key)
      const newKeys = isExpanded
        ? currentExpandedKeys.filter((k) => k !== node.key)
        : [...currentExpandedKeys, node.key]
      if (!isControlledExpanded) setInnerExpandedKeys(newKeys)
      onExpand?.(newKeys, {
        node, expanded: !isExpanded,
        expandedNodes: newKeys.map((k) => findNode(treeData, k)!).filter(Boolean),
      })
    },
    [currentExpandedKeys, isControlledExpanded, onExpand, treeData],
  )

  const handleToggleCheck = useCallback(
    (node: TreeNodeData) => {
      if (node.disabled || selectMode !== 'multiple') return
      const isChecked = currentCheckedKeys.includes(node.key)
      const newKeys = isChecked
        ? currentCheckedKeys.filter((k) => k !== node.key)
        : [...currentCheckedKeys, node.key]
      if (!isControlledChecked) setInnerCheckedKeys(newKeys)
      onCheck?.(newKeys, {
        node, checked: !isChecked,
        checkedNodes: newKeys.map((k) => findNode(treeData, k)!).filter(Boolean),
        halfCheckedKeys: [],
      })
    },
    [currentCheckedKeys, isControlledChecked, onCheck, selectMode, treeData],
  )

  // 更新 ref
  callbacksRef.current.handleToggleCheck = handleToggleCheck

  const handleNodeClick = useCallback(
    (node: TreeNodeData, e: React.MouseEvent) => {
      if (node.disabled || selectMode === 'none') return
      if (selectMode === 'single') {
        const newKeys = [node.key]
        if (!isControlledSelected) setInnerSelectedKeys(newKeys)
        onSelect?.(newKeys, { node, selected: true, selectedNodes: [node], nativeEvent: e })
      } else if (selectMode === 'multiple') {
        // 多选模式下点击节点也可以切换勾选状态
        callbacksRef.current.handleToggleCheck?.(node)
      }
    },
    [selectMode, isControlledSelected, onSelect],
  )

  const renderNode = (node: TreeNodeData, level: number) => (
    <TreeNode
      key={node.key}
      node={node}
      level={level}
      expanded={currentExpandedKeys.includes(node.key)}
      selected={currentSelectedKeys.includes(node.key)}
      checked={currentCheckedKeys.includes(node.key)}
      halfChecked={false}
      showLine={showLine}
      selectMode={selectMode}
      onNodeClick={handleNodeClick}
      onToggleExpand={handleToggleExpand}
      onToggleCheck={handleToggleCheck}
    />
  )

  return (
    <div ref={ref || containerRef} className={cn('sui-tree', treeVariants({ showLine }), className)} {...rest}>
      {searchable && (
        <div className={cn(treeSearchVariants())}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label="搜索"
              className="h-[40px] w-full rounded-md border border-border pl-9 pr-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>
      )}
      <div role="tree" className="w-full">
        {filteredTreeData.map((node) => renderNode(node, 0))}
      </div>
    </div>
  )
})
Tree.displayName = 'Tree'

export type { TreeProps, TreeNodeData, TreeKey, TreeSelectMode, TreeSelectInfo, TreeCheckInfo, TreeExpandInfo } from './types'
export { treeVariants, treeNodeVariants, treeNodeContentVariants, treeExpandIconVariants, treeSearchVariants } from './tree-variants'
