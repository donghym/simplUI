import { forwardRef, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  stepFormVariants,
  stepFormIndicatorVariants,
  stepFormContentVariants,
  stepFormActionsVariants,
} from './step-form-variants'
import type { StepFormProps, StepFormStep } from './types'

/** 渲染步骤指示器 */
const renderStepIndicator = (
  steps: StepFormStep[],
  current: number,
) => (
  <div className={stepFormIndicatorVariants()}>
    {steps.map((step, index) => {
      const isCompleted = index < current
      const isCurrent = index === current
      return (
        <div key={index} className="flex items-center flex-1 last:flex-initial">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'flex items-center justify-center rounded-full w-7 h-7 text-xs font-medium transition-colors duration-200',
                isCompleted && 'bg-primary-500 text-white',
                isCurrent && 'bg-primary-500 text-white ring-2 ring-primary-200',
                !isCompleted && !isCurrent && 'bg-muted text-muted-foreground',
              )}
            >
              {isCompleted ? <Check size={14} /> : index + 1}
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  'text-sm font-medium',
                  isCurrent && 'text-foreground',
                  !isCurrent && 'text-muted-foreground',
                )}
              >
                {step.title}
              </span>
              {step.description && (
                <span className="text-xs text-muted-foreground">{step.description}</span>
              )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                'flex-1 h-px mx-3',
                index < current ? 'bg-primary-500' : 'bg-border',
              )}
            />
          )}
        </div>
      )
    })}
  </div>
)

/** 分步表单组件 */
export const StepForm = forwardRef<HTMLDivElement, StepFormProps>(
  (props, ref) => {
    const {
      className,
      steps,
      current: controlledCurrent,
      onStepChange,
      onFinish,
      prevText = '上一步',
      nextText = '下一步',
      finishText = '提交',
      ...rest
    } = props

    const [internalCurrent, setInternalCurrent] = useState(0)
    const [formValues, setFormValues] = useState<Record<string, unknown>>({})
    const current = controlledCurrent ?? internalCurrent

    const isFirst = current === 0
    const isLast = current === steps.length - 1

    const setCurrent = useCallback(
      (next: number) => {
        if (controlledCurrent === undefined) {
          setInternalCurrent(next)
        }
        onStepChange?.(next)
      },
      [controlledCurrent, onStepChange],
    )

    const handlePrev = () => {
      if (!isFirst) {
        setCurrent(current - 1)
      }
    }

    const handleNext = () => {
      if (!isLast) {
        setCurrent(current + 1)
      }
    }

    const handleFinish = () => {
      onFinish?.(formValues)
    }

    const handleSetStepValue = useCallback(
      (values: Record<string, unknown>) => {
        setFormValues((prev) => ({ ...prev, ...values }))
      },
      [],
    )

    return (
      <div
        ref={ref}
        className={cn('sui-step-form', stepFormVariants(), className)}
        {...rest}
      >
        {renderStepIndicator(steps, current)}
        <div className={stepFormContentVariants()}>
          {typeof steps[current]?.content === 'function'
            ? (steps[current]?.content as (ctx: { setStepValue: (values: Record<string, unknown>) => void; values: Record<string, unknown> }) => ReactNode)({ setStepValue: handleSetStepValue, values: formValues })
            : steps[current]?.content}
        </div>
        <div className={stepFormActionsVariants()}>
          {!isFirst && (
            <button
              type="button"
              onClick={handlePrev}
              className={cn(
                'px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200',
                'border border-border bg-background text-foreground',
                'hover:border-primary-500 hover:text-primary-500',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
              )}
            >
              {prevText}
            </button>
          )}
          {isLast ? (
            <button
              type="button"
              onClick={handleFinish}
              className={cn(
                'px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200',
                'bg-primary-500 text-white border border-primary-500',
                'hover:bg-primary-600 active:bg-primary-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
              )}
            >
              {finishText}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className={cn(
                'px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200',
                'bg-primary-500 text-white border border-primary-500',
                'hover:bg-primary-600 active:bg-primary-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
              )}
            >
              {nextText}
            </button>
          )}
        </div>
      </div>
    )
  }
)
StepForm.displayName = 'StepForm'

export type { StepFormProps, StepFormStep } from './types'
export { stepFormVariants, stepFormIndicatorVariants, stepFormContentVariants, stepFormActionsVariants } from './step-form-variants'
