import { forwardRef, useCallback } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { stepItemVariants, stepIconVariants } from './steps-variants'
import { stepContentVariants, stepTitleVariants, stepSubTitleVariants, stepDescriptionVariants } from './step-content-variants'
import { stepLineVariants } from './step-line-variants'
import { stepDotVariants, stepInlineIconVariants, stepOutlinedIconVariants } from './step-icon-variants'
import type { StepItemProps, StepStatus, StepsSize, StepsVariant, StepsDirection, LabelPlacement } from './types'

/** 步骤项组件 Props */
export interface StepItemInternalProps extends Omit<StepItemProps, 'onChange'> {
  index: number
  isLast: boolean
  direction: StepsDirection
  stepSize: StepsSize
  variant: StepsVariant
  progressDot: boolean
  labelPlacement: LabelPlacement
  percent?: number
  onChange?: (current: number) => void
}

/** 步骤项组件 */
export const StepItem = forwardRef<HTMLDivElement, StepItemInternalProps>((props, ref) => {
  const {
    className,
    title,
    description,
    icon,
    status = 'wait',
    subTitle,
    disabled = false,
    index,
    isLast,
    direction: itemDirection = 'horizontal',
    stepSize = 'default',
    variant = 'default',
    progressDot = false,
    labelPlacement = 'horizontal',
    percent,
    onChange,
    ...rest
  } = props

  const clickable = !!onChange && !disabled

  // 渲染图标
  const renderIcon = () => {
    if (icon) return icon
    if (progressDot) return <div className={cn(stepDotVariants({ status, stepSize }))} />
    if (variant === 'inline') {
      if (status === 'finish') return <Check className={stepSize === 'small' ? 'w-3 h-3' : 'w-4 h-4'} />
      if (status === 'process') return <Loader2 className={cn(stepSize === 'small' ? 'w-3 h-3' : 'w-4 h-4', 'animate-spin')} />
      return index + 1
    }
    if (variant === 'outlined') {
      if (status === 'finish') return <Check className={stepSize === 'small' ? 'w-3 h-3' : 'w-4 h-4'} />
      return index + 1
    }
    if (status === 'finish') return <Check className={stepSize === 'small' ? 'w-3 h-3' : 'w-4 h-4'} />
    if (status === 'process' && percent !== undefined) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-primary-500 overflow-hidden">
            <div className={cn('h-full bg-primary-500 transition-all', 'left-0')} style={{ width: `${percent}%` } /* 动态百分比，允许保留 */} />
          </div>
          <span className="relative z-10">{index + 1}</span>
        </div>
      )
    }
    return index + 1
  }

  // 获取图标样式
  const getIconClassName = () => {
    if (progressDot) return stepIconVariants({ status, stepSize, progressDot: true })
    if (variant === 'inline') return stepInlineIconVariants({ status, stepSize })
    if (variant === 'outlined') return stepOutlinedIconVariants({ status, stepSize })
    return stepIconVariants({ status, stepSize })
  }

  // 渲染连接线
  const renderLine = () => {
    if (isLast) return null
    const lineStatus: StepStatus = status === 'finish' ? 'finish' : status === 'error' ? 'error' : 'wait'
    if (itemDirection === 'vertical') {
      return (
        <div className={cn('absolute w-0.5', stepSize === 'small' ? 'left-3 top-8 h-[calc(100%-24px)]' : 'left-4 top-10 h-[calc(100%-32px)]')}>
          <div className={cn('h-full', stepLineVariants({ status: lineStatus }))} />
        </div>
      )
    }
    return (
      <div className={cn('absolute h-0.5', progressDot ? 'top-1 left-[calc(50%+8px)] right-0' : stepSize === 'small' ? 'top-3 left-[calc(50%+16px)] right-0' : 'top-4 left-[calc(50%+20px)] right-0')}>
        <div className={cn('h-full', stepLineVariants({ status: lineStatus }))} />
      </div>
    )
  }

  const handleClick = () => { if (clickable && !disabled) onChange?.(index) }
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (clickable && !disabled && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onChange?.(index) }
  }, [clickable, disabled, onChange, index])

  return (
    <div
      ref={ref}
      role={clickable ? 'button' : 'listitem'}
      tabIndex={clickable ? 0 : undefined}
      aria-current={status === 'process' ? 'step' : undefined}
      aria-disabled={disabled || undefined}
      aria-label={`Step ${index + 1}: ${title}${description ? ` - ${description}` : ''}`}
      className={cn(stepItemVariants({ direction: itemDirection, status, stepSize, variant, clickable, disabled, progressDot, labelPlacement }), className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {renderLine()}
      <div className={cn(getIconClassName())}>{renderIcon()}</div>
      <div className={cn(stepContentVariants({ direction: itemDirection, stepSize, progressDot, labelPlacement }))}>
        <div className="flex items-center justify-center whitespace-nowrap">
          <div className={cn(stepTitleVariants({ status, stepSize }))}>{title}</div>
          {subTitle && <div className={cn(stepSubTitleVariants({ status }))}>{subTitle}</div>}
        </div>
        {description && <div className={cn(stepDescriptionVariants({ status, stepSize }))}>{description}</div>}
      </div>
    </div>
  )
})
StepItem.displayName = 'StepItem'