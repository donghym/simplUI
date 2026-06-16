import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DatePicker } from './index'

// 固定 today 为 2026-06-11 以稳定测试结果
const MOCK_DATE = new Date(2026, 5, 11) // 2026-06-11

describe('DatePicker', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(MOCK_DATE)
  })

  it('渲染默认样式和占位符', () => {
    render(<DatePicker />)
    const input = screen.getByPlaceholderText('请选择日期') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('')
    expect(input).not.toBeDisabled()
  })

  it('status=error 时应用红色边框和 aria-invalid', () => {
    render(<DatePicker status="error" />)
    const input = screen.getByPlaceholderText('请选择日期')
    expect(input.className).toContain('border-danger-500')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('status=warning 时应用黄色边框，无 aria-invalid', () => {
    render(<DatePicker status="warning" />)
    const input = screen.getByPlaceholderText('请选择日期')
    expect(input.className).toContain('border-warning-500')
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('defaultValue 初始化显示正确日期', () => {
    render(<DatePicker defaultValue="2026-06-15" />)
    const input = screen.getByPlaceholderText('请选择日期') as HTMLInputElement
    expect(input.value).toBe('2026-06-15')
  })

  it('点击输入框打开日历面板', () => {
    render(<DatePicker />)
    const input = screen.getByPlaceholderText('请选择日期')
    fireEvent.click(input)
    expect(screen.getByText('2026年6月')).toBeInTheDocument()
    // 应显示星期标题
    expect(screen.getByText('日')).toBeInTheDocument()
    expect(screen.getByText('六')).toBeInTheDocument()
  })

  it('点击日历中的日期选中并关闭面板，触发 onChange', () => {
    const handleChange = vi.fn()
    render(<DatePicker onChange={handleChange} />)
    fireEvent.click(screen.getByPlaceholderText('请选择日期'))
    // 点击 15 号
    fireEvent.click(screen.getByText('15'))
    expect(handleChange).toHaveBeenCalledWith('2026-06-15')
    // 面板应关闭
    expect(screen.queryByText('2026年6月')).not.toBeInTheDocument()
  })

  it('受控模式 value 变化时更新输入框显示', () => {
    const { rerender } = render(<DatePicker value="2026-03-20" />)
    const input = screen.getByPlaceholderText('请选择日期') as HTMLInputElement
    expect(input.value).toBe('2026-03-20')
    rerender(<DatePicker value="2026-08-05" />)
    expect(input.value).toBe('2026-08-05')
  })

  it('allowClear 且有值时显示清空按钮，点击清空触发 onChange', () => {
    const handleChange = vi.fn()
    render(<DatePicker allowClear defaultValue="2026-06-15" onChange={handleChange} />)
    const clearBtn = screen.getByLabelText('清空日期')
    expect(clearBtn).toBeInTheDocument()
    fireEvent.click(clearBtn)
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('无值时 allowClear 不显示清空按钮，显示日历图标', () => {
    render(<DatePicker allowClear />)
    expect(screen.queryByLabelText('清空日期')).not.toBeInTheDocument()
    // 日历图标应显示（通过 svg 存在验证）
    const input = screen.getByPlaceholderText('请选择日期')
    const parentSpan = input.parentElement?.querySelector('.absolute.right-3')
    expect(parentSpan?.querySelector('svg')).toBeInTheDocument()
  })

  it('disabled 时不可展开日历面板', () => {
    render(<DatePicker disabled />)
    const input = screen.getByPlaceholderText('请选择日期')
    fireEvent.click(input)
    expect(screen.queryByText('2026年6月')).not.toBeInTheDocument()
  })

  it('点击上个月/下个月按钮切换日历视图', () => {
    render(<DatePicker />)
    fireEvent.click(screen.getByPlaceholderText('请选择日期'))
    expect(screen.getByText('2026年6月')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('上个月'))
    expect(screen.getByText('2026年5月')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('下个月'))
    expect(screen.getByText('2026年6月')).toBeInTheDocument()
  })

  it('通过 cn() 合并用户 className', () => {
    render(<DatePicker className="w-[300px] bg-danger-50" />)
    const input = screen.getByPlaceholderText('请选择日期')
    expect(input.className).toContain('w-[300px]')
    expect(input.className).toContain('bg-danger-50')
  })

  it('渲染 prefix 图标', () => {
    render(<DatePicker prefix={<span data-testid="prefix-icon">P</span>} />)
    expect(screen.getByTestId('prefix-icon')).toBeInTheDocument()
  })

  it('按下 Escape 键关闭日历面板', () => {
    render(<DatePicker />)
    fireEvent.click(screen.getByPlaceholderText('请选择日期'))
    expect(screen.getByText('2026年6月')).toBeInTheDocument()
    fireEvent.keyDown(screen.getByPlaceholderText('请选择日期'), { key: 'Escape' })
    expect(screen.queryByText('2026年6月')).not.toBeInTheDocument()
  })
})