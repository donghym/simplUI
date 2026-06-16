import { forwardRef, useState, useRef, useCallback, useEffect } from 'react'
import { ChevronUp, Send } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  promptInputVariants,
  promptTextareaVariants,
  promptToolbarVariants,
  promptSendBtnVariants,
  promptTemplateMenuVariants,
  promptTemplateItemVariants,
} from './prompt-input-variants'
import type { PromptInputProps, PromptTemplate } from './types'

/**
 * 自动调整 textarea 高度
 */
function autoResize(textarea: HTMLTextAreaElement | null) {
  if (!textarea) return
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight}px`
}

/**
 * PromptInput 提示词输入框
 *
 * 多行自适应高度，模板插入，Ctrl+Enter 发送。
 */
const PromptInput = forwardRef<HTMLDivElement, PromptInputProps>(({
  value: controlledValue,
  defaultValue = '',
  onChange,
  onSend,
  placeholder = '输入提示词...',
  disabled = false,
  maxLength,
  templates,
  sendText = '发送',
  className,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : internalValue

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [templateOpen, setTemplateOpen] = useState(false)

  // 自动调整高度
  useEffect(() => {
    autoResize(textareaRef.current)
  }, [currentValue])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }, [isControlled, onChange])

  const handleSend = useCallback(() => {
    if (disabled || !currentValue.trim()) return
    onSend?.(currentValue)
    if (!isControlled) setInternalValue('')
  }, [currentValue, disabled, isControlled, onSend])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      handleSend()
    }
  }, [handleSend])

  // 插入模板
  const handleTemplateSelect = useCallback((tpl: PromptTemplate) => {
    const next = tpl.content
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
    setTemplateOpen(false)
    textareaRef.current?.focus()
  }, [isControlled, onChange])

  const charCount = currentValue.length
  const showCount = maxLength !== undefined

  return (
    <div ref={ref} className={cn(promptInputVariants({ disabled }), className)} {...rest}>
      {/* 文本区域 */}
      <textarea
        ref={textareaRef}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={1}
        className={cn(promptTextareaVariants())}
      />

      {/* 底部工具栏 */}
      <div className={cn(promptToolbarVariants())}>
        <div className="flex items-center gap-2">
          {/* 模板按钮 */}
          {templates && templates.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setTemplateOpen((v) => !v)}
                disabled={disabled}
                className="flex items-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors disabled:opacity-50"
              >
                模板
                <ChevronUp className={cn('h-3 w-3 transition-transform', templateOpen && 'rotate-180')} />
              </button>
              {templateOpen && (
                <div className={cn(promptTemplateMenuVariants())}>
                  {templates.map((tpl, i) => (
                    <div
                      key={i}
                      className={cn(promptTemplateItemVariants())}
                      onClick={() => handleTemplateSelect(tpl)}
                      role="option"
                      aria-selected={false}
                    >
                      {tpl.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {showCount && (
            <span className="text-xs text-muted-foreground">
              {charCount} / {maxLength}
            </span>
          )}
        </div>

        {/* 发送按钮 */}
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled || !currentValue.trim()}
          className={cn(promptSendBtnVariants())}
        >
          <span className="flex items-center gap-1">
            <Send className="h-3.5 w-3.5" />
            {sendText}
          </span>
        </button>
      </div>
    </div>
  )
})

PromptInput.displayName = 'PromptInput'

export { PromptInput }
export type { PromptInputProps, PromptTemplate } from './types'
export { promptInputVariants } from './prompt-input-variants'

export default PromptInput
