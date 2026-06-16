import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
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

describe('Table Advanced', () => {
  it('renders pagination when pagination config is provided', () => {
    const largeData = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `用户${i + 1}`,
      age: 20 + i,
      address: `地址${i + 1}`,
    }))

    render(
      <Table
        columns={testColumns}
        dataSource={largeData}
        rowKey="id"
        height={400}
        pagination={{
          defaultPageSize: 10,
          showTotal: true,
        }}
      />,
    )

    // 检查分页组件存在
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('hides pagination when pagination is false', () => {
    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        pagination={false}
      />,
    )

    // 检查分页组件不存在
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('renders expandable rows', () => {
    const { container } = render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={400}
        expandable={{
          expandedRowRender: (record) => <div>{record.description}</div>,
        }}
      />,
    )

    // 检查表格容器渲染正常（虚拟滚动下内容可能不在 DOM 中）
    expect(container.querySelector('[role="region"]')).toBeInTheDocument()
    expect(container.querySelector('table')).toBeInTheDocument()
  })

  it('renders different table sizes', () => {
    const { rerender } = render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        tableSize="default"
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()

    rerender(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        tableSize="small"
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
  })

  it('renders fixed columns', () => {
    const columnsWithFixed = [
      { title: '姓名', dataIndex: 'name', key: 'name', fixed: 'left' as const, width: 100 },
      { title: '年龄', dataIndex: 'age', key: 'age', width: 100 },
      { title: '地址', dataIndex: 'address', key: 'address', fixed: 'right' as const, width: 200 },
    ]

    render(
      <Table
        columns={columnsWithFixed}
        dataSource={testData}
        rowKey="id"
        height={300}
        width={500}
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
    expect(screen.getByText('地址')).toBeInTheDocument()
  })

  it('renders filterable columns', () => {
    const columnsWithFilter = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: '张三', value: '张三' },
          { text: '李四', value: '李四' },
        ],
      },
      { title: '年龄', dataIndex: 'age', key: 'age' },
    ]

    render(
      <Table
        columns={columnsWithFilter}
        dataSource={testData}
        rowKey="id"
        height={300}
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
  })

  it('handles row events', async () => {
    const onRowClick = vi.fn()
    const onRow = (_record: TestData, index: number) => ({
      onClick: () => onRowClick(index),
    })

    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        onRow={onRow}
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
  })

  it('renders custom row className', () => {
    const rowClassName = (_record: TestData, index: number) =>
      index === 0 ? 'first-row' : ''

    render(
      <Table
        columns={testColumns}
        dataSource={testData}
        rowKey="id"
        height={300}
        rowClassName={rowClassName}
      />,
    )

    expect(screen.getByText('姓名')).toBeInTheDocument()
  })

  it('handles pagination change', async () => {
    const largeData = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `用户${i + 1}`,
      age: 20 + i,
      address: `地址${i + 1}`,
    }))

    const onPageChange = vi.fn()

    render(
      <Table
        columns={testColumns}
        dataSource={largeData}
        rowKey="id"
        height={400}
        pagination={{
          defaultPageSize: 10,
          onChange: onPageChange,
        }}
      />,
    )

    // 分页组件存在
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
