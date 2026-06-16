import type { FormItemType } from './types'

/** 拖拽数据传输的 MIME 类型 */
export const DRAG_MIME = 'application/x-form-designer'

/** 拖拽数据类型 */
export type DragPayload = { source: 'palette'; type: FormItemType } | { source: 'design'; index: number }

/** 设置拖拽数据 */
export function setDragData(e: React.DragEvent<HTMLElement>, data: DragPayload): void {
  e.dataTransfer.setData(DRAG_MIME, JSON.stringify(data))
  e.dataTransfer.effectAllowed = 'move'
}

/** 获取拖拽数据 */
export function getDragData(e: React.DragEvent<HTMLElement>): DragPayload | null {
  const raw = e.dataTransfer.getData(DRAG_MIME)
  if (!raw) return null
  try { return JSON.parse(raw) as DragPayload } catch { return null }
}

/** 导出 JSON */
export function exportToJson(items: import('./types').FormItemConfig[]): string {
  return JSON.stringify(items, null, 2)
}
