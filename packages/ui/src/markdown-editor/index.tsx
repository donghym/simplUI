import { forwardRef, useState, useCallback, useMemo } from 'react'
import { cn } from '../lib/utils'
import { markdownEditorVariants } from './markdown-editor-variants'
import type { MarkdownEditorProps, MarkdownEditorMode, ToolbarAction } from './types'

/** 简化 markdown 渲染：正则替换为 HTML */
function renderMarkdown(source: string): string {
  let html = source
  // 代码块
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="rounded bg-muted p-3 text-sm overflow-x-auto"><code>$2</code></pre>')
  // 行内代码
  html = html.replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-sm text-danger-700">$1</code>')
  // 标题
  html = html.replace(/^######\s+(.+)$/gm, '<h6 class="text-xs font-semibold mt-3 mb-1">$1</h6>')
  html = html.replace(/^#####\s+(.+)$/gm, '<h5 class="text-sm font-semibold mt-3 mb-1">$1</h5>')
  html = html.replace(/^####\s+(.+)$/gm, '<h4 class="text-base font-semibold mt-4 mb-1">$1</h4>')
  html = html.replace(/^###\s+(.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-1">$1</h3>')
  html = html.replace(/^##\s+(.+)$/gm, '<h2 class="text-xl font-bold mt-5 mb-2">$1</h2>')
  html = html.replace(/^#\s+(.+)$/gm, '<h1 class="text-2xl font-bold mt-5 mb-2">$1</h1>')
  // 分割线
  html = html.replace(/^---$/gm, '<hr class="my-4 border-border" />')
  // 引用
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote class="border-l-4 border-primary-300 pl-3 text-muted-foreground italic">$1</blockquote>')
  // 加粗
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // 斜体
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  // 链接
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="text-primary-600 underline" href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  // 无序列表
  html = html.replace(/^[-*]\s+(.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
  // 有序列表
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
  // 换行
  html = html.replace(/\n/g, '<br />')
  return html
}

/** 默认工具栏 */
function getDefaultToolbar(): ToolbarAction[] {
  return [
    { label: 'B', tooltip: '加粗', action: (c) => c + '****' },
    { label: 'I', tooltip: '斜体', action: (c) => c + '**' },
    { label: 'H', tooltip: '标题', action: (c) => c + '\n## ' },
    { label: '</>', tooltip: '代码块', action: (c) => c + '\n```\n\n```' },
    { label: '链接', tooltip: '链接', action: (c) => c + '[](url)' },
    { label: '列表', tooltip: '无序列表', action: (c) => c + '\n- ' },
    { label: '引用', tooltip: '引用', action: (c) => c + '\n> ' },
  ]
}

export const MarkdownEditor = forwardRef<HTMLDivElement, MarkdownEditorProps>((props, ref) => {
  const {
    className,
    mode = 'split',
    value,
    defaultValue = '',
    onChange,
    placeholder,
    disabled = false,
    maxLength,
    toolbar,
    showToolbar = true,
    ...rest
  } = props

  const [innerValue, setInnerValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : innerValue

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const next = e.target.value
      if (!isControlled) setInnerValue(next)
      onChange?.(next)
    },
    [isControlled, onChange],
  )

  const toolbarActions = useMemo(() => toolbar ?? getDefaultToolbar(), [toolbar])

  const handleToolbarAction = useCallback(
    (action: ToolbarAction['action']) => {
      const next = action(currentValue)
      if (!isControlled) setInnerValue(next)
      onChange?.(next)
    },
    [currentValue, isControlled, onChange],
  )

  const [activeTab, setActiveTab] = useState<MarkdownEditorMode>(mode)

  const modeButtons: { key: MarkdownEditorMode; label: string }[] = [
    { key: 'edit', label: '编辑' },
    { key: 'preview', label: '预览' },
    { key: 'split', label: '分屏' },
  ]

  const charCount = currentValue.length

  return (
    <div
      ref={ref}
      className={cn(markdownEditorVariants({ mode: activeTab, disabled }), className)}
      {...rest}
    >
      {/* 工具栏 */}
      {showToolbar && (
        <div className="flex items-center justify-between border-b border-border px-2 py-1">
          <div className="flex items-center gap-1">
            {toolbarActions.map((item, idx) => (
              <button
                key={idx}
                type="button"
                title={item.tooltip}
                disabled={disabled}
                className="rounded px-2 py-1 text-xs font-medium text-foreground hover:bg-muted disabled:opacity-50"
                onClick={() => handleToolbarAction(item.action)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {modeButtons.map((btn) => (
              <button
                key={btn.key}
                type="button"
                disabled={disabled}
                className={cn(
                  'rounded px-2 py-1 text-xs font-medium transition-colors',
                  activeTab === btn.key
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-muted-foreground hover:bg-muted',
                )}
                onClick={() => setActiveTab(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 内容区 */}
      <div className="flex min-h-[200px]">
        {/* 编辑区 */}
        {(activeTab === 'edit' || activeTab === 'split') && (
          <textarea
            className={cn(
              'flex-1 resize-none p-3 text-sm outline-none',
              'placeholder:text-muted-foreground',
              'disabled:cursor-not-allowed',
              activeTab === 'split' && 'border-r border-border',
            )}
            value={currentValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
          />
        )}
        {/* 预览区 */}
        {(activeTab === 'preview' || activeTab === 'split') && (
          <div
            className={cn(
              'flex-1 overflow-auto p-3 text-sm leading-relaxed',
              activeTab === 'preview' ? 'w-full' : '',
            )}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(currentValue) }}
          />
        )}
      </div>

      {/* 底部状态栏 */}
      {maxLength !== undefined && (
        <div className="border-t border-border px-3 py-1 text-xs text-muted-foreground text-right">
          {charCount} / {maxLength}
        </div>
      )}
    </div>
  )
})

MarkdownEditor.displayName = 'MarkdownEditor'

export type { MarkdownEditorProps, MarkdownEditorMode, ToolbarAction } from './types'
export { markdownEditorVariants } from './markdown-editor-variants'
