import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Table } from './index'

interface TestData {
  id: number
  name: string
  age: number
  address: string
  description?: string
}

const testData: TestData[] = [
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', description: '张三的详细描述' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', description: '李四的详细描述' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', description: '王五的详细描述' },
]

const testColumns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age', align: 'right' as const },
  { title: '地址', dataIndex: 'address', key: 'address', ellipsis: true },
]

describe('Table', () => {
  it('renders with columns and data', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
  })

  it('renders empty state when dataSource is empty', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={[]}
        rowKey="id"
        height={300}
        emptyText="暂无数据"
      />,
    )

    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        loading={true}
      />,
    )

    // 检查加载状态存在
    const container = document.querySelector('.relative')
    expect(container).toBeInTheDocument()
  })

  it('renders bordered table when bordered is true', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        bordered={true}
      />,
    )

    const container = document.querySelector('.border')
    expect(container).toBeInTheDocument()
  })

  it('renders checkbox selection column', () => {
    const onChange = vi.fn()
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        rowSelection={{ type: 'checkbox', onChange }}
      />,
    )

    // 虚拟滚动表格，至少有一个 checkbox（表头全选）
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBeGreaterThan(0)
  })

  it('renders sortable column header with click handler', async () => {
    const onSortChange = vi.fn()
    const columnsWithSorter = [
      { title: '姓名', dataIndex: 'name', key: 'name', sorter: true },
      { title: '年龄', dataIndex: 'age', key: 'age' },
    ]

    render(
      <Table
        columns={columnsWithSorter}
        dataSource={testData}
        rowKey="id"
        height={300}
        sorter={{ onChange: onSortChange }}
      />,
    )

    await userEvent.click(screen.getByText('姓名'))
    expect(onSortChange).toHaveBeenCalledWith('name', 'ascend')
  })

  it('merges user className correctly', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        className="custom-table"
      />,
    )

    const container = document.querySelector('.custom-table')
    expect(container).toBeInTheDocument()
  })

  it('renders custom column width', () => {
    const columnsWithWidth = [
      { title: '姓名', dataIndex: 'name', key: 'name', width: 100 },
      { title: '年龄', dataIndex: 'age', key: 'age', width: 80 },
    ]

    render(
      <Table
        columns={columnsWithWidth}
        dataSource={testData}
        rowKey="id"
        height={300}
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
  })

  it('renders custom cell content via render prop', () => {
    const columnsWithRender = [
      {
        title: '操作',
        key: 'action',
        render: (_: unknown, record: TestData) => <span>{record.name}操作</span>,
      },
    ]

    render(
      <Table
        columns={columnsWithRender}
        dataSource={testData}
        rowKey="id"
        height={300}
      />,
    )

    expect(screen.getByText('操作')).toBeInTheDocument()
  })

  it('renders title and footer', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        title="用户列表"
        footer="共 3 条数据"
      />,
    )

    expect(screen.getByText('用户列表')).toBeInTheDocument()
    expect(screen.getByText('共 3 条数据')).toBeInTheDocument()
  })
})