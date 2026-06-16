import { forwardRef, useMemo, useRef, MutableRefObject } from 'react'
import { ChevronDown, X, Search } from 'lucide-react'
import { cn } from '../lib/utils'
import { treeSelectVariants, treeSelectDropdownVariants, treeSelectSearchVariants } from './tree-select-variants'
import { useTreeSelect } from './use-tree-select'
import { TreeNodeComponent } from './tree-select-node'
import type { TreeSelectProps, TreeNode, InternalTreeNode } from './types'

const DEFAULT_MAX_HEIGHT = 256

export const TreeSelect = forwardRef<HTMLDivElement, TreeSelectProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      onChange,
      treeData,
      placeholder = '请选择',
      disabled = false,
      multiple = false,
      searchable = false,
      filterTreeNode,
      defaultExpandedKeys = [],
      onExpand,
      loadData,
      maxDropdownHeight = DEFAULT_MAX_HEIGHT,
      treeNodeRender,
      tagRender,
      showExpand = true,
      className,
      dropdownClassName,
      notFoundContent = '暂无数据',
      allowClear = false,
    } = props

    const internalRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement | null>

    const {
      open,
      setOpen,
      searchValue,
      setSearchValue,
      expandedKeys,
      loadingKeys,
      selectedValues,
      visibleNodes,
      selectedNodes,
      handleExpand,
      containerRef,
      searchInputRef,
    } = useTreeSelect({
      value,
      defaultValue,
      treeData,
      filterTreeNode,
      defaultExpandedKeys,
      onExpand,
      loadData,
    })

    const displayText = useMemo(() => {
      if (selectedNodes.length === 0) return placeholder
      if (multiple) return `${selectedNodes.length} 项已选`
      return selectedNodes[0]?.title || placeholder
    }, [selectedNodes, multiple, placeholder])

    const handleToggle = () => {
      if (disabled) return
      setOpen((prev) => !prev)
    }

    const handleSelect = (node: InternalTreeNode) => {
      if (node.disabled || node.disableCheckbox) return
      if (multiple) {
        const isSelected = selectedValues.includes(node.value)
        const newValues = isSelected
          ? selectedValues.filter((v) => v !== node.value)
          : [...selectedValues, node.value]
        const newNodes = isSelected
          ? selectedNodes.filter((n) => n.value !== node.value).map((n) => n as TreeNode)
          : [...selectedNodes, node].map((n) => n as TreeNode)
        onChange?.(newValues, newNodes)
      } else {
        onChange?.(node.value, node as TreeNode)
        setOpen(false)
      }
    }

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (multiple) {
        onChange?.([], [])
      } else {
        onChange?.(undefined, undefined)
      }
    }

    const handleRemoveTag = (nodeValue: string) => {
      if (!multiple) return
      const newValues = selectedValues.filter((v) => v !== nodeValue)
      const newNodes = selectedNodes.filter((n) => n.value !== nodeValue).map((n) => n as TreeNode)
      onChange?.(newValues, newNodes)
    }

    // 合并 refs
    const setRef = (node: HTMLDivElement | null) => {
      internalRef.current = node
      containerRef.current = node
      if (typeof ref === 'function') {
        ref(node)
      }
    }

    return (
      <div
        ref={setRef}
        className={cn(treeSelectVariants({ disabled, open }), className)}
        onClick={handleToggle}
        aria-expanded={open}
        aria-disabled={disabled}
        role="combobox"
      >
        <div className="flex flex-1 items-center gap-1 overflow-hidden">
          {multiple && selectedNodes.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selectedNodes.map((node) =>
                tagRender ? (
                  tagRender(node as TreeNode, () => handleRemoveTag(node.value))
                ) : (
                  <span key={node.value} className="inline-flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 text-xs">
                    {node.title}
                    <X className="h-3 w-3 cursor-pointer hover:text-danger-500" onClick={(e) => { e.stopPropagation(); handleRemoveTag(node.value) }} />
                  </span>
                )
              )}
            </div>
          ) : (
            <span className={cn('truncate', selectedNodes.length === 0 ? 'text-muted-foreground' : 'text-foreground')}>
              {displayText}
            </span>
          )}
        </div>
        {allowClear && selectedValues.length > 0 && !disabled && (
          <X className="h-4 w-4 flex-shrink-0 cursor-pointer text-muted-foreground hover:text-foreground" onClick={handleClear} />
        )}
        <ChevronDown className={cn('h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform', open && 'rotate-180')} />
        {open && (
          <div
            className={cn(treeSelectDropdownVariants({ open }), dropdownClassName)}
            style={{ maxHeight: maxDropdownHeight } /* 动态最大高度，允许保留 */}
            onClick={(e) => e.stopPropagation()}
            role="tree"
          >
            {searchable && (
              <div className={treeSelectSearchVariants()}>
                <div className="flex items-center gap-2 rounded border border-border px-2 py-1">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    ref={searchInputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="搜索"
                    className="flex-1 outline-none text-sm"
                  />
                </div>
              </div>
            )}
            <div className="p-1">
              {visibleNodes.length > 0 ? (
                visibleNodes.map((node) => (
                  <TreeNodeComponent
                    key={node._key}
                    node={node}
                    isSelected={selectedValues.includes(node.value)}
                    isExpanded={expandedKeys.has(node.value)}
                    isLoading={loadingKeys.has(node.value)}
                    multiple={multiple}
                    showExpand={showExpand}
                    onSelect={handleSelect}
                    onExpand={handleExpand}
                    treeNodeRender={treeNodeRender}
                  />
                ))
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">{notFoundContent}</div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)

TreeSelect.displayName = 'TreeSelect'
