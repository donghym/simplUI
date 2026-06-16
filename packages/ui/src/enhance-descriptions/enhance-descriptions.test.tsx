import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EnhanceDescriptions } from './index'
import type { EnhanceDescriptionsItem } from './types'

const items: EnhanceDescriptionsItem[] = [
  { label: '姓名', value: '张三' },
  { label: '年龄', value: 28 },
  { label: '地址', value: '北京市朝阳区' },
  { label: '电话', value: '13800138000', copyable: true },
  { label: '备注', value: '可编辑', editable: true },
]

describe('EnhanceDescriptions', () => {
  it('渲染默认状态 - 显示标签和值', () => {
    render(<EnhanceDescriptions items={items} />)
    expect(screen.getByText('姓名')).toBeInTheDocument()
    expect(screen.getByText('张三')).toBeInTheDocument()
    expect(screen.getByText('年龄')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <EnhanceDescriptions items={items} className="custom-desc" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-desc')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<EnhanceDescriptions items={items} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('title 标题正确渲染', () => {
    render(<EnhanceDescriptions items={items} title="用户信息" />)
    expect(screen.getByText('用户信息')).toBeInTheDocument()
  })

  it('copyable 项显示复制按钮', () => {
    render(<EnhanceDescriptions items={items} />)
    const copyBtn = screen.getByLabelText('复制')
    expect(copyBtn).toBeInTheDocument()
  })

  it('editable 项显示编辑按钮', () => {
    render(<EnhanceDescriptions items={items} />)
    const editBtn = screen.getByLabelText('编辑')
    expect(editBtn).toBeInTheDocument()
  })

  it('collapsible 超过折叠行数时显示展开按钮', () => {
    const manyItems: EnhanceDescriptionsItem[] = Array.from({ length: 12 }, (_, i) => ({
      label: `字段${i + 1}`,
      value: `值${i + 1}`,
    }))
    render(<EnhanceDescriptions items={manyItems} collapsible defaultCollapsedRows={2} />)
    expect(screen.getByText(/展开更多/)).toBeInTheDocument()
  })

  it('点击展开按钮切换显示', () => {
    const manyItems: EnhanceDescriptionsItem[] = Array.from({ length: 12 }, (_, i) => ({
      label: `字段${i + 1}`,
      value: `值${i + 1}`,
    }))
    render(<EnhanceDescriptions items={manyItems} collapsible defaultCollapsedRows={2} />)
    fireEvent.click(screen.getByText(/展开更多/))
    expect(screen.getByText('收起')).toBeInTheDocument()
  })

  it('bordered 为 false 时不显示边框', () => {
    const { container } = render(
      <EnhanceDescriptions items={items} bordered={false} />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
