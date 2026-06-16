import { createContext, useContext, useCallback, useRef, forwardRef, type FormEvent } from 'react'
import { cn } from '../lib/utils'
import { formVariants } from './form-variants'
import type { FormProps, FormLayout, LabelAlign } from './types'
import type { ResponsiveCol } from './responsive-col-types'

/** Form 上下文 */
interface FormContextValue {
  layout: FormLayout
  labelCol: ResponsiveCol
  wrapperCol: ResponsiveCol
  colon: boolean
  labelAlign: LabelAlign
  requiredMark: 'start' | 'end' | 'hide'
  registerField: (name: string, ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) => void
  getValues: () => Record<string, unknown>
}

export const FormContext = createContext<FormContextValue | null>(null)

export function useFormContext() {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('FormItem must be used within Form')
  return ctx
}

/** 字段注册表 */
interface FieldEntry {
  name: string
  ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
}

/**
 * Form 表单容器
 *
 * 样式对齐 antd Form：
 * - horizontal 模式：label 在左、控件在右，按 24 栅格分配列宽
 * - vertical 模式：label 在上、控件在下
 * - inline 模式：所有控件水平排列
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(({
  layout = 'vertical',
  labelCol = { span: 5 },
  wrapperCol = { span: 19 },
  colon = false,
  labelAlign = 'right',
  requiredMark = 'start',
  onSubmit,
  className,
  children,
  ...rest
}, ref) => {
  const fieldsRef = useRef<FieldEntry[]>([])

  const registerField = useCallback(
    (name: string, ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) => {
      if (ref === null) {
        // 卸载时从 fieldsRef 中移除该字段
        fieldsRef.current = fieldsRef.current.filter((f) => f.name !== name)
      } else {
        const existing = fieldsRef.current.find((f) => f.name === name)
        if (existing) {
          existing.ref = ref
        } else {
          fieldsRef.current.push({ name, ref })
        }
      }
    },
    [],
  )

  const getValues = useCallback(() => {
    const values: Record<string, unknown> = {}
    fieldsRef.current.forEach(({ name, ref }) => {
      if (!ref) return
      if ('checked' in ref && ref.type === 'checkbox') {
        values[name] = (ref as HTMLInputElement).checked
      } else {
        values[name] = ref.value
      }
    })
    return values
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(getValues())
  }

  return (
    <FormContext.Provider
      value={{ layout, labelCol, wrapperCol, colon, labelAlign, requiredMark, registerField, getValues }}
    >
      <form ref={ref} className={cn(formVariants({ layout }), className)} onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  )
})

Form.displayName = 'Form'