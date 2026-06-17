import type { ReactNode } from 'react'
import type { SortOrder, ColumnAlign, ColumnFixed } from './table-base-types'
import type { CellProps, FilterOption } from './table-config-types'

/** 排序比较函数 */
export type SorterFn<T> = (a: T, b: T, order: SortOrder) => number

/** 过滤函数 */
export type FilterFn<T> = (value: unknown, record: T) => boolean

/** 列配置 */
export interface ColumnType<T> {
  /** 列标题 */
  title: ReactNode
  /** 数据字段名 */
  dataIndex?: string
  /** 列唯一标识 */
  key?: string
  /** 列宽度 */
  width?: number | string
  /** 列最小宽度 */
  minWidth?: number
  /** 内容对齐方式。默认 'left' */
  align?: ColumnAlign
  /** 固定列位置 */
  fixed?: ColumnFixed
  /** 是否可排序 */
  sorter?: boolean | SorterFn<T>
  /** 默认排序顺序 */
  defaultSortOrder?: SortOrder
  /** 受控排序顺序 */
  sortOrder?: SortOrder
  /** 自定义单元格渲染 */
  render?: (value: unknown, record: T, index: number) => ReactNode
  /** 单元格省略显示 */
  ellipsis?: boolean
  /** 自定义单元格 className */
  className?: string
  /** 自定义单元格属性 */
  onCell?: (record: T, index: number) => CellProps
  /** 自定义表头单元格属性 */
  onHeaderCell?: (column: ColumnType<T>) => CellProps
  /** 过滤选项 */
  filters?: FilterOption[]
  /** 过滤函数 */
  onFilter?: FilterFn<T>
  /** 是否多选过滤 */
  filterMultiple?: boolean
  /** 默认过滤值 */
  defaultFilteredValue?: (string | number | boolean)[]
  /** 受控过滤值 */
  filteredValue?: (string | number | boolean)[]
  /** 过滤下拉菜单 */
  filterDropdown?: ReactNode
  /** 是否可编辑 */
  editable?: boolean
  /** 编辑单元格渲染 */
  renderEdit?: (value: unknown, record: T, index: number, onSave: (value: unknown) => void) => ReactNode
}