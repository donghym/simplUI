import { useMemo, useCallback, useEffect } from 'react'
import { TableVirtuoso } from 'react-virtuoso'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { Pagination } from '../pagination'
import { tableVariants, emptyVariants, loadingVariants } from './table-variants'
import { TableHeader, calculateFixedOffsets } from './table-header'
import { TableRow } from './table-row'
import { useRowSelection, useSelectionColumn } from './table-selection'
import { useSorter, useSortedData } from './table-sort'
import { usePagination, usePaginatedData } from './table-pagination'
import { useFilter, useFilteredData } from './table-filter'
import { useExpandable, useExpandColumn } from './table-expand'
import type { TableProps, ColumnType } from './types'

/** Table 组件核心逻辑 */
export function TableInner<T>(
  props: TableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    columns,
    dataSource,
    rowKey = 'id',
    height,
    width,
    loading = false,
    emptyText = '暂无数据',
    bordered = true,
    tableSize = 'default',
    showHeader = true,
    rowSelection,
    sorter,
    pagination,
    expandable,
    filter,
    title,
    footer,
    rowClassName,
    onRow,
    onChange,
    className,
    ...rest
  } = props

  // 选择状态
  const { selectedKeys, handleSelectChange, handleSelectAll } = useRowSelection(dataSource, rowKey, rowSelection)

  // 排序状态
  const { sortField, sortOrder, handleSortChange } = useSorter(sorter)

  // 过滤状态
  const { filters } = useFilter(columns as ColumnType<unknown>[], filter)

  // 展开状态
  const { expandedKeys, handleExpand, isRowExpanded } = useExpandable(rowKey, expandable)

  // 数据处理流程：过滤 -> 排序 -> 分页
  const filteredData = useFilteredData(dataSource, columns, filters)
  const sortedData = useSortedData(filteredData, columns, sortField, sortOrder)

  // 分页状态
  const { current, pageSize, handlePageChange, handlePageSizeChange } = usePagination(pagination, sortedData.length)
  const paginatedData = usePaginatedData(sortedData, current, pageSize)

  // 当分页、排序、过滤变化时触发 onChange
  useEffect(() => {
    onChange?.({
      pagination: { current, pageSize },
      sorter: sortField && sortOrder ? { field: sortField, order: sortOrder } : undefined,
      filters: filters && Object.keys(filters).length > 0 ? filters : undefined,
    })
  }, [current, pageSize, sortField, sortOrder, filters, onChange])

  // 最终显示的数据（无分页时显示全部）
  const displayData = pagination === false ? sortedData : paginatedData

  // 固定列偏移计算
  const fixedOffsets = useMemo(() => calculateFixedOffsets(columns), [columns])

  // 列配置：选择列 + 展开列 + 原始列
  const columnsWithSelection = useSelectionColumn(
    columns,
    displayData,
    rowKey,
    rowSelection,
    selectedKeys,
    handleSelectChange,
    handleSelectAll,
  )
  const finalColumns = useExpandColumn(
    columnsWithSelection,
    displayData,
    rowKey,
    expandable,
    expandedKeys,
    handleExpand,
  )

  // 表头渲染
  const fixedHeaderContent = useCallback(
    () =>
      showHeader ? (
        <TableHeader
          columns={finalColumns}
          tableSize={tableSize}
          sortField={sortField}
          sortOrder={sortOrder}
          fixedOffsets={fixedOffsets}
          onSortChange={(col) => handleSortChange(col.key || col.dataIndex || '')}
        />
      ) : null,
    [showHeader, finalColumns, tableSize, sortField, sortOrder, fixedOffsets, handleSortChange],
  )

  // 行渲染
  const itemContent = useCallback(
    (index: number, record: T) => (
      <TableRow
        index={index}
        record={record}
        columns={finalColumns}
        rowKey={rowKey}
        selectedKeys={selectedKeys}
        tableSize={tableSize}
        fixedOffsets={fixedOffsets}
        rowClassName={rowClassName}
        onRow={onRow}
        expandable={expandable}
        isRowExpanded={isRowExpanded(record, index)}
        expandedContent={expandable?.expandedRowRender?.(record, index)}
      />
    ),
    [finalColumns, rowKey, selectedKeys, tableSize, fixedOffsets, rowClassName, onRow, expandable, isRowExpanded],
  )

  // 计算列宽总和，用于设置表格最小宽度
  const totalColumnWidth = useMemo(() => {
    return finalColumns.reduce((sum, col) => {
      const colWidth = typeof col.width === 'number' ? col.width : 0
      return sum + colWidth
    }, 0)
  }, [finalColumns])

  // 空状态
  const emptyContent = useMemo(() => {
    if (displayData.length === 0 && !loading) return <div className={emptyVariants()}>{emptyText}</div>
    return null
  }, [displayData.length, loading, emptyText])

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Table"
      aria-busy={loading || undefined}
      className={cn(tableVariants({ bordered }), 'relative', className)}
      style={{ height, width } /* 用户传入的动态尺寸，运行时设置 */}
      {...rest}
    >
      {title && <div className="px-4 py-3 font-medium text-foreground border-b border-border">{title}</div>}

      {loading && (
        <div className={loadingVariants()} role="alert" aria-busy="true">
          <Loader2 className="w-6 h-6 animate-spin text-primary-500" aria-label="加载中" />
        </div>
      )}

      {emptyContent}

      {displayData.length > 0 && (
        <div className={pagination !== false ? 'h-[calc(100%-56px)]' : 'h-full'}>
          <TableVirtuoso
            data={displayData}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={itemContent}
            overscan={10}
            className="h-full w-full"
            defaultItemHeight={tableSize === 'small' ? 40 : tableSize === 'middle' ? 48 : 53}
            components={{
              Table: ({ style: tableStyle, ...props }) => (
                <table
                  {...props}
                  role="table"
                  style={{
                    ...tableStyle,
                    tableLayout: 'fixed',
                    width: totalColumnWidth > 0 ? `${totalColumnWidth}px` : '100%' /* 列宽总和，运行时计算 */,
                    minWidth: '100%',
                  }}
                />
              ),
              TableRow: ({ children }) => <>{children}</>,
            }}
          />
        </div>
      )}

      {pagination !== false && displayData.length > 0 && (
        <div className="px-4 py-3 border-t border-border">
          <Pagination
            current={current}
            pageSize={pageSize}
            total={sortedData.length}
            showTotal={pagination?.showTotal}
            showSizeChanger={pagination?.showSizeChanger}
            showQuickJumper={pagination?.showQuickJumper}
            pageSizeOptions={pagination?.pageSizeOptions}
            onChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            disabled={pagination?.disabled}
          />
        </div>
      )}

      {footer && <div className="px-4 py-3 text-muted-foreground border-t border-border">{footer}</div>}
    </div>
  )
}
