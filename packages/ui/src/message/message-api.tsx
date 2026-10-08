import { createRoot } from 'react-dom/client'
import type { ReactNode } from 'react'
import { MessageInner, useMessageVisibility } from './message-inner'
import type { MessageProps, MessageApiOptions, MessageType } from './types'

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
  delete (rest as { visible?: boolean }).visible
  const { visible, close } = useMessageVisibility(true, duration, onClose)

  if (!visible) return null

  return (
    <MessageInner
      className={className}
      type={type}
      content={content}
      closable={closable}
      icon={icon}
      onClose={close}
      {...rest}
    />
  )
}