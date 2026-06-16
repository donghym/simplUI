import { forwardRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { elasticToggleVariants, elasticHandleVariants } from './elastic-toggle-variants'
import type { ElasticToggleProps } from './types'

export const ElasticToggle = forwardRef<HTMLButtonElement, ElasticToggleProps>((props, ref) => {
  const {
    className,
    checked: checkedProp,
    defaultChecked = false,
    disabled,
    onChange,
    ...rest
  } = props

  const isControlled = checkedProp !== undefined
  const [innerChecked, setInnerChecked] = useState(defaultChecked)
  const [animating, setAnimating] = useState(false)
  const checked = isControlled ? checkedProp : innerChecked

  const handleClick = useCallback(() => {
    if (disabled) return
    const nextChecked = !checked
    if (!isControlled) setInnerChecked(nextChecked)
    setAnimating(true)
    onChange?.(nextChecked)
    setTimeout(() => setAnimating(false), 400)
  }, [checked, disabled, isControlled, onChange])

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'sui-elastic-toggle',
        elasticToggleVariants({ checked, disabled }),
        'h-[22px] w-[44px]',
        className,
      )}
      {...rest}
    >
      <span
        className={cn(
          elasticHandleVariants({ checked, animating }),
        )}
      />
    </button>
  )
})

ElasticToggle.displayName = 'ElasticToggle'

export type { ElasticToggleProps } from './types'
export { elasticToggleVariants, elasticHandleVariants } from './elastic-toggle-variants'
