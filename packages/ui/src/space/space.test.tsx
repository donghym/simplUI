import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Space } from './index'

describe('Space', () => {
  it('渲染子元素', () => {
    render(
      <Space>
        <span>A</span>
        <span>B</span>
      </Space>,
    )

    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('默认水平方向 + small 间距', () => {
    render(
      <Space data-testid="space">
        <span>A</span>
      </Space>,
    )

    const space = screen.getByTestId('space')
    expect(space.className).toContain('flex-row')
    expect(space.className).toContain('gap-2')
  })

  it('vertical 方向', () => {
    render(
      <Space direction="vertical" data-testid="space">
        <span>A</span>
      </Space>,
    )

    const space = screen.getByTestId('space')
    expect(space.className).toContain('flex-col')
  })

  it('middle 间距', () => {
    render(
      <Space componentSize="middle" data-testid="space">
        <span>A</span>
      </Space>,
    )

    expect(screen.getByTestId('space').className).toContain('gap-4')
  })

  it('large 间距', () => {
    render(
      <Space componentSize="large" data-testid="space">
        <span>A</span>
      </Space>,
    )

    expect(screen.getByTestId('space').className).toContain('gap-6')
  })

  it('wrap 换行', () => {
    render(
      <Space wrap data-testid="space">
        <span>A</span>
      </Space>,
    )

    expect(screen.getByTestId('space').className).toContain('flex-wrap')
  })

  it('split 分隔线', () => {
    render(
      <Space split={<span data-testid="split">|</span>}>
        <span>A</span>
        <span>B</span>
      </Space>,
    )

    expect(screen.getByTestId('split')).toBeInTheDocument()
  })

  it('用户 className 合并', () => {
    render(
      <Space className="mt-4 bg-gray-100" data-testid="space">
        <span>A</span>
      </Space>,
    )

    const space = screen.getByTestId('space')
    expect(space.className).toContain('mt-4')
    expect(space.className).toContain('bg-gray-100')
  })
})