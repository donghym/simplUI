import { forwardRef, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { switchTrackVariants, switchHandleVariants } from './switch-variants'
import type { SwitchProps } from './types'

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    className,
    checked: checkedProp,
    defaultChecked = false,
    disabled,
    loading,
    checkedChildren,
    unCheckedChildren,
    onChange,
    onClick,
    ...rest
  } = props

  const isControlled = checkedProp !== undefined
  const [innerChecked, setInnerChecked] = useState(defaultChecked)
  const checked = isControlled ? checkedProp : innerChecked

  const hasText = checkedChildren !== undefined || unCheckedChildren !== undefined
  const isInteractive = !disabled && !loading

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isInteractive) {
      e.preventDefault()
      return
    }
    const nextChecked = !checked
    if (!isControlled) {
      setInnerChecked(nextChecked)
    }
    onChange?.(nextChecked)
    onClick?.(nextChecked, e)
  }

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      onClick={handleClick}
      className={cn(
        switchTrackVariants({ checked, loading, disabled }),
        hasText ? 'h-6 min-w-[48px] px-0.5' : 'h-6 w-10',
        className,
      )}
      {...rest}
    >
      {/* 文本内容区域 — 仅在 checkedChildren 或 unCheckedChildren 存在时渲染 */}
      {hasText && (
        <span className="flex-1 flex items-center justify-center h-full relative overflow-hidden px-1">
          <span
            aria-hidden={!checked}
            className={cn(
              'text-xs text-white leading-none transition-opacity duration-200',
              checked ? 'opacity-100' : 'opacity-0 absolute inset-0 flex items-center justify-center',
            )}
          >
            {checkedChildren}
          </span>
          <span
            aria-hidden={checked}
            className={cn(
              'text-xs leading-none transition-opacity duration-200',
              checked
                ? 'opacity-0 absolute inset-0 flex items-center justify-center text-muted-foreground'
                : 'opacity-100 text-muted-foreground',
            )}
          >
            {unCheckedChildren}
          </span>
        </span>
      )}

      {/* 滑块或加载图标 */}
      {loading ? (
        <Loader2
          aria-hidden
          className={cn(
            switchHandleVariants({ checked }),
            'animate-spin text-primary-500 bg-transparent shadow-none',
          )}
        />
      ) : (
        <span className={switchHandleVariants({ checked })} />
      )}
    </button>
  )
})

Switch.displayName = 'Switch'

export type { SwitchProps } from './types'
export { switchTrackVariants, switchHandleVariants } from './switch-variants'