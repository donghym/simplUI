import { forwardRef, useState, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  eventCalendarVariants, eventCalendarHeaderVariants, eventCalendarTitleVariants,
  eventCalendarNavVariants, eventCalendarGridVariants, eventCalendarWeekdayVariants,
  eventCalendarCellVariants, eventCalendarDateVariants, eventCalendarDotVariants,
} from './event-calendar-variants'
import { formatYearMonth, buildCells } from './event-calendar-utils'
import type { EventCalendarProps, CalendarEvent } from './types'

export type { EventCalendarProps, CalendarEvent } from './types'

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

/** 事件日历组件 */
export const EventCalendar = forwardRef<HTMLDivElement, EventCalendarProps>(
  (props, ref) => {
    const { value: controlledValue, onChange, events = [], dateCellRender, onSelect, className, ...rest } = props

    const today = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d }, [])
    const [internalDate, setInternalDate] = useState(today)
    const currentDate = controlledValue ?? internalDate
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const eventsMap = useMemo(() => {
      const map = new Map<string, CalendarEvent[]>()
      for (const evt of events) { const list = map.get(evt.date) ?? []; list.push(evt); map.set(evt.date, list) }
      return map
    }, [events])

    const cells = useMemo(() => buildCells(year, month, selectedDate, today, eventsMap), [year, month, selectedDate, today, eventsMap])

    const changeMonth = useCallback((delta: number) => {
      const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + delta)
      if (!controlledValue) setInternalDate(newDate); onChange?.(newDate)
    }, [currentDate, controlledValue, onChange])

    const handleToday = useCallback(() => {
      if (!controlledValue) setInternalDate(today); onChange?.(today)
    }, [today, controlledValue, onChange])

    return (
      <div ref={ref} className={cn(eventCalendarVariants(), className)} {...rest}>
        <div className={cn(eventCalendarHeaderVariants())}>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => changeMonth(-1)} className={cn(eventCalendarNavVariants())} aria-label="上个月">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <span className={cn(eventCalendarTitleVariants())}>{formatYearMonth(currentDate)}</span>
            <button type="button" onClick={() => changeMonth(1)} className={cn(eventCalendarNavVariants())} aria-label="下个月">
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
          <button type="button" onClick={handleToday} className="text-sm text-primary-500 hover:text-primary-600 transition-colors">今天</button>
        </div>
        <div className={cn(eventCalendarGridVariants())}>
          {WEEKDAYS.map((day) => <div key={day} className={cn(eventCalendarWeekdayVariants())}>{day}</div>)}
        </div>
        <div className={cn(eventCalendarGridVariants())}>
          {cells.map((cell, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => { setSelectedDate(cell.date); onSelect?.(cell.date) }}
              onKeyDown={(e) => { if (e.key === 'Enter') { setSelectedDate(cell.date); onSelect?.(cell.date) } }}
              className={cn(eventCalendarCellVariants({ isCurrentMonth: cell.isCurrentMonth, isToday: cell.isToday, isSelected: cell.isSelected }))}
            >
              {dateCellRender ? dateCellRender(cell.date, cell.events) : (
                <>
                  <span className={cn(eventCalendarDateVariants({ isToday: cell.isToday, isSelected: cell.isSelected }))}>
                    {cell.date.getDate()}
                  </span>
                  {cell.events.length > 0 && (
                    <div className="flex gap-0.5 mt-1 flex-wrap">
                      {cell.events.slice(0, 3).map((evt, i) => (
                        <span key={i} className={cn(eventCalendarDotVariants(), evt.color ? '' : 'bg-primary-500')} data-color={evt.color} />
                      ))}
                    </div>
                  )}
                  {cell.events.length > 3 && <span className="text-[10px] text-muted-foreground">+{cell.events.length - 3}</span>}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  },
)

EventCalendar.displayName = 'EventCalendar'
