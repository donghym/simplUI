import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { imageEditorVariants } from './image-editor-variants'

/** 裁剪区域 (百分比 0-100) */
export interface CropArea {
  x: number
  y: number
  width: number
  height: number
}

/** 图片编辑器状态 */
export interface EditorState {
  rotation: number
  flipH: boolean
  flipV: boolean
  zoom: number
}

/** 裁剪框状态 (百分比 0-100) */
export interface CropRect {
  x: number
  y: number
  width: number
  height: number
}

/** 拖拽状态 */
export interface DragState {
  type: 'move' | 'resize'
  startMouse: { x: number; y: number }
  startRect: CropRect
}

/** ImageEditor 组件属性 */
export interface ImageEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof imageEditorVariants> {
  src: string
  onChange?: (dataUrl: string) => void
  showToolbar?: boolean
  rotateStep?: number
  zoomStep?: number
  cropMode?: boolean
  onCropConfirm?: (cropArea: CropArea) => void
}
