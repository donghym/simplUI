import { forwardRef } from 'react'
import { MessageInner, useMessageVisibility } from './message-inner'
import type { MessageProps } from './types'

export const Message = forwardRef<HTMLDivElement, MessageProps>((props, ref) => {
  const { className, type = 'info', content, duration = 3000, closable = true, onClose, icon, visible: visibleProp = true, ...rest } = props
  const { visible, close } = useMessageVisibility(visibleProp, duration, onClose)

  if (!visible) return null

  return (
    <MessageInner
      ref={ref}
      className={className}
      type={type}
      content={content}
      closable={closable}
      icon={icon}
      onClose={close}
      {...rest}
    />
  )
})

Message.displayName = 'Message'

export type { MessageProps, MessageApiOptions, MessageType } from './types'
export { messageVariants } from './message-variants'
export { messageApi, useMessage } from './message-api'
export default Message