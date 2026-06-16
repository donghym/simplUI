import { forwardRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import {
  chatBubbleVariants,
  chatBubbleContentVariants,
  chatBubbleAvatarVariants,
  chatBubbleDotVariants,
} from './chat-bubble-variants'
import { renderMarkdown } from './chat-bubble-markdown'
import type { ChatBubbleProps, ChatRole } from './types'

/** 默认头像文字 */
const avatarLabel: Record<ChatRole, string> = {
  user: 'U',
  assistant: 'A',
  system: '',
}

/**
 * ChatBubble AI 消息气泡
 *
 * 支持用户/助手/系统三种角色样式，简化版 markdown 渲染，加载中打字动画。
 */
const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(({
  role,
  content,
  avatar,
  loading = false,
  timestamp,
  markdown = false,
  codeHighlight = false,
  className,
  ...rest
}, ref) => {
  /** 渲染气泡内容 */
  const renderedContent = useMemo(() => {
    if (loading && role === 'assistant') {
      return (
        <div className="flex items-center gap-1 py-1">
          <span className={cn(chatBubbleDotVariants, 'animate-[bounce_1.4s_ease-in-out_infinite]')} />
          <span className={cn(chatBubbleDotVariants, 'animate-[bounce_1.4s_ease-in-out_0.2s_infinite]')} />
          <span className={cn(chatBubbleDotVariants, 'animate-[bounce_1.4s_ease-in-out_0.4s_infinite]')} />
        </div>
      )
    }
    if (typeof content === 'string' && markdown) {
      return renderMarkdown(content, codeHighlight)
    }
    return content
  }, [content, loading, markdown, codeHighlight, role])

  if (role === 'system') {
    return (
      <div ref={ref} className={cn(chatBubbleVariants({ role }), className)} {...rest}>
        <div className={cn(chatBubbleContentVariants({ role }))}>
          {renderedContent}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={cn(chatBubbleVariants({ role }), className)} {...rest}>
      {/* 头像 */}
      <div className={cn(chatBubbleAvatarVariants({ role }))}>
        {avatar ?? avatarLabel[role]}
      </div>

      {/* 气泡主体 */}
      <div className="flex flex-col gap-1">
        <div className={cn(chatBubbleContentVariants({ role }))}>
          {renderedContent}
        </div>
        {timestamp && (
          <span className={cn(
            'text-xs text-muted-foreground',
            role === 'user' ? 'text-right' : 'text-left',
          )}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  )
})

ChatBubble.displayName = 'ChatBubble'

export { ChatBubble }
export type { ChatBubbleProps, ChatRole } from './types'
export { chatBubbleVariants } from './chat-bubble-variants'

export default ChatBubble