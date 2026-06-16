import { forwardRef, useState, useCallback, useRef } from 'react'
import { ChevronUp, ChevronDown, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { inputNumberVariants } from './input-number-variants'
import { parseNumeric, clampNumber, formatToPrecision } from './input-number-utils'
import type { InputNumberProps } from './types'

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const {
    className, status, prefix, suffix, allowClear,
    value, defaultValue, onChange, min, max, step = 1,
    precision, disabled, ...rest
  } = props

  const [innerText, setInnerText] = useState<string>(() =>
    defaultValue !== undefined && defaultValue !== null
      ? formatToPrecision(defaultValue, precision)
      : '',
  )

  const isControlled = value !== undefined
  const displayValue = isControlled
    ? value === null ? '' : formatToPrecision(value, precision)
    : innerText

  const inputRef = useRef<HTMLInputElement | null>(null)
  const mergedRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) {(ref as React.MutableRefObject<HTMLInputElement | null>).current = node}
    },
    [ref],
  )

  // 统一的值变更出口
  const emitChange = useCallback(
    (newValue: number | null) => {
      if (!isControlled) setInnerText(formatToPrecision(newValue, precision))
      onChange?.(newValue)
    },
    [isControlled, onChange, precision],
  )

  const currentNumeric = useCallback(() => {
    return isControlled ? (value ?? null) : parseNumeric(innerText)
  }, [isControlled, value, innerText])

  // 步进通用逻辑
  const doStep = useCallback(
    (delta: number) => {
      if (disabled) return
      const cur = currentNumeric()
      const base = cur ?? (delta > 0
        ? (min !== undefined ? min - step : 0)
        : (max !== undefined ? max + step : 0))
      const clamped = clampNumber(base + delta, min, max)
      emitChange(precision !== undefined ? Number(clamped.toFixed(precision)) : clamped)
    },
    [disabled, currentNumeric, min, max, step, precision, emitChange],
  )

  const stepUp = useCallback(() => doStep(step), [doStep, step])
  const stepDown = useCallback(() => doStep(-step), [doStep, step])

  // 输入变更
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      if (!isControlled) setInnerText(raw)
      const parsed = parseNumeric(raw)
      if (parsed !== null) {
        const clamped = clampNumber(parsed, min, max)
        onChange?.(precision !== undefined ? Number(clamped.toFixed(precision)) : clamped)
      } else if (raw === '') {
        onChange?.(null)
      }
    },
    [isControlled, min, max, precision, onChange],
  )

  // 失焦时格式化并修正边界
  const handleBlur = useCallback(() => {
    if (disabled) return
    const rawNumeric = currentNumeric()
    if (rawNumeric !== null) {
      const clamped = clampNumber(rawNumeric, min, max)
      const rounded = precision !== undefined ? Number(clamped.toFixed(precision)) : clamped
      if (!isControlled) setInnerText(formatToPrecision(rounded, precision))
      if (rounded !== currentNumeric()) onChange?.(rounded)
    }
  }, [disabled, isControlled, currentNumeric, min, max, precision, onChange])

  const handleClear = useCallback(() => {
    if (disabled) return
    emitChange(null)
  }, [disabled, emitChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') { e.preventDefault(); stepUp() }
      else if (e.key === 'ArrowDown') { e.preventDefault(); stepDown() }
    },
    [stepUp, stepDown],
  )

  const showClear = allowClear && displayValue.length > 0 && !disabled

  return (
    <div className="relative w-full">
      {prefix && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {prefix}
        </span>
      )}
      <input
        ref={mergedRef}
        type="text"
        inputMode="numeric"
        role="spinbutton"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={isControlled ? (value ?? undefined) : (currentNumeric() ?? undefined)}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-invalid={status === 'error' || undefined}
        className={cn(
          inputNumberVariants({ status }),
          prefix && 'pl-9',
          (!disabled || suffix || showClear) && 'pr-[58px]',
          className,
        )}
        {...rest}
      />
      <span className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-muted-foreground">
        {!disabled && (
          <span className="flex flex-col">
            <button
              type="button" onClick={stepUp} aria-label="Increase value"
              className="flex h-[16px] w-5 items-center justify-center rounded-t hover:bg-muted"
              tabIndex={-1}
            >
              <ChevronUp className="h-3 w-3" />
            </button>
            <button
              type="button" onClick={stepDown} aria-label="Decrease value"
              className="flex h-[16px] w-5 items-center justify-center rounded-b hover:bg-muted"
              tabIndex={-1}
            >
              <ChevronDown className="h-3 w-3" />
            </button>
          </span>
        )}
        {showClear && (
          <button
            type="button" onClick={handleClear} aria-label="Clear input"
            className="hover:text-foreground" tabIndex={-1}
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {suffix && <span className="pointer-events-none">{suffix}</span>}
      </span>
    </div>
  )
})
InputNumber.displayName = 'InputNumber'

export type { InputNumberProps, InputNumberStatus } from './types'
export { inputNumberVariants } from './input-number-variants'