import type { TreeNode, InternalTreeNode } from './types'

/**
 * 构建内部树节点结构
 */
export function buildInternalTree(
  nodes: TreeNode[],
  parent?: InternalTreeNode,
  depth = 0
): InternalTreeNode[] {
  return nodes.map((node) => {
    const internal: InternalTreeNode = {
      ...node,
      _key: parent ? `${parent._key}-${node.value}` : node.value,
      _parent: parent,
      _depth: depth,
    }
    if (node.children) {
      internal.children = buildInternalTree(node.children, internal, depth + 1)
    }
    return internal
  })
}

/**
 * 根据 value 查找节点
 */
export function findNodeByValue(
  nodes: InternalTreeNode[],
  value: string
): InternalTreeNode | undefined {
  for (const node of nodes) {
    if (node.value === value) return node
    if (node.children) {
      const found = findNodeByValue(node.children as InternalTreeNode[], value)
      if (found) return found
    }
  }
  return undefined
}
