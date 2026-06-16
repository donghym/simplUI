import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { tableVariants } from './table-variants'
import type {
  RowEventHandler,
  CellProps,
  TableCheckboxProps,
  FilterOption,
  RowSelectionConfig,
  SorterConfig,
  PaginationConfig,
  ExpandableConfig,
  FilterConfig,
  TableChangeInfo,
} from './table-config-types'
import type {
  SortOrder,
  TableSize,
  ColumnAlign,
  ColumnFixed,
  SelectionType,
} from './table-base-types'

export type {
  SortOrder,
  TableSize,
  ColumnAlign,
  ColumnFixed,
  SelectionType,
  RowEventHandler,
  CellProps,
  TableCheckboxProps,
  FilterOption,
  RowSelectionConfig,
  SorterConfig,
  PaginationConfig,
  ExpandableConfig,
  FilterConfig,
  TableChangeInfo,
}
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

/** Table Props */
export interface TableProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title' | 'onChange'>,
    VariantProps<typeof tableVariants> {
  /** 列配置数组 */
  columns: ColumnType<T>[]
  /** 数据源数组 */
  dataSource: T[]
  /** 行唯一标识字段名或函数。默认 'id' */
  rowKey?: string | ((record: T, index: number) => string | number)
  /** 表格高度，必须设置以启用虚拟滚动 */
  height: number | string
  /** 表格宽度 */
  width?: number | string
  /** 加载状态 */
  loading?: boolean
  /** 空数据时显示的内容 */
  emptyText?: ReactNode
  /** 是否显示边框 */
  bordered?: boolean
  /** 表格尺寸。默认 'default' */
  tableSize?: TableSize
  /** 是否显示表头。默认 true */
  showHeader?: boolean
  /** 行选择配置 */
  rowSelection?: RowSelectionConfig<T>
  /** 排序配置 */
  sorter?: SorterConfig
  /** 分页配置 */
  pagination?: PaginationConfig | false
  /** 可展开行配置 */
  expandable?: ExpandableConfig<T>
  /** 过滤配置 */
  filter?: FilterConfig
  /** 表格标题 */
  title?: ReactNode
  /** 表格底部 */
  footer?: ReactNode
  /** 自定义行 className */
  rowClassName?: string | ((record: T, index: number) => string)
  /** 行事件处理 */
  onRow?: (record: T, index: number) => RowEventHandler
  /** 表格变化回调（分页、排序、过滤） */
  onChange?: (changeInfo: TableChangeInfo) => void
  /** 自定义 className */
  className?: string
}
