import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Select } from './index'

describe('Select', () => {
  const options = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Disabled', value: 'opt3', disabled: true },
  ]

  it('渲染默认样式和占位符', () => {
    render(<Select options={options} placeholder="Please select" />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    // 使用更精确的选择器，查找 span 内的占位符文本
    expect(screen.getByRole('combobox').querySelector('span')?.textContent).toBe('Please select')
  })

  it('status=error 时应用红色边框和 aria-invalid', () => {
    render(<Select options={options} status="error" />)
    const trigger = screen.getByRole('combobox')
    expect(trigger.className).toContain('border-danger-500')
    expect(trigger).toHaveAttribute('aria-invalid', 'true')
  })

  it('status=warning 时应用黄色边框', () => {
    render(<Select options={options} status="warning" />)
    const trigger = screen.getByRole('combobox')
    expect(trigger.className).toContain('border-warning-500')
    expect(trigger).not.toHaveAttribute('aria-invalid')
  })

  it('点击展开下拉面板，显示所有选项', () => {
    render(<Select options={options} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    // 使用 role="option" 选择下拉面板中的选项
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Disabled' })).toBeInTheDocument()
  })

  it('点击选项选中并关闭面板，触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Select options={options} onChange={handleChange} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)
    // 点击下拉面板中的选项
    const option = screen.getByRole('option', { name: 'Option 1' })
    fireEvent.click(option)
    expect(handleChange).toHaveBeenCalledWith('opt1')
    expect(trigger.textContent).toContain('Option 1')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('不能选中已禁用的选项', () => {
    const handleChange = vi.fn()
    render(<Select options={options} onChange={handleChange} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)
    // 点击下拉面板中的禁用选项
    const disabledOption = screen.getByRole('option', { name: 'Disabled' })
    fireEvent.click(disabledOption)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('defaultValue 初始化显示正确选项', () => {
    render(<Select options={options} defaultValue="opt2" />)
    // 使用 combobox 触发器检查显示文本，避免匹配隐藏的 select option
    const trigger = screen.getByRole('combobox')
    expect(trigger.textContent).toContain('Option 2')
  })

  it('受控模式 value 变化时更新显示', () => {
    const { rerender } = render(<Select options={options} value="opt1" />)
    const trigger = screen.getByRole('combobox')
    expect(trigger.textContent).toContain('Option 1')
    rerender(<Select options={options} value="opt2" />)
    expect(trigger.textContent).toContain('Option 2')
  })

  it('allowClear 且有值时显示清空按钮', () => {
    render(<Select options={options} allowClear defaultValue="opt1" />)
    expect(screen.getByLabelText('Clear selection')).toBeInTheDocument()
  })

  it('点击清空按钮清空选择并触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Select options={options} allowClear defaultValue="opt1" onChange={handleChange} />)
    const clearBtn = screen.getByLabelText('Clear selection')
    fireEvent.click(clearBtn, { stopPropagation: vi.fn() })
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('disabled 时不可展开选项', () => {
    render(<Select options={options} disabled />)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('渲染 prefix', () => {
    render(<Select options={options} prefix={<span data-testid="prefix">$</span>} />)
    expect(screen.getByTestId('prefix')).toBeInTheDocument()
  })

  it('通过 cn() 合并用户 className', () => {
    render(<Select options={options} className="bg-gray-100 w-[300px]" />)
    const trigger = screen.getByRole('combobox')
    expect(trigger.className).toContain('bg-gray-100')
    expect(trigger.className).toContain('w-[300px]')
  })
})
