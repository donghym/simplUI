import { forwardRef, useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Clock, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { timePickerVariants, timeOptionVariants } from './time-picker-variants'
import { generateTimeOptions, to12HourFormat } from './time-picker-utils'
import type { TimePickerProps } from './types'

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>((props, ref) => {
  const {
    className, status, disabled, placeholder = '请选择时间',
    allowClear, prefix, value, defaultValue, onChange,
    format = '24', step = 30, ...rest
  } = props

  const [open, setOpen] = useState(false)
  const [innerValue, setInnerValue] = useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const currentValue = isControlled ? (value ?? '') : innerValue

  const containerRef = useRef<HTMLDivElement>(null)

  // 生成时间选项列表
  const timeOptions = useMemo(() => generateTimeOptions(step), [step])

  // 点击外部关闭面板
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

  const toggleOpen = useCallback(() => {
    if (disabled) return
    setOpen((prev) => !prev)
  }, [disabled])

  const selectTime = useCallback(
    (time: string) => {
      if (!isControlled) setInnerValue(time)
      onChange?.(time)
      setOpen(false)
    },
    [isControlled, onChange],
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

  const showClear = allowClear && currentValue.length > 0 && !disabled

  // 显示值：根据 format 决定显示格式
  const displayValue = useMemo(() => {
    if (!currentValue) return ''
    return format === '12' ? to12HourFormat(currentValue) : currentValue
  }, [currentValue, format])

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
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={status === 'error' || undefined}
          onClick={toggleOpen}
          onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false) }}
          className={cn(
            'sui-time-picker',
            timePickerVariants({ status }),
            prefix && 'pl-9',
            showClear && 'pr-9',
            'cursor-pointer',
            className,
          )}
          {...rest}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center">
          {showClear ? (
            <button type="button" aria-label="清空时间" onClick={handleClear} className="hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          ) : (
            <Clock className="h-4 w-4" />
          )}
        </span>
      </div>

      {open && !disabled && (
        <div className="absolute z-50 mt-1 w-full max-h-[240px] rounded-md border border-border bg-background shadow-lg overflow-y-auto">
          <div role="listbox" className="py-1">
            {timeOptions.map((time) => {
              const isSelected = currentValue === time
              const displayTime = format === '12' ? to12HourFormat(time) : time
              return (
                <button
                  key={time}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectTime(time)}
                  className={cn(
                    timeOptionVariants({ selected: isSelected }),
                    'w-full text-left',
                  )}
                >
                  {displayTime}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
})
TimePicker.displayName = 'TimePicker'

export type { TimePickerProps, TimePickerStatus } from './types'
export { timePickerVariants, timeOptionVariants } from './time-picker-variants'
