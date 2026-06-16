import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ChatBubble } from './index'

describe('ChatBubble', () => {
  it('渲染用户消息', () => {
    render(<ChatBubble role="user" content="你好" />)
    expect(screen.getByText('你好')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <ChatBubble role="user" content="测试" className="custom-bubble" />,
    )
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-bubble')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ChatBubble role="user" content="测试" ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('assistant 加载状态渲染内容', () => {
    const { container } = render(<ChatBubble role="assistant" content="" loading />)
    // 加载状态应有圆点元素（w-2 h-2 rounded-full）
    const dots = container.querySelectorAll('.rounded-full')
    expect(dots.length).toBeGreaterThan(0)
  })

  it('系统消息不显示头像', () => {
    const { container } = render(<ChatBubble role="system" content="系统提示" />)
    // 系统消息不应有头像区域
    expect(container.querySelector('.hidden')).toBeNull()
  })

  it('timestamp 属性显示时间戳', () => {
    render(<ChatBubble role="user" content="消息" timestamp="12:00" />)
    expect(screen.getByText('12:00')).toBeInTheDocument()
  })
})
