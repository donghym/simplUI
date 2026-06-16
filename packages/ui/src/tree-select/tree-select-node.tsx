import { ChevronRight, ChevronDown, Check } from 'lucide-react'
import { cn } from '../lib/utils'
import { treeNodeVariants } from './tree-select-variants'
import type { TreeNode, InternalTreeNode, TreeNodeRenderProps } from './types'

interface TreeNodeComponentProps {
  node: InternalTreeNode
  isSelected: boolean
  isExpanded: boolean
  isLoading: boolean
  multiple: boolean
  showExpand: boolean
  onSelect: (node: InternalTreeNode) => void
  onExpand: (node: InternalTreeNode) => void
  treeNodeRender?: (props: TreeNodeRenderProps) => React.ReactNode
}

/**
 * 树节点组件
 */
export function TreeNodeComponent({
  node,
  isSelected,
  isExpanded,
  isLoading,
  multiple,
  showExpand,
  onSelect,
  onExpand,
  treeNodeRender,
}: TreeNodeComponentProps) {
  const hasChildren = node.children && node.children.length > 0
  const isLeaf = node.isLeaf ?? !hasChildren
  const renderProps: TreeNodeRenderProps = {
    node: node as TreeNode,
    depth: node._depth,
    expanded: isExpanded,
    selected: isSelected,
    disabled: !!node.disabled,
  }

  return (
    <div
      key={node._key}
      className={cn(
        treeNodeVariants({ selected: isSelected, disabled: !!node.disabled }),
        `pl-${node._depth * 2 + 2}`
      )}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(node)
      }}
      role="treeitem"
      aria-selected={isSelected}
      aria-expanded={hasChildren ? isExpanded : undefined}
    >
      {showExpand && !isLeaf && (
        <span
          className="flex-shrink-0 cursor-pointer p-0.5 hover:bg-muted rounded"
          onClick={(e) => {
            e.stopPropagation()
            onExpand(node)
          }}
        >
          {isLoading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-primary-500" />
          ) : isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </span>
      )}
      {multiple && (
        <span
          className={cn(
            'flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border',
            isSelected ? 'border-primary-500 bg-primary-500 text-white' : 'border-border'
          )}
        >
          {isSelected && <Check className="h-3 w-3" />}
        </span>
      )}
      <span className="flex-1 truncate">
        {treeNodeRender ? treeNodeRender(renderProps) : node.title}
      </span>
    </div>
  )
}
