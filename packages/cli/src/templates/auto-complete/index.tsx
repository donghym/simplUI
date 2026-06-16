import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { autoCompleteVariants } from './auto-complete-variants'
import { normalizeOptions, defaultFilterOption } from './auto-complete-utils'
import { AutoCompleteDropdown } from './auto-complete-dropdown'
import type { AutoCompleteProps, AutoCompleteOption } from './types'

export const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  (props, ref) => {
    const {
      className, dropdownClassName, status, options: rawOptions = [],
      onSearch, onSelect, onChange, open: controlledOpen, onOpenChange,
      defaultOpen = false, defaultValue = '', value: controlledValue, allowClear, disabled,
      optionRender, notFoundContent = '无匹配结果', maxDropdownHeight = 256,
      minSearchLength = 0, clearOnSelect = false, filterOption = defaultFilterOption,
      prefix, suffix, placeholder, ...rest
    } = props

    const inputRef = useRef<HTMLInputElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [internalOpen, setInternalOpen] = useState(defaultOpen)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)

    const isControlled = controlledValue !== undefined
    const isOpenControlled = controlledOpen !== undefined
    const currentValue = isControlled ? controlledValue : internalValue
    const isOpen = isOpenControlled ? controlledOpen : internalOpen

    const allOptions = normalizeOptions(rawOptions)
    const filteredOptions = allOptions.filter((opt) => {
      if (currentValue.length < minSearchLength) return false
      return filterOption(currentValue, opt)
    })

    const setOpen = useCallback((newOpen: boolean) => {
      if (!isOpenControlled) setInternalOpen(newOpen)
      onOpenChange?.(newOpen)
    }, [isOpenControlled, onOpenChange])

    const setValue = useCallback((newValue: string) => {
      if (!isControlled) setInternalValue(newValue)
      onChange?.(newValue)
    }, [isControlled, onChange])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onSearch?.(newValue)
      // 基于新值重新计算过滤选项
      const newFilteredOptions = allOptions.filter((opt) => {
        if (newValue.length < minSearchLength) return false
        return filterOption(newValue, opt)
      })
      if (newValue.length >= minSearchLength && newFilteredOptions.length > 0) setOpen(true)
      setHighlightedIndex(-1)
    }

    const handleSelect = (option: AutoCompleteOption) => {
      if (option.disabled) return
      setValue(clearOnSelect ? '' : option.value)
      onSelect?.(option.value, option)
      setOpen(false)
      setHighlightedIndex(-1)
    }

    const handleClear = () => {
      if (disabled) return
      setValue('')
      onSearch?.('')
      inputRef.current?.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || filteredOptions.length === 0) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true) }
        return
      }
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0))
          break
        case 'ArrowUp':
          e.preventDefault()
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1))
          break
        case 'Enter':
          e.preventDefault()
          if (highlightedIndex >= 0) {
            const option = filteredOptions[highlightedIndex]
            if (option) handleSelect(option)
          }
          break
        case 'Escape':
          e.preventDefault()
          setOpen(false)
          break
      }
    }

    // 点击外部关闭下拉菜单
    useEffect(() => {
      if (!isOpen) return
      const handleClickOutside = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node) &&
            dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen, setOpen])

    const showClear = allowClear && currentValue.length > 0 && !disabled
    const showDropdown = isOpen && !disabled && currentValue.length >= minSearchLength

    return (
      <div className={cn('sui-auto-complete', 'relative w-full', className)}>
        {prefix && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{prefix}</span>}
        <input
          ref={(node) => {
            ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node
            if (typeof ref === 'function') ref(node)
            else if (ref) ref.current = node
          }}
          type="text" value={currentValue} onChange={handleInputChange}
          onFocus={() => { if (!disabled && currentValue.length >= minSearchLength && filteredOptions.length > 0) setOpen(true) }}
          onKeyDown={handleKeyDown} disabled={disabled} placeholder={placeholder}
          aria-invalid={status === 'error' || undefined} aria-expanded={isOpen}
          aria-autocomplete="list" role="combobox"
          className={cn(autoCompleteVariants({ status }), prefix && 'pl-9', (suffix || showClear) && 'pr-9')}
          {...rest}
        />
        {(suffix || showClear) && (
          <span className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
            {showClear && <button type="button" onClick={handleClear} aria-label="清空" className="hover:text-foreground"><X className="h-4 w-4" /></button>}
            {suffix}
          </span>
        )}
        {showDropdown && (
          <AutoCompleteDropdown options={filteredOptions} currentValue={currentValue} highlightedIndex={highlightedIndex}
            notFoundContent={notFoundContent} maxDropdownHeight={maxDropdownHeight} dropdownClassName={dropdownClassName}
            optionRender={optionRender} onSelect={handleSelect} onHighlight={setHighlightedIndex} dropdownRef={dropdownRef} />
        )}
      </div>
    )
  },
)

AutoComplete.displayName = 'AutoComplete'
