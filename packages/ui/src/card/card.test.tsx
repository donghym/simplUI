import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card } from './index'

describe('Card', () => {
  it('默认渲染带边框白色背景', () => {
    const { container } = render(<Card data-testid="card" />)

    const el = screen.getByTestId('card')
    expect(el).toBeInTheDocument()
    expect(el.className).toContain('rounded-lg')
    expect(el.className).toContain('border-border')
    expect(el.className).toContain('bg-background')
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('渲染 variant=filled 浅灰背景无边框', () => {
    render(<Card variant="filled" data-testid="card" />)

    const el = screen.getByTestId('card')
    expect(el.className).toContain('bg-muted')
    expect(el.className).not.toContain('border-border')
  })

  it('渲染 variant=borderless 无边框无背景', () => {
    render(<Card variant="borderless" data-testid="card" />)

    const el = screen.getByTestId('card')
    expect(el.className).toContain('rounded-lg')
    expect(el.className).not.toContain('border-border')
    expect(el.className).not.toContain('bg-background')
    expect(el.className).not.toContain('bg-muted')
  })

  it('渲染标题和右侧额外内容', () => {
    render(<Card title="卡片标题" extra={<a href="#">更多</a>} data-testid="card" />)

    expect(screen.getByText('卡片标题')).toBeInTheDocument()
    expect(screen.getByText('更多')).toBeInTheDocument()
  })

  it('渲染封面图片', () => {
    render(<Card cover="https://example.com/image.png" data-testid="card" />)

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/image.png')
  })

  it('渲染底部操作区', () => {
    render(
      <Card actions={[<button key="1">编辑</button>, <button key="2">删除</button>]} data-testid="card" />,
    )

    expect(screen.getByText('编辑')).toBeInTheDocument()
    expect(screen.getByText('删除')).toBeInTheDocument()
  })

  it('hoverable 属性添加 transition 与 hover 效果类名', () => {
    render(<Card hoverable data-testid="card" />)

    const el = screen.getByTestId('card')
    expect(el.className).toContain('cursor-pointer')
    expect(el.className).toContain('hover:shadow-md')
  })

  it('loading 状态渲染骨架屏并设置 aria-busy', () => {
    render(<Card loading data-testid="card" />)

    const el = screen.getByTestId('card')
    const skeletons = el.querySelectorAll('.animate-pulse')
    expect(skeletons.length).toBeGreaterThanOrEqual(1)
    expect(el.querySelector('[aria-busy="true"]')).toBeInTheDocument()
  })

  it('用户 className 通过 cn() + twMerge 合并覆盖', () => {
    render(<Card className="shadow-xl p-6" data-testid="card" />)

    const el = screen.getByTestId('card')
    expect(el.className).toContain('shadow-xl')
    expect(el.className).toContain('p-6')
    // 默认的 rounded-lg 仍然存在
    expect(el.className).toContain('rounded-lg')
  })

  it('无 title 和 extra 时不渲染卡片头部', () => {
    const { container } = render(<Card data-testid="card">内容文本</Card>)

    expect(screen.getByText('内容文本')).toBeInTheDocument()
    // 头部容器不渲染
    const head = container.querySelector('.items-center.justify-between')
    expect(head).toBeNull()
  })
})