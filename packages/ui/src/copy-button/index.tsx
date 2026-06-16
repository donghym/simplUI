import { forwardRef, useState, useCallback, useRef, useEffect } from 'react'
import { Copy, Check, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { copyButtonVariants } from './copy-button-variants'
import type { CopyButtonProps } from './types'

type CopyStatus = 'idle' | 'success' | 'error'

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>((props, ref) => {
  const {
    className,
    variant,
    text,
    onCopy,
    showTooltip = true,
    tooltipText,
    icon,
    successDuration = 2000,
    ...rest
  } = props

  const [status, setStatus] = useState<CopyStatus>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const defaultTooltip = {
    success: '已复制',
    error: '复制失败',
    default: '点击复制',
  }
  const tooltipConfig = tooltipText ?? defaultTooltip

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('success')
      onCopy?.(true)
    } catch {
      setStatus('error')
      onCopy?.(false)
    }
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setStatus('idle'), successDuration)
  }, [text, onCopy, successDuration])

  const renderIcon = () => {
    if (icon && status === 'idle') return <span aria-hidden>{icon}</span>
    if (status === 'success') return <Check className="h-4 w-4" aria-hidden />
    if (status === 'error') return <X className="h-4 w-4" aria-hidden />
    if (icon) return <span aria-hidden>{icon}</span>
    return <Copy className="h-4 w-4" aria-hidden />
  }

  const tooltipLabel = status === 'success'
    ? tooltipConfig.success
    : status === 'error'
      ? tooltipConfig.error
      : tooltipConfig.default

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleCopy}
      title={showTooltip ? tooltipLabel : undefined}
      className={cn(
        'sui-copy-button',
        copyButtonVariants({
          variant,
          copied: status === 'success',
          error: status === 'error',
        }),
        className,
      )}
      {...rest}
    >
      {renderIcon()}
      {showTooltip && <span>{tooltipLabel}</span>}
    </button>
  )
})

CopyButton.displayName = 'CopyButton'

export type { CopyButtonProps } from './types'
export { copyButtonVariants } from './copy-button-variants'
