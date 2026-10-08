import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, X, Check } from 'lucide-react'
import { cn } from '../lib/utils'
import { selectVariants, optionVariants, selectDropdownVariants } from './select-variants'
import type { SelectProps, SelectOption } from './types'

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    className, status, componentSize = 'default', disabled, placeholder, allowClear,
    options, value, defaultValue, onChange, prefix, ...rest
  } = props

  const [open, setOpen] = useState(false)
  const [innerValue, setInnerValue] = useState(defaultValue ?? '')
  const [activeIndex, setActiveIndex] = useState(-1)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : innerValue
  const selectedOption = options.find((opt) => opt.value === currentValue)

  const containerRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const toggleOpen = useCallback(() => {
    if (disabled) return
    setOpen((prev) => !prev)
  }, [disabled])

  const handleSelect = useCallback(
    (opt: SelectOption) => {
      if (opt.disabled) return
      if (!isControlled) setInnerValue(opt.value)
      onChange?.(opt.value)
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
      setOpen(false)
    },
    [disabled, isControlled, onChange],
  )

  const showClear = allowClear && currentValue.length > 0 && !disabled

  return (
    <div ref={containerRef} className="relative w-full select-none">
      <select
        ref={ref}
        value={currentValue}
        disabled={disabled}
        aria-hidden="true"
        className="sr-only"
        tabIndex={-1}
        onChange={() => {}}
        {...rest}
      >
        <option value="" aria-hidden="true">{placeholder ?? ''}</option>
        {selectedOption && (
          <option value={selectedOption.value} aria-hidden="true">
            {selectedOption.label}
          </option>
        )}
      </select>

      {/* 触发器 */}
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={status === 'error' || undefined}
        disabled={disabled}
        onClick={toggleOpen}
        className={cn(
          'sui-select',
          selectVariants({ status, componentSize, open }),
          prefix && (componentSize === 'small' ? 'pl-7' : componentSize === 'large' ? 'pl-10' : 'pl-9'),
          showClear && (componentSize === 'small' ? 'pr-7' : componentSize === 'large' ? 'pr-10' : 'pr-9'),
          className,
        )}
      >
        {prefix && (
          <span className="pointer-events-none mr-2 flex-shrink-0 text-muted-foreground">
            {prefix}
          </span>
        )}
        <span
          className={cn(
            'flex-1 text-left truncate',
            !selectedOption && 'text-muted-foreground',
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="flex items-center gap-1 ml-2 flex-shrink-0">
          {showClear && (
            <span
              role="button"
              aria-label="Clear selection"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground flex items-center rounded-full hover:bg-muted p-0.5 transition-colors"
            >
              <X className={cn(
                'transition-all',
                componentSize === 'small' ? 'h-3 w-3' : componentSize === 'large' ? 'h-5 w-5' : 'h-4 w-4'
              )} />
            </span>
          )}
          <ChevronDown
            className={cn(
              'text-muted-foreground transition-transform duration-200',
              componentSize === 'small' ? 'h-3 w-3' : componentSize === 'large' ? 'h-5 w-5' : 'h-4 w-4',
              open && 'rotate-180',
            )}
          />
        </span>
      </button>

      {/* 下拉面板 */}
      {open && (
        <ul
          role="listbox"
          className={selectDropdownVariants({ open: true })}
        >
          {options.map((opt, idx) => {
            const isSelected = opt.value === currentValue
            const isActive = idx === activeIndex
            const state = opt.disabled ? 'disabled' : isSelected ? 'selected' : isActive ? 'active' : 'default'
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                aria-disabled={opt.disabled || undefined}
                onClick={() => handleSelect(opt)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  optionVariants({ state }),
                  'flex items-center justify-between',
                )}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <Check className={cn(
                    'text-primary-600 flex-shrink-0',
                    componentSize === 'small' ? 'h-3 w-3' : componentSize === 'large' ? 'h-5 w-5' : 'h-4 w-4'
                  )} />
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
})
Select.displayName = 'Select'

export type { SelectProps, SelectOption, SelectStatus } from './types'
export { selectVariants, optionVariants, selectDropdownVariants } from './select-variants'
