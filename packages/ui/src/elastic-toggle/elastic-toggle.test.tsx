import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ElasticToggle } from './index'

describe('ElasticToggle', () => {
  it('渲染默认状态（默认未选中）', () => {
    render(<ElasticToggle />)
    const btn = screen.getByRole('switch')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('aria-checked', 'false')
  })

  it('className 合并', () => {
    render(<ElasticToggle className="custom-toggle" />)
    const btn = screen.getByRole('switch')
    expect(btn.className).toContain('sui-elastic-toggle')
    expect(btn.className).toContain('custom-toggle')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<ElasticToggle ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('BUTTON')
  })

  it('disabled 状态下不可切换', () => {
    const onChange = vi.fn()
    render(<ElasticToggle disabled onChange={onChange} />)
    fireEvent.click(screen.getByRole('switch'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('点击触发 onChange 回调', () => {
    const onChange = vi.fn()
    render(<ElasticToggle onChange={onChange} />)
    fireEvent.click(screen.getByRole('switch'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('受控模式切换', () => {
    const { rerender } = render(<ElasticToggle checked={false} />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')
    rerender(<ElasticToggle checked={true} />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
  })
})
