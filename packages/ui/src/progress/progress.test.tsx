import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from './index'

describe('Progress', () => {
  it('默认渲染线性进度条', () => {
    const { container } = render(<Progress percent={50} />)
    expect(container.querySelector('.h-2')).toBeInTheDocument()
  })

  it('显示正确的进度百分比', () => {
    render(<Progress percent={75} showText />)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('percent 超过 100 时限制为 100', () => {
    render(<Progress percent={150} showText />)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('percent 小于 0 时限制为 0', () => {
    render(<Progress percent={-20} showText />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('100% 时自动变为 success 状态', () => {
    const { container } = render(<Progress percent={100} />)
    const fill = container.querySelector('.bg-success-500')
    expect(fill).toBeInTheDocument()
  })

  it('status=error 时显示错误色', () => {
    const { container } = render(<Progress percent={50} status="error" />)
    const fill = container.querySelector('.bg-danger-500')
    expect(fill).toBeInTheDocument()
  })

  it('status=success 时显示成功色', () => {
    const { container } = render(<Progress percent={50} status="success" />)
    const fill = container.querySelector('.bg-success-500')
    expect(fill).toBeInTheDocument()
  })

  it('showText=false 时不显示进度文字', () => {
    render(<Progress percent={50} showText={false} />)
    expect(screen.queryByText('50%')).not.toBeInTheDocument()
  })

  it('使用自定义 format 函数', () => {
    render(<Progress percent={75} format={(p) => `${p} percent`} />)
    expect(screen.getByText('75 percent')).toBeInTheDocument()
  })

  it('渲染圆形进度条', () => {
    const { container } = render(<Progress percent={50} progressShape="circle" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('圆形进度条显示进度文字', () => {
    render(<Progress percent={60} progressShape="circle" showText />)
    expect(screen.getByText('60%')).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(<Progress percent={50} className="custom-class" />)
    const root = container.querySelector('.custom-class')
    expect(root).toBeInTheDocument()
  })

  it('ref 转发到根元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Progress percent={50} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('步进进度条正确渲染', () => {
    const { container } = render(<Progress percent={50} steps={5} />)
    const steps_elements = container.querySelectorAll('.flex-1')
    expect(steps_elements.length).toBe(5)
  })

  it('步进进度条正确高亮', () => {
    const { container } = render(<Progress percent={60} steps={5} />)
    // 60% * 5 = 3 步高亮
    const activeSteps = container.querySelectorAll('.bg-primary-500')
    expect(activeSteps.length).toBe(3)
  })

  it('自定义 strokeWidth 生效', () => {
    const { container } = render(<Progress percent={50} strokeWidth={4} />)
    const track = container.querySelector('.h-2')
    expect(track).toBeInTheDocument()
  })

  it('圆形进度条自定义尺寸', () => {
    const { container } = render(<Progress percent={50} progressShape="circle" circleSize={80} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '80')
  })
})
