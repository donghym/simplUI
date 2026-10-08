import { forwardRef, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { inputVariants } from './input-variants'
import type { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    status,
    prefix,
    suffix,
    allowClear,
    maxLength,
    showCount,
    value,
    defaultValue,
    onChange,
    disabled,
    ...rest
  } = props

  const [innerValue, setInnerValue] = useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const currentValue = String(isControlled ? value : innerValue)
  const showClear = allowClear && currentValue.length > 0 && !disabled

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInnerValue(e.target.value)
    onChange?.(e)
  }

  // 清空输入，构造合成事件触发 onChange
  const handleClear = () => {
    if (disabled) return
    const fakeEvent = {
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>
    if (!isControlled) setInnerValue('')
    onChange?.(fakeEvent)
  }

  const count = currentValue.length
  const showCounter = showCount && maxLength !== undefined

  return (
    <div className="relative w-full">
      {prefix && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {prefix}
        </span>
      )}
      <input
        ref={ref}
        value={isControlled ? value : innerValue}
        onChange={handleChange}
        maxLength={maxLength}
        disabled={disabled}
        aria-invalid={status === 'error' || undefined}
        className={cn(
          inputVariants({ status }),
          prefix && 'pl-9',
          (suffix || showClear || showCounter) && 'pr-9',
          className,
        )}
        {...rest}
      />
      {(suffix || showClear) && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear input"
              className="hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {suffix}
        </span>
      )}
      {showCounter && (
        <span className="absolute right-3 -bottom-5 text-xs text-muted-foreground">
          {count} / {maxLength}
        </span>
      )}
    </div>
  )
})
Input.displayName = 'Input'

export type { InputProps } from './types'
export type { InputStatus } from './types'
export { inputVariants } from './input-variants'
