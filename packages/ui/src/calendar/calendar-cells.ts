import type { CalendarEvent } from './types'
import { formatDate } from './calendar-utils'

/** 日历单元格数据类型 */
export interface CalendarCellData {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  disabled: boolean
  events: CalendarEvent[]
}

/** 获取日历单元格数据 */
export function getCalendarCells(
  year: number,
  month: number,
  selectedDate: Date | undefined,
  today: Date,
  disabledDate?: (date: Date) => boolean,
  eventsMap?: Map<string, CalendarEvent[]>,
): CalendarCellData[] {
  const firstDay = new Date(year, month, 1)
  const startDayOfWeek = firstDay.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate()

  const cells: CalendarCellData[] = []
  const isSameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  const push = (date: Date, isCurrentMonth: boolean) => {
    cells.push({
      date,
      isCurrentMonth,
      isToday: isSameDay(date, today),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      disabled: disabledDate ? disabledDate(date) : false,
      events: eventsMap?.get(formatDate(date)) ?? [],
    })
  }

  for (let i = startDayOfWeek - 1; i >= 0; i--) push(new Date(year, month - 1, daysInPrevMonth - i), false)
  for (let i = 1; i <= daysInMonth; i++) push(new Date(year, month, i), true)
  const remaining = 42 - cells.length
  for (let i = 1; i <= remaining; i++) push(new Date(year, month + 1, i), false)
  return cells
}
