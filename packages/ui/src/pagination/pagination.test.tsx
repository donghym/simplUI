import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './index'

describe('Pagination', () => {
  it('renders with default props', () => {
    render(<Pagination total={100} />)
    expect(screen.getByRole('navigation', { name: 'pagination' })).toBeInTheDocument()
    expect(screen.getByLabelText('第一页')).toBeInTheDocument()
    expect(screen.getByLabelText('上一页')).toBeInTheDocument()
    expect(screen.getByLabelText('下一页')).toBeInTheDocument()
    expect(screen.getByLabelText('最后一页')).toBeInTheDocument()
  })

  it('renders correct page numbers', () => {
    render(<Pagination total={100} pageSize={10} defaultCurrent={1} />)
    const buttons = screen.getAllByRole('button')
    const pageButtons = buttons.filter((btn) => /^\d+$/.test(btn.textContent || ''))
    expect(pageButtons.length).toBeGreaterThan(0)
    expect(pageButtons[0]).toHaveTextContent('1')
  })

  it('shows active page correctly', () => {
    render(<Pagination total={100} pageSize={10} current={3} />)
    const activeButton = screen.getByRole('button', { name: '3' })
    expect(activeButton).toHaveAttribute('aria-current', 'page')
    expect(activeButton.className).toContain('bg-primary-500')
  })

  it('calls onChange when page is clicked', () => {
    const onChange = vi.fn()
    render(<Pagination total={100} pageSize={10} current={1} onChange={onChange} />)
    const page2Button = screen.getByRole('button', { name: '2' })
    fireEvent.click(page2Button)
    expect(onChange).toHaveBeenCalledWith(2, 10)
  })

  it('does not call onChange when disabled', () => {
    const onChange = vi.fn()
    render(<Pagination total={100} pageSize={10} current={1} disabled onChange={onChange} />)
    const page2Button = screen.getByRole('button', { name: '2' })
    fireEvent.click(page2Button)
    expect(onChange).not.toHaveBeenCalled()
  })

  it('shows total text when showTotal is true', () => {
    render(<Pagination total={100} pageSize={10} current={1} showTotal />)
    expect(screen.getByText(/共 100 条/)).toBeInTheDocument()
    expect(screen.getByText(/第 1-10 条/)).toBeInTheDocument()
  })

  it('shows size changer when showSizeChanger is true', () => {
    render(<Pagination total={100} pageSize={10} showSizeChanger />)
    const select = screen.getByRole('combobox', { name: '每页条数' })
    expect(select).toBeInTheDocument()
  })

  it('calls onPageSizeChange when size is changed', () => {
    const onPageSizeChange = vi.fn()
    render(
      <Pagination
        total={100}
        pageSize={10}
        current={1}
        showSizeChanger
        onPageSizeChange={onPageSizeChange}
      />
    )
    const select = screen.getByRole('combobox', { name: '每页条数' })
    fireEvent.change(select, { target: { value: '20' } })
    expect(onPageSizeChange).toHaveBeenCalledWith(20, 1)
  })

  it('shows quick jumper when showQuickJumper is true', () => {
    render(<Pagination total={100} pageSize={10} showQuickJumper />)
    const input = screen.getByRole('spinbutton', { name: '跳转页码' })
    expect(input).toBeInTheDocument()
  })

  it('renders in simple mode', () => {
    render(<Pagination total={100} pageSize={10} current={1} simple />)
    expect(screen.getByText('1 / 10')).toBeInTheDocument()
    expect(screen.queryByLabelText('第一页')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('最后一页')).not.toBeInTheDocument()
  })

  it('merges user className via cn()', () => {
    render(<Pagination total={100} className="custom-class" />)
    const nav = screen.getByRole('navigation', { name: 'pagination' })
    expect(nav.className).toContain('custom-class')
    expect(nav.className).toContain('inline-flex')
  })

  it('forwards ref to nav element', () => {
    const ref = vi.fn()
    render(<Pagination total={100} ref={ref} />)
    expect(ref).toHaveBeenCalled()
    const nav = screen.getByRole('navigation', { name: 'pagination' })
    expect(ref).toHaveBeenCalledWith(nav)
  })

  it('disables first page button when on first page', () => {
    render(<Pagination total={100} pageSize={10} current={1} />)
    const firstPageButton = screen.getByLabelText('第一页')
    expect(firstPageButton.className).toContain('opacity-50')
  })

  it('disables last page button when on last page', () => {
    render(<Pagination total={100} pageSize={10} current={10} />)
    const lastPageButton = screen.getByLabelText('最后一页')
    expect(lastPageButton.className).toContain('opacity-50')
  })

  it('shows ellipsis for large page counts', () => {
    render(<Pagination total={500} pageSize={10} current={5} />)
    const ellipsisElements = screen.getAllByText('...')
    expect(ellipsisElements.length).toBeGreaterThan(0)
  })
})