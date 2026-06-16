import { forwardRef, useEffect, useRef, useState } from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '../lib/utils'
import { checkboxVariants } from './checkbox-variants'
import type { CheckboxProps } from './types'

/**
 * Checkbox 复选框组件
 *
 * 支持 checked / unchecked / indeterminate 三种状态。
 * 支持受控（checked）和非受控（defaultChecked）两种模式。
 * 点击复选框或其标签文本切换选中状态。
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    checked: checkedProp,
    defaultChecked = false,
    disabled,
    indeterminate = false,
    children,
    onChange,
    ...rest
  } = props

  const isControlled = checkedProp !== undefined
  const [innerChecked, setInnerChecked] = useState(defaultChecked)
  const checked = isControlled ? checkedProp : innerChecked

  // 内部 ref 用于设置原生 input 的 indeterminate 属性
  const innerRef = useRef<HTMLInputElement>(null)
  // 合并外部 ref 和内部 ref
  const inputRef = useCombinedRef<HTMLInputElement>(ref, innerRef)

  // 同步 indeterminate 属性到原生 input 元素
  // indeterminate 不是 HTML 属性，只能通过 DOM API 设置
  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  // 当 indeterminate 为 true 时，视觉框复用 checked 样式
  const visualChecked = indeterminate ? true : checked

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    // 半选状态时，点击应切换到未选中（而非由浏览器切换为选中）
    const nextChecked = indeterminate ? false : e.target.checked
    if (!isControlled) {
      setInnerChecked(nextChecked)
    }
    onChange?.(nextChecked)
  }

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // 半选状态时阻止浏览器默认切换行为，由 handleChange 统一处理
    if (indeterminate) {
      e.preventDefault()
    }
  }

  return (
    <label
      className={cn(
        'inline-flex items-center gap-2',
        !disabled && 'cursor-pointer',
        disabled && 'cursor-not-allowed pointer-events-none',
        className,
      )}
    >
      {/* 原生 input 隐藏，仅保留无障碍语义 */}
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        onClick={handleClick}
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={disabled || undefined}
        className="sr-only"
        {...rest}
      />
      {/* 视觉框层 — 显示选中/半选/未选中样式和图标 */}
      <span
        aria-hidden="true"
        className={checkboxVariants({ checked: visualChecked, disabled })}
      >
        {indeterminate ? (
          <Minus className="h-3 w-3" />
        ) : checked ? (
          <Check className="h-3 w-3" />
        ) : null}
      </span>
      {/* 标签文本 — 点击文本通过 label 关联自动触发 input */}
      {children && (
        <span
          className={cn(
            'text-sm select-none',
            disabled ? 'text-muted-foreground' : 'text-foreground',
          )}
        >
          {children}
        </span>
      )}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export type { CheckboxProps } from './types'
export { checkboxVariants } from './checkbox-variants'

/**
 * 合并外部 ref 和内部 ref 的辅助 Hook。
 *
 * 同时支持 callback ref 和 React.RefObject 两种形式，
 * 确保两个 ref 都指向同一个 DOM 元素。
 */
function useCombinedRef<T>(
  externalRef: React.ForwardedRef<T>,
  internalRef: React.RefObject<T | null>,
): React.RefCallback<T> {
  const prevRef = useRef<React.ForwardedRef<T>>(externalRef)
  const stableInternalRef = useRef(internalRef)
  stableInternalRef.current = internalRef

  return useRef((node: T | null) => {
    // 更新内部 ref
    if (stableInternalRef.current) {
      ;(stableInternalRef.current as React.MutableRefObject<T | null>).current = node
    }
    // 更新外部 ref
    if (typeof externalRef === 'function') {
      externalRef(node)
    } else if (externalRef !== null && externalRef !== undefined) {
      ;(externalRef as React.MutableRefObject<T | null>).current = node
    }
    prevRef.current = externalRef
  }).current
}