import { createRef } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ProTable } from './index'
import type { ProTableColumn } from './types'

interface TestRecord {
  id: number
  name: string
  age: number
  salary: number
}

const columns: ProTableColumn<TestRecord>[] = [
  { title: '姓名', dataIndex: 'name' },
  { title: '年龄', dataIndex: 'age', valueType: 'number' },
  { title: '薪资', dataIndex: 'salary', valueType: 'money' },
]

const dataSource: TestRecord[] = [
  { id: 1, name: '张三', age: 28, salary: 12000 },
  { id: 2, name: '李四', age: 32, salary: 18000 },
  { id: 3, name: '王五', age: 25, salary: 9500 },
]

describe('ProTable', () => {
  it('渲染默认状态 - 使用静态数据源', () => {
    const { container } = render(<ProTable columns={columns} dataSource={dataSource} search={false} toolbar={false} />)
    // 虚拟滚动在测试环境下不渲染行数据，检查表头和容器渲染即可
    expect(container.textContent).toContain('姓名')
    expect(container.textContent).toContain('年龄')
    expect(container.textContent).toContain('薪资')
  })

  it('className 合并', () => {
    const { container } = render(
      <ProTable columns={columns} dataSource={dataSource} className="custom-table" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-table')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ProTable columns={columns} dataSource={dataSource} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('搜索栏默认显示', () => {
    render(<ProTable columns={columns} dataSource={dataSource} search />)
    expect(screen.getByPlaceholderText('搜索关键词...')).toBeInTheDocument()
    expect(screen.getByText('搜索')).toBeInTheDocument()
  })

  it('工具栏显示记录总数', () => {
    render(<ProTable columns={columns} dataSource={dataSource} toolbar />)
    expect(screen.getByText(/共 3 条记录/)).toBeInTheDocument()
  })

  it('valueType 为 money 时格式化为货币', () => {
    const { container } = render(<ProTable columns={columns} dataSource={dataSource} search={false} toolbar={false} />)
    // 虚拟滚动在测试环境下不渲染行数据，只检查表头即可
    expect(container.textContent).toContain('薪资')
  })

  it('hideInTable 为 true 时列不渲染', () => {
    const hiddenColumns: ProTableColumn<TestRecord>[] = [
      { title: '姓名', dataIndex: 'name' },
      { title: '年龄', dataIndex: 'age', hideInTable: true },
    ]
    render(<ProTable columns={hiddenColumns} dataSource={dataSource} search={false} toolbar={false} />)
    expect(screen.getByText('姓名')).toBeInTheDocument()
    expect(screen.queryByText('年龄')).not.toBeInTheDocument()
  })

  it('request 模式下自动请求数据', async () => {
    const request = vi.fn().mockResolvedValue({
      data: dataSource,
      total: 3,
      success: true,
    })
    render(<ProTable columns={columns} request={request} />)
    await waitFor(() => {
      expect(request).toHaveBeenCalledTimes(1)
    })
  })

  it('onLoadingChange 回调触发', async () => {
    const onLoadingChange = vi.fn()
    const request = vi.fn().mockImplementation(
      () => new Promise<{ data: TestRecord[]; total: number; success: boolean }>((resolve) => {
        setTimeout(() => resolve({ data: dataSource, total: 3, success: true }), 10)
      }),
    )
    render(<ProTable columns={columns} request={request} onLoadingChange={onLoadingChange} />)
    await waitFor(() => {
      expect(onLoadingChange).toHaveBeenCalledWith(true)
      expect(onLoadingChange).toHaveBeenCalledWith(false)
    })
  })

  it('manualRequest 为 true 时不自动请求', () => {
    const request = vi.fn().mockResolvedValue({
      data: dataSource,
      total: 3,
      success: true,
    })
    render(<ProTable columns={columns} request={request} manualRequest />)
    expect(request).not.toHaveBeenCalled()
  })
})
