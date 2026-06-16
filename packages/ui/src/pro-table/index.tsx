import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Search, RefreshCw, Settings2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { Table } from '../table'
import { Pagination } from '../pagination'
import { Input } from '../input'
import { Button } from '../button'
import { Popover } from '../popover'
import { Checkbox } from '../checkbox'
import type { ColumnType } from '../table/types'
import { proTableVariants, proTableToolbarVariants, proTableSearchVariants, proTablePaginationVariants } from './pro-table-variants'
import type { ProTableProps, ProTableColumn, ProTableValueType } from './types'

/** 根据值类型渲染单元格 */
function renderByValueType(value: unknown, type: ProTableValueType): React.ReactNode {
  if (value == null) return '-'
  const map: Record<ProTableValueType, () => string> = {
    money: () => `¥${Number(value).toLocaleString()}`,
    number: () => Number(value).toLocaleString(),
    date: () => String(value),
    select: () => String(value),
    text: () => String(value),
  }
  return map[type]()
}

/** 将 ProTableColumn 转换为 Table ColumnType */
function toTableColumns<T>(columns: ProTableColumn<T>[], visibleKeys: Set<string>): ColumnType<T>[] {
  return columns.filter(col => !col.hideInTable && visibleKeys.has(col.dataIndex)).map(col => {
    const base: ColumnType<T> = {
      title: col.title, dataIndex: col.dataIndex, key: col.dataIndex, width: col.width,
      sorter: typeof col.sorter === 'function'
        ? (a: T, b: T) => (col.sorter as (a: T, b: T) => number)(a, b)
        : col.sorter === true ? true : undefined,
      filters: col.filters, editable: col.editable,
      renderEdit: col.renderFormItem ? (value, _r, _i, onSave) => col.renderFormItem!({ value, onChange: onSave }) : undefined,
    }
    if (col.render) base.render = col.render
    else if (col.valueType && col.valueType !== 'text') base.render = (value) => renderByValueType(value, col.valueType as ProTableValueType)
    return base
  })
}

/** ProTable 核心逻辑 */
function ProTableInner<T>(props: ProTableProps<T>, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, request, columns, dataSource, search = false, toolbar = false,
    manualRequest = false, polling, defaultPageSize = 10, rowKey = 'id', onLoadingChange, height = 400, ...rest } = props

  const [loading, setLoading] = useState(false)
  const [requestData, setRequestData] = useState<T[]>([])
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [keyword, setKeyword] = useState('')
  const [searchText, setSearchText] = useState('')
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(
    () => new Set(columns.filter(c => !c.hideInTable).map(c => c.dataIndex))
  )
  const pollingRef = useRef<ReturnType<typeof setInterval>>()

  const fetchData = useCallback(async (page: number, size: number, kw: string) => {
    if (!request) return
    setLoading(true); onLoadingChange?.(true)
    try {
      const result = await request({ current: page, pageSize: size, keyword: kw || undefined })
      if (result.success) { setRequestData(result.data); setTotal(result.total) }
    } finally { setLoading(false); onLoadingChange?.(false) }
  }, [request, onLoadingChange])

  useEffect(() => { if (request && !manualRequest) fetchData(1, defaultPageSize, '') }, [request, manualRequest, fetchData, defaultPageSize])
  useEffect(() => {
    if (!polling || !request) return
    pollingRef.current = setInterval(() => fetchData(current, pageSize, keyword), polling)
    return () => { if (pollingRef.current) clearInterval(pollingRef.current) }
  }, [polling, request, fetchData, current, pageSize, keyword])

  const handleSearch = () => { setKeyword(searchText); setCurrent(1); if (request) fetchData(1, pageSize, searchText) }
  const handleRefresh = () => { if (request) fetchData(current, pageSize, keyword) }
  const handlePageChange = (page: number, size: number) => { setCurrent(page); if (request) fetchData(page, size, keyword) }
  const handlePageSizeChange = (size: number) => { setPageSize(size); setCurrent(1); if (request) fetchData(1, size, keyword) }

  const isRequestMode = !!request

  const filteredData = useMemo(() => {
    const source = dataSource ?? requestData
    // request 模式下跳过客户端 keyword 过滤，由服务端处理
    if (!keyword || isRequestMode) return source
    const kw = keyword.toLowerCase()
    return source.filter(item => Object.values(item as Record<string, unknown>).some(v => String(v).toLowerCase().includes(kw)))
  }, [dataSource, requestData, keyword, isRequestMode])

  const displayTotal = isRequestMode ? total : filteredData.length
  const startIdx = (current - 1) * pageSize
  const pageData = isRequestMode ? requestData : filteredData.slice(startIdx, startIdx + pageSize)
  const tableColumns = useMemo(() => toTableColumns(columns, visibleKeys), [columns, visibleKeys])
  const showSearch = search !== false
  const showToolbar = toolbar !== false
  const searchCollapsed = typeof search === 'object' ? search.defaultCollapsed : false

  return (
    <div ref={ref} className={cn(proTableVariants(), className)} {...rest}>
      {showSearch && (
        <div className={cn(proTableSearchVariants({ collapsed: searchCollapsed }))}>
          <Input prefix={<Search className="h-4 w-4" />} placeholder="搜索关键词..."
            value={searchText} onChange={e => setSearchText(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSearch() }} />
          <Button variant="primary" onClick={handleSearch}>搜索</Button>
        </div>
      )}
      {showToolbar && (
        <div className={cn(proTableToolbarVariants())}>
          <span className="text-sm text-muted-foreground">共 {displayTotal} 条记录</span>
          <div className="flex items-center gap-2">
            {typeof toolbar === 'object' && toolbar.actions?.map((action, i) => <span key={i}>{action}</span>)}
            <Button variant="text" icon={<RefreshCw className="h-4 w-4" />} onClick={handleRefresh} />
            <Popover trigger="click" content={
              <div className="py-1 space-y-0.5">
                {columns.map(col => (
                  <label key={col.dataIndex} className="flex items-center gap-2 px-2 py-1 hover:bg-muted cursor-pointer">
                    <Checkbox checked={visibleKeys.has(col.dataIndex)} onChange={checked => {
                      const next = new Set(visibleKeys)
                      if (checked) { next.add(col.dataIndex) } else { next.delete(col.dataIndex) }
                      setVisibleKeys(next)
                    }} />
                    <span className="text-sm">{col.title}</span>
                  </label>
                ))}
              </div>
            }>
              <Button variant="text" icon={<Settings2 className="h-4 w-4" />} />
            </Popover>
          </div>
        </div>
      )}
      <Table columns={tableColumns} dataSource={pageData} rowKey={rowKey}
        height={height} loading={loading} bordered={false} pagination={false} />
      {displayTotal > 0 && (
        <div className={cn(proTablePaginationVariants())}>
          <Pagination current={current} pageSize={pageSize} total={displayTotal}
            onChange={handlePageChange} onPageSizeChange={handlePageSizeChange} showTotal showSizeChanger />
        </div>
      )}
    </div>
  )
}

const ForwardedProTable = forwardRef(ProTableInner)
ForwardedProTable.displayName = 'ProTable'

export const ProTable = ForwardedProTable as <T>(
  props: ProTableProps<T> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement

export type { ProTableProps, ProTableColumn, ProTableValueType, ProTableRequestParams, ProTableRequestResult } from './types'
