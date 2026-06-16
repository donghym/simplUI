import type { FlatRow } from './types'
export { getDescendantKeys, getRecordsByKeys, isHalfChecked } from './tree-table-descendant'
export { calcCheckedKeys } from './tree-table-check'

type RK<T> = string | ((record: T) => string | number)

/** 递归扁平化树形数据，计算每行的层级 */
export function flattenTreeData<T>(data: T[], rowKey: RK<T>, childrenKey: string, expandedKeys: Set<string | number>): FlatRow<T>[] {
  const result: FlatRow<T>[] = []
  function traverse(list: T[], level: number) {
    for (const record of list) {
      const key = typeof rowKey === 'function' ? rowKey(record) : (record as Record<string, unknown>)[rowKey] as string | number
      const children = (record as Record<string, unknown>)[childrenKey] as T[] | undefined
      const hasChildren = Array.isArray(children) && children.length > 0
      result.push({ record, key, indentLevel: level, hasChildren })
      if (hasChildren && expandedKeys.has(key)) traverse(children!, level + 1)
    }
  }
  traverse(data, 0)
  return result
}

/** 获取所有节点的 key（用于 defaultExpandAll） */
export function getAllKeys<T>(data: T[], rowKey: RK<T>, childrenKey: string): (string | number)[] {
  const keys: (string | number)[] = []
  function traverse(list: T[]) {
    for (const record of list) {
      const key = typeof rowKey === 'function' ? rowKey(record) : (record as Record<string, unknown>)[rowKey] as string | number
      const children = (record as Record<string, unknown>)[childrenKey] as T[] | undefined
      if (Array.isArray(children) && children.length > 0) { keys.push(key); traverse(children) }
    }
  }
  traverse(data)
  return keys
}
