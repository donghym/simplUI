import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Statistic } from './index'

describe('Statistic', () => {
  it('默认渲染数值', () => {
    render(<Statistic value={1234} />)
    expect(screen.getByText('1,234')).toBeInTheDocument()
  })

  it('显示标题', () => {
    render(<Statistic title="总销售额" value={10000} />)
    expect(screen.getByText('总销售额')).toBeInTheDocument()
  })

  it('显示前缀', () => {
    render(<Statistic value={100} prefix="$" />)
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('显示后缀', () => {
    render(<Statistic value={100} suffix="元" />)
    expect(screen.getByText('元')).toBeInTheDocument()
  })

  it('处理精度（小数位数）', () => {
    render(<Statistic value={1234.5678} precision={2} />)
    expect(screen.getByText('1,234.57')).toBeInTheDocument()
  })

  it('自定义千分位分隔符', () => {
    render(<Statistic value={1234567} groupSeparator=" " />)
    expect(screen.getByText('1 234 567')).toBeInTheDocument()
  })

  it('自定义小数点分隔符', () => {
    render(<Statistic value={1234.56} decimalSeparator="," precision={2} />)
    expect(screen.getByText('1,234,56')).toBeInTheDocument()
  })

  it('使用自定义格式化函数', () => {
    render(<Statistic value={0.8567} formatter={(v) => `${Number(v) * 100}%`} />)
    expect(screen.getByText('85.67%')).toBeInTheDocument()
  })

  it('处理字符串值', () => {
    render(<Statistic value="自定义文本" />)
    expect(screen.getByText('自定义文本')).toBeInTheDocument()
  })

  it('处理 undefined 值', () => {
    render(<Statistic value={undefined} />)
    expect(screen.getByText('-')).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(<Statistic value={100} className="custom-class" />)
    const root = container.querySelector('.custom-class')
    expect(root).toBeInTheDocument()
  })

  it('ref 转发到根元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Statistic value={100} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('valueStyle 正确应用', () => {
    const { container } = render(
      <Statistic value={100} valueStyle={{ color: 'rgb(255, 0, 0)' }} />
    )
    const valueElement = container.querySelector('.text-3xl')
    expect(valueElement).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })

  it('负数正确格式化', () => {
    render(<Statistic value={-1234} />)
    expect(screen.getByText('-1,234')).toBeInTheDocument()
  })

  it('零值正确显示', () => {
    render(<Statistic value={0} />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('大数值正确添加千分位', () => {
    render(<Statistic value={1234567890} />)
    expect(screen.getByText('1,234,567,890')).toBeInTheDocument()
  })
})
