import { ArrowUp, ArrowDown } from 'lucide-react'
import type { SortOrder, ColumnType, TableSize, ColumnAlign } from './types'
import { headerCellVariants } from './table-variants'
import { cn } from '../lib/utils'

/** 计算固定列偏移量 */
export function calculateFixedOffsets<T>(columns: ColumnType<T>[]): Map<string, number> {
  const offsets = new Map<string, number>()
  let leftOffset = 0
  let rightOffset = 0

  for (const col of columns) {
    if (col.fixed === 'left') {
      const width = col.width ? (typeof col.width === 'number' ? col.width : 0) : 100
      offsets.set(col.key || col.dataIndex || '', leftOffset)
      leftOffset += width
    }
  }

  for (let i = columns.length - 1; i >= 0; i--) {
    const col = columns[i]
    if (col && col.fixed === 'right') {
      const width = col.width ? (typeof col.width === 'number' ? col.width : 0) : 100
      offsets.set(col.key || col.dataIndex || '', rightOffset)
      rightOffset += width
    }
  }

  return offsets
}

/** 排序图标 */
export function SortIcon({ order }: { order: SortOrder }) {
  if (!order) return null
  return order === 'ascend' ? (
    <ArrowUp className="w-3 h-3 ml-1" aria-hidden="true" />
  ) : (
    <ArrowDown className="w-3 h-3 ml-1" aria-hidden="true" />
  )
}

/** 获取行的唯一标识 */
export function getRowKey<T>(
  record: T,
  index: number,
  rowKey?: string | ((record: T, index: number) => string | number),
): string | number {
  if (typeof rowKey === 'function') return rowKey(record, index)
  if (typeof rowKey === 'string') return (record as Record<string, unknown>)[rowKey] as string | number
  return index
}

/** 获取单元格值 */
export function getCellValue<T>(record: T, dataIndex?: string): unknown {
  if (!dataIndex) return undefined
  return (record as Record<string, unknown>)[dataIndex]
}

/** 表头组件 Props */
export interface TableHeaderProps<T> {
  columns: ColumnType<T>[]
  tableSize: TableSize
  sortField?: string
  sortOrder: SortOrder
  fixedOffsets: Map<string, number>
  onSortChange: (column: ColumnType<T>) => void
}

/** 表头渲染组件 */
export function TableHeader<T>({
  columns,
  tableSize,
  sortField,
  sortOrder,
  fixedOffsets,
  onSortChange,
}: TableHeaderProps<T>) {
  return (
    <tr>
      {columns.map((col) => {
        const colKey = col.key || col.dataIndex || ''
        const isSortable = Boolean(col.sorter)
        const isCurrentSort = sortField === colKey
        const offset = fixedOffsets.get(colKey)

        return (
          <th
            key={colKey}
            scope="col"
            className={cn(
              headerCellVariants({ tableSize, align: col.align as ColumnAlign, sortable: isSortable }),
              col.fixed === 'left' && 'sticky left-0 bg-muted z-10',
              col.fixed === 'right' && 'sticky right-0 bg-muted z-10',
              col.className,
            )}
            style={{
              width: col.width,
              minWidth: col.minWidth,
              left: col.fixed === 'left' ? offset : undefined,
              right: col.fixed === 'right' ? offset : undefined,
            } /* 固定列定位计算，允许保留 */}
            onClick={() => onSortChange(col)}
            {...col.onHeaderCell?.(col)}
          >
            <span className="inline-flex items-center">
              {col.title}
              {isSortable && <SortIcon order={isCurrentSort ? sortOrder : null} />}
            </span>
          </th>
        )
      })}
    </tr>
  )
}