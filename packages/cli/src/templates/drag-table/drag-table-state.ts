import { useCallback, useRef, useState } from 'react'

/** 拖拽状态管理 */
export interface DragState<T> {
  data: T[]
  dragIndex: number | null
  overIndex: number | null
  isControlled: boolean
}

/** 创建拖拽状态和处理函数 */
export function useDragTableState<T>(
  dataSourceProp: T[] | undefined,
  onDragEnd: ((data: T[]) => void) | undefined,
  onChange: ((data: T[]) => void) | undefined,
) {
  const [localData, setLocalData] = useState<T[]>([])
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [overIndex, setOverIndex] = useState<number | null>(null)
  const isControlled = useRef(dataSourceProp !== undefined)

  const data = isControlled.current ? (dataSourceProp ?? []) : localData

  /** 重新排列数据 */
  const reorderData = useCallback(
    (fromIdx: number, toIdx: number): T[] => {
      const next = [...data]
      const [moved] = next.splice(fromIdx, 1)
      next.splice(toIdx, 0, moved!)
      return next
    },
    [data],
  )

  /** 拖拽开始 */
  const handleDragStart = useCallback(
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      setDragIndex(index)
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', String(index))
    },
    [],
  )

  /** 拖拽经过 */
  const handleDragOver = useCallback(
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
      if (dragIndex !== null && dragIndex !== index) {
        setOverIndex(index)
      }
    },
    [dragIndex],
  )

  /** 拖拽离开 */
  const handleDragLeave = useCallback(() => {
    setOverIndex(null)
  }, [])

  /** 放下 */
  const handleDrop = useCallback(
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setOverIndex(null)
      if (dragIndex === null || dragIndex === index) {
        setDragIndex(null)
        return
      }
      const newData = reorderData(dragIndex, index)
      if (!isControlled.current) {
        setLocalData(newData)
      }
      if (onDragEnd) onDragEnd(newData)
      if (onChange) onChange(newData)
      setDragIndex(null)
    },
    [dragIndex, reorderData, onDragEnd, onChange],
  )

  /** 拖拽结束 */
  const handleDragEnd = useCallback(() => {
    setDragIndex(null)
    setOverIndex(null)
  }, [])

  return {
    data,
    dragIndex,
    overIndex,
    isControlled: isControlled.current,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  }
}