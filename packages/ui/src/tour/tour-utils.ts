/** 获取目标元素 */
export function getTargetElement(target?: string | (() => HTMLElement | null)): HTMLElement | null {
  if (!target) return null
  if (typeof target === 'string') return document.querySelector(target) as HTMLElement | null
  return target()
}

/** 检查 localStorage 是否已记录完成 */
export function isTourFinished(storageKey?: string): boolean {
  if (!storageKey) return false
  try { return localStorage.getItem(storageKey) === 'finished' } catch { return false }
}

/** 标记导览已完成 */
export function markTourFinished(storageKey?: string): void {
  if (!storageKey) return
  try { localStorage.setItem(storageKey, 'finished') } catch { /* 存储不可用时静默忽略 */ }
}