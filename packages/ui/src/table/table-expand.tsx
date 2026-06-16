import { useState, useCallback, useMemo } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { ExpandableConfig, ColumnType } from './types'
import { getRowKey } from './table-header'

export function useExpandable<T>(
  rowKey: string | ((record: T, index: number) => string | number) | undefined,
  expandable?: ExpandableConfig<T>,
) {
  const [internalExpandedKeys, setInternalExpandedKeys] = useState<(string | number)[]>(
    expandable?.defaultExpandedRowKeys ?? [],
  )

  const expandedKeys = expandable?.expandedRowKeys ?? internalExpandedKeys

  const handleExpand = useCallback(
    (key: string | number, record: T, expanded: boolean) => {
      const newKeys = expanded ? [...expandedKeys, key] : expandedKeys.filter((k) => k !== key)

      if (!expandable?.expandedRowKeys) setInternalExpandedKeys(newKeys)
      expandable?.onExpand?.(expanded, record)
      expandable?.onExpandedRowsChange?.(newKeys)
    },
    [expandedKeys, expandable],
  )

  const isRowExpanded = useCallback(
    (record: T, index: number) => {
      const key = getRowKey(record, index, rowKey)
      return expandedKeys.includes(key)
    },
    [expandedKeys, rowKey],
  )

  return { expandedKeys, handleExpand, isRowExpanded }
}

export function useExpandColumn<T>(
  columns: ColumnType<T>[],
  dataSource: T[],
  rowKey: string | ((record: T, index: number) => string | number) | undefined,
  expandable?: ExpandableConfig<T>,
  expandedKeys: (string | number)[] = [],
  handleExpand: (key: string | number, record: T, expanded: boolean) => void = () => {},
) {
  return useMemo(() => {
    if (!expandable?.expandedRowRender) return columns

    const expandColumn: ColumnType<T> = {
      key: '__expand__',
      title: null,
      width: expandable.columnWidth ?? 48,
      fixed: expandable.fixed ? 'left' : undefined,
      render: (_, record, index) => {
        const key = getRowKey(record, index, rowKey)
        const isExpanded = expandedKeys.includes(key)
        const canExpand = expandable.rowExpandable?.(record) ?? true

        if (!canExpand) return null

        return (
          <button
            type="button"
            onClick={() => handleExpand(key, record, !isExpanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? '收起' : '展开'}
            className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        )
      },
    }

    return [expandColumn, ...columns]
  }, [expandable, columns, expandedKeys, handleExpand, rowKey, dataSource])
}
