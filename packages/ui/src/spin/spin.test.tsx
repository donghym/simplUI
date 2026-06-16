import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Spin } from './index'

describe('Spin', () => {
  afterEach(() => {
    cleanup()
  })

  it('默认状态渲染加载指示器', () => {
    render(<Spin />)
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveAttribute('aria-busy', 'true')
  })

  it('spinning=false 时不渲染', () => {
    render(<Spin spinning={false} />)
    const spinner = screen.queryByRole('status')
    expect(spinner).not.toBeInTheDocument()
  })

  it('显示 tip 提示文字', () => {
    render(<Spin tip="加载中..." />)
    expect(screen.getByText('加载中...')).toBeInTheDocument()
  })

  it('使用自定义 indicator', () => {
    render(<Spin indicator={<span data-testid="custom-indicator">自定义</span>} />)
    expect(screen.getByTestId('custom-indicator')).toBeInTheDocument()
  })

  it('包裹内容时显示遮罩层', () => {
    render(
      <Spin spinning={true}>
        <div data-testid="content">内容</div>
      </Spin>
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
  })

  it('包裹内容时 spinning=false 不显示遮罩层', () => {
    render(
      <Spin spinning={false}>
        <div data-testid="content">内容</div>
      </Spin>
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
    const spinner = screen.queryByRole('status')
    expect(spinner).not.toBeInTheDocument()
  })

  it('不同尺寸渲染正确', () => {
    const { container, rerender } = render(<Spin spinSize="small" />)
    expect(container.querySelector('.h-4')).toBeInTheDocument()

    rerender(<Spin spinSize="default" />)
    expect(container.querySelector('.h-6')).toBeInTheDocument()

    rerender(<Spin spinSize="large" />)
    expect(container.querySelector('.h-8')).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    render(<Spin className="custom-class" />)
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('custom-class')
  })

  it('包裹内容时 aria-busy 设置在容器上', () => {
    render(
      <Spin spinning={true}>
        <div>内容</div>
      </Spin>
    )
    const container = screen.getByRole('status').parentElement?.parentElement
    expect(container).toHaveAttribute('aria-busy', 'true')
  })

  it('无 delay 时立即显示', () => {
    render(<Spin spinning={true} delay={0} />)
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
  })
})
