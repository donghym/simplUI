import { forwardRef, Children, isValidElement } from 'react'
import { cn } from '../lib/utils'
import { stepsVariants } from './steps-variants'
import { StepItem } from './step-item'
import type { StepsProps, StepItemProps, StepStatus, StepsSize, StepsVariant, StepsDirection, LabelPlacement } from './types'

/** 步骤条组件 */
export const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const { className, current = 0, status, direction = 'horizontal', stepSize = 'default', variant = 'default', labelPlacement = 'horizontal', progressDot = false, percent, items, children, onChange, ...rest } = props

  const getStepStatus = (index: number, itemStatus?: StepStatus): StepStatus => {
    if (itemStatus) return itemStatus
    if (index < current) return 'finish'
    if (index === current) return status ?? 'process'
    return 'wait'
  }

  const renderItems = () => {
    const actualDirection: StepsDirection = direction ?? 'horizontal'
    const actualStepSize: StepsSize = stepSize ?? 'default'
    const actualVariant: StepsVariant = variant ?? 'default'
    const actualLabelPlacement: LabelPlacement = labelPlacement ?? 'horizontal'
    const isProgressDot = progressDot === true

    if (items && items.length > 0) {
      return items.map((item, index) => (
        <StepItem
          key={index}
          index={index}
          isLast={index === items.length - 1}
          direction={actualDirection}
          stepSize={actualStepSize}
          variant={actualVariant}
          progressDot={isProgressDot}
          labelPlacement={actualLabelPlacement}
          percent={index === current ? percent : undefined}
          title={item.title}
          description={item.description}
          icon={item.icon}
          subTitle={item.subTitle}
          disabled={item.disabled}
          status={getStepStatus(index, item.status)}
          onChange={onChange}
        />
      ))
    }

    const childArray = Children.toArray(children)
    return childArray.map((child, index) => {
      if (isValidElement(child)) {
        const childProps = child.props as StepItemProps
        return (
          <StepItem
            key={index}
            index={index}
            isLast={index === childArray.length - 1}
            direction={actualDirection}
            stepSize={actualStepSize}
            variant={actualVariant}
            progressDot={isProgressDot}
            labelPlacement={actualLabelPlacement}
            percent={index === current ? percent : undefined}
            title={childProps.title}
            description={childProps.description}
            icon={childProps.icon}
            subTitle={childProps.subTitle}
            disabled={childProps.disabled}
            status={getStepStatus(index, childProps.status)}
            onChange={onChange}
          />
        )
      }
      return child
    })
  }

  return (
    <div
      ref={ref}
      role="list"
      className={cn(stepsVariants({ direction: direction ?? 'horizontal', stepSize: stepSize ?? 'default', variant: variant ?? 'default' }), className)}
      {...rest}
    >
      {renderItems()}
    </div>
  )
})
Steps.displayName = 'Steps'

export { StepItem }
export type { StepItemProps, StepsProps } from './types'
export { stepsVariants, stepItemVariants, stepIconVariants } from './steps-variants'
export { stepContentVariants, stepTitleVariants, stepSubTitleVariants, stepDescriptionVariants } from './step-content-variants'
export { stepLineVariants } from './step-line-variants'
export { stepDotVariants, stepInlineIconVariants, stepOutlinedIconVariants } from './step-icon-variants'