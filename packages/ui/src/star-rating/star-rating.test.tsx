import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { StarRating } from './index'

describe('StarRating', () => {
  it('渲染默认状态（5颗星）', () => {
    render(<StarRating />)
    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(5)
  })

  it('className 合并', () => {
    render(<StarRating className="custom-rating" />)
    const container = screen.getByRole('radiogroup')
    expect(container.className).toContain('sui-star-rating')
    expect(container.className).toContain('custom-rating')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<StarRating ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('disabled 状态下不可点击', () => {
    const onChange = vi.fn()
    render(<StarRating disabled onChange={onChange} />)
    fireEvent.click(screen.getAllByRole('radio')[0]!)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('点击触发 onChange 回调', () => {
    const onChange = vi.fn()
    render(<StarRating onChange={onChange} />)
    fireEvent.click(screen.getAllByRole('radio')[3]!)
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it('count 属性控制星星数量', () => {
    render(<StarRating count={10} />)
    expect(screen.getAllByRole('radio')).toHaveLength(10)
  })

  it('readonly 状态下不可点击', () => {
    const onChange = vi.fn()
    render(<StarRating readonly onChange={onChange} />)
    fireEvent.click(screen.getAllByRole('radio')[0]!)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('键盘 Enter 触发评分', () => {
    const onChange = vi.fn()
    render(<StarRating onChange={onChange} />)
    const radios = screen.getAllByRole('radio')
    fireEvent.keyDown(radios[2]!, { key: 'Enter' })
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('受控模式下 value 变化更新显示', () => {
    const { rerender } = render(<StarRating value={2} />)
    const radios = screen.getAllByRole('radio')
    expect(radios[0]!).toHaveAttribute('aria-checked', 'true')
    expect(radios[1]!).toHaveAttribute('aria-checked', 'true')
    rerender(<StarRating value={4} />)
    expect(radios[3]!).toHaveAttribute('aria-checked', 'true')
  })
})