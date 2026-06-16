import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  cascaderVariants,
  cascaderDropdownVariants,
  cascaderColumnVariants,
  cascaderOptionVariants,
} from './cascader-variants'
import type { CascaderProps, CascaderOption, CascaderValue } from './types'

/** 根据路径获取选中的选项对象数组 */
function getSelectedOptions(options: CascaderOption[], value: CascaderValue): CascaderOption[] {
  const result: CascaderOption[] = []
  let currentOptions = options
  for (const val of value) {
    const found = currentOptions.find((opt) => opt.value === val)
    if (!found) break
    result.push(found)
    currentOptions = found.children || []
  }
  return result
}

export const Cascader = forwardRef<HTMLDivElement, CascaderProps>((props, ref) => {
  const {
    options, value: controlledValue, defaultValue = [], onChange, placeholder = '请选择',
    disabled, allowClear, status, open: controlledOpen, onOpenChange, defaultOpen = false,
    displayRender, className, dropdownClassName, notFoundContent = '无数据',
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const [internalValue, setInternalValue] = useState<CascaderValue>(defaultValue)
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const [activePath, setActivePath] = useState<CascaderValue>([])

  const isControlled = controlledValue !== undefined
  const isOpenControlled = controlledOpen !== undefined
  const currentValue = isControlled ? controlledValue : internalValue
  const isOpen = isOpenControlled ? controlledOpen : internalOpen

  const selectedOptions = getSelectedOptions(options, currentValue)
  const displayText = selectedOptions.length > 0
    ? displayRender
      ? displayRender(selectedOptions)
      : selectedOptions.map((opt) => opt.label).join(' / ')
    : placeholder

  const setOpen = useCallback((newOpen: boolean) => {
    if (!isOpenControlled) setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
    if (!newOpen) setActivePath([])
  }, [isOpenControlled, onOpenChange])

  const setValue = useCallback((newValue: CascaderValue, newSelectedOptions: CascaderOption[]) => {
    if (!isControlled) setInternalValue(newValue)
    onChange?.(newValue, newSelectedOptions)
  }, [isControlled, onChange])

  const handleOptionClick = (option: CascaderOption, level: number) => {
    if (option.disabled) return
    const newPath = [...activePath.slice(0, level), option.value]
    setActivePath(newPath)
    if (option.children && option.children.length > 0) {
      // 有子选项，继续展开下一列
    } else {
      // 叶子节点，完成选择
      const newSelectedOptions = getSelectedOptions(options, newPath)
      setValue(newPath, newSelectedOptions)
      setOpen(false)
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled) return
    setValue([], [])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(!isOpen)
    }
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // 点击外部关闭
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, setOpen])

  // 渲染列
  const renderColumn = (columnOptions: CascaderOption[], level: number) => (
    <div key={level} className={cn(cascaderColumnVariants(), 'max-h-64')}>
      {columnOptions.length === 0 ? (
        <div className="px-3 py-2 text-sm text-muted-foreground">{notFoundContent}</div>
      ) : (
        columnOptions.map((option) => {
          const isActive = activePath[level] === option.value || currentValue[level] === option.value
          return (
            <div
              key={option.value}
              role="option"
              aria-selected={isActive}
              className={cn(cascaderOptionVariants({ active: isActive, disabled: option.disabled }))}
              onClick={() => handleOptionClick(option, level)}
              onMouseEnter={() => !option.disabled && setActivePath((prev) => [...prev.slice(0, level), option.value])}
            >
              <span>{option.label}</span>
              {option.children && option.children.length > 0 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          )
        })
      )}
    </div>
  )

  // 构建列数据
  const columns: CascaderOption[][] = [options]
  const pathToUse = activePath.length > 0 ? activePath : currentValue
  for (let i = 0; i < pathToUse.length; i++) {
    const parentOptions = columns[i]
    if (!parentOptions) break
    const parentValue = pathToUse[i]
    const parent = parentOptions.find((opt) => opt.value === parentValue)
    if (parent?.children && parent.children.length > 0) {
      columns.push(parent.children)
    } else {
      break
    }
  }

  return (
    <div ref={containerRef} className={cn('sui-cascader', 'relative w-full', className)}>
      <div
        ref={ref}
        role="combobox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={cn(cascaderVariants({ status, open: isOpen }))}
        onClick={() => !disabled && setOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        <span className={cn(selectedOptions.length === 0 && 'text-muted-foreground')}>{displayText}</span>
        <span className="flex items-center gap-1">
          {allowClear && selectedOptions.length > 0 && !disabled && (
            <button type="button" onClick={handleClear} className="hover:text-foreground" aria-label="清空">
              <X className="h-4 w-4" />
            </button>
          )}
          <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
        </span>
      </div>
      {isOpen && (
        <div className={cn(cascaderDropdownVariants({ open: true }), dropdownClassName)}>
          {columns.map((col, idx) => renderColumn(col, idx))}
        </div>
      )}
    </div>
  )
})

Cascader.displayName = 'Cascader'

export type { CascaderProps, CascaderOption, CascaderValue } from './types'
export { cascaderVariants, cascaderDropdownVariants, cascaderColumnVariants, cascaderOptionVariants } from './cascader-variants'