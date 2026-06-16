import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './index'

describe('Checkbox', () => {
  it('默认渲染为未选中状态', () => {
    render(<Checkbox />)
    const cb = screen.getByRole('checkbox')
    expect(cb).toBeInTheDocument()
    expect(cb).not.toBeChecked()
    expect(cb).toHaveAttribute('aria-checked', 'false')
    expect(cb.tagName).toBe('INPUT')
  })

  it('受控模式 checked prop 控制选中状态', () => {
    const { rerender } = render(<Checkbox checked={false} />)
    const cb = screen.getByRole('checkbox')
    expect(cb).not.toBeChecked()

    rerender(<Checkbox checked />)
    expect(cb).toBeChecked()
    expect(cb).toHaveAttribute('aria-checked', 'true')
  })

  it('非受控模式点击切换状态并触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Checkbox defaultChecked={false} onChange={handleChange} />)
    const cb = screen.getByRole('checkbox')

    fireEvent.click(cb)
    expect(cb).toBeChecked()
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)

    fireEvent.click(cb)
    expect(cb).not.toBeChecked()
    expect(handleChange).toHaveBeenCalledTimes(2)
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('disabled 状态下不触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Checkbox disabled onChange={handleChange} />)
    const cb = screen.getByRole('checkbox')
    expect(cb).toBeDisabled()

    fireEvent.click(cb)
    // jsdom 中 fireEvent.click 会绕过 disabled 属性切换状态，
    // 但 handleChange 内部检查 disabled 并通过 preventDefault 阻止回调
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('indeterminate 状态显示 Minus 图标且 aria-checked 为 mixed', () => {
    const { container } = render(<Checkbox indeterminate />)
    const cb = screen.getByRole('checkbox')
    expect(cb).toHaveAttribute('aria-checked', 'mixed')
    // Minus 图标存在于视觉层
    const visualBox = container.querySelector('[aria-hidden="true"]')
    expect(visualBox).toBeInTheDocument()
    // lucide-react Minus 图标渲染为 <svg>
    expect(visualBox?.querySelector('svg')).toBeInTheDocument()
  })

  it('indeterminate 点击后切换到未选中状态', () => {
    const handleChange = vi.fn()
    render(<Checkbox indeterminate onChange={handleChange} />)
    const cb = screen.getByRole('checkbox')

    fireEvent.click(cb)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('children 作为标签文本渲染且可点击', () => {
    render(<Checkbox>Accept Terms</Checkbox>)
    const label = screen.getByText('Accept Terms')
    expect(label).toBeInTheDocument()
    const cb = screen.getByRole('checkbox')
    expect(cb).not.toBeChecked()

    // 点击标签文本触发切换
    fireEvent.click(label)
    expect(cb).toBeChecked()
  })

  it('通过 cn() 和 twMerge 合并用户 className', () => {
    const { container } = render(<Checkbox className="gap-4 bg-danger-500" />)
    // className 应用在 label 上
    const label = container.querySelector('label')
    expect(label).toBeInTheDocument()
    expect(label?.className).toContain('gap-4')
    expect(label?.className).toContain('bg-danger-500')
    // gap-4 通过 twMerge 覆盖默认的 gap-2
    expect(label?.className).not.toContain('gap-2')
  })

  it('ref 正确转发到 input 元素', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Checkbox ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toBe('checkbox')
  })

  it('checked 状态下显示 Check 图标', () => {
    const { container } = render(<Checkbox checked />)
    const cb = screen.getByRole('checkbox')
    expect(cb).toBeChecked()
    // 视觉层应包含 Check 图标
    const visualBox = container.querySelector('[aria-hidden="true"]')
    expect(visualBox?.querySelector('svg')).toBeInTheDocument()
  })
})