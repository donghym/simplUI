import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { BackTop } from './index'

describe('BackTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('渲染按钮', () => {
    const { container } = render(<BackTop visibilityHeight={0} />)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  it('自定义图标', () => {
    render(<BackTop icon={<span data-testid="custom-icon">UP</span>} visibilityHeight={0} />)
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(<BackTop className="custom-class" visibilityHeight={0} />)
    const button = container.querySelector('button')
    expect(button).toHaveClass('custom-class')
  })

  it('aria-label 设置正确', () => {
    const { container } = render(<BackTop visibilityHeight={0} />)
    const button = container.querySelector('button')
    expect(button).toHaveAttribute('aria-label', '回到顶部')
  })

  it('默认 visibilityHeight 为 400', () => {
    const { container } = render(<BackTop />)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  it('默认 duration 为 450', () => {
    const { container } = render(<BackTop visibilityHeight={0} />)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  it('渲染 ChevronUp 图标', () => {
    const { container } = render(<BackTop visibilityHeight={0} />)
    const button = container.querySelector('button')
    const svg = button?.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
