import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AnimateCountdown } from './index'

// 未来时间，确保倒计时不会立即结束
const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24)

describe('AnimateCountdown', () => {
  it('渲染默认状态', () => {
    render(<AnimateCountdown targetDate={futureDate} />)
    // 应该渲染时、分、秒标签
    expect(screen.getByText('时')).toBeInTheDocument()
    expect(screen.getByText('分')).toBeInTheDocument()
    expect(screen.getByText('秒')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(<AnimateCountdown targetDate={futureDate} className="custom-countdown" />)
    const container = screen.getByText('时').closest('.sui-animate-countdown')
    expect(container?.className).toContain('sui-animate-countdown')
    expect(container?.className).toContain('custom-countdown')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<AnimateCountdown targetDate={futureDate} ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('倒计时结束后显示"已结束"', () => {
    const pastDate = new Date(Date.now() - 1000)
    render(<AnimateCountdown targetDate={pastDate} />)
    expect(screen.getByText('已结束')).toBeInTheDocument()
  })

  it('onFinish 回调在倒计时结束时触发', () => {
    const onFinish = vi.fn()
    const pastDate = new Date(Date.now() - 1000)
    render(<AnimateCountdown targetDate={pastDate} onFinish={onFinish} />)
    expect(onFinish).toHaveBeenCalled()
  })

  it('format 自定义格式化渲染', () => {
    render(
      <AnimateCountdown
        targetDate={futureDate}
        format={({ hours, minutes, seconds }) => `${hours}:${minutes}:${seconds}`}
      />,
    )
    expect(screen.getByText(/\d+:\d+:\d+/)).toBeInTheDocument()
  })
})
