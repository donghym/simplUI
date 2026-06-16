import type { ColumnType, TableSize, ColumnAlign, RowEventHandler, ExpandableConfig } from './types'
import { rowVariants, cellVariants } from './table-variants'
import { cn } from '../lib/utils'
import { getRowKey, getCellValue } from './table-header'

/** 行渲染组件 Props */
export interface TableRowProps<T> {
  index: number
  record: T
  columns: ColumnType<T>[]
  rowKey: string | ((record: T, index: number) => string | number) | undefined
  selectedKeys: (string | number)[]
  tableSize: TableSize
  fixedOffsets: Map<string, number>
  rowClassName?: string | ((record: T, index: number) => string)
  onRow?: (record: T, index: number) => RowEventHandler
  expandable?: ExpandableConfig<T>
  isRowExpanded?: boolean
  expandedContent?: React.ReactNode
}

/** 行渲染组件 */
export function TableRow<T>({
  index,
  record,
  columns,
  rowKey,
  selectedKeys,
  tableSize,
  fixedOffsets,
  rowClassName,
  onRow,
  isRowExpanded,
  expandedContent,
}: TableRowProps<T>) {
  const key = getRowKey(record, index, rowKey)
  const isSelected = selectedKeys.includes(key)
  const rowEvents = onRow?.(record, index)
  const rowClass = typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName

  return (
    <>
      <tr
        className={cn(rowVariants({ selected: isSelected }), rowClass)}
        onClick={rowEvents?.onClick}
        onDoubleClick={rowEvents?.onDoubleClick}
        onMouseEnter={rowEvents?.onMouseEnter}
        onMouseLeave={rowEvents?.onMouseLeave}
        aria-selected={isSelected}
      >
        {columns.map((col) => {
          const colKey = col.key || col.dataIndex || ''
          const value = getCellValue(record, col.dataIndex)
          const content = col.render ? col.render(value, record, index) : value
          const offset = fixedOffsets.get(colKey)

          return (
            <td
              key={colKey}
              className={cn(
                cellVariants({
                  tableSize,
                  align: col.align as ColumnAlign,
                  ellipsis: col.ellipsis,
                  fixedLeft: col.fixed === 'left',
                  fixedRight: col.fixed === 'right',
                }),
                col.className,
              )}
              style={{
                width: col.width,
                minWidth: col.minWidth,
                left: col.fixed === 'left' ? offset : undefined,
                right: col.fixed === 'right' ? offset : undefined,
              } /* 固定列定位计算，允许保留 */}
              {...col.onCell?.(record, index)}
            >
              {content as React.ReactNode}
            </td>
          )
        })}
      </tr>
      {isRowExpanded && expandedContent && (
        <tr className="bg-muted">
          <td colSpan={columns.length} className="px-4 py-3">
            {expandedContent}
          </td>
        </tr>
      )}
    </>
  )
}