import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ScrollReveal } from './index'

// 模拟 IntersectionObserver
beforeEach(() => {
  const mockObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
  vi.stubGlobal('IntersectionObserver', mockObserver)
})

describe('ScrollReveal', () => {
  it('渲染默认状态', () => {
    render(<ScrollReveal>内容</ScrollReveal>)
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<ScrollReveal className="custom-reveal">内容</ScrollReveal>)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-reveal')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ScrollReveal ref={ref}>内容</ScrollReveal>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('direction 属性应用方向类名', () => {
    const { container } = render(<ScrollReveal direction="left">内容</ScrollReveal>)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('translate-x')
  })

  it('distance 属性设置 CSS 变量', () => {
    const { container } = render(<ScrollReveal distance={50}>内容</ScrollReveal>)
    const el = container.firstChild as HTMLElement
    expect(el.style.getPropertyValue('--reveal-distance')).toBe('50px')
  })

  it('duration 和 delay 属性设置过渡时间', () => {
    const { container } = render(<ScrollReveal duration={800} delay={200}>内容</ScrollReveal>)
    const el = container.firstChild as HTMLElement
    expect(el.style.transitionDuration).toBe('800ms')
    expect(el.style.transitionDelay).toBe('200ms')
  })
})
