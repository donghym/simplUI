import type { HTMLAttributes, ReactNode } from 'react'
import type { SortOrder, SelectionType } from './table-base-types'

/** 行事件处理器 */
export interface RowEventHandler {
  onClick?: (e: React.MouseEvent) => void
  onDoubleClick?: (e: React.MouseEvent) => void
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
}

/** 单元格属性 */
export interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  colSpan?: number
  rowSpan?: number
}

/** Checkbox 属性（用于选择列） */
export interface TableCheckboxProps {
  disabled?: boolean
}

/** 过滤选项 */
export interface FilterOption {
  /** 选项文本 */
  text: ReactNode
  /** 选项值 */
  value: string | number | boolean
}

/** 行选择配置 */
export interface RowSelectionConfig<T> {
  /** 选择类型。默认 'checkbox' */
  type?: SelectionType
  /** 选中行的 key 数组（受控） */
  selectedRowKeys?: (string | number)[]
  /** 默认选中行的 key 数组 */
  defaultSelectedRowKeys?: (string | number)[]
  /** 选择变化回调 */
  onChange?: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void
  /** 单行选择回调 */
  onSelect?: (record: T, selected: boolean, selectedRows: T[]) => void
  /** 全选回调 */
  onSelectAll?: (selected: boolean, selectedRows: T[]) => void
  /** 自定义 checkbox 属性 */
  getCheckboxProps?: (record: T) => TableCheckboxProps
  /** 选择列宽度。默认 48 */
  columnWidth?: number | string
  /** 选择列是否固定 */
  fixed?: boolean
}

/** 排序配置 */
export interface SorterConfig {
  /** 当前排序字段（受控） */
  field?: string
  /** 当前排序顺序（受控） */
  order?: SortOrder
  /** 排序变化回调 */
  onChange?: (field: string, order: SortOrder) => void
}

/** 分页配置 */
export interface PaginationConfig {
  /** 当前页码（受控） */
  current?: number
  /** 默认页码。默认 1 */
  defaultCurrent?: number
  /** 每页条数（受控） */
  pageSize?: number
  /** 默认每页条数。默认 10 */
  defaultPageSize?: number
  /** 是否禁用分页 */
  disabled?: boolean
  /** 是否显示总数 */
  showTotal?: boolean
  /** 是否显示页码切换器 */
  showSizeChanger?: boolean
  /** 是否显示快速跳转 */
  showQuickJumper?: boolean
  /** 每页条数选项 */
  pageSizeOptions?: number[]
  /** 页码变化回调 */
  onChange?: (page: number, pageSize: number) => void
  /** 每页条数变化回调 */
  onPageSizeChange?: (pageSize: number, page: number) => void
}

/** 可展开行配置 */
export interface ExpandableConfig<T> {
  /** 展开行渲染函数 */
  expandedRowRender?: (record: T, index: number) => ReactNode
  /** 默认展开的行 key 数组 */
  defaultExpandedRowKeys?: (string | number)[]
  /** 受控展开的行 key 数组 */
  expandedRowKeys?: (string | number)[]
  /** 展开变化回调 */
  onExpand?: (expanded: boolean, record: T) => void
  /** 展开变化回调（批量） */
  onExpandedRowsChange?: (expandedRowKeys: (string | number)[]) => void
  /** 是否允许展开某行 */
  rowExpandable?: (record: T) => boolean
  /** 展开图标列宽度 */
  columnWidth?: number | string
  /** 展开图标是否固定 */
  fixed?: boolean
}

/** 过滤配置 */
export interface FilterConfig {
  /** 过滤变化回调 */
  onChange?: (filters: Record<string, (string | number | boolean)[]>) => void
}

/** 表格变化信息 */
export interface TableChangeInfo {
  /** 分页信息 */
  pagination?: { current: number; pageSize: number }
  /** 排序信息 */
  sorter?: { field: string; order: SortOrder }
  /** 过滤信息 */
  filters?: Record<string, (string | number | boolean)[]>
}
