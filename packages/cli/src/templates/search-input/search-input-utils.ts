/** 从 localStorage 读取搜索历史 */
export function getHistory(storageKey: string, maxHistory: number): string[] {
  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return []
    const list: string[] = JSON.parse(raw)
    return list.slice(0, maxHistory)
  } catch {
    return []
  }
}

/** 写入搜索历史到 localStorage */
export function setHistory(storageKey: string, maxHistory: number, value: string) {
  if (!value.trim()) return
  try {
    const list = getHistory(storageKey, maxHistory)
    const filtered = list.filter((item) => item !== value)
    filtered.unshift(value)
    localStorage.setItem(storageKey, JSON.stringify(filtered.slice(0, maxHistory)))
  } catch {
    // localStorage 不可用时静默忽略
  }
}

/** 删除单条搜索历史 */
export function removeHistory(storageKey: string, maxHistory: number, value: string): string[] {
  try {
    const list = getHistory(storageKey, maxHistory)
    const filtered = list.filter((item) => item !== value)
    localStorage.setItem(storageKey, JSON.stringify(filtered))
    return filtered
  } catch {
    return []
  }
}

/** 清空搜索历史 */
export function clearHistory(storageKey: string) {
  try {
    localStorage.removeItem(storageKey)
  } catch {
    // localStorage 不可用时静默忽略
  }
}
