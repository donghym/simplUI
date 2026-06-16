import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { RotateCcw, RotateCw, FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Crop, Check, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { imageEditorVariants, toolbarVariants, toolButtonVariants } from './image-editor-variants'
import type { ImageEditorProps } from './types'
import type { EditorState, CropRect, DragState } from './image-editor-utils'
import { drawCanvas, cropAndExport, moveCropRect, resizeCropRect } from './image-editor-utils'

export const ImageEditor = forwardRef<HTMLDivElement, ImageEditorProps>((props, ref) => {
  const {
    className, src, onChange, showToolbar = true, rotateStep = 90,
    zoomStep = 0.1, cropMode: cropModeProp = false, onCropConfirm, ...rest
  } = props

  const [editorState, setEditorState] = useState<EditorState>({ rotation: 0, flipH: false, flipV: false, zoom: 1 })
  const [isCropping, setIsCropping] = useState(cropModeProp)
  const [cropRect, setCropRect] = useState<CropRect>({ x: 10, y: 10, width: 80, height: 80 })
  const [dragState, setDragState] = useState<DragState | null>(null)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  // 加载图片
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => { imageRef.current = img }
    img.src = src
  }, [src])

  // 绘制画布
  const draw = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return
    drawCanvas(canvasRef.current, imageRef.current, editorState, containerRef.current?.clientWidth ?? 600)
  }, [editorState])

  useEffect(() => { draw() }, [draw])

  // 导出 base64
  const exportImage = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    onChange?.(canvas.toDataURL('image/png'))
  }, [onChange])

  // 裁剪并导出
  const confirmCrop = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return
    cropAndExport(canvasRef.current, imageRef.current, editorState, cropRect, containerRef.current?.clientWidth ?? 600, onChange, onCropConfirm)
    setIsCropping(false)
  }, [cropRect, editorState, onChange, onCropConfirm])

  // 裁剪框拖拽开始
  const handleCropMouseDown = useCallback((e: React.MouseEvent, type: 'move' | 'resize') => {
    e.preventDefault()
    setDragState({ type, startMouse: { x: e.clientX, y: e.clientY }, startRect: { ...cropRect } })
  }, [cropRect])

  // 裁剪框拖拽移动
  useEffect(() => {
    if (!dragState) return
    const handleMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const dx = ((e.clientX - dragState.startMouse.x) / rect.width) * 100
      const dy = ((e.clientY - dragState.startMouse.y) / rect.height) * 100
      setCropRect(dragState.type === 'move' ? moveCropRect(dragState.startRect, dx, dy) : resizeCropRect(dragState.startRect, dx, dy))
    }
    const handleUp = () => setDragState(null)
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
    return () => { document.removeEventListener('mousemove', handleMove); document.removeEventListener('mouseup', handleUp) }
  }, [dragState])

  const update = (partial: Partial<EditorState>) => setEditorState((prev) => ({ ...prev, ...partial }))
  const reset = () => update({ rotation: 0, flipH: false, flipV: false, zoom: 1 })

  return (
    <div ref={ref} className={cn(imageEditorVariants({ status: isCropping ? 'cropping' : 'default' }), className)} {...rest}>
      {/* 画布区域 */}
      <div ref={containerRef} className="relative flex items-center justify-center bg-muted/20 p-4 min-h-[200px]">
        <canvas ref={canvasRef} className="max-w-full" />
        {isCropping && (
          <div className="absolute inset-4 pointer-events-none">
            <div className="absolute inset-0 bg-black/40" />
            <div
              className="absolute border-2 border-primary-500 bg-transparent pointer-events-auto cursor-move"
              style={{ left: `${cropRect.x}%`, top: `${cropRect.y}%`, width: `${cropRect.width}%`, height: `${cropRect.height}%` } /* Canvas 裁剪框定位计算，允许保留 */}
              onMouseDown={(e) => handleCropMouseDown(e, 'move')}
            >
              <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 cursor-se-resize rounded-sm bg-primary-500 pointer-events-auto" onMouseDown={(e) => handleCropMouseDown(e, 'resize')} />
            </div>
          </div>
        )}
      </div>

      {/* 工具栏 */}
      {showToolbar && (
        <div className={toolbarVariants()}>
          <button type="button" className={toolButtonVariants()} onClick={() => update({ rotation: editorState.rotation - rotateStep })} title="向左旋转" aria-label="向左旋转"><RotateCcw className="h-4 w-4" /></button>
          <button type="button" className={toolButtonVariants()} onClick={() => update({ rotation: editorState.rotation + rotateStep })} title="向右旋转" aria-label="向右旋转"><RotateCw className="h-4 w-4" /></button>
          <button type="button" className={toolButtonVariants()} onClick={() => update({ flipH: !editorState.flipH })} title="水平翻转" aria-label="水平翻转"><FlipHorizontal className="h-4 w-4" /></button>
          <button type="button" className={toolButtonVariants()} onClick={() => update({ flipV: !editorState.flipV })} title="垂直翻转" aria-label="垂直翻转"><FlipVertical className="h-4 w-4" /></button>
          <button type="button" className={toolButtonVariants()} onClick={() => update({ zoom: Math.min(3, editorState.zoom + zoomStep) })} title="放大" aria-label="放大"><ZoomIn className="h-4 w-4" /></button>
          <button type="button" className={toolButtonVariants()} onClick={() => update({ zoom: Math.max(0.2, editorState.zoom - zoomStep) })} title="缩小" aria-label="缩小"><ZoomOut className="h-4 w-4" /></button>
          <div className="mx-1 h-4 w-px bg-border" />
          <button type="button" className={toolButtonVariants({ active: isCropping })} onClick={() => setIsCropping(!isCropping)} title="裁剪" aria-label="裁剪"><Crop className="h-4 w-4" /></button>
          {isCropping && (
            <>
              <button type="button" className={toolButtonVariants()} onClick={confirmCrop} title="确认裁剪" aria-label="确认裁剪"><Check className="h-4 w-4 text-success-600" /></button>
              <button type="button" className={toolButtonVariants()} onClick={() => setIsCropping(false)} title="取消裁剪" aria-label="取消裁剪"><X className="h-4 w-4 text-danger-500" /></button>
            </>
          )}
          <div className="flex-1" />
          <button type="button" className={toolButtonVariants()} onClick={reset} title="重置" aria-label="重置"><RotateCcw className="h-4 w-4" /></button>
          <button type="button" className={cn(toolButtonVariants(), 'text-primary-600 font-medium text-xs px-3')} onClick={exportImage} title="导出" aria-label="导出">导出</button>
        </div>
      )}
    </div>
  )
})

ImageEditor.displayName = 'ImageEditor'

export type { ImageEditorProps, CropArea } from './types'
export { imageEditorVariants, toolbarVariants, toolButtonVariants } from './image-editor-variants'
