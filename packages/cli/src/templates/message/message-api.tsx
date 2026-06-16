import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { ReactNode } from 'react'
import { CheckCircle2, XCircle, AlertTriangle, Info, Loader2, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { messageVariants } from './message-variants'
import type { MessageProps, MessageApiOptions, MessageType } from './types'

/** 按消息类型自动匹配的默认图标 */
const typeIcons: Record<MessageType, ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4 text-success-600" aria-hidden="true" />,
  error: <XCircle className="h-4 w-4 text-danger-600" aria-hidden="true" />,
  warning: <AlertTriangle className="h-4 w-4 text-warning-600" aria-hidden="true" />,
  info: <Info className="h-4 w-4 text-primary-600" aria-hidden="true" />,
  loading: <Loader2 className="h-4 w-4 text-primary-600 animate-spin" aria-hidden="true" />,
}

/** 消息容器的 DOM id */
const CONTAINER_ID = 'simplui-message-container'

/** 获取或创建消息容器 */
function getContainer(): HTMLElement {
  let container = document.getElementById(CONTAINER_ID)
  if (!container) {
    container = document.createElement('div')
    container.id = CONTAINER_ID
    container.className = 'fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none'
    document.body.appendChild(container)
  }
  return container
}

/** 命令式打开一条消息 */
function open(
  type: MessageType,
  content: MessageApiOptions['content'],
  options?: Omit<MessageApiOptions, 'type' | 'content'>,
): () => void {
  const container = getContainer()
  const wrapper = document.createElement('div')
  wrapper.className = 'pointer-events-auto'
  container.appendChild(wrapper)
  const root = createRoot(wrapper)

  const destroy = () => {
    root.unmount()
    wrapper.remove()
    options?.onClose?.()
  }

  root.render(
    <MessageComponent
      type={type}
      content={content}
      duration={options?.duration ?? 3000}
      closable={options?.closable ?? true}
      icon={options?.icon}
      onClose={destroy}
    />,
  )

  return destroy
}

/** 消息命令式 API */
export const messageApi = {
  /** 显示成功消息 */
  success(content: ReactNode, duration?: number, onClose?: () => void) {
    return open('success', content, { duration, onClose })
  },
  /** 显示错误消息 */
  error(content: ReactNode, duration?: number, onClose?: () => void) {
    return open('error', content, { duration, onClose })
  },
  /** 显示警告消息 */
  warning(content: ReactNode, duration?: number, onClose?: () => void) {
    return open('warning', content, { duration, onClose })
  },
  /** 显示信息消息 */
  info(content: ReactNode, duration?: number, onClose?: () => void) {
    return open('info', content, { duration, onClose })
  },
  /** 显示加载中消息 */
  loading(content: ReactNode, duration?: number, onClose?: () => void) {
    return open('loading', content, { duration, onClose })
  },
}

/** Message Hook */
export function useMessage(): [typeof messageApi, null] {
  return [messageApi, null]
}

/** Message 组件内部实现（用于命令式 API） */
function MessageComponent(props: MessageProps) {
  const { className, type = 'info', content, duration = 3000, closable = true, onClose, icon, ...rest } = props

  const [visible, setVisible] = useState(true)
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
}