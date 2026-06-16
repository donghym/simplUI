import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatisticCard } from './index'

describe('StatisticCard', () => {
  it('渲染默认状态 - 显示标题和数值', () => {
    render(<StatisticCard title="总销售额" value={12345} />)
    expect(screen.getByText('总销售额')).toBeInTheDocument()
    expect(screen.getByText('12,345')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <StatisticCard title="测试" value={100} className="custom-card" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-card')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<StatisticCard title="测试" value={100} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('loading 状态显示骨架屏', () => {
    render(<StatisticCard title="测试" value={100} loading />)
    // loading 时显示 animate-pulse 骨架
    const { container } = render(<StatisticCard title="测试" value={100} loading />)
    const skeleton = container.querySelector('.animate-pulse')
    expect(skeleton).toBeInTheDocument()
  })

  it('prefix 前缀正确显示', () => {
    render(<StatisticCard title="金额" value={100} prefix="¥" />)
    expect(screen.getByText('¥')).toBeInTheDocument()
  })

  it('suffix 后缀正确显示', () => {
    render(<StatisticCard title="增长率" value={12.5} suffix="%" />)
    expect(screen.getByText('%')).toBeInTheDocument()
  })

  it('trend 趋势方向渲染', () => {
    render(<StatisticCard title="增长" value={100} trend="up" trendValue="+12.5%" />)
    expect(screen.getByText('+12.5%')).toBeInTheDocument()
  })

  it('precision 小数精度', () => {
    render(<StatisticCard title="比例" value={12.567} precision={2} />)
    expect(screen.getByText('12.57')).toBeInTheDocument()
  })

  it('字符串 value 直接显示', () => {
    render(<StatisticCard title="状态" value="正常" />)
    expect(screen.getByText('正常')).toBeInTheDocument()
  })

  it('footer 底部内容渲染', () => {
    render(<StatisticCard title="测试" value={100} footer="较昨日增长5%" />)
    expect(screen.getByText('较昨日增长5%')).toBeInTheDocument()
  })
})
