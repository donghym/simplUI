import { ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { treeNodeVariants, treeNodeContentVariants, treeExpandIconVariants } from './tree-variants'
import type { TreeNodeData, TreeProps } from './types'

/** 树节点组件 */
export function TreeNode({
  node,
  level,
  expanded,
  selected,
  checked,
  halfChecked,
  showLine,
  selectMode,
  onNodeClick,
  onToggleExpand,
  onToggleCheck,
}: {
  node: TreeNodeData
  level: number
  expanded: boolean
  selected: boolean
  checked: boolean
  halfChecked: boolean
  showLine: boolean
  selectMode: TreeProps['selectMode']
  onNodeClick: (node: TreeNodeData, e: React.MouseEvent) => void
  onToggleExpand: (node: TreeNodeData) => void
  onToggleCheck: (node: TreeNodeData) => void
}) {
  const hasChildren = node.children && node.children.length > 0
  const isLeaf = node.isLeaf ?? !hasChildren

  return (
    <div role="treeitem" aria-selected={selected} aria-expanded={hasChildren ? expanded : undefined}>
      <div
        onClick={(e) => onNodeClick(node, e)}
        className={cn(treeNodeVariants({ selected, disabled: node.disabled }))}
        style={{ paddingLeft: `${level * 20 + 8}px` } /* 动态缩进计算，允许保留 */}
      >
        {!isLeaf && (
          <span
            onClick={(e) => {
              e.stopPropagation()
              onToggleExpand(node)
            }}
            className={cn(treeExpandIconVariants({ expanded }), 'cursor-pointer hover:bg-muted rounded')}
            role="button"
            aria-label={expanded ? '收起' : '展开'}
          >
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
        {isLeaf && <span className="w-4" />}
        {selectMode === 'multiple' && (
          <input
            type="checkbox"
            checked={checked}
            ref={(el) => {
              if (el) el.indeterminate = halfChecked
            }}
            onChange={() => onToggleCheck(node)}
            onClick={(e) => e.stopPropagation()}
            disabled={node.disabled}
            className="mr-1.5 h-4 w-4 rounded border-border text-primary-500 focus:ring-primary-500"
          />
        )}
        <div className={cn(treeNodeContentVariants())}>
          {node.icon && <span aria-hidden="true">{node.icon}</span>}
          <span className="truncate">{node.title}</span>
        </div>
      </div>
      {hasChildren && expanded && (
        <div role="group" className={cn(showLine && 'border-l border-border ml-4')}>
          {node.children!.map((child) => (
            <TreeNode
              key={child.key}
              node={child}
              level={level + 1}
              expanded={expanded}
              selected={selected}
              checked={checked}
              halfChecked={halfChecked}
              showLine={showLine}
              selectMode={selectMode}
              onNodeClick={onNodeClick}
              onToggleExpand={onToggleExpand}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </div>
      )}
    </div>
  )
}
