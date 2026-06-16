import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Cascader } from './index'
import type { CascaderOption } from './types'

const mockOptions: CascaderOption[] = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      { value: 'hangzhou', label: '杭州', children: [{ value: 'xihu', label: '西湖区' }] },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      { value: 'nanjing', label: '南京', children: [{ value: 'gulou', label: '鼓楼区' }] },
    ],
  },
]

describe('Cascader', () => {
  it('renders with default placeholder', () => {
    render(<Cascader options={mockOptions} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('请选择')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(<Cascader options={mockOptions} placeholder="选择地区" />)
    expect(screen.getByText('选择地区')).toBeInTheDocument()
  })

  it('opens dropdown when clicked', async () => {
    render(<Cascader options={mockOptions} />)
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('option', { name: /浙江/ })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /江苏/ })).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    render(
      <div>
        <Cascader options={mockOptions} />
        <button>Outside</button>
      </div>,
    )
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('option', { name: /浙江/ })).toBeInTheDocument()
    await userEvent.click(screen.getByText('Outside'))
    await waitFor(() => {
      expect(screen.queryByRole('option', { name: /浙江/ })).not.toBeInTheDocument()
    })
  })

  it('expands children on option hover', async () => {
    render(<Cascader options={mockOptions} />)
    await userEvent.click(screen.getByRole('combobox'))
    fireEvent.mouseEnter(screen.getByText('浙江'))
    await waitFor(() => {
      expect(screen.getByText('杭州')).toBeInTheDocument()
      expect(screen.getByText('宁波')).toBeInTheDocument()
    })
  })

  it('selects leaf node and closes dropdown', async () => {
    const onChange = vi.fn()
    render(<Cascader options={mockOptions} onChange={onChange} />)
    await userEvent.click(screen.getByRole('combobox'))
    fireEvent.mouseEnter(screen.getByText('浙江'))
    await waitFor(() => expect(screen.getByText('宁波')).toBeInTheDocument())
    await userEvent.click(screen.getByText('宁波'))
    expect(onChange).toHaveBeenCalledWith(['zhejiang', 'ningbo'], expect.any(Array))
    await waitFor(() => {
      expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })
  })

  it('displays selected value correctly', () => {
    render(<Cascader options={mockOptions} value={['zhejiang', 'ningbo']} />)
    expect(screen.getByText('浙江 / 宁波')).toBeInTheDocument()
  })

  it('supports custom displayRender', () => {
    render(
      <Cascader
        options={mockOptions}
        value={['zhejiang', 'ningbo']}
        displayRender={(opts) => opts.map((o) => o.label).reverse().join(' - ')}
      />,
    )
    expect(screen.getByText('宁波 - 浙江')).toBeInTheDocument()
  })

  it('clears value when clear button clicked', async () => {
    const onChange = vi.fn()
    render(<Cascader options={mockOptions} value={['zhejiang', 'ningbo']} allowClear onChange={onChange} />)
    await userEvent.click(screen.getByLabelText('清空'))
    expect(onChange).toHaveBeenCalledWith([], [])
  })

  it('does not open when disabled', async () => {
    render(<Cascader options={mockOptions} disabled />)
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
  })

  it('applies error status correctly', () => {
    render(<Cascader options={mockOptions} status="error" />)
    const combobox = screen.getByRole('combobox')
    expect(combobox.className).toContain('border-danger-500')
  })

  it('applies warning status correctly', () => {
    render(<Cascader options={mockOptions} status="warning" />)
    const combobox = screen.getByRole('combobox')
    expect(combobox.className).toContain('border-warning-500')
  })

  it('closes on Escape key', async () => {
    render(<Cascader options={mockOptions} />)
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('option', { name: /浙江/ })).toBeInTheDocument()
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' })
    await waitFor(() => {
      expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })
  })

  it('opens on Enter key', async () => {
    render(<Cascader options={mockOptions} />)
    const combobox = screen.getByRole('combobox')
    combobox.focus()
    fireEvent.keyDown(combobox, { key: 'Enter' })
    await waitFor(() => {
      expect(screen.getByRole('option', { name: /浙江/ })).toBeInTheDocument()
    })
  })

  it('supports controlled open state', () => {
    const { rerender } = render(<Cascader options={mockOptions} open={false} />)
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
    rerender(<Cascader options={mockOptions} open={true} />)
    expect(screen.getByRole('option', { name: /浙江/ })).toBeInTheDocument()
  })

  it('supports controlled value state', () => {
    const { rerender } = render(<Cascader options={mockOptions} value={['zhejiang']} />)
    expect(screen.getByText('浙江')).toBeInTheDocument()
    rerender(<Cascader options={mockOptions} value={['jiangsu']} />)
    expect(screen.getByText('江苏')).toBeInTheDocument()
  })

  it('merges user className correctly', () => {
    render(<Cascader options={mockOptions} className="custom-class" />)
    const container = screen.getByRole('combobox').parentElement
    expect(container?.className).toContain('custom-class')
  })

  it('forwards ref to combobox element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Cascader options={mockOptions} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('handles disabled options correctly', async () => {
    const optionsWithDisabled: CascaderOption[] = [
      { value: 'a', label: 'Option A', disabled: true },
      { value: 'b', label: 'Option B' },
    ]
    const onChange = vi.fn()
    render(<Cascader options={optionsWithDisabled} onChange={onChange} />)
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.click(screen.getByText('Option A'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('shows notFoundContent when options are empty', async () => {
    render(<Cascader options={[]} notFoundContent="暂无数据" />)
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })
})
