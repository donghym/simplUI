import type { CropArea, EditorState, CropRect } from './types'
function getCanvasSize(img: HTMLImageElement, state: EditorState, maxW: number) {
  const scale = Math.min(maxW / img.width, 500 / img.height, 1) * state.zoom
  const w = img.width * scale
  const h = img.height * scale
  const rad = (state.rotation * Math.PI) / 180
  const absCos = Math.abs(Math.cos(rad))
  const absSin = Math.abs(Math.sin(rad))
  return { cw: w * absCos + h * absSin, ch: w * absSin + h * absCos, w, h, rad }
}
export function drawCanvas(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  state: EditorState,
  maxW: number,
): void {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const { cw, ch, w, h, rad } = getCanvasSize(img, state, maxW)
  canvas.width = cw
  canvas.height = ch
  ctx.clearRect(0, 0, cw, ch)
  ctx.save()
  ctx.translate(cw / 2, ch / 2)
  ctx.rotate(rad)
  ctx.scale(state.flipH ? -1 : 1, state.flipV ? -1 : 1)
  ctx.drawImage(img, -w / 2, -h / 2, w, h)
  ctx.restore()
}
export function cropAndExport(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  state: EditorState,
  cropRect: CropRect,
  maxW: number,
  onChange?: (dataUrl: string) => void,
  onCropConfirm?: (cropArea: CropArea) => void,
): void {
  const { cw, ch } = getCanvasSize(img, state, maxW)
  const sx = (cropRect.x / 100) * cw, sy = (cropRect.y / 100) * ch
  const sw = (cropRect.width / 100) * cw, sh = (cropRect.height / 100) * ch
  const cropCanvas = document.createElement('canvas')
  cropCanvas.width = sw
  cropCanvas.height = sh
  const cropCtx = cropCanvas.getContext('2d')
  if (!cropCtx) return
  cropCtx.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh)
  onChange?.(cropCanvas.toDataURL('image/png'))
  onCropConfirm?.({ x: cropRect.x, y: cropRect.y, width: cropRect.width, height: cropRect.height })
}
