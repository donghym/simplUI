import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { chatBubbleVariants } from './chat-bubble-variants'

/** 消息角色类型，决定气泡样式和位置 */
export type ChatRole = 'user' | 'assistant' | 'system'

/**
 * ChatBubble Props
 *
 * AI 消息气泡，支持用户/助手/系统三种角色样式、简化版 markdown 渲染和加载动画。
 */
export interface ChatBubbleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'role' | 'content'>,
    VariantProps<typeof chatBubbleVariants> {
  /** 消息角色，决定气泡样式和位置 */
  role: ChatRole
  /** 消息内容，字符串或自定义 ReactNode */
  content: string | ReactNode
  /** 头像 */
  avatar?: ReactNode
  /** 加载中状态，assistant 角色时显示打字动画 */
  loading?: boolean
  /** 时间戳文本 */
  timestamp?: string
  /** 是否渲染 markdown 格式（简化版：支持加粗/代码块/列表），默认 false */
  markdown?: boolean
  /** 是否对代码块进行语法高亮，默认 false */
  codeHighlight?: boolean
}
