import { forwardRef, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { CheckCircle2, XCircle, AlertTriangle, Info, Loader2, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { messageVariants } from './message-variants'
import type { MessageProps, MessageType } from './types'

/** 按消息类型自动匹配的默认图标 */
const typeIcons: Record<MessageType, ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4 text-success-600" aria-hidden="true" />,
  error: <XCircle className="h-4 w-4 text-danger-600" aria-hidden="true" />,
  warning: <AlertTriangle className="h-4 w-4 text-warning-600" aria-hidden="true" />,
  info: <Info className="h-4 w-4 text-primary-600" aria-hidden="true" />,
  loading: <Loader2 className="h-4 w-4 text-primary-600 animate-spin" aria-hidden="true" />,
}

/**
 * Message 消息提示组件
 *
 * 在页面顶部居中展示操作反馈，支持 5 种消息类型、自动关闭和命令式 API。
 * 使用 forwardRef 转发外层容器 div 元素的引用。
 */
export const Message = forwardRef<HTMLDivElement, MessageProps>((props, ref) => {
  const { className, type = 'info', content, duration = 3000, closable = true, onClose, icon, visible: visibleProp = true, ...rest } = props

  const [visible, setVisible] = useState(visibleProp)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  const handleClose = () => {
    setVisible(false)
    onCloseRef.current?.()
  }

  useEffect(() => {
    if (duration <= 0) return
    const timer = setTimeout(handleClose, duration)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

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
          onClick={handleClose}
          aria-label="关闭消息"
          className="ml-2 inline-flex items-center justify-center text-current opacity-60 hover:opacity-100 transition-opacity cursor-pointer shrink-0"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </div>
  )
})

Message.displayName = 'Message'

export type { MessageProps, MessageApiOptions, MessageType } from './types'
export { messageVariants } from './message-variants'
export { messageApi, useMessage } from './message-api'
export default Message