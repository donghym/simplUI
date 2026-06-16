import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { datePickerVariants, dayCellVariants } from './date-picker-variants'
import { getDaysInMonth, getFirstDayOfWeek, isSameDay, formatDateValue, parseDateValue } from './date-picker-utils'
import type { DatePickerProps } from './types'

/** 星期标题栏，从周日到周六 */
const WEEKDAY_LABELS = ['日', '一', '二', '三', '四', '五', '六'] as const

/** 构建日历面板的格子数组：前置 null + 日期数字 + 尾部补齐 null */
function buildCalendarCells(year: number, month: number): (number | null)[] {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>((props, ref) => {
  const {
    className, status, disabled, placeholder = '请选择日期',
    allowClear, prefix, value, defaultValue, onChange, ...rest
  } = props

  const [open, setOpen] = useState(false)
  const [innerValue, setInnerValue] = useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const currentValue = isControlled ? (value ?? '') : innerValue

  const today = new Date()
  const tY = today.getFullYear()
  const tM = today.getMonth()
  const tD = today.getDate()

  const parsed = parseDateValue(currentValue)
  const [viewYear, setViewYear] = useState(parsed?.year ?? tY)
  const [viewMonth, setViewMonth] = useState(parsed?.month ?? tM)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  // 外部 value 变化时同步视图年月
  useEffect(() => {
    const p = parseDateValue(currentValue)
    if (p) { setViewYear(p.year); setViewMonth(p.month) }
  }, [currentValue])

  const toggleOpen = useCallback(() => {
    if (disabled) return
    setOpen((prev) => !prev)
  }, [disabled])

  const selectDay = useCallback(
    (day: number) => {
      const dateStr = formatDateValue(viewYear, viewMonth, day)
      if (!isControlled) setInnerValue(dateStr)
      onChange?.(dateStr)
      setOpen(false)
    },
    [viewYear, viewMonth, isControlled, onChange],
  )

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (disabled) return
      if (!isControlled) setInnerValue('')
      onChange?.('')
    },
    [disabled, isControlled, onChange],
  )

  const goPrevMonth = useCallback(() => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((p) => p - 1) }
    else { setViewMonth((p) => p - 1) }
  }, [viewMonth])

  const goNextMonth = useCallback(() => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((p) => p + 1) }
    else { setViewMonth((p) => p + 1) }
  }, [viewMonth])

  const showClear = allowClear && currentValue.length > 0 && !disabled
  const cells = buildCalendarCells(viewYear, viewMonth)

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          type="text"
          readOnly
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={status === 'error' || undefined}
          onClick={toggleOpen}
          onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false) }}
          className={cn(
            'sui-date-picker',
            datePickerVariants({ status }),
            prefix && 'pl-9',
            showClear && 'pr-9',
            'cursor-pointer',
            className,
          )}
          {...rest}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center">
          {showClear ? (
            <button type="button" aria-label="清空日期" onClick={handleClear} className="hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          ) : (
            <Calendar className="h-4 w-4" />
          )}
        </span>
      </div>

      {open && !disabled && (
        <div className="absolute z-50 mt-1 w-[280px] rounded-md border border-border bg-background p-3 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <button type="button" onClick={goPrevMonth} className="p-1 rounded hover:bg-muted text-muted-foreground" aria-label="上个月">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-medium">{viewYear}年{viewMonth + 1}月</span>
            <button type="button" onClick={goNextMonth} className="p-1 rounded hover:bg-muted text-muted-foreground" aria-label="下个月">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 mb-1">
            {WEEKDAY_LABELS.map((label) => (
              <div key={label} className="text-center text-xs text-muted-foreground py-1">{label}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {cells.map((day, idx) => {
              if (day === null) return <div key={`empty-${idx}`} className="aspect-square" />
              const isSelected = parsed
                ? isSameDay(parsed.year, parsed.month, parsed.day, viewYear, viewMonth, day)
                : false
              const isTodayCell = isSameDay(tY, tM, tD, viewYear, viewMonth, day)
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => selectDay(day)}
                  className={cn(
                    dayCellVariants({ selected: isSelected }),
                    isTodayCell && !isSelected && 'text-primary-500 font-semibold',
                  )}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
})
DatePicker.displayName = 'DatePicker'

export type { DatePickerProps, DatePickerStatus } from './types'
export { datePickerVariants, dayCellVariants } from './date-picker-variants'