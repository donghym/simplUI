import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { morphButtonVariants } from './morph-button-variants'
import type { MorphButtonProps } from './types'

export const MorphButton = forwardRef<HTMLButtonElement, MorphButtonProps>((props, ref) => {
  const {
    className,
    variant,
    children,
    htmlType = 'button',
    disabled,
    onClick,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'sui-morph-button',
        morphButtonVariants({ variant }),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
})

MorphButton.displayName = 'MorphButton'

export type { MorphButtonProps } from './types'
export { morphButtonVariants } from './morph-button-variants'
