import type { TreeNodeData, TreeKey } from './types'

/** 递归查找节点 */
export function findNode(nodes: TreeNodeData[], key: TreeKey): TreeNodeData | undefined {
  for (const node of nodes) {
    if (node.key === key) return node
    if (node.children) {
      const found = findNode(node.children, key)
      if (found) return found
    }
  }
  return undefined
}

/** 递归获取所有节点 key */
export function getAllKeys(nodes: TreeNodeData[]): TreeKey[] {
  const keys: TreeKey[] = []
  function traverse(list: TreeNodeData[]) {
    for (const node of list) {
      keys.push(node.key)
      if (node.children) traverse(node.children)
    }
  }
  traverse(nodes)
  return keys
}

/** 过滤树节点 */
export function filterTree(
  nodes: TreeNodeData[],
  filterFn: (node: TreeNodeData) => boolean,
): TreeNodeData[] {
  return nodes
    .map((node) => {
      const match = filterFn(node)
      const filteredChildren = node.children ? filterTree(node.children, filterFn) : []
      if (match || filteredChildren.length > 0) {
        const result: TreeNodeData = {
          ...node,
          children: filteredChildren.length > 0 ? filteredChildren : node.children,
        }
        return result
      }
      return null
    })
    .filter((node): node is TreeNodeData => node !== null)
}
