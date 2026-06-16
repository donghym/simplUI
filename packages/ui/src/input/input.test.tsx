import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Input } from './index'

describe('Input', () => {
  it('渲染默认样式', () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
    expect(input.className).toContain('rounded-md')
    expect(input.className).toContain('border')
  })

  it('status=error 时应用红色边框', () => {
    render(<Input status="error" placeholder="err" />)
    const input = screen.getByPlaceholderText('err')
    expect(input.className).toContain('border-danger-500')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('status=warning 时应用黄色边框', () => {
    render(<Input status="warning" placeholder="warn" />)
    const input = screen.getByPlaceholderText('warn')
    expect(input.className).toContain('border-warning-500')
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('allowClear 且有值时显示清空按钮', () => {
    render(<Input allowClear defaultValue="hello" />)
    const clearBtn = screen.getByLabelText('Clear input')
    expect(clearBtn).toBeInTheDocument()
  })

  it('allowClear 无值时不显示清空按钮', () => {
    const { container } = render(<Input allowClear />)
    expect(container.querySelector('[aria-label="Clear input"]')).not.toBeInTheDocument()
  })

  it('点击清空按钮清空值并触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Input allowClear defaultValue="hello" onChange={handleChange} />)
    const clearBtn = screen.getByLabelText('Clear input')
    fireEvent.click(clearBtn)
    expect(handleChange).toHaveBeenCalledTimes(1)
    // 清空后清空按钮消失
    expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
  })

  it('渲染 prefix 和 suffix', () => {
    render(<Input prefix={<span>$</span>} suffix={<span>.00</span>} />)
    expect(screen.getByText('$')).toBeInTheDocument()
    expect(screen.getByText('.00')).toBeInTheDocument()
  })

  it('prefix 存在时输入框增加左侧内边距', () => {
    render(<Input prefix={<span>$</span>} placeholder="amt" />)
    const input = screen.getByPlaceholderText('amt')
    expect(input.className).toContain('pl-9')
  })

  it('showCount 且 maxLength 已设时显示计数', () => {
    render(<Input showCount maxLength={100} defaultValue="hello" />)
    expect(screen.getByText('5 / 100')).toBeInTheDocument()
  })

  it('showCount 但 maxLength 未设时不显示计数', () => {
    render(<Input showCount defaultValue="hello" />)
    expect(screen.queryByText('5 / 100')).not.toBeInTheDocument()
  })

  it('通过 cn() 合并用户 className', () => {
    render(<Input className="bg-gray-100" placeholder="styled" />)
    const input = screen.getByPlaceholderText('styled')
    expect(input.className).toContain('bg-gray-100')
    // twMerge 覆盖默认的 bg-white
    expect(input.className).not.toContain('bg-white')
  })
})
