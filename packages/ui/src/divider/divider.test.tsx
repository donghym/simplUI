import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Divider } from './index'

describe('Divider', () => {
  it('默认渲染水平分割线', () => {
    render(<Divider data-testid="divider" />)

    const el = screen.getByTestId('divider')
    expect(el).toBeInTheDocument()
    expect(el).toHaveAttribute('role', 'separator')
    expect(el).toHaveAttribute('aria-orientation', 'horizontal')
  })

  it('渲染垂直分割线', () => {
    render(<Divider type="vertical" data-testid="divider" />)

    const el = screen.getByTestId('divider')
    expect(el).toHaveAttribute('aria-orientation', 'vertical')
    // vertical 使用 inline-block + self-stretch 实现垂直分割线
    expect(el.className).toContain('inline-block')
    expect(el.className).toContain('h-auto')
    expect(el.className).toContain('self-stretch')
  })

  it('应用线型 variant: dashed', () => {
    render(<Divider variant="dashed" data-testid="divider" />)

    const el = screen.getByTestId('divider')
    expect(el.className).toContain('border-dashed')
  })

  it('应用线型 variant: dotted', () => {
    render(<Divider variant="dotted" data-testid="divider" />)

    const el = screen.getByTestId('divider')
    expect(el.className).toContain('border-dotted')
  })

  it('用户 className 通过 cn() 合并', () => {
    render(<Divider className="my-8 border-danger-500" data-testid="divider" />)

    const el = screen.getByTestId('divider')
    expect(el.className).toContain('my-8')
    expect(el.className).toContain('border-danger-500')
  })

  it('带文字时渲染出文字内容', () => {
    render(<Divider>中间文字</Divider>)

    expect(screen.getByText('中间文字')).toBeInTheDocument()
  })

  it('orientation=left 时文字靠左', () => {
    render(<Divider orientation="left" data-testid="divider">左对齐</Divider>)

    const text = screen.getByText('左对齐')
    expect(text.className).toContain('pr-4')
  })

  it('orientation=right 时文字靠右', () => {
    render(<Divider orientation="right" data-testid="divider">右对齐</Divider>)

    const text = screen.getByText('右对齐')
    expect(text.className).toContain('pl-4')
  })

  it('带文字时容器使用 flex 布局', () => {
    render(<Divider data-testid="divider">文本</Divider>)

    const el = screen.getByTestId('divider')
    expect(el.className).toContain('flex')
    expect(el.className).toContain('items-center')
  })
})