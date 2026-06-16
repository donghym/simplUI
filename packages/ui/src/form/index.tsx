import { createContext, useContext, useCallback, useRef, forwardRef, type FormEvent } from 'react'
import { cn } from '../lib/utils'
import { formVariants, formItemVariants } from './form-variants'
import { VALIDATE_COLORS, VALIDATE_BORDER, RequiredMark, normalizeCol } from './form-utils'
import type {
  FormProps,
  FormItemProps,
  FormLayout,
  ValidateStatus,
  LabelAlign,
} from './types'
import type { ResponsiveCol, ColSpan } from './responsive-col-types'

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

const FormContext = createContext<FormContextValue | null>(null)

function useFormContext() {
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
const Form = forwardRef<HTMLFormElement, FormProps>(({
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

/**
 * FormItem 表单项
 *
 * 提供标签、必填标记、校验反馈，布局遵循 antd Form 规范。
 */
const FormItem = forwardRef<HTMLDivElement, FormItemProps>(({
  label,
  name,
  required = false,
  validateStatus = '',
  help,
  extra,
  labelCol,
  wrapperCol,
  className,
  children,
  ...rest
}, ref) => {
  const { layout, labelCol: formLabelCol, wrapperCol: formWrapperCol, colon, labelAlign, requiredMark } =
    useFormContext()

  const resolvedLabelCol = normalizeCol((labelCol ?? formLabelCol) as ResponsiveCol | undefined, 8)
  const resolvedWrapperCol = normalizeCol((wrapperCol ?? formWrapperCol) as ResponsiveCol | undefined, 16)

  // 24 栅格宽度（百分比）
  const labelColStyle = { width: `${(resolvedLabelCol.span / 24) * 100}%` }
  const wrapperColStyle = {
    width: `${(resolvedWrapperCol.span / 24) * 100}%`,
    maxWidth: `${(resolvedWrapperCol.span / 24) * 100}%`,
  }

  const showRequired = required && requiredMark !== 'hide'
  const requiredNode = showRequired ? <RequiredMark /> : null

  // label 容器（horizontal 时为右侧对齐，vertical/inline 时为上对齐）
  const labelClass =
    layout === 'horizontal'
      ? cn(
          'shrink-0 self-start pt-1 text-sm text-foreground flex items-center',
          labelAlign === 'right' ? 'justify-end pr-3' : 'justify-start pr-3',
        )
      : 'text-sm text-foreground mb-1.5 flex items-center'

  // 控件容器
  const wrapperClass = layout === 'horizontal' ? 'flex-1 min-w-0' : 'w-full'

  return (
    <div ref={ref} className={cn(formItemVariants({ layout }), className)} {...rest}>
      {label !== undefined && label !== null && (
        <label
          className={labelClass}
          style={layout === 'horizontal' ? labelColStyle : undefined /* 24栅格百分比宽度，运行时计算 */}
          htmlFor={name}
        >
          {requiredMark === 'start' && requiredNode}
          <span>{label}</span>
          {colon && <span className="ml-0.5">:</span>}
          {requiredMark === 'end' && requiredNode}
        </label>
      )}
      <div
        className={cn(wrapperClass, layout === 'horizontal' ? '' : 'w-full')}
        style={layout === 'horizontal' ? wrapperColStyle : undefined /* 24栅格百分比宽度，运行时计算 */}
      >
        <div className={cn('min-w-0', VALIDATE_BORDER[validateStatus])}>{children}</div>
        {extra && <div className="text-xs text-muted-foreground mt-1">{extra}</div>}
        {help && (
          <div
            className={cn(
              'text-xs mt-1',
              VALIDATE_COLORS[validateStatus] || 'text-muted-foreground',
            )}
          >
            {help}
          </div>
        )}
      </div>
    </div>
  )
})

FormItem.displayName = 'FormItem'

export { Form, FormItem }
export type {
  FormProps,
  FormItemProps,
  FormLayout,
  ValidateStatus,
  LabelAlign,
  ResponsiveCol,
  ColSpan,
}
export { formVariants, formItemVariants } from './form-variants'

export default Object.assign(Form, { Item: FormItem })
