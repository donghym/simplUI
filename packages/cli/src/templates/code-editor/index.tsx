import { forwardRef, useState, useCallback, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'
import { codeEditorVariants } from './code-editor-variants'
import type { CodeEditorProps, CodeLanguage } from './types'

/** 语言关键字 */
const KEYWORDS: Record<CodeLanguage, string[]> = {
  javascript: ['const','let','var','function','return','if','else','for','while','class','import','export','default','new','this','typeof','instanceof','async','await','try','catch','finally','throw','switch','case','break','continue','true','false','null','undefined','of','in','yield','from'],
  typescript: ['const','let','var','function','return','if','else','for','while','class','import','export','default','new','this','typeof','instanceof','async','await','try','catch','finally','throw','switch','case','break','continue','true','false','null','undefined','of','in','yield','from','type','interface','enum','extends','implements','as','is','keyof','infer','never','void','readonly','declare','namespace','abstract','public','private','protected'],
  python: ['def','class','return','if','elif','else','for','while','import','from','as','try','except','finally','raise','with','lambda','pass','break','continue','and','or','not','in','is','True','False','None','yield','async','await','global','nonlocal','assert','del'],
  json: [], html: [], css: [], plaintext: [],
}

const COMMENT_CLS = 'text-muted-foreground italic'
const STRING_CLS = 'text-success-700'

/** 转义 HTML */
function escapeHtml(t: string): string {
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** 简化语法高亮 */
function highlightCode(code: string, lang: CodeLanguage): string {
  let text = escapeHtml(code)
  const kws = KEYWORDS[lang] ?? []
  const phs: string[] = []

  const replace = (regex: RegExp, cls: string) => {
    text = text.replace(regex, (m) => {
      phs.push(`<span class="${cls}">${m}</span>`)
      return `\x00${phs.length - 1}\x00`
    })
  }

  // 注释和字符串
  if (lang === 'javascript' || lang === 'typescript') {
    replace(/\/\/.*$/gm, COMMENT_CLS)
    replace(/\/\*[\s\S]*?\*\//g, COMMENT_CLS)
    replace(/(["'`])(?:(?!\1|\\).|\\.)*\1/g, STRING_CLS)
  } else if (lang === 'python') {
    replace(/#.*$/gm, COMMENT_CLS)
    replace(/("""|''')[\s\S]*?\1/g, STRING_CLS)
    replace(/(["'])(?:(?!\1|\\).|\\.)*\1/g, STRING_CLS)
  } else if (lang === 'json') {
    replace(/(["'])(?:(?!\1|\\).|\\.)*\1/g, STRING_CLS)
  } else if (lang === 'html') {
    replace(/&lt;!--[\s\S]*?--&gt;/g, COMMENT_CLS)
    replace(/(["'])(?:(?!\1|\\).|\\.)*\1/g, STRING_CLS)
  } else if (lang === 'css') {
    replace(/\/\*[\s\S]*?\*\//g, COMMENT_CLS)
    replace(/(["'])(?:(?!\1|\\).|\\.)*\1/g, STRING_CLS)
  }

  // 关键字
  if (kws.length > 0) {
    text = text.replace(new RegExp(`\\b(${kws.join('|')})\\b`, 'g'), '<span class="text-primary-700 font-semibold">$1</span>')
  }
  // 数字
  text = text.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-warning-700">$1</span>')
  // 还原占位符
  text = text.replace(/\x00(\d+)\x00/g, (_, i) => phs[Number(i)] ?? '')
  return text
}

export const CodeEditor = forwardRef<HTMLDivElement, CodeEditorProps>((props, ref) => {
  const { className, value, defaultValue = '', onChange, language = 'plaintext', readonly = false, showLineNumbers = true, wordWrap = false, tabSize = 2, placeholder, ...rest } = props

  const [innerValue, setInnerValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : innerValue
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const lineNumbersRef = useRef<HTMLDivElement>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value
    if (!isControlled) setInnerValue(next)
    onChange?.(next)
  }, [isControlled, onChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab' && !readonly) {
      e.preventDefault()
      const ta = e.currentTarget
      const start = ta.selectionStart
      const spaces = ' '.repeat(tabSize)
      const next = currentValue.substring(0, start) + spaces + currentValue.substring(ta.selectionEnd)
      if (!isControlled) setInnerValue(next)
      onChange?.(next)
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = start + tabSize })
    }
  }, [currentValue, isControlled, onChange, readonly, tabSize])

  const lineCount = currentValue.split('\n').length
  const highlightedHtml = highlightCode(currentValue, language)

  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    const sync = () => { if (lineNumbersRef.current) lineNumbersRef.current.scrollTop = ta.scrollTop }
    ta.addEventListener('scroll', sync)
    return () => ta.removeEventListener('scroll', sync)
  }, [])

  return (
    <div ref={ref} className={cn(codeEditorVariants({ readonly }), 'h-[300px]', className)} {...rest}>
      <div className="flex h-full">
        {showLineNumbers && (
          <div ref={lineNumbersRef} className="flex-shrink-0 select-none overflow-hidden border-r border-border bg-muted/50 py-3 text-right h-full">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i + 1} className="px-3 leading-[1.5] text-muted-foreground">{i + 1}</div>
            ))}
          </div>
        )}
        <div className="relative flex-1 h-full">
          {readonly && (
            <div className={cn('absolute inset-0 overflow-auto p-3 leading-[1.5] whitespace-pre h-full', !wordWrap && 'overflow-x-auto')}
              dangerouslySetInnerHTML={{ __html: highlightedHtml || '&nbsp;' }} />
          )}
          <textarea
            ref={textareaRef}
            className={cn('w-full h-full resize-none p-3 leading-[1.5] outline-none placeholder:text-muted-foreground', readonly && 'invisible', !wordWrap ? 'whitespace-pre overflow-x-auto' : 'whitespace-pre-wrap')}
            value={currentValue} onChange={handleChange} onKeyDown={handleKeyDown}
            placeholder={placeholder} readOnly={readonly} spellCheck={false} autoCapitalize="off" autoCorrect="off"
          />
        </div>
      </div>
    </div>
  )
})

CodeEditor.displayName = 'CodeEditor'

export type { CodeEditorProps, CodeLanguage } from './types'
export { codeEditorVariants } from './code-editor-variants'
