import { useState, useCallback, useMemo } from 'react'
import type { PaginationConfig } from './types'

export function usePagination(pagination?: PaginationConfig | false, total?: number) {
  const paginationConfig = pagination === false ? undefined : pagination
  const [internalCurrent, setInternalCurrent] = useState(paginationConfig?.defaultCurrent ?? 1)
  const [internalPageSize, setInternalPageSize] = useState(paginationConfig?.defaultPageSize ?? 10)

  const current = paginationConfig?.current ?? internalCurrent
  const pageSize = paginationConfig?.pageSize ?? internalPageSize

  const handlePageChange = useCallback(
    (page: number, newPageSize: number) => {
      if (!paginationConfig?.current) setInternalCurrent(page)
      if (!paginationConfig?.pageSize && newPageSize !== pageSize) setInternalPageSize(newPageSize)
      paginationConfig?.onChange?.(page, newPageSize)
    },
    [paginationConfig, pageSize],
  )

  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      const newCurrent = Math.min(current, Math.ceil((total ?? 0) / newPageSize))
      if (!paginationConfig?.pageSize) setInternalPageSize(newPageSize)
      if (!paginationConfig?.current && newCurrent !== current) setInternalCurrent(newCurrent)
      paginationConfig?.onPageSizeChange?.(newPageSize, newCurrent)
      if (newCurrent !== current) paginationConfig?.onChange?.(newCurrent, newPageSize)
    },
    [paginationConfig, current, total],
  )

  return { current, pageSize, handlePageChange, handlePageSizeChange }
}

export function usePaginatedData<T>(dataSource: T[], current: number, pageSize: number) {
  return useMemo(() => {
    const start = (current - 1) * pageSize
    const end = start + pageSize
    return dataSource.slice(start, end)
  }, [dataSource, current, pageSize])
}
