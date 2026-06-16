import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Anchor, AnchorLink } from './index'

describe('Anchor', () => {
  afterEach(() => {
    cleanup()
  })

  const mockItems = [
    { key: 'section1', title: 'Section 1' },
    { key: 'section2', title: 'Section 2' },
    { key: 'section3', title: 'Section 3' },
  ]

  it('渲染锚点链接列表', () => {
    render(<Anchor items={mockItems} />)
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
    expect(screen.getByText('Section 3')).toBeInTheDocument()
  })

  it('渲染嵌套子链接', () => {
    const itemsWithChildren = [
      {
        key: 'parent',
        title: 'Parent',
        children: [
          { key: 'child1', title: 'Child 1' },
          { key: 'child2', title: 'Child 2' },
        ],
      },
    ]
    render(<Anchor items={itemsWithChildren} />)
    expect(screen.getByText('Parent')).toBeInTheDocument()
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })

  it('defaultActiveKey 设置初始激活项', () => {
    render(<Anchor items={mockItems} defaultActiveKey="section2" />)
    const activeLink = screen.getByText('Section 2')
    expect(activeLink).toHaveClass('text-primary-500')
  })

  it('activeKey 受控模式', () => {
    render(<Anchor items={mockItems} activeKey="section1" />)
    const activeLink = screen.getByText('Section 1')
    expect(activeLink).toHaveClass('text-primary-500')
  })

  it('用户 className 正确合并', () => {
    render(<Anchor items={mockItems} className="custom-class" />)
    const container = screen.getByText('Section 1').parentElement?.parentElement
    expect(container).toHaveClass('custom-class')
  })

  it('AnchorLink 独立渲染', () => {
    render(<AnchorLink href="test" title="Test Link" active={true} />)
    const link = screen.getByText('Test Link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('text-primary-500')
  })

  it('AnchorLink aria-current 属性', () => {
    render(<AnchorLink href="test" title="Test Link" active={true} />)
    const link = screen.getByText('Test Link')
    expect(link).toHaveAttribute('aria-current', 'true')
  })

  it('非激活链接无 aria-current', () => {
    render(<AnchorLink href="test" title="Test Link" active={false} />)
    const link = screen.getByText('Test Link')
    expect(link).not.toHaveAttribute('aria-current')
  })

  it('渲染滚动指示器', () => {
    render(<Anchor items={mockItems} />)
    const container = screen.getByText('Section 1').parentElement?.parentElement
    const indicator = container?.querySelector('.w-0\\.5')
    expect(indicator).toBeInTheDocument()
  })
})
