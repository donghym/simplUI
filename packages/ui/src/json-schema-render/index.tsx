import { forwardRef, useState, useCallback, useMemo } from 'react'
import { cn } from '../lib/utils'
import { jsonSchemaRenderVariants, fieldGroupVariants, fieldLabelVariants, fieldErrorVariants } from './json-schema-render-variants'
import type { JsonSchemaRenderProps, SchemaField } from './types'

/** 校验单个字段，返回错误信息或空字符串 */
function validateField(field: SchemaField, value: unknown): string {
  if (field.required && (value === undefined || value === null || value === '')) {
    return `${field.label}为必填项`
  }
  if (value === undefined || value === null || value === '') return ''

  if (field.type === 'string' || field.type === 'textarea') {
    const str = String(value)
    if (field.min !== undefined && str.length < field.min) return `${field.label}最少${field.min}个字符`
    if (field.max !== undefined && str.length > field.max) return `${field.label}最多${field.max}个字符`
    if (field.pattern) {
      const re = new RegExp(field.pattern)
      if (!re.test(str)) return field.patternMessage ?? `${field.label}格式不正确`
    }
  }

  if (field.type === 'number') {
    const num = Number(value)
    if (Number.isNaN(num)) return `${field.label}必须为数字`
    if (field.min !== undefined && num < field.min) return `${field.label}不能小于${field.min}`
    if (field.max !== undefined && num > field.max) return `${field.label}不能大于${field.max}`
  }

  return ''
}

/** 从 schema 和 initialValues 构建初始值 */
function buildInitialValues(schema: SchemaField[], initialValues?: Record<string, unknown>): Record<string, unknown> {
  const values: Record<string, unknown> = {}
  for (const field of schema) {
    values[field.name] = initialValues?.[field.name] ?? field.defaultValue ?? getEmptyValue(field.type)
  }
  return values
}

function getEmptyValue(type: SchemaField['type']): unknown {
  switch (type) {
    case 'boolean': return false
    case 'number': return ''
    case 'multi-select': return []
    default: return ''
  }
}

export const JsonSchemaRender = forwardRef<HTMLFormElement, JsonSchemaRenderProps>((props, ref) => {
  const {
    className,
    schema,
    initialValues: initialValuesProp,
    onSubmit,
    onChange,
    submitText = '提交',
    showReset = true,
    resetText = '重置',
    layout = 'vertical',
    ...rest
  } = props

  const initVals = useMemo(() => buildInitialValues(schema, initialValuesProp), [schema, initialValuesProp])
  const [values, setValues] = useState<Record<string, unknown>>(initVals)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateValue = useCallback((name: string, value: unknown) => {
    setValues((prev) => {
      const next = { ...prev, [name]: value }
      // 清除该字段的错误
      setErrors((errs) => { const e = { ...errs }; delete e[name]; return e })
      onChange?.(next)
      return next
    })
  }, [onChange])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    for (const field of schema) {
      const err = validateField(field, values[field.name])
      if (err) newErrors[field.name] = err
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      onSubmit?.(values)
    }
  }, [schema, values, onSubmit])

  const handleReset = useCallback(() => {
    setValues(buildInitialValues(schema, initialValuesProp))
    setErrors({})
  }, [schema, initialValuesProp])

  return (
    <form ref={ref} className={cn(jsonSchemaRenderVariants({ layout }), className)} onSubmit={handleSubmit} onReset={handleReset} {...rest}>
      <div className="flex flex-col gap-4">
        {schema.map((field) => (
          <div key={field.name} className={fieldGroupVariants({ layout })}>
            <label className={fieldLabelVariants({ layout })} htmlFor={`jsr-${field.name}`}>
              {field.label}
              {field.required && <span className="ml-0.5 text-danger-500">*</span>}
            </label>
            <div className="flex-1 flex flex-col gap-0.5">
              {renderControl(field, values[field.name], (v) => updateValue(field.name, v))}
              {field.description && <span className="text-xs text-muted-foreground">{field.description}</span>}
              {errors[field.name] && <span className={fieldErrorVariants()}>{errors[field.name]}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        <button type="submit" className="rounded-md bg-primary-500 px-4 py-2 text-sm text-white hover:bg-primary-600 transition-colors">
          {submitText}
        </button>
        {showReset && (
          <button type="button" className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors" onClick={handleReset}>
            {resetText}
          </button>
        )}
      </div>
    </form>
  )
})

/** 渲染表单控件 */
function renderControl(field: SchemaField, value: unknown, onChange: (v: unknown) => void) {
  const disabled = field.disabled ?? false
  const baseCls = 'h-8 w-full rounded-md border border-border bg-white px-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed'

  switch (field.type) {
    case 'string':
      return <input id={`jsr-${field.name}`} className={baseCls} placeholder={field.placeholder} value={String(value ?? '')} disabled={disabled} onChange={(e) => onChange(e.target.value)} />
    case 'number':
      return <input id={`jsr-${field.name}`} type="number" className={baseCls} placeholder={field.placeholder} value={value === '' ? '' : Number(value)} disabled={disabled} onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))} />
    case 'textarea':
      return <textarea id={`jsr-${field.name}`} className="w-full rounded-md border border-border bg-white px-2 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed" placeholder={field.placeholder} rows={3} value={String(value ?? '')} disabled={disabled} onChange={(e) => onChange(e.target.value)} />
    case 'boolean':
      return <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={Boolean(value)} disabled={disabled} onChange={(e) => onChange(e.target.checked)} /> {field.placeholder ?? '是'}</label>
    case 'select':
      return (
        <select id={`jsr-${field.name}`} className={baseCls} value={String(value ?? '')} disabled={disabled} onChange={(e) => onChange(e.target.value)}>
          <option value="">{field.placeholder ?? '请选择'}</option>
          {field.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      )
    case 'multi-select':
      return (
        <div className="flex flex-col gap-1">
          {field.options?.map((o) => {
            const selected = Array.isArray(value) ? (value as string[]).includes(o.value) : false
            return (
              <label key={o.value} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={selected} disabled={disabled} onChange={(e) => {
                  const arr = Array.isArray(value) ? [...value as string[]] : []
                  if (e.target.checked) arr.push(o.value)
                  else { const idx = arr.indexOf(o.value); if (idx > -1) arr.splice(idx, 1) }
                  onChange(arr)
                }} />
                {o.label}
              </label>
            )
          })}
        </div>
      )
    case 'date':
      return <input id={`jsr-${field.name}`} type="date" className={baseCls} value={String(value ?? '')} disabled={disabled} onChange={(e) => onChange(e.target.value)} />
    default:
      return null
  }
}

JsonSchemaRender.displayName = 'JsonSchemaRender'

export type { JsonSchemaRenderProps, SchemaField } from './types'
export { jsonSchemaRenderVariants } from './json-schema-render-variants'
