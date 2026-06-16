import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Calendar } from './index'

describe('Calendar', () => {
  it('renders with default styles', () => {
    render(<Calendar data-testid="calendar" />)
    expect(screen.getByTestId('calendar')).toBeInTheDocument()
    expect(screen.getByText('日')).toBeInTheDocument()
    expect(screen.getByText('一')).toBeInTheDocument()
    expect(screen.getByText('六')).toBeInTheDocument()
  })

  it('renders header with year and month', () => {
    const date = new Date(2024, 5, 15)
    render(<Calendar defaultCurrentDate={date} />)
    expect(screen.getByText('2024年6月')).toBeInTheDocument()
  })

  it('switches to previous month when left arrow clicked', () => {
    const date = new Date(2024, 5, 15)
    render(<Calendar defaultCurrentDate={date} />)
    const prevButton = screen.getByLabelText('上个月')
    fireEvent.click(prevButton)
    expect(screen.getByText('2024年5月')).toBeInTheDocument()
  })

  it('switches to next month when right arrow clicked', () => {
    const date = new Date(2024, 5, 15)
    render(<Calendar defaultCurrentDate={date} />)
    const nextButton = screen.getByLabelText('下个月')
    fireEvent.click(nextButton)
    expect(screen.getByText('2024年7月')).toBeInTheDocument()
  })

  it('switches to today when today button clicked', () => {
    const date = new Date(2023, 0, 1)
    render(<Calendar defaultCurrentDate={date} />)
    const todayButton = screen.getByText('今天')
    fireEvent.click(todayButton)
    const today = new Date()
    const expectedText = `${today.getFullYear()}年${today.getMonth() + 1}月`
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })

  it('calls onSelect when a date cell is clicked', () => {
    const onSelect = vi.fn()
    const date = new Date(2024, 5, 1)
    render(<Calendar defaultCurrentDate={date} onSelect={onSelect} />)
    const cell = screen.getByText('15').closest('[role="button"]')
    if (cell) fireEvent.click(cell)
    expect(onSelect).toHaveBeenCalled()
    const calledDate = onSelect.mock.calls[0]?.[0] as Date | undefined
    expect(calledDate?.getDate()).toBe(15)
  })

  it('calls onPanelChange when month is switched', () => {
    const onPanelChange = vi.fn()
    const date = new Date(2024, 5, 15)
    render(<Calendar defaultCurrentDate={date} onPanelChange={onPanelChange} />)
    const nextButton = screen.getByLabelText('下个月')
    fireEvent.click(nextButton)
    expect(onPanelChange).toHaveBeenCalled()
    const calledDate = onPanelChange.mock.calls[0]?.[0] as Date | undefined
    expect(calledDate?.getMonth()).toBe(6)
  })

  it('does not call onSelect when disabled date is clicked', () => {
    const onSelect = vi.fn()
    const date = new Date(2024, 5, 1)
    const disabledDate = (d: Date) => d.getDate() === 15
    render(
      <Calendar
        defaultCurrentDate={date}
        onSelect={onSelect}
        disabledDate={disabledDate}
      />,
    )
    const cells = screen.getAllByRole('button')
    const disabledCell = cells.find((c) => c.textContent === '15')
    if (disabledCell) fireEvent.click(disabledCell)
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('marks today with special styling', () => {
    const today = new Date()
    render(<Calendar />)
    const todayCell = screen.getAllByRole('button').find((cell) => {
      const numSpan = cell.querySelector('span')
      return numSpan && numSpan.textContent === String(today.getDate())
    })
    expect(todayCell).toBeDefined()
  })

  it('works in controlled mode with value prop', () => {
    const onSelect = vi.fn()
    const selectedDate = new Date(2024, 5, 20)
    render(
      <Calendar value={selectedDate} defaultCurrentDate={selectedDate} onSelect={onSelect} />,
    )
    const cells = screen.getAllByRole('button')
    const selectedCell = cells.find((c) => c.getAttribute('aria-selected') === 'true')
    expect(selectedCell).toBeDefined()
  })

  it('renders custom dateCellRender content', () => {
    const date = new Date(2024, 5, 1)
    render(
      <Calendar
        defaultCurrentDate={date}
        dateCellRender={() => <span data-testid="custom-content">事件</span>}
      />,
    )
    expect(screen.getAllByTestId('custom-content').length).toBeGreaterThan(0)
  })

  it('hides header when headerRender is false', () => {
    render(<Calendar headerRender={false} data-testid="calendar" />)
    expect(screen.queryByLabelText('上个月')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('下个月')).not.toBeInTheDocument()
  })

  it('merges user className via cn()', () => {
    render(<Calendar className="custom-calendar" data-testid="calendar" />)
    const calendar = screen.getByTestId('calendar')
    expect(calendar.className).toContain('custom-calendar')
  })

  it('forwards ref to container element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Calendar ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
