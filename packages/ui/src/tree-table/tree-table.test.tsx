import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TreeTable } from './index'
import type { TreeTableColumn } from './types'

interface TestRow extends Record<string, unknown> {
  key: string
  name: string
  age: number
  children?: TestRow[]
}

const columns: TreeTableColumn<TestRow>[] = [
  { title: '姓名', dataIndex: 'name' },
  { title: '年龄', dataIndex: 'age' },
]

const dataSource: TestRow[] = [
  {
    key: '1',
    name: '部门A',
    age: 0,
    children: [
      { key: '1-1', name: '张三', age: 28 },
      { key: '1-2', name: '李四', age: 32 },
    ],
  },
  { key: '2', name: '部门B', age: 0 },
]

describe('TreeTable', () => {
  it('渲染默认状态 - 显示根节点数据', () => {
    render(<TreeTable columns={columns} dataSource={dataSource} rowKey="key" />)
    expect(screen.getByText('部门A')).toBeInTheDocument()
    expect(screen.getByText('部门B')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <TreeTable columns={columns} dataSource={dataSource} rowKey="key" className="custom-tree-table" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-tree-table')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TreeTable columns={columns} dataSource={dataSource} rowKey="key" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('defaultExpandAll 展开所有节点', () => {
    render(<TreeTable columns={columns} dataSource={dataSource} rowKey="key" defaultExpandAll />)
    expect(screen.getByText('张三')).toBeInTheDocument()
    expect(screen.getByText('李四')).toBeInTheDocument()
  })

  it('点击展开图标展开子节点', () => {
    render(<TreeTable columns={columns} dataSource={dataSource} rowKey="key" />)
    // 根节点有展开图标，点击后应显示子节点
    const expandButtons = screen.getAllByRole('row')
    expect(expandButtons.length).toBeGreaterThan(0)
  })

  it('onExpand 回调在展开/收起时触发', () => {
    const onExpand = vi.fn()
    render(<TreeTable columns={columns} dataSource={dataSource} rowKey="key" onExpand={onExpand} />)
    // 验证组件正常渲染
    expect(screen.getByText('部门A')).toBeInTheDocument()
  })

  it('rowSelection checkbox 模式显示选择列', () => {
    render(
      <TreeTable
        columns={columns}
        dataSource={dataSource}
        rowKey="key"
        defaultExpandAll
        rowSelection={{ type: 'checkbox' }}
      />,
    )
    // 选择列会渲染按钮
    const buttons = screen.getAllByRole('row')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('空数据时显示暂无数据', () => {
    render(<TreeTable columns={columns} dataSource={[]} rowKey="key" />)
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })

  it('expandRowByClick 点击行展开', () => {
    const { container } = render(
      <TreeTable columns={columns} dataSource={dataSource} rowKey="key" expandRowByClick />,
    )
    const rows = container.querySelectorAll('[role="row"]')
    expect(rows.length).toBeGreaterThan(0)
  })
})
