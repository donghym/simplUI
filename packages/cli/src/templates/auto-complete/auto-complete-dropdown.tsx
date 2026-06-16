import { AutoCompleteOption, AutoCompleteOptionRenderProps } from './types'
import { cn } from '../lib/utils'
import { autoCompleteOptionVariants, autoCompleteDropdownVariants } from './auto-complete-variants'
import { ReactNode } from 'react'

interface AutoCompleteDropdownProps {
  options: AutoCompleteOption[]
  currentValue: string
  highlightedIndex: number
  notFoundContent: ReactNode
  maxDropdownHeight: number
  dropdownClassName?: string
  optionRender?: (props: AutoCompleteOptionRenderProps) => ReactNode
  onSelect: (option: AutoCompleteOption) => void
  onHighlight: (index: number) => void
  dropdownRef: React.RefObject<HTMLDivElement>
}

/** 下拉菜单组件 */
export function AutoCompleteDropdown({
  options,
  currentValue,
  highlightedIndex,
  notFoundContent,
  maxDropdownHeight,
  dropdownClassName,
  optionRender,
  onSelect,
  onHighlight,
  dropdownRef,
}: AutoCompleteDropdownProps) {
  return (
    <div
      ref={dropdownRef}
      role="listbox"
      style={{ maxHeight: maxDropdownHeight } /* 动态最大高度，允许保留 */}
      className={cn(autoCompleteDropdownVariants({ open: true }), dropdownClassName)}
    >
      {options.length === 0 ? (
        <div className="px-3 py-2 text-sm text-muted-foreground">{notFoundContent}</div>
      ) : (
        options.map((option, index) => {
          const isSelected = option.value === currentValue
          const isHighlighted = index === highlightedIndex
          const renderProps: AutoCompleteOptionRenderProps = {
            option,
            index,
            isSelected,
            isHighlighted,
          }
          return (
            <div
              key={option.value}
              role="option"
              aria-selected={isSelected}
              aria-disabled={option.disabled}
              className={cn(
                autoCompleteOptionVariants({
                  highlighted: isHighlighted,
                  selected: isSelected,
                  disabled: option.disabled,
                }),
              )}
              onClick={() => onSelect(option)}
              onMouseEnter={() => onHighlight(index)}
            >
              {optionRender ? optionRender(renderProps) : option.label ?? option.value}
            </div>
          )
        })
      )}
    </div>
  )
}
