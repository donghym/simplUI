import { forwardRef } from 'react'
import { GripVertical } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  dragTableVariants,
  dragHeaderVariants,
  dragHeaderCellVariants,
  dragRowVariants,
  dragCellVariants,
  dragHandleVariants,
} from './drag-table-variants'
import { useDragTableState } from './drag-table-state'
import type { DragTableProps, DragTableColumn } from './types'

/** 获取记录中指定字段的值 */
function getFieldValue(record: unknown, field: string): unknown {
  if (record && typeof record === 'object') {
    return (record as Record<string, unknown>)[field]
  }
  return undefined
}

/** 计算列宽样式 */
function getColumnWidth<T>(col: DragTableColumn<T>): string | undefined {
  if (!col.width) return undefined
  return typeof col.width === 'number' ? `${col.width}px` : col.width
}

/** 拖拽表格内部组件 */
function DragTableInner<T>(
  props: DragTableProps<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    columns,
    dataSource,
    onChange,
    onDragEnd,
    rowKey = 'key',
    draggable = true,
    dragHandle = true,
    disabled = false,
    bordered = true,
    className,
    ...rest
  } = props

  const {
    data,
    dragIndex,
    overIndex,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  } = useDragTableState(dataSource, onDragEnd, onChange)

  const isRowDraggable = draggable === true || draggable === 'row'
  const showDragHandle = dragHandle !== false
  const isCustomDragHandle = showDragHandle && typeof dragHandle !== 'boolean'

  /** 渲染单元格内容 */
  const renderCell = (col: DragTableColumn<T>, record: T, index: number) => {
    const value = getFieldValue(record, col.dataIndex)
    if (col.render) {
      return col.render(value, record, index)
    }
    return value as React.ReactNode
  }

  /** 渲染列宽样式 */
  const renderColWidth = (col: DragTableColumn<T>) => {
    const width = getColumnWidth(col)
    return width ? { width, flexShrink: 0 } : { flex: 1 }
  }

  return (
    <div ref={ref} className={cn(dragTableVariants({ bordered }), className)} {...rest}>
      {/* 表头 */}
      <div className={dragHeaderVariants()}>
        {showDragHandle && (
          <div className={cn(dragHeaderCellVariants(), 'w-10 shrink-0')} />
        )}
        {columns.map((col) => (
          <div
            key={col.dataIndex}
            className={dragHeaderCellVariants()}
            style={renderColWidth(col)}
          >
            {col.title}
          </div>
        ))}
      </div>

      {/* 数据行 */}
      {data.map((record, index) => {
        const isDragging = dragIndex === index
        const isOverTarget = overIndex === index && dragIndex !== null && dragIndex !== index
        return (
          <div
            key={String(getFieldValue(record, rowKey) ?? index)}
            draggable={isRowDraggable && !disabled}
            onDragStart={!isRowDraggable || disabled ? undefined : handleDragStart(index)}
            onDragOver={!isRowDraggable || disabled ? undefined : handleDragOver(index)}
            onDragLeave={!isRowDraggable || disabled ? undefined : handleDragLeave}
            onDrop={!isRowDraggable || disabled ? undefined : handleDrop(index)}
            onDragEnd={!isRowDraggable || disabled ? undefined : handleDragEnd}
            className={cn(dragRowVariants({ dragging: isDragging, dragOver: isOverTarget, disabled }))}
          >
            {showDragHandle && (
              <div className={cn(dragHandleVariants({ disabled }), 'w-10 shrink-0 py-3 px-2')}>
                {isCustomDragHandle ? dragHandle : <GripVertical className="h-4 w-4" />}
              </div>
            )}
            {columns.map((col) => (
              <div
                key={col.dataIndex}
                className={dragCellVariants()}
                style={renderColWidth(col)}
              >
                {renderCell(col, record, index)}
              </div>
            ))}
          </div>
        )
      })}

      {/* 空数据 */}
      {data.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">暂无数据</div>
      )}
    </div>
  )
}

type DragTableComponent = <T>(
  props: DragTableProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement

const ForwardedDragTable = forwardRef(DragTableInner) as DragTableComponent & { displayName: string }

ForwardedDragTable.displayName = 'DragTable'

export const DragTable = ForwardedDragTable

export type { DragTableProps, DragTableColumn }
export { dragTableVariants }

export default DragTable