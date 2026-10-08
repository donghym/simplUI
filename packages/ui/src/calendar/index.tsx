import { forwardRef, useState, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  calendarVariants,
  calendarHeaderVariants,
  calendarTitleVariants,
  calendarNavButtonVariants,
  calendarGridVariants,
} from './calendar-variants'
import {
  calendarWeekdayVariants,
  calendarCellVariants,
  calendarDateNumberVariants,
  calendarDotVariants,
} from './calendar-cell-variants'
import { getCalendarCells, formatYearMonth } from './calendar-utils'
import type { CalendarProps, CalendarMode, CalendarEvent } from './types'

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

/**
 * Calendar 日历组件
 *
 * 按月展示日期，支持日期选择、禁用日期、自定义渲染、事件标记。
 * 支持受控（value）和非受控（defaultValue）两种模式。
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      currentDate: controlledCurrentDate,
      defaultCurrentDate,
      onSelect,
      onPanelChange,
      disabledDate,
      dateCellRender,
      dateFullCellRender,
      events = [],
      dateCellRenderWithEvents,
      headerRender = true,
      className,
      ...rest
    } = props

    const today = useMemo(() => {
      const d = new Date()
      d.setHours(0, 0, 0, 0)
      return d
    }, [])

    const initialCurrentDate = defaultCurrentDate || today
    const [internalCurrentDate, setInternalCurrentDate] = useState(initialCurrentDate)
    const currentDate = controlledCurrentDate || internalCurrentDate

    const [internalSelectedDate, setInternalSelectedDate] = useState<Date | undefined>(defaultValue)
    const selectedDate = value !== undefined ? value : internalSelectedDate

    const [mode] = useState<CalendarMode>('month')

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // 构建事件映射表
    const eventsMap = useMemo(() => {
      const map = new Map<string, CalendarEvent[]>()
      for (const evt of events) {
        const list = map.get(evt.date) ?? []
        list.push(evt)
        map.set(evt.date, list)
      }
      return map
    }, [events])

    const cells = useMemo(
      () => getCalendarCells(year, month, selectedDate, today, disabledDate, eventsMap),
      [year, month, selectedDate, today, disabledDate, eventsMap],
    )

    const handlePrev = useCallback(() => {
      const newDate = new Date(currentDate)
      newDate.setMonth(newDate.getMonth() - 1)
      if (!controlledCurrentDate) setInternalCurrentDate(newDate)
      onPanelChange?.(newDate, mode)
    }, [currentDate, controlledCurrentDate, onPanelChange, mode])

    const handleNext = useCallback(() => {
      const newDate = new Date(currentDate)
      newDate.setMonth(newDate.getMonth() + 1)
      if (!controlledCurrentDate) setInternalCurrentDate(newDate)
      onPanelChange?.(newDate, mode)
    }, [currentDate, controlledCurrentDate, onPanelChange, mode])

    const handleToday = useCallback(() => {
      if (!controlledCurrentDate) setInternalCurrentDate(today)
      onPanelChange?.(today, mode)
    }, [today, controlledCurrentDate, onPanelChange, mode])

    const handleCellClick = useCallback(
      (cell: (typeof cells)[number]) => {
        if (cell.disabled) return
        if (value === undefined) setInternalSelectedDate(cell.date)
        onSelect?.(cell.date)
      },
      [value, onSelect],
    )

    return (
      <div ref={ref} className={cn('sui-calendar', calendarVariants(), className)} {...rest}>
        {headerRender && (
          <div className={cn(calendarHeaderVariants())}>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className={cn(calendarNavButtonVariants())}
                aria-label="上个月"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <span className={cn(calendarTitleVariants())}>
                {formatYearMonth(currentDate)}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className={cn(calendarNavButtonVariants())}
                aria-label="下个月"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleToday}
              className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
              aria-label="今天"
            >
              今天
            </button>
          </div>
        )}
        <div className={cn(calendarGridVariants())}>
          {WEEKDAYS.map((day) => (
            <div key={day} className={cn(calendarWeekdayVariants())}>
              {day}
            </div>
          ))}
        </div>
        <div className={cn(calendarGridVariants())} role="grid" aria-label={formatYearMonth(currentDate)}>
          {cells.map((cell, index) => (
            <div
              key={index}
              role="button"
              tabIndex={cell.disabled ? -1 : 0}
              aria-disabled={cell.disabled || undefined}
              aria-selected={cell.isSelected || undefined}
              onClick={() => handleCellClick(cell)}
              className={cn(
                calendarCellVariants({
                  isCurrentMonth: cell.isCurrentMonth,
                  isToday: cell.isToday,
                  isSelected: cell.isSelected,
                  disabled: cell.disabled,
                }),
              )}
            >
              {dateFullCellRender ? (
                dateFullCellRender(cell.date)
              ) : dateCellRenderWithEvents ? (
                dateCellRenderWithEvents(cell.date, cell.events)
              ) : (
                <>
                  <span
                    className={cn(
                      calendarDateNumberVariants({
                        isToday: cell.isToday,
                        isSelected: cell.isSelected,
                      }),
                    )}
                  >
                    {cell.date.getDate()}
                  </span>
                  {cell.events.length > 0 && (
                    <div className="flex gap-0.5 mt-1 flex-wrap">
                      {cell.events.slice(0, 3).map((evt, i) => (
                        <span key={i} className={cn(calendarDotVariants(), evt.color ? '' : 'bg-primary-500')} style={evt.color ? { backgroundColor: evt.color } : undefined} />
                      ))}
                    </div>
                  )}
                  {cell.events.length > 3 && <span className="text-[10px] text-muted-foreground">+{cell.events.length - 3}</span>}
                  {dateCellRender && (
                    <div className="mt-1">{dateCellRender(cell.date)}</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  },
)

Calendar.displayName = 'Calendar'

export type { CalendarProps, CalendarMode, CalendarEvent } from './types'
export {
  calendarVariants,
  calendarHeaderVariants,
  calendarNavButtonVariants,
  calendarTitleVariants,
  calendarGridVariants,
} from './calendar-variants'
export {
  calendarWeekdayVariants,
  calendarCellVariants,
  calendarDateNumberVariants,
  calendarDotVariants,
} from './calendar-cell-variants'

// 导出 EventCalendar 作为别名保持向后兼容
export { Calendar as EventCalendar }
