import { useState, useMemo, useCallback } from 'react'
import type { ColumnType, FilterConfig } from './types'
import { getCellValue } from './table-header'

export function useFilter(columns: ColumnType<unknown>[], filter?: FilterConfig) {
  const [internalFilters, setInternalFilters] = useState<Record<string, (string | number | boolean)[]>>(() => {
    const initial: Record<string, (string | number | boolean)[]> = {}
    columns.forEach((col) => {
      const colKey = col.key || col.dataIndex || ''
      if (col.defaultFilteredValue) {
        initial[colKey] = col.defaultFilteredValue
      }
    })
    return initial
  })

  const filters = useMemo(() => {
    const result: Record<string, (string | number | boolean)[]> = {}
    columns.forEach((col) => {
      const colKey = col.key || col.dataIndex || ''
      if (col.filteredValue !== undefined) {
        result[colKey] = col.filteredValue
      } else if (internalFilters[colKey]) {
        result[colKey] = internalFilters[colKey]
      }
    })
    return result
  }, [columns, internalFilters])

  const handleFilterChange = useCallback(
    (colKey: string, value: (string | number | boolean)[]) => {
      const newFilters = { ...internalFilters, [colKey]: value }
      setInternalFilters(newFilters)
      filter?.onChange?.(newFilters)
    },
    [internalFilters, filter],
  )

  return { filters, handleFilterChange }
}

export function useFilteredData<T>(
  dataSource: T[],
  columns: ColumnType<T>[],
  filters: Record<string, (string | number | boolean)[]>,
) {
  return useMemo(() => {
    if (Object.keys(filters).length === 0) return dataSource

    return dataSource.filter((record) => {
      return columns.every((col) => {
        const colKey = col.key || col.dataIndex || ''
        const filterValues = filters[colKey]
        if (!filterValues || filterValues.length === 0) return true

        if (col.onFilter) {
          return filterValues.some((value) => col.onFilter!(value, record))
        }

        const cellValue = getCellValue(record, col.dataIndex)
        return filterValues.includes(cellValue as string | number | boolean)
      })
    })
  }, [dataSource, columns, filters])
}
