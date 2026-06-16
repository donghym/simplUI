import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AIStreamText } from './index'

describe('AIStreamText', () => {
  it('非流式模式直接渲染全部文本', () => {
    render(<AIStreamText text="hello" streaming={false} />)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<AIStreamText text="hello" className="custom-stream" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-stream')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<AIStreamText text="hello" ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('streaming 模式下显示光标', () => {
    const { container } = render(<AIStreamText text="hello" streaming showCursor />)
    // 光标元素应有 inline-block 类名
    const cursor = container.querySelector('.inline-block')
    expect(cursor).toBeInTheDocument()
  })

  it('showCursor=false 不显示光标', () => {
    const { container } = render(<AIStreamText text="hello" streaming={false} showCursor={false} />)
    const cursor = container.querySelector('.inline-block')
    expect(cursor).toBeNull()
  })

  it('空文本正常渲染', () => {
    const { container } = render(<AIStreamText text="" streaming={false} />)
    const el = container.firstChild as HTMLElement
    expect(el).toBeInTheDocument()
  })
})
