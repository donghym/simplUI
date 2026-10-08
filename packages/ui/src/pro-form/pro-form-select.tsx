import { forwardRef, useEffect } from 'react'
import { cn } from '../lib/utils'
import { proFormItemVariants } from './pro-form-variants'
import { useProFormContext } from './index'
import { Select } from '../select/index'
import type { ProFormSelectProps } from './types'

/** ProFormSelect 下拉选择表单项 */
export const ProFormSelect = forwardRef<HTMLDivElement, ProFormSelectProps>(({
  name,
  label,
  rules = [],
  dependencies = [],
  hidden = false,
  placeholder,
  disabled = false,
  options,
}, ref) => {
  const { formValues, errors, setFieldValue, layout, registerDependencies, registerRules } = useProFormContext()

  // 注册校验规则和依赖
  useEffect(() => {
    registerRules(name, rules)
  }, [name, rules, registerRules])

  useEffect(() => {
    if (dependencies.length > 0) {
      registerDependencies(name, dependencies)
    }
  }, [name, dependencies, registerDependencies])

  // 判断是否隐藏
  const isHidden = typeof hidden === 'function' ? hidden(formValues) : hidden
  if (isHidden) return null

  const value = formValues[name] as string | undefined
  const error = errors[name]
  const isRequired = rules.some((r) => r.required)

  // 将选项值统一转为 string
  const stringOptions = options.map((opt) => ({
    label: opt.label,
    value: String(opt.value),
  }))

  return (
    <div ref={ref} className={cn(proFormItemVariants({ layout }))}>
      {label !== undefined && (
        <label className={cn(
          'text-sm text-foreground flex items-center',
          layout === 'horizontal'
            ? 'shrink-0 self-start pt-1 justify-end pr-3'
            : 'mb-1.5',
        )} htmlFor={name}
        >
          {isRequired && <span className="text-danger-500 mr-1">*</span>}
          <span>{label}</span>
        </label>
      )}
      <div className={cn(layout === 'horizontal' ? 'flex-1 min-w-0' : 'w-full')}>
        <Select
          id={name}
          value={value ?? ''}
          placeholder={placeholder}
          disabled={disabled}
          status={error ? 'error' : undefined}
          options={stringOptions}
          onChange={(val: string) => {
            setFieldValue(name, val)
          }}
        />
        {error && <div className="text-xs text-danger-500 mt-1">{error}</div>}
      </div>
    </div>
  )
})

ProFormSelect.displayName = 'ProFormSelect'
