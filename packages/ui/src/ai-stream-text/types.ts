import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { aiStreamTextVariants } from './ai-stream-text-variants'

/**
 * AIStreamText Props
 *
 * 流式文本渲染组件，支持逐字输出动画和打字机效果。
 */
export interface AIStreamTextProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aiStreamTextVariants> {
  /** 要渲染的文本内容 */
  text: string
  /** 打字速度毫秒/字符，默认 30 */
  speed?: number
  /** 是否正在流式输出 */
  streaming?: boolean
  /** 输出完成回调 */
  onComplete?: () => void
  /** 是否显示光标，默认 true */
  showCursor?: boolean
}
