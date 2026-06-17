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
import type { ColumnType, SorterFn, FilterFn } from './table-column-types'

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
  ColumnType,
  SorterFn,
  FilterFn,
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