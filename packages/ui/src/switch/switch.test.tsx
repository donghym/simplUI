import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Switch } from './index'

describe('Switch', () => {
  it('默认渲染为未选中状态', () => {
    render(<Switch />)
    const sw = screen.getByRole('switch')
    expect(sw).toBeInTheDocument()
    expect(sw).toHaveAttribute('aria-checked', 'false')
    expect(sw.tagName).toBe('BUTTON')
  })

  it('受控模式 checked prop 更新 aria-checked', () => {
    const { rerender } = render(<Switch checked={false} />)
    const sw = screen.getByRole('switch')
    expect(sw).toHaveAttribute('aria-checked', 'false')

    rerender(<Switch checked />)
    expect(sw).toHaveAttribute('aria-checked', 'true')
  })

  it('非受控模式点击切换状态并触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Switch defaultChecked={false} onChange={handleChange} />)
    const sw = screen.getByRole('switch')

    fireEvent.click(sw)
    expect(sw).toHaveAttribute('aria-checked', 'true')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)

    fireEvent.click(sw)
    expect(sw).toHaveAttribute('aria-checked', 'false')
    expect(handleChange).toHaveBeenCalledTimes(2)
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('disabled 状态下不触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Switch disabled onChange={handleChange} />)
    const sw = screen.getByRole('switch')

    fireEvent.click(sw)
    expect(sw).toHaveAttribute('aria-checked', 'false')
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('loading 状态下显示 Loader2 且不触发 onChange', () => {
    const handleChange = vi.fn()
    const { container } = render(<Switch loading onChange={handleChange} />)
    const sw = screen.getByRole('switch')

    expect(sw).toHaveAttribute('aria-busy', 'true')
    const spinner = container.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()

    fireEvent.click(sw)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('通过 cn() 和 twMerge 合并用户 className', () => {
    render(<Switch className="bg-danger-500" />)
    const sw = screen.getByRole('switch')
    expect(sw.className).toContain('bg-danger-500')
    // 默认 unchecked 背景色 bg-gray-300 应被 twMerge 覆盖
    expect(sw.className).not.toContain('bg-gray-300')
  })

  it('ref 正确转发到 button 元素', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Switch ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current?.getAttribute('role')).toBe('switch')
  })

  it('checkedChildren 和 unCheckedChildren 渲染文本', () => {
    const { rerender } = render(
      <Switch checked={false} checkedChildren="ON" unCheckedChildren="OFF" />,
    )
    const sw = screen.getByRole('switch')
    expect(sw.textContent).toContain('OFF')

    rerender(<Switch checked checkedChildren="ON" unCheckedChildren="OFF" />)
    expect(sw.textContent).toContain('ON')
  })

  it('onClick 回调接收当前 checked 值和事件', () => {
    const handleClick = vi.fn()
    render(<Switch defaultChecked={false} onClick={handleClick} />)
    const sw = screen.getByRole('switch')

    fireEvent.click(sw)
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(true, expect.any(Object))

    fireEvent.click(sw)
    expect(handleClick).toHaveBeenCalledWith(false, expect.any(Object))
  })
})