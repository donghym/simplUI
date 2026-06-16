import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProgressGauge } from './index'

describe('ProgressGauge', () => {
  it('渲染默认状态 - 显示进度百分比', () => {
    render(<ProgressGauge value={75} />)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <ProgressGauge value={50} className="custom-gauge" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-gauge')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ProgressGauge value={50} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('role 为 progressbar 并设置 aria 属性', () => {
    const { container } = render(<ProgressGauge value={60} max={200} />)
    const el = container.firstChild as HTMLElement
    expect(el.getAttribute('role')).toBe('progressbar')
    expect(el.getAttribute('aria-valuenow')).toBe('60')
    expect(el.getAttribute('aria-valuemin')).toBe('0')
    expect(el.getAttribute('aria-valuemax')).toBe('200')
  })

  it('type 为 circle 时渲染圆形仪表盘', () => {
    const { container } = render(<ProgressGauge value={50} type="circle" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('format 自定义显示文本', () => {
    render(<ProgressGauge value={75} format={(v) => `${v}分`} />)
    expect(screen.getByText('75分')).toBeInTheDocument()
  })

  it('value 超过 max 时被截断为 max', () => {
    const { container } = render(<ProgressGauge value={150} max={100} />)
    const el = container.firstChild as HTMLElement
    expect(el.getAttribute('aria-valuenow')).toBe('100')
  })

  it('value 为 0 时显示 0%', () => {
    render(<ProgressGauge value={0} />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('showScale 显示刻度线', () => {
    const { container } = render(<ProgressGauge value={50} showScale />)
    const lines = container.querySelectorAll('line')
    expect(lines.length).toBeGreaterThan(0)
  })
})
