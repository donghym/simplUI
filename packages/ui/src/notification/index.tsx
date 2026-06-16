import { forwardRef, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { ReactNode } from 'react'
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { notificationVariants, notificationIconVariants } from './notification-variants'
import type { NotificationProps, NotificationApiOptions, NotificationType, NotificationPlacement } from './types'

/** 按通知类型自动匹配的默认图标 */
const typeIcons: Record<NotificationType, ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
  error: <XCircle className="h-5 w-5" aria-hidden="true" />,
  warning: <AlertTriangle className="h-5 w-5" aria-hidden="true" />,
  info: <Info className="h-5 w-5" aria-hidden="true" />,
}

/** 各位置容器的 CSS 类名 */
const placementClasses: Record<NotificationPlacement, string> = {
  'top-right': 'fixed top-4 right-4 z-[9999] flex flex-col items-end gap-3 pointer-events-none',
  'top-left': 'fixed top-4 left-4 z-[9999] flex flex-col items-start gap-3 pointer-events-none',
  'bottom-right': 'fixed bottom-4 right-4 z-[9999] flex flex-col-reverse items-end gap-3 pointer-events-none',
  'bottom-left': 'fixed bottom-4 left-4 z-[9999] flex flex-col-reverse items-start gap-3 pointer-events-none',
}

/**
 * Notification 通知提醒组件
 *
 * 在页面边缘展示通知提醒，支持 4 种通知类型、标题、描述、操作按钮和自动关闭。
 * 使用 forwardRef 转发外层容器 div 元素的引用。
 */
export const Notification = forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
  const {
    className, type = 'info', title, description, duration = 4500,
    closable = true, onClose, icon, action, visible: visibleProp = true, ...rest
  } = props

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
    <div ref={ref} role="alert" aria-live="polite"
      className={cn(notificationVariants({ type }), className)} {...rest}>
      <span className={cn(notificationIconVariants({ type }))} aria-hidden="true">
        {icon ?? typeIcons[type]}
      </span>
      <div className="flex-1 min-w-0">
        {title && <div className="font-medium text-foreground text-sm leading-5">{title}</div>}
        {description && <div className="mt-1 text-muted-foreground text-sm leading-5">{description}</div>}
        {action && <div className="mt-3 flex items-center gap-2">{action}</div>}
      </div>
      {closable && (
        <button type="button" onClick={handleClose} aria-label="关闭通知"
          className="shrink-0 inline-flex items-center justify-center text-muted-foreground opacity-60
            hover:opacity-100 hover:text-foreground transition-opacity cursor-pointer">
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
})

Notification.displayName = 'Notification'

// ---- 命令式 API ----

const CONTAINER_ID_PREFIX = 'simplui-notification-container'

function getContainer(placement: NotificationPlacement): HTMLElement {
  const containerId = `${CONTAINER_ID_PREFIX}-${placement}`
  let container = document.getElementById(containerId)
  if (!container) {
    container = document.createElement('div')
    container.id = containerId
    container.className = placementClasses[placement]
    document.body.appendChild(container)
  }
  return container
}

function open(type: NotificationType, options?: NotificationApiOptions): () => void {
  const placement = options?.placement ?? 'top-right'
  const container = getContainer(placement)
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
    <Notification type={type} title={options?.title} description={options?.description}
      duration={options?.duration ?? 4500} closable={options?.closable ?? true}
      icon={options?.icon} action={options?.action} onClose={destroy} />,
  )
  return destroy
}

export const notificationApi = {
  success(options: Omit<NotificationApiOptions, 'type'>) { return open('success', options) },
  error(options: Omit<NotificationApiOptions, 'type'>) { return open('error', options) },
  warning(options: Omit<NotificationApiOptions, 'type'>) { return open('warning', options) },
  info(options: Omit<NotificationApiOptions, 'type'>) { return open('info', options) },
}

export type { NotificationProps, NotificationApiOptions, NotificationType, NotificationPlacement } from './types'
export { notificationVariants, notificationIconVariants } from './notification-variants'
export default Notification
