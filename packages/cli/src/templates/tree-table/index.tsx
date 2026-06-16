import { forwardRef, useState, useCallback, useMemo } from 'react'
import { ChevronRight, Check, Minus } from 'lucide-react'
import { Virtuoso } from 'react-virtuoso'
import { cn } from '../lib/utils'
import {
  treeTableVariants, treeTableHeaderVariants, treeTableHeaderCellVariants,
  treeTableRowVariants, treeTableCellVariants, treeTableExpandIconVariants, treeTableIndentVariants,
} from './tree-table-variants'
import {
  flattenTreeData, getAllKeys, calcCheckedKeys, getRecordsByKeys, isHalfChecked,
} from './tree-table-utils'
import type { TreeTableProps, FlatRow } from './types'

/** 树形表格内部组件（保留泛型） */
function TreeTableInner<T extends Record<string, unknown>>(
  props: TreeTableProps<T>, ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    columns, dataSource, rowKey, childrenKey = 'children',
    expandRowByClick = false, defaultExpandAll = false, defaultExpandedKeys,
    onExpand, rowSelection, bordered = true, className, height, ...rest
  } = props

  const [innerExpandedKeys, setInnerExpandedKeys] = useState<(string | number)[]>(
    defaultExpandAll ? getAllKeys(dataSource, rowKey, childrenKey) : (defaultExpandedKeys ?? []),
  )
  const expandedKeysSet = useMemo(() => new Set(innerExpandedKeys), [innerExpandedKeys])

  const [innerSelectedKeys, setInnerSelectedKeys] = useState<(string | number)[]>(
    rowSelection?.selectedRowKeys ?? [],
  )
  const isControlled = rowSelection?.selectedRowKeys !== undefined
  const currentSelectedKeys = isControlled ? rowSelection!.selectedRowKeys! : innerSelectedKeys
  const selectedKeysSet = useMemo(() => new Set(currentSelectedKeys), [currentSelectedKeys])

  const flatRows = useMemo(
    () => flattenTreeData<T>(dataSource, rowKey, childrenKey, expandedKeysSet),
    [dataSource, rowKey, childrenKey, expandedKeysSet],
  )

  const handleToggleExpand = useCallback((row: FlatRow<T>) => {
    const isExpanded = expandedKeysSet.has(row.key)
    const newKeys = isExpanded ? innerExpandedKeys.filter((k) => k !== row.key) : [...innerExpandedKeys, row.key]
    setInnerExpandedKeys(newKeys)
    onExpand?.(!isExpanded, row.record)
  }, [innerExpandedKeys, expandedKeysSet, onExpand])

  const handleRowClick = useCallback((row: FlatRow<T>) => {
    if (expandRowByClick && row.hasChildren) handleToggleExpand(row)
  }, [expandRowByClick, handleToggleExpand])

  const handleCheckChange = useCallback((row: FlatRow<T>, checked: boolean) => {
    const checkStrictly = rowSelection?.checkStrictly ?? false
    const newKeys = calcCheckedKeys<T>(rowKey, childrenKey, dataSource, row.key, checked, selectedKeysSet, checkStrictly)
    if (!isControlled) setInnerSelectedKeys(newKeys)
    rowSelection?.onChange?.(newKeys, getRecordsByKeys<T>(dataSource, newKeys, rowKey, childrenKey))
  }, [rowKey, childrenKey, dataSource, selectedKeysSet, rowSelection, isControlled])

  const handleRadioChange = useCallback((row: FlatRow<T>) => {
    const newKeys = [row.key]
    if (!isControlled) setInnerSelectedKeys(newKeys)
    rowSelection?.onChange?.(newKeys, getRecordsByKeys<T>(dataSource, newKeys, rowKey, childrenKey))
  }, [rowKey, dataSource, rowSelection, isControlled])

  const hasSelection = rowSelection?.type === 'checkbox' || rowSelection?.type === 'radio'
  const enableVirtual = height !== undefined && flatRows.length > 100

  const renderRow = useCallback((row: FlatRow<T>) => {
    const isChecked = selectedKeysSet.has(row.key)
    const halfChecked = rowSelection?.type === 'checkbox' && isHalfChecked(row.record, selectedKeysSet, rowKey, childrenKey)
    const visualChecked = isChecked || halfChecked
    return (
      <div className={cn(treeTableRowVariants({ selected: isChecked }))}
        onClick={() => handleRowClick(row)} role="row">
        {/* 选择列 */}
        {rowSelection?.type === 'checkbox' && (
          <div className={cn(treeTableCellVariants(), 'w-12')} role="cell">
            <button type="button" className={cn(
              'inline-flex items-center justify-center h-4 w-4 rounded border border-solid transition-colors duration-200 select-none',
              visualChecked ? 'bg-primary-500 border-primary-500 text-white' : 'bg-background border-border hover:border-primary-500',
            )} onClick={(e) => { e.stopPropagation(); handleCheckChange(row, !isChecked) }}>
              {halfChecked ? <Minus className="h-3 w-3" /> : isChecked ? <Check className="h-3 w-3" /> : null}
            </button>
          </div>
        )}
        {rowSelection?.type === 'radio' && (
          <div className={cn(treeTableCellVariants(), 'w-12')} role="cell">
            <button type="button" className={cn(
              'inline-flex items-center justify-center h-4 w-4 rounded-full border border-solid transition-colors duration-200 select-none',
              isChecked ? 'bg-primary-500 border-primary-500 text-white' : 'bg-background border-border hover:border-primary-500',
            )} onClick={(e) => { e.stopPropagation(); handleRadioChange(row) }}>
              {isChecked && <span className="block h-1.5 w-1.5 rounded-full bg-white" />}
            </button>
          </div>
        )}
        {/* 数据列 */}
        {columns.map((col, colIndex) => (
          <div key={col.dataIndex} className={cn(treeTableCellVariants())}
            style={col.width ? { width: col.width } : undefined} role="cell">
            {colIndex === 0 && (
              <span className={cn('inline-flex items-center')}>
                {Array.from({ length: row.indentLevel }).map((_, i) => (
                  <span key={i} className={cn(treeTableIndentVariants(), 'w-6')} />
                ))}
                {row.hasChildren ? (
                  <span className={cn(treeTableExpandIconVariants({ expanded: expandedKeysSet.has(row.key) }))}
                    onClick={(e) => { e.stopPropagation(); handleToggleExpand(row) }}>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                ) : <span className="inline-block w-5" />}
              </span>
            )}
            {col.render
              ? col.render(row.record[col.dataIndex], row.record, row.indentLevel)
              : String(row.record[col.dataIndex] ?? '')}
          </div>
        ))}
      </div>
    )
  }, [columns, expandedKeysSet, rowSelection, rowKey, childrenKey, selectedKeysSet, handleRowClick, handleCheckChange, handleRadioChange, handleToggleExpand])

  return (
    <div ref={ref} className={cn('sui-tree-table', treeTableVariants({ bordered }), className)} {...rest}>
      {/* 表头 */}
      <div className={cn(treeTableHeaderVariants())} role="row">
        {hasSelection && <div className={cn(treeTableHeaderCellVariants(), 'w-12')} role="columnheader" />}
        {columns.map((col) => (
          <div key={col.dataIndex} className={cn(treeTableHeaderCellVariants())}
            style={col.width ? { width: col.width } : undefined} role="columnheader">
            {col.title}
          </div>
        ))}
      </div>

      {/* 数据行 */}
      {enableVirtual ? (
        <Virtuoso
          style={{ height }}
          data={flatRows}
          itemContent={(_index, row) => renderRow(row)}
        />
      ) : (
        <>
          {flatRows.map((row) => (
            <div key={row.key}>{renderRow(row)}</div>
          ))}
        </>
      )}

      {flatRows.length === 0 && <div className="text-center py-8 text-muted-foreground">暂无数据</div>}
    </div>
  )
}

const ForwardedTreeTable = forwardRef(TreeTableInner)
ForwardedTreeTable.displayName = 'TreeTable'

export const TreeTable = ForwardedTreeTable as <T extends Record<string, unknown>>(
  props: TreeTableProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement

export type { TreeTableProps, TreeTableColumn, TreeTableRowSelection, FlatRow } from './types'
export { treeTableVariants, treeTableHeaderVariants, treeTableHeaderCellVariants, treeTableRowVariants, treeTableCellVariants, treeTableExpandIconVariants, treeTableIndentVariants } from './tree-table-variants'
