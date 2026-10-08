import {
  forwardRef,
  useState,
  useContext,
  createContext,
} from 'react'
import { cn } from '../lib/utils'
import {
  radioDotVariants,
  radioInnerVariants,
  radioGroupVariants,
} from './radio-variants'
import type { RadioProps, RadioGroupProps, RadioGroupContextValue } from './types'

/**
 * RadioGroup 上下文
 *
 * 通过 React Context 向子 Radio 传递 Group 级别的当前选中值和变更回调。
 * 未包裹在 Radio.Group 内时值为 null，Radio 使用自身独立状态。
 */
const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)
RadioGroupContext.displayName = 'RadioGroupContext'

/**
 * Radio 单选框组件
 *
 * 单选控件，在多个互斥选项中选择一个。
 * 在 Radio.Group 内时选中状态由 Group 统一管理；
 * 独立使用时为受控模式（checked）。
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    className,
    checked: checkedProp,
    disabled: disabledProp,
    value: radioValue,
    children,
    onChange,
    ...rest
  } = props

  // 读取 Group 上下文，判断是否在 Radio.Group 内
  const group = useContext(RadioGroupContext)
  const inGroup = group !== null

  // 在 Group 内时：checked 由 Group 的 selectedValue 决定
  // 独立使用时：由 checked（受控）prop 决定
  const checked = inGroup
    ? group.selectedValue === (radioValue ?? '')
    : (checkedProp ?? false)

  // 在 Group 内时：disabled 由 Group.disabled || 自身 disabled 决定
  const disabled = inGroup ? (group.disabled || disabledProp) : disabledProp

  const handleChange = () => {
    if (disabled) return
    // Radio 已选中时点击不触发任何操作（与原生 radio 行为一致）
    if (checked) return

    if (inGroup && radioValue !== undefined) {
      // 在 Group 内时，委托 Group 管理互斥选中状态
      group.onSelect(radioValue)
    } else {
      // 独立使用时，触发自身的 onChange
      onChange?.(true)
    }
  }

  return (
    <label
      className={cn(
        'sui-radio',
        'inline-flex items-center gap-2',
        !disabled && 'cursor-pointer',
        disabled && 'cursor-not-allowed pointer-events-none',
        className,
      )}
    >
      {/* 原生 radio input 隐藏，仅保留无障碍语义 */}
      <input
        ref={ref}
        type="radio"
        checked={checked}
        disabled={!!disabled}
        className="sr-only"
        onChange={handleChange}
        {...rest}
      />
      {/* 视觉圆圈 — 外圈边框样式 */}
      <span
        aria-hidden="true"
        className={radioDotVariants({ checked, disabled: !!disabled })}
      >
        {/* 内圆点 — 选中时显示实心蓝色圆点 */}
        <span className={radioInnerVariants({ checked })} />
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

Radio.displayName = 'Radio'

/**
 * RadioGroup 单选框组组件
 *
 * 统一管理子 Radio 的互斥选中状态。
 * 支持受控（value）和非受控（defaultValue）模式，
 * 支持通过 options 数组快速生成 Radio，
 * 支持 direction 控制水平/垂直排列方向。
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({
  className,
  value: valueProp,
  defaultValue,
  disabled = false,
  options,
  direction = 'vertical',
  onChange,
  children,
  ...rest
}, ref) => {
  const isControlled = valueProp !== undefined
  const [innerValue, setInnerValue] = useState<string | undefined>(defaultValue)

  const selectedValue = isControlled ? valueProp : innerValue

  const handleSelect = (val: string) => {
    if (val === selectedValue) return
    if (!isControlled) {
      setInnerValue(val)
    }
    onChange?.(val)
  }

  const ctxValue: RadioGroupContextValue = {
    selectedValue,
    onSelect: handleSelect,
    disabled,
  }

  return (
    <RadioGroupContext.Provider value={ctxValue}>
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          'sui-radio-group',
          radioGroupVariants({ direction }),
          className,
        )}
        {...rest}
      >
        {options
          ? options.map((opt) => (
              <Radio
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
              >
                {opt.label}
              </Radio>
            ))
          : children}
      </div>
    </RadioGroupContext.Provider>
  )
})

RadioGroup.displayName = 'RadioGroup'

export type { RadioProps, RadioGroupProps } from './types'
export { radioDotVariants, radioInnerVariants, radioGroupVariants } from './radio-variants'