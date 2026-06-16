import { useCallback } from 'react'

/** 拖拽处理函数集合 */
export interface DragHandlers {
  handleDragStart: (e: React.DragEvent<HTMLSpanElement>, index: number) => void
  handleDragEnd: (e: React.DragEvent<HTMLSpanElement>) => void
  handleDragOver: (e: React.DragEvent<HTMLSpanElement>, index: number) => void
  handleDrop: (e: React.DragEvent<HTMLSpanElement>, dropIndex: number) => void
}

/** 创建拖拽处理函数 */
export function useDragHandlers(
  tags: string[],
  updateTags: (newTags: string[]) => void,
  setDragOverIndex: (index: number | null) => void,
): DragHandlers {
  /** 拖拽开始 */
  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLSpanElement>, index: number) => {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', String(index))
      e.currentTarget.style.opacity = '0.5'
    },
    [],
  )

  /** 拖拽结束 */
  const handleDragEnd = useCallback((e: React.DragEvent<HTMLSpanElement>) => {
    e.currentTarget.style.opacity = '1'
    setDragOverIndex(null)
  }, [setDragOverIndex])

  /** 拖拽经过 */
  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLSpanElement>, index: number) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
      setDragOverIndex(index)
    },
    [setDragOverIndex],
  )

  /** 放置 */
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLSpanElement>, dropIndex: number) => {
      e.preventDefault()
      const dragIndex = Number(e.dataTransfer.getData('text/plain'))
      if (dragIndex === dropIndex || Number.isNaN(dragIndex)) {
        setDragOverIndex(null)
        return
      }
      const newTags = [...tags]
      const [removed] = newTags.splice(dragIndex, 1)
      if (removed !== undefined) {
        newTags.splice(dropIndex, 0, removed)
        updateTags(newTags)
      }
      setDragOverIndex(null)
    },
    [tags, updateTags, setDragOverIndex],
  )

  return {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
  }
}