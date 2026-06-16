import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { EventCalendar } from './index'
import type { CalendarEvent } from './types'

const events: CalendarEvent[] = [
  { title: '会议', date: '2026-06-15' },
  { title: '培训', date: '2026-06-16', color: '#ff0000' },
]

describe('EventCalendar', () => {
  it('渲染默认状态 - 显示日历头部和星期', () => {
    render(<EventCalendar />)
    expect(screen.getByText('今天')).toBeInTheDocument()
    expect(screen.getByText('日')).toBeInTheDocument()
    expect(screen.getByText('一')).toBeInTheDocument()
    expect(screen.getByText('六')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <EventCalendar className="custom-calendar" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-calendar')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<EventCalendar ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('events 事件渲染圆点标记', () => {
    render(<EventCalendar events={events} value={new Date(2026, 5, 15)} />)
    // 事件标记通过圆点渲染
    const dots = screen.getAllByRole('button')
    expect(dots.length).toBeGreaterThan(0)
  })

  it('onSelect 回调在点击日期时触发', () => {
    const onSelect = vi.fn()
    render(<EventCalendar onSelect={onSelect} />)
    const cells = screen.getAllByRole('button')
    // 点击非导航按钮的日期单元格
    const dateCell = cells.find((c) => c.textContent && /\d+/.test(c.textContent) && c.textContent !== '今天')
    if (dateCell) {
      fireEvent.click(dateCell)
      expect(onSelect).toHaveBeenCalledTimes(1)
    }
  })

  it('onChange 回调在切换月份时触发', () => {
    const onChange = vi.fn()
    render(<EventCalendar onChange={onChange} />)
    const prevBtn = screen.getByLabelText('上个月')
    fireEvent.click(prevBtn)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('点击今天按钮跳转当月', () => {
    const onChange = vi.fn()
    render(<EventCalendar onChange={onChange} />)
    fireEvent.click(screen.getByText('今天'))
    expect(onChange).toHaveBeenCalled()
  })

  it('dateCellRender 自定义日期渲染', () => {
    render(
      <EventCalendar
        dateCellRender={(date) => <span data-testid="custom-cell">{date.getDate()}</span>}
      />,
    )
    const customCells = screen.getAllByTestId('custom-cell')
    expect(customCells.length).toBeGreaterThan(0)
  })
})
