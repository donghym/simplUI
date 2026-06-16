import type { CropRect } from './types'

export type { EditorState, CropRect, DragState } from './types'
export { drawCanvas, cropAndExport } from './image-editor-canvas'

/** 计算裁剪框移动后的新位置 */
export function moveCropRect(startRect: CropRect, dx: number, dy: number): CropRect {
  return {
    x: Math.max(0, Math.min(100 - startRect.width, startRect.x + dx)),
    y: Math.max(0, Math.min(100 - startRect.height, startRect.y + dy)),
    width: startRect.width,
    height: startRect.height,
  }
}

/** 计算裁剪框调整大小后的新位置 */
export function resizeCropRect(startRect: CropRect, dx: number, dy: number): CropRect {
  return {
    x: startRect.x,
    y: startRect.y,
    width: Math.max(10, Math.min(100 - startRect.x, startRect.width + dx)),
    height: Math.max(10, Math.min(100 - startRect.y, startRect.height + dy)),
  }
}
