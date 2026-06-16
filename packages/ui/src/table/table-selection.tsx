import { useState, useCallback, useMemo } from 'react'
import type { RowSelectionConfig, ColumnType } from './types'
import { getRowKey } from './table-header'

export function useRowSelection<T>(
  dataSource: T[],
  rowKey: string | ((record: T, index: number) => string | number) | undefined,
  rowSelection?: RowSelectionConfig<T>,
) {
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<(string | number)[]>(
    rowSelection?.defaultSelectedRowKeys ?? [],
  )
  const selectedKeys = rowSelection?.selectedRowKeys ?? internalSelectedKeys

  const handleSelectChange = useCallback(
    (key: string | number, record: T, selected: boolean) => {
      const newKeys = selected ? [...selectedKeys, key] : selectedKeys.filter((k) => k !== key)

      if (!rowSelection?.selectedRowKeys) setInternalSelectedKeys(newKeys)
      rowSelection?.onChange?.(newKeys, dataSource.filter((r, i) => newKeys.includes(getRowKey(r, i, rowKey))))
      rowSelection?.onSelect?.(record, selected, dataSource.filter((r, i) => newKeys.includes(getRowKey(r, i, rowKey))))
    },
    [selectedKeys, rowSelection, dataSource, rowKey],
  )

  const handleSelectAll = useCallback(
    (selected: boolean) => {
      const allKeys = dataSource.map((r, i) => getRowKey(r, i, rowKey))
      const newKeys = selected ? allKeys : []

      if (!rowSelection?.selectedRowKeys) setInternalSelectedKeys(newKeys)
      rowSelection?.onChange?.(newKeys, selected ? dataSource : [])
      rowSelection?.onSelectAll?.(selected, selected ? dataSource : [])
    },
    [dataSource, rowKey, rowSelection],
  )

  return { selectedKeys, handleSelectChange, handleSelectAll }
}

export function useSelectionColumn<T>(
  columns: ColumnType<T>[],
  dataSource: T[],
  rowKey: string | ((record: T, index: number) => string | number) | undefined,
  rowSelection?: RowSelectionConfig<T>,
  selectedKeys: (string | number)[] = [],
  handleSelectChange: (key: string | number, record: T, selected: boolean) => void = () => {},
  handleSelectAll: (selected: boolean) => void = () => {},
) {
  return useMemo(() => {
    if (!rowSelection) return columns

    const selectionColumn: ColumnType<T> = {
      key: '__selection__',
      title: rowSelection.type === 'checkbox' ? (
        <input
          type="checkbox"
          checked={selectedKeys.length === dataSource.length && dataSource.length > 0}
          onChange={(e) => handleSelectAll(e.target.checked)}
          aria-label="全选"
        />
      ) : null,
      width: rowSelection.columnWidth ?? 48,
      fixed: rowSelection.fixed ? 'left' : undefined,
      render: (_, record, index) => {
        const key = getRowKey(record, index, rowKey)
        const checkboxProps = rowSelection.getCheckboxProps?.(record)
        const isSelected = selectedKeys.includes(key)

        return (
          <input
            type={rowSelection.type === 'radio' ? 'radio' : 'checkbox'}
            checked={isSelected}
            disabled={checkboxProps?.disabled}
            onChange={(e) => handleSelectChange(key, record, e.target.checked)}
            aria-label={rowSelection.type === 'radio' ? '选择' : `选择行 ${index + 1}`}
          />
        )
      },
    }

    return [selectionColumn, ...columns]
  }, [rowSelection, columns, selectedKeys, dataSource.length, handleSelectAll, handleSelectChange, rowKey])
}
