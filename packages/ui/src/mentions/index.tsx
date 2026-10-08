import React, { forwardRef, useState, useCallback, useRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import { mentionsVariants, mentionsTextareaVariants, mentionsDropdownVariants, mentionsOptionVariants } from './mentions-variants'
import type { MentionsProps, MentionsOptionProps } from './types'

export type { MentionsProps, MentionsOptionProps }
export { mentionsVariants, mentionsTextareaVariants, mentionsDropdownVariants, mentionsOptionVariants }

/**
 * Mentions 提及组件
 * 用于在输入中提及某人或某事，类似社交媒体的 @ 功能。
 */
export const Mentions = forwardRef<HTMLDivElement, MentionsProps>(({
  prefix = '@',
  options,
  value: controlledValue,
  defaultValue = '',
  onChange,
  onSelect,
  disabled = false,
  placeholder,
  rows = 3,
  style,
  className,
  ...rest
}, ref) => {
  const prefixes = useMemo(() => (Array.isArray(prefix) ? prefix : [prefix]), [prefix])
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [filtered, setFiltered] = useState<MentionsOptionProps[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const mentionStartRef = useRef<number | null>(null)
  const activePrefixRef = useRef<string>('')

  const value = isControlled ? controlledValue : internalValue

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return
    const newValue = e.target.value
    if (!isControlled) setInternalValue(newValue)
    onChange?.(newValue)

    const cursorPos = e.target.selectionStart
    const textBeforeCursor = newValue.slice(0, cursorPos)
    let foundPrefix = ''
    let startIndex = -1
    for (const p of prefixes) {
      const idx = textBeforeCursor.lastIndexOf(p)
      if (idx !== -1 && idx > startIndex) {
        const afterPrefix = textBeforeCursor.slice(idx + p.length)
        if (!afterPrefix.includes(' ')) { startIndex = idx; foundPrefix = p }
      }
    }

    if (startIndex !== -1 && foundPrefix) {
      const search = textBeforeCursor.slice(startIndex + foundPrefix.length).toLowerCase()
      const filteredOptions = options.filter(opt => !opt.disabled && (opt.value.toLowerCase().includes(search) || String(opt.label).toLowerCase().includes(search)))
      if (filteredOptions.length > 0) { setOpen(true); setFiltered(filteredOptions); setActiveIndex(0); mentionStartRef.current = startIndex; activePrefixRef.current = foundPrefix }
      else { setOpen(false) }
    } else { setOpen(false) }
  }, [isControlled, onChange, options, prefixes, disabled])

  const handleSelect = useCallback((option: MentionsOptionProps) => {
    if (mentionStartRef.current === null || !textareaRef.current) return
    const start = mentionStartRef.current
    const before = value.slice(0, start)
    const after = value.slice(textareaRef.current.selectionStart)
    const newValue = `${before}${activePrefixRef.current}${option.value} ${after}`
    if (!isControlled) setInternalValue(newValue)
    onChange?.(newValue)
    onSelect?.(option, activePrefixRef.current)
    setOpen(false)
    mentionStartRef.current = null
  }, [value, isControlled, onChange, onSelect])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!open) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(prev => (prev + 1) % filtered.length) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(prev => (prev - 1 + filtered.length) % filtered.length) }
    else if (e.key === 'Enter') { e.preventDefault(); const selected = filtered[activeIndex]; if (selected) handleSelect(selected) }
    else if (e.key === 'Escape') { setOpen(false) }
  }, [open, filtered, activeIndex, handleSelect])

  return (
    <div ref={ref} className={cn(mentionsVariants(), disabled && 'sui-mentions--disabled', className)} style={style}>
      <textarea ref={textareaRef} value={value} onChange={handleChange} onKeyDown={handleKeyDown} disabled={disabled} placeholder={placeholder} rows={rows}
        className={cn(mentionsTextareaVariants({ disabled }))} {...rest} />
      {open && filtered.length > 0 && (
        <div className={cn(mentionsDropdownVariants())}>
          {filtered.map((option, index) => (
            <div key={option.value} className={cn(mentionsOptionVariants({ active: index === activeIndex, disabled: option.disabled }))} onClick={() => handleSelect(option)}>
              {option.label ?? option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  )
})
Mentions.displayName = 'Mentions'