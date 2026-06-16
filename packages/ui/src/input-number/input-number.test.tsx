import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { InputNumber } from './index'

describe('InputNumber', () => {
  it('渲染默认样式', () => {
    render(<InputNumber placeholder="Enter number" />)
    const input = screen.getByPlaceholderText('Enter number')
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
    expect(input.className).toContain('rounded-md')
    expect(input.className).toContain('border')
  })

  it('status=error 时应用红色边框和 aria-invalid', () => {
    render(<InputNumber status="error" placeholder="err" />)
    const input = screen.getByPlaceholderText('err')
    expect(input.className).toContain('border-danger-500')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('status=warning 时应用黄色边框', () => {
    render(<InputNumber status="warning" placeholder="warn" />)
    const input = screen.getByPlaceholderText('warn')
    expect(input.className).toContain('border-warning-500')
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('点击步进增加按钮触发 onChange 带回新值', () => {
    const handleChange = vi.fn()
    render(<InputNumber defaultValue={5} onChange={handleChange} />)
    const upBtn = screen.getByLabelText('Increase value')
    fireEvent.click(upBtn)
    expect(handleChange).toHaveBeenCalledWith(6)
  })

  it('点击步进减少按钮触发 onChange 带回新值', () => {
    const handleChange = vi.fn()
    render(<InputNumber defaultValue={5} onChange={handleChange} />)
    const downBtn = screen.getByLabelText('Decrease value')
    fireEvent.click(downBtn)
    expect(handleChange).toHaveBeenCalledWith(4)
  })

  it('超过 max 时步进增加不生效', () => {
    const handleChange = vi.fn()
    render(<InputNumber defaultValue={10} max={10} onChange={handleChange} />)
    const upBtn = screen.getByLabelText('Increase value')
    fireEvent.click(upBtn)
    expect(handleChange).toHaveBeenCalledWith(10)
  })

  it('低于 min 时步进减少不生效', () => {
    const handleChange = vi.fn()
    render(<InputNumber defaultValue={0} min={0} onChange={handleChange} />)
    const downBtn = screen.getByLabelText('Decrease value')
    fireEvent.click(downBtn)
    expect(handleChange).toHaveBeenCalledWith(0)
  })

  it('空值时步进增加到 min 或 1', () => {
    const handleChange = vi.fn()
    render(<InputNumber onChange={handleChange} />)
    const upBtn = screen.getByLabelText('Increase value')
    fireEvent.click(upBtn)
    expect(handleChange).toHaveBeenCalledWith(1)
  })

  it('空值时步进减少到 max 或 -1', () => {
    const handleChange = vi.fn()
    render(<InputNumber max={100} onChange={handleChange} />)
    const downBtn = screen.getByLabelText('Decrease value')
    fireEvent.click(downBtn)
    expect(handleChange).toHaveBeenCalledWith(100)
  })

  it('allowClear 且有值时显示清空按钮', () => {
    render(<InputNumber allowClear defaultValue={100} />)
    const clearBtn = screen.getByLabelText('Clear input')
    expect(clearBtn).toBeInTheDocument()
  })

  it('点击清空按钮清空值并触发 onChange(null)', () => {
    const handleChange = vi.fn()
    render(<InputNumber allowClear defaultValue={100} onChange={handleChange} />)
    const clearBtn = screen.getByLabelText('Clear input')
    fireEvent.click(clearBtn)
    expect(handleChange).toHaveBeenCalledWith(null)
  })

  it('disabled 时不显示步进按钮和清空按钮', () => {
    render(<InputNumber disabled allowClear defaultValue={100} />)
    expect(screen.queryByLabelText('Increase value')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Decrease value')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
  })

  it('渲染 prefix 和 suffix', () => {
    render(<InputNumber prefix={<span>$</span>} suffix={<span>USD</span>} placeholder="price" />)
    expect(screen.getByText('$')).toBeInTheDocument()
    expect(screen.getByText('USD')).toBeInTheDocument()
  })

  it('prefix 存在时输入框增加左侧内边距', () => {
    render(<InputNumber prefix={<span>$</span>} placeholder="price" />)
    const input = screen.getByPlaceholderText('price')
    expect(input.className).toContain('pl-9')
  })

  it('键盘 ArrowUp 触发步进增加', () => {
    const handleChange = vi.fn()
    render(<InputNumber defaultValue={3} onChange={handleChange} />)
    const input = screen.getByDisplayValue('3')
    fireEvent.keyDown(input, { key: 'ArrowUp' })
    expect(handleChange).toHaveBeenCalledWith(4)
  })

  it('键盘 ArrowDown 触发步进减少', () => {
    const handleChange = vi.fn()
    render(<InputNumber defaultValue={3} onChange={handleChange} />)
    const input = screen.getByDisplayValue('3')
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    expect(handleChange).toHaveBeenCalledWith(2)
  })

  it('通过 cn() 合并用户 className', () => {
    render(<InputNumber className="bg-gray-100" placeholder="styled" />)
    const input = screen.getByPlaceholderText('styled')
    expect(input.className).toContain('bg-gray-100')
    // twMerge 覆盖默认的 bg-white
    expect(input.className).not.toContain('bg-white')
  })

  it('受控模式下 value 变化时显示更新', () => {
    const { rerender } = render(<InputNumber value={10} />)
    expect(screen.getByDisplayValue('10')).toBeInTheDocument()
    rerender(<InputNumber value={20} />)
    expect(screen.getByDisplayValue('20')).toBeInTheDocument()
  })
})