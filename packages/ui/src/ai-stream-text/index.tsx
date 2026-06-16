import { forwardRef, useState, useEffect, useRef } from 'react'
import { cn } from '../lib/utils'
import { aiStreamTextVariants, aiStreamCursorVariants } from './ai-stream-text-variants'
import type { AIStreamTextProps } from './types'

/**
 * AIStreamText 流式文本渲染
 *
 * streaming=true 时逐字显示 text，streaming=false 时直接显示全部。光标用闪烁动画。
 */
const AIStreamText = forwardRef<HTMLDivElement, AIStreamTextProps>(({
  text,
  speed = 30,
  streaming = false,
  onComplete,
  showCursor = true,
  className,
  ...rest
}, ref) => {
  const [displayedLength, setDisplayedLength] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  // 非流式模式直接显示全部
  useEffect(() => {
    if (!streaming) {
      setDisplayedLength(text.length)
    }
  }, [streaming, text.length])

  // 流式模式逐字输出
  useEffect(() => {
    if (!streaming) return

    // text 增长时从当前 displayedLength 继续输出
    if (displayedLength < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayedLength((prev) => {
          const next = prev + 1
          return next
        })
      }, speed)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [streaming, displayedLength, text.length, speed])

  // 输出完成回调
  useEffect(() => {
    if (displayedLength >= text.length && text.length > 0 && streaming) {
      onCompleteRef.current?.()
    }
  }, [displayedLength, text.length, streaming])

  // 重置逻辑：当 text 变短时重置 displayedLength
  const prevTextLengthRef = useRef(text.length)
  useEffect(() => {
    if (text.length < prevTextLengthRef.current) {
      setDisplayedLength(0)
    }
    prevTextLengthRef.current = text.length
  }, [text.length])

  const displayedText = streaming ? text.slice(0, displayedLength) : text
  const isTyping = streaming && displayedLength < text.length

  return (
    <div ref={ref} className={cn(aiStreamTextVariants(), className)} {...rest}>
      {displayedText}
      {(showCursor && (isTyping || streaming)) && (
        <span className={cn(aiStreamCursorVariants())} aria-hidden="true" />
      )}
    </div>
  )
})

AIStreamText.displayName = 'AIStreamText'

export { AIStreamText }
export type { AIStreamTextProps } from './types'
export { aiStreamTextVariants } from './ai-stream-text-variants'

export default AIStreamText
