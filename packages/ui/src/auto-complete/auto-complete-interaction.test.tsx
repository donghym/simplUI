import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AutoComplete } from './index'

describe('AutoComplete - Interaction', () => {
  const defaultOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('selects option on click', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<AutoComplete options={defaultOptions} onSelect={onSelect} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    await user.click(screen.getByText('Apple'))

    expect(onSelect).toHaveBeenCalledWith('Apple', { value: 'Apple', label: 'Apple' })
    expect(input).toHaveValue('Apple')
  })

  it('shows clear button when allowClear and value exists', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} allowClear />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'test')

    const clearButton = screen.getByLabelText('清空')
    expect(clearButton).toBeInTheDocument()
    await user.click(clearButton)
    expect(input).toHaveValue('')
  })

  it('supports keyboard navigation with ArrowDown', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'a')
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.keyboard('{ArrowDown}')
    const options = screen.getAllByRole('option')
    expect(options[0]!.className).toContain('bg-muted')
  })

  it('selects highlighted option on Enter', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<AutoComplete options={defaultOptions} onSelect={onSelect} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Enter}')

    expect(onSelect).toHaveBeenCalledWith('Apple', { value: 'Apple', label: 'Apple' })
  })

  it('closes dropdown on Escape', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('supports controlled mode with value prop', () => {
    const { rerender } = render(<AutoComplete options={defaultOptions} value="test" />)
    const input = screen.getByRole('combobox')
    expect(input).toHaveValue('test')

    rerender(<AutoComplete options={defaultOptions} value="new value" />)
    expect(input).toHaveValue('new value')
  })

  it('calls onSearch when input changes', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<AutoComplete options={defaultOptions} onSearch={onSearch} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'test')
    expect(onSearch).toHaveBeenCalledWith('test')
  })

  it('calls onOpenChange when dropdown opens/closes', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    render(<AutoComplete options={defaultOptions} onOpenChange={onOpenChange} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true)
    })

    await user.keyboard('{Escape}')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders custom option via optionRender', async () => {
    const user = userEvent.setup()
    render(
      <AutoComplete
        options={defaultOptions}
        optionRender={({ option }) => (
          <span data-testid="custom-option">{option.value.toUpperCase()}</span>
        )}
      />,
    )

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')

    await waitFor(() => {
      expect(screen.getByTestId('custom-option')).toBeInTheDocument()
    })
    expect(screen.getByText('APPLE')).toBeInTheDocument()
  })

  it('clears input on select when clearOnSelect is true', async () => {
    const user = userEvent.setup()
    render(<AutoComplete options={defaultOptions} clearOnSelect />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'App')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    await user.click(screen.getByText('Apple'))
    expect(input).toHaveValue('')
  })

  it('supports custom filterOption function', async () => {
    const user = userEvent.setup()
    const customFilter = vi.fn((input, option) => option.value.startsWith(input))
    render(<AutoComplete options={defaultOptions} filterOption={customFilter} />)

    const input = screen.getByRole('combobox')
    await user.type(input, 'B')

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })
})
