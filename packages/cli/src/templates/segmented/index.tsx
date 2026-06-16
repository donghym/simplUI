import React, { forwardRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { segmentedVariants, segmentedItemVariants } from './segmented-variants'
import type { SegmentedProps, SegmentedOption } from './types'

export type { SegmentedProps, SegmentedOption }
export { segmentedVariants, segmentedItemVariants }

/** 判断选项是否为字符串类型 */
function isStringOption(option: string | SegmentedOption): option is string {
  return typeof option === 'string'
}

/** 获取选项的值 */
function getOptionValue(option: string | SegmentedOption): string {
  return isStringOption(option) ? option : option.value
}

/** 获取选项的标签 */
function getOptionLabel(option: string | SegmentedOption): React.ReactNode {
  return isStringOption(option) ? option : (option.label ?? option.value)
}

/** 获取选项的禁用状态 */
function getOptionDisabled(option: string | SegmentedOption): boolean {
  return isStringOption(option) ? false : !!option.disabled
}

/** 获取选项的图标 */
function getOptionIcon(option: string | SegmentedOption): React.ReactNode | undefined {
  return isStringOption(option) ? undefined : option.icon
}

/**
 * Segmented 分段控制器组件
 *
 * 用于展示多个选项并允许用户选择其中一项。
 *
 * ### 何时使用
 * - 用于在多个备选项中进行单选
 * - 切换选项时，关联区域的内容会发生变化
 *
 * ### 示例
 * ```tsx
 * <Segmented options={['Daily', 'Weekly', 'Monthly']} />
 * ```
 */
export const Segmented = forwardRef<HTMLDivElement, SegmentedProps>(({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  componentSize = 'middle',
  style,
  className,
}, ref) => {
  const isControlled = controlledValue !== undefined
  const firstValue = options.length > 0 && options[0] ? getOptionValue(options[0]) : ''
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstValue)

  const selectedValue = isControlled ? controlledValue : internalValue

  const handleSelect = useCallback(
    (val: string) => {
      if (disabled) return
      if (!isControlled) setInternalValue(val)
      onChange?.(val)
    },
    [disabled, isControlled, onChange],
  )

  const sizeClass = componentSize === 'large' ? 'large' : componentSize === 'small' ? 'small' : 'middle'

  return (
    <div
      ref={ref}
      className={cn(
        segmentedVariants(),
        disabled && 'sui-segmented--disabled',
        className,
      )}
      style={style}
    >
      {options.map((option) => {
        const val = getOptionValue(option)
        const label = getOptionLabel(option)
        const optDisabled = getOptionDisabled(option)
        const icon = getOptionIcon(option)
        const isActive = selectedValue === val

        return (
          <button
            key={val}
            type="button"
            className={cn(
              segmentedItemVariants({ active: isActive, disabled: disabled || optDisabled, size: sizeClass }),
            )}
            onClick={() => !optDisabled && handleSelect(val)}
            disabled={disabled || optDisabled}
          >
            {icon}
            {label}
          </button>
        )
      })}
    </div>
  )
})

Segmented.displayName = 'Segmented'