import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AutoComplete } from './index'

describe('AutoComplete - Rendering', () => {
  const defaultOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders with default styles', () => {
    render(<AutoComplete options={defaultOptions} placeholder="搜索水果" />)
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', '搜索水果')
  })

  it('applies error status correctly', () => {
    render(<AutoComplete options={defaultOptions} status="error" />)
    const input = screen.getByRole('combobox')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input.className).toContain('border-danger-500')
  })

  it('applies warning status correctly', () => {
    render(<AutoComplete options={defaultOptions} status="warning" />)
    const input = screen.getByRole('combobox')
    expect(input.className).toContain('border-warning-500')
  })

  it('disables input when disabled prop is true', () => {
    render(<AutoComplete options={defaultOptions} disabled />)
    const input = screen.getByRole('combobox')
    expect(input).toBeDisabled()
  })

  it('renders prefix and suffix', () => {
    render(
      <AutoComplete
        options={defaultOptions}
        prefix={<span data-testid="prefix">前缀</span>}
        suffix={<span data-testid="suffix">后缀</span>}
      />,
    )
    expect(screen.getByTestId('prefix')).toBeInTheDocument()
    expect(screen.getByTestId('suffix')).toBeInTheDocument()
  })

  it('merges user className correctly', () => {
    render(<AutoComplete options={defaultOptions} className="custom-class" />)
    const container = screen.getByRole('combobox').parentElement
    expect(container?.className).toContain('custom-class')
  })

  it('forwards ref to input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<AutoComplete options={defaultOptions} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('supports object options with label', async () => {
    const user = userEvent.setup()
    const options = [
      { value: 'apple', label: '苹果' },
      { value: 'banana', label: '香蕉' },
    ]
    render(<AutoComplete options={options} />)

    const input = screen.getByRole('combobox')
    await user.type(input, '苹')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('苹果')).toBeInTheDocument()
  })
})

describe('AutoComplete - Dropdown', () => {
  const defaultOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows filtered options when typing', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
  })

  it('does not show dropdown when disabled', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} disabled />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows notFoundContent when no matches', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} notFoundContent="无结果" />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'xyz')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('无结果')).toBeInTheDocument()
  })

  it('respects minSearchLength prop', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} minSearchLength={3} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'Ap')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} />)

    const input = screen.getByRole('combobox')
    expect(input).toHaveAttribute('aria-expanded', 'false')

    await user.type(input, 'App')
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-expanded', 'true')
    })
  })

  it('disables individual option when disabled is true', async () => {
    const user = userEvent.setup()
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
    ]
    render(<AutoComplete options={options} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'a')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    const bananaOption = screen.getByText('Banana')
    expect(bananaOption.className).toContain('opacity-50')
  })
})
