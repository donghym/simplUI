import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Breadcrumb, BreadcrumbSeparator } from './index'
import type { BreadcrumbItemType } from './types'

describe('Breadcrumb', () => {
  // 1. 默认状态渲染正确
  it('renders with default styles', () => {
    const items: BreadcrumbItemType[] = [
      { title: '首页', href: '/' },
      { title: '列表', href: '/list' },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} />)
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument()
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('列表')).toBeInTheDocument()
    expect(screen.getByText('详情')).toBeInTheDocument()
  })

  // 2. 分隔符正确渲染
  it('renders separator between items', () => {
    const items: BreadcrumbItemType[] = [
      { title: '首页', href: '/' },
      { title: '列表', href: '/list' },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} separator="/" />)
    // 检查分隔符数量（最后一项不分隔符）
    const separators = screen.getAllByText('/', { exact: false })
    expect(separators.length).toBe(2)
  })

  // 3. 最后一项样式正确（加粗、aria-current="page"）
  it('marks last item as current page', () => {
    const items: BreadcrumbItemType[] = [
      { title: '首页', href: '/' },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} />)
    const lastItem = screen.getByText('详情')
    expect(lastItem).toHaveAttribute('aria-current', 'page')
  })

  // 4. href 链接正确渲染为 <a> 标签
  it('renders links with href as anchor elements', () => {
    const items: BreadcrumbItemType[] = [
      { title: '首页', href: '/' },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} />)
    const link = screen.getByRole('link', { name: '首页' })
    expect(link).toHaveAttribute('href', '/')
  })

  // 5. disabled 状态下不可点击
  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn()
    const items: BreadcrumbItemType[] = [
      { title: '首页', href: '/', onClick: handleClick, disabled: true },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} />)
    const item = screen.getByText('首页')
    fireEvent.click(item)
    expect(handleClick).not.toHaveBeenCalled()
  })

  // 6. onClick 回调正确触发
  it('fires onClick callback when clicked', () => {
    const handleClick = vi.fn()
    const items: BreadcrumbItemType[] = [
      { title: '首页', onClick: handleClick },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} />)
    const item = screen.getByText('首页')
    fireEvent.click(item)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // 7. 用户 className 正确合并
  it('merges user className via cn() and twMerge', () => {
    const items: BreadcrumbItemType[] = [
      { title: '首页' },
    ]
    render(<Breadcrumb items={items} className="bg-danger" />)
    const nav = screen.getByLabelText('Breadcrumb')
    expect(nav.className).toContain('bg-danger')
  })

  // 8. children 组合方式正确渲染
  it('renders children composition mode', () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Separator>/</Breadcrumb.Separator>
        <Breadcrumb.Item isLast>详情</Breadcrumb.Item>
      </Breadcrumb>
    )
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('详情')).toBeInTheDocument()
    expect(screen.getByText('详情')).toHaveAttribute('aria-current', 'page')
  })

  // 9. ref 转发到正确 DOM 元素
  it('forwards ref to nav element', () => {
    const ref = { current: null as HTMLElement | null }
    const items: BreadcrumbItemType[] = [{ title: '首页' }]
    render(<Breadcrumb items={items} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current?.tagName).toBe('NAV')
  })

  // 10. 自定义分隔符（图标）正确渲染
  it('renders custom separator (icon)', () => {
    const items: BreadcrumbItemType[] = [
      { title: '首页', href: '/' },
      { title: '详情' },
    ]
    render(<Breadcrumb items={items} separator={<span data-testid="custom-sep">&gt;</span>} />)
    expect(screen.getByTestId('custom-sep')).toBeInTheDocument()
  })
})

describe('BreadcrumbItem', () => {
  it('renders with href as anchor', () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
      </Breadcrumb>
    )
    const link = screen.getByRole('link', { name: '首页' })
    expect(link).toHaveAttribute('href', '/home')
  })

  it('renders disabled state correctly', () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item disabled>首页</Breadcrumb.Item>
      </Breadcrumb>
    )
    const item = screen.getByText('首页').closest('li')
    expect(item?.className).toContain('opacity-50')
  })
})

describe('BreadcrumbSeparator', () => {
  it('renders separator content', () => {
    render(<BreadcrumbSeparator>/</BreadcrumbSeparator>)
    expect(screen.getByText('/')).toBeInTheDocument()
  })

  it('has aria-hidden attribute', () => {
    render(<BreadcrumbSeparator>/</BreadcrumbSeparator>)
    const sep = screen.getByText('/')
    expect(sep).toHaveAttribute('aria-hidden', 'true')
  })
})