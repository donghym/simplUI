import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TimePicker } from './index'

describe('TimePicker', () => {
  it('renders with default placeholder', () => {
    render(<TimePicker />)
    expect(screen.getByPlaceholderText('请选择时间')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(<TimePicker placeholder="选择时间" />)
    expect(screen.getByPlaceholderText('选择时间')).toBeInTheDocument()
  })

  it('applies error status with correct border class', () => {
    render(<TimePicker status="error" />)
    const input = screen.getByPlaceholderText('请选择时间')
    expect(input).toHaveClass('border-danger-500')
  })

  it('applies warning status with correct border class', () => {
    render(<TimePicker status="warning" />)
    const input = screen.getByPlaceholderText('请选择时间')
    expect(input).toHaveClass('border-warning-500')
  })

  it('shows clear button when allowClear and value exist', () => {
    render(<TimePicker allowClear value="09:00" onChange={() => {}} />)
    const clearBtn = screen.getByRole('button', { name: '清空时间' })
    expect(clearBtn).toBeInTheDocument()
  })

  it('clears value when clear button clicked', () => {
    const handleChange = vi.fn()
    render(<TimePicker allowClear value="09:00" onChange={handleChange} />)
    const clearBtn = screen.getByRole('button', { name: '清空时间' })
    fireEvent.click(clearBtn)
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('opens time panel on click', () => {
    render(<TimePicker />)
    const input = screen.getByPlaceholderText('请选择时间')
    fireEvent.click(input)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('closes panel on Escape key', () => {
    render(<TimePicker />)
    const input = screen.getByPlaceholderText('请选择时间')
    fireEvent.click(input)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.keyDown(input, { key: 'Escape' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('selects time and closes panel', () => {
    const handleChange = vi.fn()
    render(<TimePicker onChange={handleChange} />)
    const input = screen.getByPlaceholderText('请选择时间')
    fireEvent.click(input)
    const options = screen.getAllByRole('option')
    const firstOption = options[0]
    if (firstOption) fireEvent.click(firstOption)
    expect(handleChange).toHaveBeenCalled()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('disables interaction when disabled', () => {
    render(<TimePicker disabled />)
    const input = screen.getByPlaceholderText('请选择时间')
    expect(input).toBeDisabled()
    fireEvent.click(input)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('merges user className via cn()', () => {
    render(<TimePicker className="bg-danger" />)
    const input = screen.getByPlaceholderText('请选择时间')
    expect(input).toHaveClass('bg-danger')
  })

  it('renders prefix element', () => {
    render(<TimePicker prefix={<span data-testid="prefix">前缀</span>} />)
    expect(screen.getByTestId('prefix')).toBeInTheDocument()
  })

  it('displays 12-hour format when format="12"', () => {
    render(<TimePicker value="13:30" format="12" onChange={() => {}} />)
    const input = screen.getByDisplayValue('01:30 PM')
    expect(input).toBeInTheDocument()
  })

  it('displays 24-hour format by default', () => {
    render(<TimePicker value="13:30" onChange={() => {}} />)
    const input = screen.getByDisplayValue('13:30')
    expect(input).toBeInTheDocument()
  })

  it('forwards ref to input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<TimePicker ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('works in uncontrolled mode with defaultValue', () => {
    render(<TimePicker defaultValue="10:00" />)
    const input = screen.getByDisplayValue('10:00')
    expect(input).toBeInTheDocument()
  })
})
