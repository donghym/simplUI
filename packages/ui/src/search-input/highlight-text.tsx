import React from 'react'

export function HighlightText({ text, keyword }: { text: string; keyword: string }) {
  if (!keyword) return <>{text}</>
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let keyIndex = 0
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')
  const matches = [...text.matchAll(regex)]
  for (const match of matches) {
    const matchIndex = match.index ?? 0
    if (matchIndex > lastIndex) {
      parts.push(<React.Fragment key={`text-${keyIndex++}`}>{text.slice(lastIndex, matchIndex)}</React.Fragment>)
    }
    const matchedText = match[1] ?? ''
    parts.push(
      <mark key={`mark-${keyIndex++}`} className="bg-transparent text-primary font-medium">
        {matchedText}
      </mark>,
    )
    lastIndex = matchIndex + matchedText.length
  }
  if (lastIndex < text.length) {
    parts.push(<React.Fragment key={`text-${keyIndex++}`}>{text.slice(lastIndex)}</React.Fragment>)
  }
  return <>{parts}</>
}
