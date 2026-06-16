import React, { forwardRef, useState, useCallback, useRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import { cva } from 'class-variance-authority'
import type { MentionsProps, MentionsOptionProps } from './types'

export type { MentionsProps, MentionsOptionProps }

/* ─── cva 变体 ─── */
const mentionsVariants = cva('relative inline-block w-full')

const mentionsTextareaVariants = cva(
  'w-full rounded-md border border-[#d9d9d9] text-[#262626] text-sm leading-normal resize-y px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
  {
    variants: {
      disabled: {
        true: 'bg-[#f5f5f5] cursor-not-allowed',
        false: 'bg-white cursor-text',
      },
    },
    defaultVariants: { disabled: false },
  },
)

const mentionsDropdownVariants = cva(
  'absolute top-full left-0 mt-1 min-w-[120px] bg-white rounded-lg shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)] z-[1070] max-h-[250px] overflow-auto',
)

const mentionsOptionVariants = cva(
  'px-3 py-2 cursor-pointer',
  {
    variants: {
      active: { true: 'bg-[#e6f4ff]' },
      disabled: { true: 'text-[#bfbfbf]' },
    },
    compoundVariants: [
      { active: false, disabled: false, className: 'bg-transparent text-[#262626]' },
    ],
    defaultVariants: { active: false, disabled: false },
  },
)

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