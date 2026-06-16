/** 日历单元格数据类型 */
export interface CalendarCellData {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  disabled: boolean
}

/** 获取日历单元格数据 */
export function getCalendarCells(
  year: number,
  month: number,
  selectedDate: Date | undefined,
  today: Date,
  disabledDate?: (date: Date) => boolean,
): CalendarCellData[] {
  const firstDay = new Date(year, month, 1)
  const startDayOfWeek = firstDay.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate()

  const cells: CalendarCellData[] = []
  const push = (date: Date, isCurrentMonth: boolean) => {
    cells.push({
      date, isCurrentMonth,
      isToday: date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate(),
      isSelected: selectedDate ? date.getFullYear() === selectedDate.getFullYear() && date.getMonth() === selectedDate.getMonth() && date.getDate() === selectedDate.getDate() : false,
      disabled: disabledDate ? disabledDate(date) : false,
    })
  }

  for (let i = startDayOfWeek - 1; i >= 0; i--) push(new Date(year, month - 1, daysInPrevMonth - i), false)
  for (let i = 1; i <= daysInMonth; i++) push(new Date(year, month, i), true)
  const remaining = 42 - cells.length
  for (let i = 1; i <= remaining; i++) push(new Date(year, month + 1, i), false)
  return cells
}