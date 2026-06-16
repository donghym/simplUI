import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HoverCard } from './index'

describe('HoverCard', () => {
  it('渲染默认状态', () => {
    render(<HoverCard>卡片内容</HoverCard>)
    expect(screen.getByText('卡片内容')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(<HoverCard className="custom-card">内容</HoverCard>)
    const card = screen.getByText('内容').closest('.sui-hover-card')
    expect(card?.className).toContain('sui-hover-card')
    expect(card?.className).toContain('custom-card')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<HoverCard ref={ref}>内容</HoverCard>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('lift 属性设置 CSS 变量', () => {
    render(<HoverCard lift={16}>内容</HoverCard>)
    const card = screen.getByText('内容').closest('.sui-hover-card')
    expect((card as HTMLElement)?.style.getPropertyValue('--hover-lift')).toBe('16px')
  })

  it('rotate 属性设置 CSS 变量', () => {
    render(<HoverCard rotate={5}>内容</HoverCard>)
    const card = screen.getByText('内容').closest('.sui-hover-card')
    expect((card as HTMLElement)?.style.getPropertyValue('--hover-rotate')).toBe('5deg')
  })

  it('鼠标移入触发 onMouseEnter 回调', () => {
    const onMouseEnter = vi.fn()
    render(<HoverCard onMouseEnter={onMouseEnter}>内容</HoverCard>)
    fireEvent.mouseEnter(screen.getByText('内容').closest('.sui-hover-card')!)
    expect(onMouseEnter).toHaveBeenCalledTimes(1)
  })
})
