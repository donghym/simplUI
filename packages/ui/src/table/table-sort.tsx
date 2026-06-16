import { useState, useMemo, useCallback } from 'react'
import type { SorterConfig, SortOrder, ColumnType } from './types'
import { getCellValue } from './table-header'

export function useSorter(sorter?: SorterConfig) {
  const [internalSortField, setInternalSortField] = useState<string | undefined>()
  const [internalSortOrder, setInternalSortOrder] = useState<SortOrder>(null)

  const sortField = sorter?.field ?? internalSortField
  const sortOrder = sorter?.order ?? internalSortOrder

  const handleSortChange = useCallback(
    (field: string) => {
      let newOrder: SortOrder = 'ascend'
      if (sortField === field) {
        if (sortOrder === 'ascend') newOrder = 'descend'
        else if (sortOrder === 'descend') newOrder = null
      }

      if (!sorter?.field) {
        setInternalSortField(newOrder ? field : undefined)
        setInternalSortOrder(newOrder)
      }
      sorter?.onChange?.(field, newOrder)
    },
    [sortField, sortOrder, sorter],
  )

  return { sortField, sortOrder, handleSortChange }
}

export function useSortedData<T>(
  dataSource: T[],
  columns: ColumnType<T>[],
  sortField?: string,
  sortOrder?: SortOrder,
) {
  return useMemo(() => {
    if (!sortField || !sortOrder) return dataSource

    const sortColumn = columns.find((c) => c.key === sortField || c.dataIndex === sortField)
    if (!sortColumn?.sorter) return dataSource

    const sorterFn =
      typeof sortColumn.sorter === 'function'
        ? sortColumn.sorter
        : (a: T, b: T) => {
            const aVal = getCellValue(a, sortColumn.dataIndex)
            const bVal = getCellValue(b, sortColumn.dataIndex)
            if (String(aVal) < String(bVal)) return -1
            if (String(aVal) > String(bVal)) return 1
            return 0
          }

    return [...dataSource].sort((a, b) => {
      const result = sorterFn(a, b, sortOrder)
      return sortOrder === 'descend' ? -result : result
    })
  }, [dataSource, sortField, sortOrder, columns])
}
