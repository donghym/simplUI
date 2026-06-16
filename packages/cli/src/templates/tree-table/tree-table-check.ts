type RK<T> = string | ((record: T) => string | number)

const getKey = <T>(r: T, rk: RK<T>): string | number => {
  return typeof rk === 'function' ? rk(r) : (r as Record<string, unknown>)[rk] as string | number
}

const getCh = <T>(r: T, ck: string): T[] | undefined => {
  return (r as Record<string, unknown>)[ck] as T[] | undefined
}

function findRecord<T>(data: T[], tk: string | number, rk: RK<T>, ck: string): T | undefined {
  for (const r of data) {
    if (getKey(r, rk) === tk) return r
    const ch = getCh(r, ck)
    if (Array.isArray(ch)) {
      const f = findRecord(ch, tk, rk, ck)
      if (f) return f
    }
  }
  return undefined
}

function getAncestorKeys<T>(data: T[], tk: string | number, rk: RK<T>, ck: string): (string | number)[] {
  const path: (string | number)[] = []
  function search(list: T[], anc: (string | number)[]): boolean {
    for (const r of list) {
      const k = getKey(r, rk)
      if (k === tk) {
        path.push(...anc)
        return true
      }
      const ch = getCh(r, ck)
      if (Array.isArray(ch) && search(ch, [...anc, k])) return true
    }
    return false
  }
  search(data, [])
  return path
}

/** 根据勾选联动计算新的选中 keys */
export function calcCheckedKeys<T>(
  rowKey: RK<T>,
  childrenKey: string,
  dataSource: T[],
  clickedKey: string | number,
  checked: boolean,
  currentKeys: Set<string | number>,
  checkStrictly: boolean,
): (string | number)[] {
  if (checkStrictly) {
    const n = new Set(currentKeys)
    if (checked) {
      n.add(clickedKey)
    } else {
      n.delete(clickedKey)
    }
    return Array.from(n)
  }

  const next = new Set(currentKeys)
  const rec = findRecord(dataSource, clickedKey, rowKey, childrenKey)
  if (!rec) return Array.from(next)

  if (checked) {
    next.add(clickedKey)
  } else {
    next.delete(clickedKey)
  }

  const children = getCh(rec, childrenKey)
  if (Array.isArray(children)) {
    const dk: (string | number)[] = []
    function trav(list: T[]) {
      for (const it of list) {
        dk.push(getKey(it, rowKey))
        const s = getCh(it, childrenKey)
        if (Array.isArray(s)) trav(s)
      }
    }
    trav(children)
    for (const k of dk) {
      if (checked) {
        next.add(k)
      } else {
        next.delete(k)
      }
    }
  }

  for (const ak of getAncestorKeys(dataSource, clickedKey, rowKey, childrenKey)) {
    if (checked) {
      const ar = findRecord(dataSource, ak, rowKey, childrenKey)
      const ch = ar ? getCh(ar, childrenKey) : undefined
      if (Array.isArray(ch) && ch.every((c) => next.has(getKey(c, rowKey)))) {
        next.add(ak)
      }
    } else {
      next.delete(ak)
    }
  }

  return Array.from(next)
}