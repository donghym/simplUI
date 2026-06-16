type RK<T> = string | ((record: T) => string | number)

function getKey<T>(record: T, rowKey: RK<T>): string | number {
  return typeof rowKey === 'function' ? rowKey(record) : (record as Record<string, unknown>)[rowKey] as string | number
}

function getChildren<T>(record: T, childrenKey: string): T[] | undefined {
  return (record as Record<string, unknown>)[childrenKey] as T[] | undefined
}

/** 获取节点及其所有子孙节点的 key */
export function getDescendantKeys<T>(record: T, rowKey: RK<T>, childrenKey: string): (string | number)[] {
  const keys: (string | number)[] = []
  const children = getChildren(record, childrenKey)
  if (!Array.isArray(children)) return keys
  function traverse(list: T[]) {
    for (const item of list) {
      keys.push(getKey(item, rowKey))
      const sub = getChildren(item, childrenKey)
      if (Array.isArray(sub)) traverse(sub)
    }
  }
  traverse(children)
  return keys
}

/** 根据选中的 keys 获取对应的行记录 */
export function getRecordsByKeys<T>(data: T[], keys: (string | number)[], rowKey: RK<T>, childrenKey: string): T[] {
  const keySet = new Set(keys)
  const result: T[] = []
  function traverse(list: T[]) {
    for (const record of list) {
      if (keySet.has(getKey(record, rowKey))) result.push(record)
      const children = getChildren(record, childrenKey)
      if (Array.isArray(children)) traverse(children)
    }
  }
  traverse(data)
  return result
}

/** 判断节点是否为半选状态 */
export function isHalfChecked<T>(record: T, checkedKeys: Set<string | number>, rowKey: RK<T>, childrenKey: string): boolean {
  const children = getChildren(record, childrenKey)
  if (!Array.isArray(children) || children.length === 0) return false
  const checkedCount = children.filter((c) => checkedKeys.has(getKey(c, rowKey))).length
  return checkedCount > 0 && checkedCount < children.length
}
