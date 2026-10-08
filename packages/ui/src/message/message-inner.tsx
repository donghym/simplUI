import { forwardRef, useCallback, useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'
import { CheckCircle2, XCircle, AlertTriangle, Info, Loader2, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { messageVariants } from './message-variants'
import type { MessageType } from './types'

const typeIcons: Record<MessageType, ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4 text-success-600" aria-hidden="true" />,
  error: <XCircle className="h-4 w-4 text-danger-600" aria-hidden="true" />,
  warning: <AlertTriangle className="h-4 w-4 text-warning-600" aria-hidden="true" />,
  info: <Info className="h-4 w-4 text-primary-600" aria-hidden="true" />,
  loading: <Loader2 className="h-4 w-4 text-primary-600 animate-spin" aria-hidden="true" />,
}

export function useMessageVisibility(
  visibleProp: boolean,
  duration: number,
  onClose?: () => void,
) {
  const [visible, setVisible] = useState(visibleProp)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    setVisible(visibleProp)
  }, [visibleProp])

  const close = useCallback(() => {
    setVisible(false)
    onCloseRef.current?.()
  }, [])

  useEffect(() => {
    if (!visible || duration <= 0) return
    const timer = setTimeout(close, duration)
    return () => clearTimeout(timer)
  }, [visible, duration, close])

  return { visible, close }
}

interface MessageInnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  type: MessageType
  content: ReactNode
  closable: boolean
  icon?: ReactNode
  onClose: () => void
}

export const MessageInner = forwardRef<HTMLDivElement, MessageInnerProps>(function MessageInner({
  className,
  type,
  content,
  closable,
  icon,
  onClose,
  ...rest
}: MessageInnerProps, ref) {
  return (
    <div
      ref={ref}
      role="alert"
      aria-live="assertive"
      className={cn(messageVariants({ type }), className)}
      {...rest}
    >
      <span aria-hidden="true" className="shrink-0">{icon ?? typeIcons[type]}</span>
      <span className="flex-1">{content}</span>
      {closable && (
        <button
          type="button"
          onClick={onClose}
          aria-label="关闭消息"
          className="ml-2 inline-flex items-center justify-center text-current opacity-60 hover:opacity-100 transition-opacity cursor-pointer shrink-0"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </div>
  )
})
