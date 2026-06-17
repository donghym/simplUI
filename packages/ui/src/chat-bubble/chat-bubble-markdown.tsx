/**
 * 简化版 markdown 渲染
 * 支持：**加粗**、`行内代码`、```代码块```、- 列表
 */
export function renderMarkdown(text: string, codeHighlight = false): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let key = 0

  const codeBlockSplit = text.split(/(```[\s\S]*?```)/g)

  for (const segment of codeBlockSplit) {
    const codeBlockMatch = segment.match(/^```([\w]*)(?:\n|)([\s\S]*?)```$/)
    if (codeBlockMatch) {
      const language = (codeBlockMatch[1] ?? '').trim()
      const code = (codeBlockMatch[2] ?? '').trim()
      parts.push(
        <pre key={key++} className="my-2 rounded-md bg-foreground/10 p-3 overflow-x-auto text-xs">
          {codeHighlight ? (
            <code className={language ? `language-${language}` : undefined}>{highlightCode(code)}</code>
          ) : (
            <code>{code}</code>
          )}
        </pre>,
      )
      continue
    }

    const lines = segment.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i] ?? ''
      const listMatch = line.match(/^[-*]\s+(.*)$/)
      if (listMatch) {
        parts.push(
          <div key={key++} className="flex gap-2 ml-2">
            <span className="text-muted-foreground">-</span>
            <span>{renderInline(listMatch[1] ?? '', key)}</span>
          </div>,
        )
        key++
        continue
      }
      if (line.trim()) {
        parts.push(<p key={key++}>{renderInline(line, key)}</p>)
        key++
      }
    }
  }

  return parts
}

/** 轻量级代码高亮 */
function highlightCode(code: string): React.ReactNode[] {
  const lines = code.split('\n')
  return lines.map((line, i) => (
    <div key={i} className="whitespace-pre">
      {tokenizeLine(line)}
    </div>
  ))
}

function tokenizeLine(line: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = []
  const regex =
    /(\b(?:const|let|var|function|return|if|else|for|while|class|import|from|export|default|async|await|try|catch|new|this|typeof|instanceof)\b)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(`(?:[^`\\]|\\.)*`|\/\/.*|\/\*[\s\S]*?\*\/|\b\d+(?:\.\d+)?\b|(?:\{|\}|\(|\)|\[|\]))/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(<span key={key++}>{line.slice(lastIndex, match.index)}</span>)
    }
    const text = match[0]
    if (match[1]) {
      tokens.push(
        <span key={key++} className="text-gray-700 dark:text-gray-300 font-semibold">{text}</span>,
      )
    } else if (match[2] || match[3] || match[4]?.startsWith('`')) {
      tokens.push(
        <span key={key++} className="text-success dark:text-success">{text}</span>,
      )
    } else if (text.startsWith('//') || text.startsWith('/*')) {
      tokens.push(
        <span key={key++} className="text-muted-foreground italic">{text}</span>,
      )
    } else if (/^\d/.test(text)) {
      tokens.push(
        <span key={key++} className="text-warning dark:text-warning">{text}</span>,
      )
    } else {
      tokens.push(
        <span key={key++} className="text-gray-600 dark:text-gray-400">{text}</span>,
      )
    }
    lastIndex = match.index + text.length
  }

  if (lastIndex < line.length) {
    tokens.push(<span key={key++}>{line.slice(lastIndex)}</span>)
  }

  return tokens
}

/** 行内渲染：加粗和行内代码 */
function renderInline(text: string, baseKey: number): React.ReactNode[] {
  const result: React.ReactNode[] = []
  const regex = /(\*\*(.+?)\*\*|`(.+?)`)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let subKey = baseKey * 100

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index))
    }
    if (match[2]) {
      result.push(<strong key={subKey++}>{match[2]}</strong>)
    } else if (match[3]) {
      result.push(
        <code key={subKey++} className="rounded bg-foreground/10 px-1.5 py-0.5 text-xs font-mono">
          {match[3]}
        </code>,
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex))
  }
  return result
}