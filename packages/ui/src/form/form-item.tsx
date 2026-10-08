import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { formItemVariants } from './form-variants'
import { VALIDATE_COLORS, VALIDATE_BORDER, RequiredMark, normalizeCol } from './form-utils'
import { useFormContext } from './form'
import type { FormItemProps } from './types'
import type { ResponsiveCol } from './responsive-col-types'

/**
 * FormItem 表单项
 *
 * 提供标签、必填标记、校验反馈，布局遵循 antd Form 规范。
 */
export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(({
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

  // label 容器（horizontal 时水平对齐由 labelAlign 控制，默认右侧对齐；vertical/inline 时为上对齐）
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