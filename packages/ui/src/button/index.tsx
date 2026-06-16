import { forwardRef, type ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from './button-variants'
import type { ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    block,
    loading,
    disabled,
    icon,
    iconPosition = 'left',
    asChild,
    htmlType = 'button',
    href,
    target,
    children,
    onClick,
    ...rest
  } = props

  const isIconOnly = !children && Boolean(icon)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (loading || disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  const mergedClassName = cn(
    'sui-button',
    buttonVariants({ variant, block }),
    isIconOnly && 'rounded-full aspect-square p-0',
    loading && 'pointer-events-none',
    className,
  )

  const sharedProps = {
    'aria-busy': loading || undefined,
    'aria-disabled': disabled || undefined,
    className: mergedClassName,
    onClick: handleClick,
  }

  const renderIcon = (): ReactNode => {
    if (loading) {
      return <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
    }
    if (!icon) return null
    return <span aria-hidden>{icon}</span>
  }

  const renderContent = (): ReactNode => (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  )

  if (asChild) {
    return (
      <Slot ref={ref as React.Ref<HTMLElement>} {...sharedProps} {...(rest as Record<string, unknown>)}>
        {children}
      </Slot>
    )
  }

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...sharedProps}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </a>
    )
  }

  return (
    <button ref={ref} type={htmlType} {...sharedProps} disabled={disabled || loading} {...rest}>
      {renderContent()}
    </button>
  )
})

Button.displayName = 'Button'

export type { ButtonProps } from './types'
export type { ButtonVariant } from './types'
export { buttonVariants } from './button-variants'