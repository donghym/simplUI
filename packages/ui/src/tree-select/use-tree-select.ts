import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import type { TreeNode, InternalTreeNode } from './types'
import {
  buildInternalTree,
  findNodeByValue,
} from './tree-select-utils'
import {
  flattenTree,
  filterNodes,
  cloneTreeWithoutParent,
} from './tree-select-filter'

interface UseTreeSelectParams {
  value?: string | string[]
  defaultValue?: string | string[]
  treeData: TreeNode[]
  filterTreeNode?: (node: TreeNode, searchValue: string) => boolean
  defaultExpandedKeys?: string[]
  onExpand?: (expandedKeys: string[]) => void
  loadData?: (node: TreeNode) => Promise<TreeNode[]>
}

interface UseTreeSelectReturn {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  searchValue: string
  setSearchValue: (value: string) => void
  expandedKeys: Set<string>
  loadingKeys: Set<string>
  selectedValues: string[]
  internalTreeData: InternalTreeNode[]
  visibleNodes: InternalTreeNode[]
  selectedNodes: InternalTreeNode[]
  handleExpand: (node: InternalTreeNode) => Promise<void>
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  searchInputRef: React.RefObject<HTMLInputElement>
}

/**
 * TreeSelect 状态管理 hook
 */
export function useTreeSelect(params: UseTreeSelectParams): UseTreeSelectReturn {
  const {
    value,
    defaultValue,
    treeData,
    filterTreeNode,
    defaultExpandedKeys = [],
    onExpand,
    loadData,
  } = params

  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(defaultExpandedKeys))
  const [loadingKeys, setLoadingKeys] = useState<Set<string>>(new Set())

  const currentValue = value !== undefined ? value : defaultValue
  const selectedValues = useMemo(() => {
    if (currentValue === undefined) return []
    return Array.isArray(currentValue) ? currentValue : [currentValue]
  }, [currentValue])

  const internalTreeData = useMemo(() => buildInternalTree(treeData), [treeData])

  const visibleNodes = useMemo(() => {
    let nodes = internalTreeData
    if (searchValue) {
      nodes = filterNodes(cloneTreeWithoutParent(internalTreeData), searchValue, filterTreeNode)
    }
    return flattenTree(nodes, expandedKeys)
  }, [internalTreeData, searchValue, filterTreeNode, expandedKeys])

  const selectedNodes = useMemo(() => {
    return selectedValues
      .map((v) => findNodeByValue(internalTreeData, v))
      .filter(Boolean) as InternalTreeNode[]
  }, [selectedValues, internalTreeData])

  const handleExpand = useCallback(
    async (node: InternalTreeNode) => {
      if (node.disabled) return
      const isExpanded = expandedKeys.has(node.value)
      const newExpandedKeys = new Set(expandedKeys)
      if (isExpanded) {
        newExpandedKeys.delete(node.value)
      } else {
        newExpandedKeys.add(node.value)
        if (loadData && !node.children && !node.isLeaf) {
          setLoadingKeys((prev) => new Set(prev).add(node.value))
          try {
            await loadData(node as TreeNode)
          } finally {
            setLoadingKeys((prev) => {
              const next = new Set(prev)
              next.delete(node.value)
              return next
            })
          }
        }
      }
      setExpandedKeys(newExpandedKeys)
      onExpand?.(Array.from(newExpandedKeys))
    },
    [expandedKeys, loadData, onExpand]
  )

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [open])

  return {
    open,
    setOpen,
    searchValue,
    setSearchValue,
    expandedKeys,
    loadingKeys,
    selectedValues,
    internalTreeData,
    visibleNodes,
    selectedNodes,
    handleExpand,
    containerRef,
    searchInputRef,
  }
}
