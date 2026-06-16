import type { TreeNode, InternalTreeNode } from './types'

/**
 * 扁平化树节点用于渲染
 */
export function flattenTree(
  nodes: InternalTreeNode[],
  expandedKeys: Set<string>,
  result: InternalTreeNode[] = []
): InternalTreeNode[] {
  nodes.forEach((node) => {
    if (node._inSearchResult === true || node._inSearchResult === undefined) {
      result.push(node)
      if (
        node.children &&
        expandedKeys.has(node.value) &&
        (node._inSearchResult === true || node._inSearchResult === undefined)
      ) {
        flattenTree(node.children as InternalTreeNode[], expandedKeys, result)
      }
    }
  })
  return result
}

/**
 * 过滤树节点（搜索）
 */
export function filterNodes(
  nodes: InternalTreeNode[],
  search: string,
  filterFn?: (node: TreeNode, searchValue: string) => boolean
): InternalTreeNode[] {
  const defaultFilter = (node: TreeNode, sv: string) =>
    node.title.toLowerCase().includes(sv.toLowerCase())

  const filter = filterFn || defaultFilter

  const markNodes = (items: InternalTreeNode[]): boolean => {
    let hasMatch = false
    items.forEach((item) => {
      const selfMatch = filter(item, search)
      let childMatch = false
      if (item.children) {
        childMatch = markNodes(item.children as InternalTreeNode[])
      }
      item._matched = selfMatch
      item._inSearchResult = selfMatch || childMatch
      if (item._inSearchResult) hasMatch = true
    })
    return hasMatch
  }

  markNodes(nodes)
  return nodes
}

/**
 * 深拷贝树节点（去除循环引用）
 */
export function cloneTreeWithoutParent(
  nodes: InternalTreeNode[]
): InternalTreeNode[] {
  return nodes.map((node) => {
    const cloned: InternalTreeNode = {
      ...node,
      _parent: undefined,
    }
    if (node.children) {
      cloned.children = cloneTreeWithoutParent(
        node.children as InternalTreeNode[]
      )
    }
    return cloned
  })
}
