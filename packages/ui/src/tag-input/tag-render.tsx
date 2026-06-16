import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import type { DragHandlers } from './tag-input-utils'

/** 标签渲染参数 */
export interface TagRenderParams {
  tag: string
  index: number
  disabled: boolean
  readonly: boolean
  draggable: boolean
  dragOverIndex: number | null
  dragHandlers: DragHandlers
  onRemove: (index: number) => void
}

/** 默认标签渲染组件 */
export function DefaultTagRender({
  tag,
  index,
  disabled,
  readonly,
  draggable,
  dragOverIndex,
  dragHandlers,
  onRemove,
}: TagRenderParams) {
  const handleClose = () => {
    if (!disabled && !readonly) onRemove(index)
  }

  const isDraggable = draggable && !disabled && !readonly

  return (
    <span
      key={`${tag}-${index}`}
      draggable={isDraggable}
      onDragStart={(e) => dragHandlers.handleDragStart(e, index)}
      onDragEnd={dragHandlers.handleDragEnd}
      onDragOver={(e) => dragHandlers.handleDragOver(e, index)}
      onDrop={(e) => dragHandlers.handleDrop(e, index)}
      className={cn(
        'inline-flex items-center gap-1 rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700 border border-primary-200 select-none',
        isDraggable && 'cursor-move',
        dragOverIndex === index && 'border-dashed border-primary-400',
      )}
    >
      <span>{tag}</span>
      {!disabled && !readonly && (
        <button
          type="button"
          onClick={handleClose}
          aria-label={`删除标签 ${tag}`}
          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 transition-colors cursor-pointer"
        >
          <X className="h-3 w-3" aria-hidden="true" />
        </button>
      )}
    </span>
  )
}