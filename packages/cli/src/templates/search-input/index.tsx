import { forwardRef, useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Search, X, Clock, Trash2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { searchInputVariants, searchDropdownVariants, searchOptionVariants } from './search-input-variants'
import { HighlightText } from './highlight-text'
import { getHistory, setHistory, removeHistory, clearHistory } from './search-input-utils'
import type { SearchInputProps, SearchSuggestion } from './types'

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const {
      className, status, value: controlledValue, defaultValue = '',
      onChange, onSearch, suggestions, showHistory = true, maxHistory = 10,
      highlightMatch = true, placeholder = '搜索...', allowClear = true,
      disabled = false, emptyText = '无搜索结果', storageKey = 'simplui-search-history',
      ...rest
    } = props

    const inputRef = useRef<HTMLInputElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [open, setOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [suggestionItems, setSuggestionItems] = useState<SearchSuggestion[]>([])
    const [historyList, setHistoryList] = useState<string[]>(() => getHistory(storageKey, maxHistory))
    const [loading, setLoading] = useState(false)

    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue
    const showClear = allowClear && currentValue.length > 0 && !disabled

    const displayItems = useMemo<SearchSuggestion[]>(() => {
      const items: SearchSuggestion[] = []
      if (currentValue && suggestionItems.length > 0) items.push(...suggestionItems)
      if (showHistory && historyList.length > 0) {
        const filtered = currentValue
          ? historyList.filter((h) => h.toLowerCase().includes(currentValue.toLowerCase()))
          : historyList
        for (const h of filtered) {
          if (!items.some((i) => i.text === h)) items.push({ text: h, isHistory: true })
        }
      }
      return items
    }, [suggestionItems, historyList, showHistory, currentValue])

    const setValue = useCallback((v: string) => {
      if (!isControlled) setInternalValue(v)
      onChange?.(v)
    }, [isControlled, onChange])

    const doSearch = useCallback((v: string) => {
      if (!v.trim()) return
      onSearch?.(v)
      if (showHistory) {
        setHistory(storageKey, maxHistory, v)
        setHistoryList(getHistory(storageKey, maxHistory))
      }
      setOpen(false)
    }, [onSearch, showHistory, storageKey, maxHistory])

    const fetchSuggestions = useCallback((v: string) => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (!v || !suggestions) { setSuggestionItems([]); setLoading(false); return }
      timerRef.current = setTimeout(() => {
        if (Array.isArray(suggestions)) {
          setSuggestionItems(
            suggestions.filter((s) => s.toLowerCase().includes(v.toLowerCase()))
              .map((text) => ({ text, isHistory: false })),
          )
        } else {
          setLoading(true)
          suggestions(v)
            .then((r) => setSuggestionItems(r.map((text) => ({ text, isHistory: false }))))
            .catch(() => setSuggestionItems([]))
            .finally(() => setLoading(false))
        }
      }, 300)
    }, [suggestions])

    useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value
      setValue(v); setHighlightedIndex(-1); fetchSuggestions(v)
      setOpen(v ? true : (showHistory && historyList.length > 0))
    }
    const handleSelect = (item: SearchSuggestion) => { setValue(item.text); doSearch(item.text); inputRef.current?.focus() }
    const handleClear = () => { if (disabled) return; setValue(''); setSuggestionItems([]); setHighlightedIndex(-1); inputRef.current?.focus() }
    const handleDeleteHistory = (e: React.MouseEvent, item: string) => { e.stopPropagation(); setHistoryList(removeHistory(storageKey, maxHistory, item)) }
    const handleClearHistory = (e: React.MouseEvent) => { e.stopPropagation(); clearHistory(storageKey); setHistoryList([]) }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') { e.preventDefault(); doSearch(currentValue); return }
      if (!open || displayItems.length === 0) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true) }
        return
      }
      if (e.key === 'ArrowDown') { e.preventDefault(); setHighlightedIndex((p) => p < displayItems.length - 1 ? p + 1 : 0) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlightedIndex((p) => p > 0 ? p - 1 : displayItems.length - 1) }
      else if (e.key === 'Escape') { e.preventDefault(); setOpen(false) }
    }

    useEffect(() => {
      if (!open) return
      const handler = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node) &&
          dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpen(false)
      }
      document.addEventListener('mousedown', handler)
      return () => document.removeEventListener('mousedown', handler)
    }, [open])

    const showDropdown = open && !disabled && displayItems.length > 0

    return (
      <div className={cn('sui-search-input', 'relative w-full', className)}>
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search className="h-4 w-4" />
        </span>
        <input
          ref={(node) => {
            ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node
            if (typeof ref === 'function') ref(node); else if (ref) ref.current = node
          }}
          type="text" value={currentValue} onChange={handleInputChange}
          onFocus={() => { if (!disabled && (currentValue || (showHistory && historyList.length > 0))) setOpen(true) }}
          onKeyDown={handleKeyDown} disabled={disabled} placeholder={placeholder}
          aria-expanded={open} aria-autocomplete="list" role="combobox"
          className={cn(searchInputVariants({ status }), showClear && 'pr-9')} {...rest}
        />
        {showClear && (
          <span className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
            <button type="button" onClick={handleClear} aria-label="清空" className="hover:text-foreground"><X className="h-4 w-4" /></button>
          </span>
        )}
        {showDropdown && (
          <div ref={dropdownRef} role="listbox" className={cn(searchDropdownVariants())}>
            {showHistory && historyList.length > 0 && !currentValue && (
              <div className="flex items-center justify-between px-3 py-1.5 text-xs text-muted-foreground border-b border-border">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />搜索历史</span>
                <button type="button" className="hover:text-danger transition-colors" onClick={handleClearHistory}><Trash2 className="h-3 w-3" /></button>
              </div>
            )}
            {displayItems.map((item, index) => (
              <div key={`${item.text}-${index}`} role="option" aria-selected={index === highlightedIndex}
                className={cn(searchOptionVariants({ highlighted: index === highlightedIndex, isHistory: item.isHistory }))}
                onClick={() => handleSelect(item)} onMouseEnter={() => setHighlightedIndex(index)}>
                <span className="flex items-center gap-2 truncate">
                  {item.isHistory && <Clock className="h-3.5 w-3.5 shrink-0" />}
                  {highlightMatch && currentValue && !item.isHistory
                    ? <HighlightText text={item.text} keyword={currentValue} /> : item.text}
                </span>
                {item.isHistory && (
                  <button type="button" className="shrink-0 text-muted-foreground hover:text-danger transition-colors"
                    onClick={(e) => handleDeleteHistory(e, item.text)} aria-label="删除此条历史"><X className="h-3 w-3" /></button>
                )}
              </div>
            ))}
            {loading && <div className="px-3 py-2 text-sm text-muted-foreground animate-pulse">搜索中...</div>}
          </div>
        )}
      </div>
    )
  },
)

SearchInput.displayName = 'SearchInput'

export type { SearchInputProps, SearchSuggestion } from './types'
export { searchInputVariants } from './search-input-variants'
