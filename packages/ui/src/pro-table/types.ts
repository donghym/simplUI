import type { HTMLAttributes, ReactNode } from 'react'

/** ProTable 请求参数 */
export interface ProTableRequestParams {
  /** 当前页码，从 1 开始 */
  current: number
  /** 每页条数 */
  pageSize: number
  /** 搜索关键词 */
  keyword?: string
  /** 列筛选条件，key 为 dataIndex，value 为筛选值 */
  filters?: Record<string, string[]>
  /** 排序信息 */
  sorter?: { field: string; order: 'asc' | 'desc' }
}

/** ProTable 请求返回结果 */
export interface ProTableRequestResult<T> {
  /** 数据列表 */
  data: T[]
  /** 数据总条数，用于分页计算 */
  total: number
  /** 请求是否成功 */
  success: boolean
}

/** 值类型枚举，决定列的渲染和编辑方式 */
export type ProTableValueType = 'text' | 'select' | 'date' | 'number' | 'money'

/** ProTable 列配置，扩展自基础列定义 */
export interface ProTableColumn<T = Record<string, string | number>> {
  /** 列标题 */
  title: string
  /** 数据字段名，对应数据对象的 key */
  dataIndex: string
  /** 是否在表格中隐藏。true 时该列不渲染，默认 false */
  hideInTable?: boolean
  /** 排序配置。true 启用排序，函数为自定义排序 */
  sorter?: boolean | ((a: T, b: T) => number)
  /** 值类型，决定渲染方式。默认 'text' */
  valueType?: ProTableValueType
  /** 列宽度，像素值或百分比字符串 */
  width?: number | string
  /** 自定义渲染函数 */
  render?: (value: unknown, record: T, index: number) => ReactNode
}

/** ProTable 组件属性 */
export interface ProTableProps<T = Record<string, string | number>> extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 异步数据请求函数。提供后自动管理 loading 和分页 */
  request?: (params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>
  /** 列配置数组，定义表格的列信息和行为 */
  columns: ProTableColumn<T>[]
  /** 静态数据源。与 request 互斥，提供 request 时忽略 */
  dataSource?: T[]
  /** 是否显示搜索栏。true 显示默认搜索框，对象形式可配置折叠 */
  search?: boolean | { defaultCollapsed?: boolean }
  /** 工具栏配置。true 显示默认工具栏（刷新/列设置），对象形式可自定义操作 */
  toolbar?: boolean | { actions?: ReactNode[] }
  /** 是否手动触发请求。true 时不自动请求，需通过搜索或工具栏刷新按钮触发 */
  manualRequest?: boolean
  /** 轮询间隔毫秒数。大于 0 时定时刷新数据 */
  polling?: number
  /** 默认每页条数，默认 10 */
  defaultPageSize?: number
  /** 行数据的唯一标识字段名，默认 'id' */
  rowKey?: string
  /** 数据加载中回调 */
  onLoadingChange?: (loading: boolean) => void
  /** 表格高度，默认 400 */
  height?: number
}
