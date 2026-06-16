import { forwardRef } from 'react'
import { TableInner } from './table-inner'
import type { TableProps, ColumnType, SortOrder, TableSize, ColumnAlign, ColumnFixed, SelectionType, RowSelectionConfig, SorterConfig, PaginationConfig, ExpandableConfig, FilterConfig, TableChangeInfo, FilterOption, RowEventHandler, CellProps, TableCheckboxProps } from './types'
import { tableVariants, headerCellVariants, rowVariants, cellVariants, emptyVariants, loadingVariants } from './table-variants'

const ForwardedTable = forwardRef(TableInner)
ForwardedTable.displayName = 'Table'

export const Table = ForwardedTable as <T>(
  props: TableProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement

export type {
  TableProps,
  ColumnType,
  SortOrder,
  TableSize,
  ColumnAlign,
  ColumnFixed,
  SelectionType,
  RowSelectionConfig,
  SorterConfig,
  PaginationConfig,
  ExpandableConfig,
  FilterConfig,
  TableChangeInfo,
  FilterOption,
  RowEventHandler,
  CellProps,
  TableCheckboxProps,
}
export { tableVariants, headerCellVariants, rowVariants, cellVariants, emptyVariants, loadingVariants }

export default Table