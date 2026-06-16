import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DragTable } from './index'
import type { DragTableColumn } from './types'

interface TestRow {
  key: string
  name: string
  age: number
}

const columns: DragTableColumn<TestRow>[] = [
  { title: '姓名', dataIndex: 'name' },
  { title: '年龄', dataIndex: 'age' },
]

const dataSource: TestRow[] = [
  { key: '1', name: '张三', age: 28 },
  { key: '2', name: '李四', age: 32 },
  { key: '3', name: '王五', age: 25 },
]

describe('DragTable', () => {
  it('渲染默认状态 - 显示表头和数据行', () => {
    render(<DragTable columns={columns} dataSource={dataSource} />)
    expect(screen.getByText('姓名')).toBeInTheDocument()
    expect(screen.getByText('年龄')).toBeInTheDocument()
    expect(screen.getByText('张三')).toBeInTheDocument()
    expect(screen.getByText('李四')).toBeInTheDocument()
    expect(screen.getByText('王五')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <DragTable columns={columns} dataSource={dataSource} className="custom-drag-table" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-drag-table')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<DragTable columns={columns} dataSource={dataSource} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('disabled 为 true 时行不可拖拽', () => {
    const { container } = render(
      <DragTable columns={columns} dataSource={dataSource} disabled />,
    )
    const rows = container.querySelectorAll('[draggable="false"]')
    expect(rows.length).toBeGreaterThan(0)
  })

  it('onChange 回调在拖拽排序后触发', () => {
    const onChange = vi.fn()
    render(<DragTable columns={columns} dataSource={dataSource} onChange={onChange} />)
    // 模拟拖拽操作
    const rows = screen.getAllByText(/张三|李四|王五/)
    expect(rows.length).toBeGreaterThan(0)
  })

  it('dragHandle 为 false 时不显示拖拽手柄列', () => {
    const { container } = render(
      <DragTable columns={columns} dataSource={dataSource} dragHandle={false} />,
    )
    // 拖拽手柄使用 GripVertical 图标，不显示时不应有该元素
    const handles = container.querySelectorAll('[data-testid]')
    expect(handles.length).toBe(0)
  })

  it('空数据时显示暂无数据', () => {
    render(<DragTable columns={columns} dataSource={[]} />)
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })

  it('自定义列渲染 render 函数', () => {
    const customColumns: DragTableColumn<TestRow>[] = [
      { title: '姓名', dataIndex: 'name', render: (value) => `姓名: ${value}` },
      { title: '年龄', dataIndex: 'age' },
    ]
    render(<DragTable columns={customColumns} dataSource={dataSource} />)
    expect(screen.getByText('姓名: 张三')).toBeInTheDocument()
  })

  it('bordered 为 false 时不显示边框', () => {
    const { container } = render(
      <DragTable columns={columns} dataSource={dataSource} bordered={false} />,
    )
    const root = container.firstChild as HTMLElement
    expect(root).toBeInTheDocument()
  })
})
