import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Chart, ChartHeader, ChartBody } from './index'

describe('Chart', () => {
  afterEach(() => {
    cleanup()
  })

  it('渲染图表内容', () => {
    render(
      <Chart>
        <div data-testid="chart-content">Chart Content</div>
      </Chart>
    )
    expect(screen.getByTestId('chart-content')).toBeInTheDocument()
  })

  it('显示标题和描述', () => {
    render(
      <Chart title="Sales Chart" description="Monthly sales data">
        <div>Chart</div>
      </Chart>
    )
    expect(screen.getByText('Sales Chart')).toBeInTheDocument()
    expect(screen.getByText('Monthly sales data')).toBeInTheDocument()
  })

  it('bordered 属性添加边框', () => {
    const { container } = render(
      <Chart bordered>
        <div>Chart</div>
      </Chart>
    )
    const chart = container.querySelector('.border')
    expect(chart).toBeInTheDocument()
  })

  it('loading 状态显示加载指示器', () => {
    render(
      <Chart loading>
        <div data-testid="chart-content">Chart</div>
      </Chart>
    )
    expect(screen.queryByTestId('chart-content')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(
      <Chart className="custom-class">
        <div>Chart</div>
      </Chart>
    )
    const chart = container.firstChild
    expect(chart).toHaveClass('custom-class')
  })

  it('ChartHeader 独立渲染', () => {
    render(<ChartHeader title="Title" description="Desc" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Desc')).toBeInTheDocument()
  })

  it('ChartBody 独立渲染', () => {
    render(<ChartBody><div data-testid="body">Body</div></ChartBody>)
    expect(screen.getByTestId('body')).toBeInTheDocument()
  })
})
