import {
  createContext, useContext, useState, useCallback, useRef, forwardRef, type FormEvent, type ReactNode,
} from 'react'
import { cn } from '../lib/utils'
import { proFormVariants, proFormGridVariants, proFormActionsVariants } from './pro-form-variants'
import type { ProFormProps, ProFormContextValue, ProFormRule } from './types'
import { ProFormText } from './pro-form-text'
import { ProFormSelect } from './pro-form-select'
import { ProFormList } from './pro-form-list'
import { Button } from '../button/index'

const ProFormContext = createContext<ProFormContextValue | null>(null)

/** 获取 ProForm 上下文 */
export function useProFormContext() {
  const ctx = useContext(ProFormContext)
  if (!ctx) throw new Error('ProForm 子组件必须在 ProForm 内使用')
  return ctx
}

/** ProForm 高阶表单组件 */
const ProForm = forwardRef<HTMLFormElement, ProFormProps>(({
  onFinish, initialValues = {}, layout = 'horizontal', grid = false,
  submitter = true, className, children, ...rest
}, ref) => {
  const [formValues, setFormValues] = useState<Record<string, unknown>>({ ...initialValues })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const rulesMapRef = useRef<Record<string, ProFormRule[]>>({})
  const depsMapRef = useRef<Record<string, string[]>>({})

  const validateSingleField = useCallback((name: string): string | undefined => {
    const rules = rulesMapRef.current[name]
    if (!rules || rules.length === 0) return undefined
    const value = formValues[name]
    for (const rule of rules) {
      if (rule.required && (value === undefined || value === null || value === '')) {
        const msg = rule.message || `${name} 为必填项`
        setErrors((prev) => ({ ...prev, [name]: msg }))
        return msg
      }
      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        const msg = rule.message || `${name} 格式不正确`
        setErrors((prev) => ({ ...prev, [name]: msg }))
        return msg
      }
      if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
        const msg = rule.message || `${name} 最少 ${rule.min} 个字符`
        setErrors((prev) => ({ ...prev, [name]: msg }))
        return msg
      }
      if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
        const msg = rule.message || `${name} 最多 ${rule.max} 个字符`
        setErrors((prev) => ({ ...prev, [name]: msg }))
        return msg
      }
    }
    setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
    return undefined
  }, [formValues])

  const validateFieldWithValues = useCallback((fieldName: string, values: Record<string, unknown>): string | undefined => {
    const rules = rulesMapRef.current[fieldName]
    if (!rules || rules.length === 0) return undefined
    const value = values[fieldName]
    for (const rule of rules) {
      if (rule.required && (value === undefined || value === null || value === '')) {
        const msg = rule.message || `${fieldName} 为必填项`
        setErrors((prev) => ({ ...prev, [fieldName]: msg }))
        return msg
      }
      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        const msg = rule.message || `${fieldName} 格式不正确`
        setErrors((prev) => ({ ...prev, [fieldName]: msg }))
        return msg
      }
      if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
        const msg = rule.message || `${fieldName} 最少 ${rule.min} 个字符`
        setErrors((prev) => ({ ...prev, [fieldName]: msg }))
        return msg
      }
      if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
        const msg = rule.message || `${fieldName} 最多 ${rule.max} 个字符`
        setErrors((prev) => ({ ...prev, [fieldName]: msg }))
        return msg
      }
    }
    setErrors((prev) => { const n = { ...prev }; delete n[fieldName]; return n })
    return undefined
  }, [])

  const setFieldValue = useCallback((name: string, value: unknown) => {
    setFormValues((prev) => {
      const next = { ...prev, [name]: value }
      // 在同步上下文中使用最新值校验依赖字段
      Object.entries(depsMapRef.current).forEach(([depName, deps]) => {
        if (deps.includes(name)) validateFieldWithValues(depName, next)
      })
      return next
    })
    setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }, [validateFieldWithValues])

  const validateAllFields = useCallback((): boolean => {
    let hasError = false
    Object.keys(rulesMapRef.current).forEach((name) => {
      if (validateSingleField(name)) hasError = true
    })
    return !hasError
  }, [validateSingleField])

  const registerDependencies = useCallback((name: string, deps: string[]) => {
    depsMapRef.current[name] = deps
  }, [])

  const registerRules = useCallback((name: string, rules: ProFormRule[]) => {
    rulesMapRef.current[name] = rules
  }, [])

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!onFinish) return
    if (!validateAllFields()) return
    setSubmitting(true)
    try { await onFinish(formValues) } finally { setSubmitting(false) }
  }, [onFinish, formValues, validateAllFields])

  const handleReset = useCallback(() => {
    setFormValues({ ...initialValues })
    setErrors({})
  }, [initialValues])

  const contextValue: ProFormContextValue = {
    formValues, errors, setFieldValue, validateField: validateSingleField,
    layout, registerDependencies, registerRules,
  }

  const gridConfig = grid === true
    ? { columns: 2 as const, gap: 16 }
    : grid === false ? null
      : { columns: Math.min(Math.max(grid.columns, 1), 4) as 1 | 2 | 3 | 4, gap: grid.gap ?? 16 }

  const submitterConfig = submitter === false ? null
    : submitter === true
      ? { submitText: '提交', resetText: '重置', showReset: true, render: undefined as ((props: { onSubmit: () => void; onSubmitting: boolean }) => ReactNode) | undefined }
      : { submitText: submitter.submitText ?? '提交', resetText: submitter.resetText ?? '重置', showReset: submitter.showReset ?? true, render: submitter.render }

  return (
    <ProFormContext.Provider value={contextValue}>
      <form ref={ref} className={cn(proFormVariants({ layout }), className)} onSubmit={handleSubmit} onReset={handleReset} {...rest}>
        {gridConfig
          ? <div className={cn(proFormGridVariants({ columns: gridConfig.columns, gap: gridConfig.gap as 8 | 12 | 16 | 20 | 24 | 32 }))}>{children}</div>
          : children}
        {submitterConfig && (
          <div className={cn(proFormActionsVariants({ layout }))}>
            {submitterConfig.render
              ? submitterConfig.render({ onSubmit: () => handleSubmit({ preventDefault: () => {} } as FormEvent<HTMLFormElement>), onSubmitting: submitting })
              : (<>
                <Button variant="primary" htmlType="submit" loading={submitting}>{submitterConfig.submitText}</Button>
                {submitterConfig.showReset && <Button variant="default" htmlType="reset">{submitterConfig.resetText}</Button>}
              </>)}
          </div>
        )}
      </form>
    </ProFormContext.Provider>
  )
})

ProForm.displayName = 'ProForm'

export default Object.assign(ProForm, { Text: ProFormText, Select: ProFormSelect, List: ProFormList })
export { ProForm, ProFormText, ProFormSelect, ProFormList }
export type { ProFormProps, ProFormTextProps, ProFormSelectProps, ProFormListProps, ProFormContextValue, ProFormRule } from './types'
