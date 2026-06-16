import type { CalendarEvent } from './types'
import { formatDate, isSameDay } from './event-calendar-utils'

/** 日历单元格数据 */
export interface CellData {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  events: CalendarEvent[]
}

/** 生成日历单元格 */
export function buildCells(
  year: number, month: number, selectedDate: Date | undefined, today: Date, eventsMap: Map<string, CalendarEvent[]>,
): CellData[] {
  const startDayOfWeek = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate()
  const cells: CellData[] = []
  const push = (date: Date, isCurrentMonth: boolean) => {
    cells.push({
      date, isCurrentMonth,
      isToday: isSameDay(date, today),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      events: eventsMap.get(formatDate(date)) ?? [],
    })
  }
  for (let i = startDayOfWeek - 1; i >= 0; i--) push(new Date(year, month - 1, daysInPrevMonth - i), false)
  for (let i = 1; i <= daysInMonth; i++) push(new Date(year, month, i), true)
  const remaining = 42 - cells.length
  for (let i = 1; i <= remaining; i++) push(new Date(year, month + 1, i), false)
  return cells
}
