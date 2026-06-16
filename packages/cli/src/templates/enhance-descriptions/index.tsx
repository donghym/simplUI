import React, { forwardRef, useState, useCallback } from 'react'
import { Copy, Check, Pencil, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  enhanceDescriptionsVariants,
  enhanceDescriptionsTitleVariants,
  enhanceDescriptionsGridVariants,
  enhanceDescriptionsLabelVariants,
  enhanceDescriptionsValueVariants,
  enhanceDescriptionsActionVariants,
  enhanceDescriptionsCollapseVariants,
} from './enhance-descriptions-variants'
import type { EnhanceDescriptionsProps, EnhanceDescriptionsItem } from './types'

export type { EnhanceDescriptionsProps, EnhanceDescriptionsItem } from './types'

/** 将 items 按列数分行 */
function buildRows(items: EnhanceDescriptionsItem[], columns: number): EnhanceDescriptionsItem[][] {
  const rows: EnhanceDescriptionsItem[][] = []
  let currentRow: EnhanceDescriptionsItem[] = []
  let currentSpan = 0

  for (const item of items) {
    const span = item.span ?? 1
    if (currentSpan + span > columns) {
      rows.push(currentRow)
      currentRow = [item]
      currentSpan = span
    } else {
      currentRow.push(item)
      currentSpan += span
    }
  }
  if (currentRow.length > 0) rows.push(currentRow)
  return rows
}

/** 值单元格 */
function ValueCell({ item, bordered }: { item: EnhanceDescriptionsItem; bordered: boolean }) {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const text = typeof item.value === 'string' ? item.value : String(item.value)
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [item.value])

  const handleEditStart = useCallback(() => {
    const text = typeof item.value === 'string' ? item.value : String(item.value)
    setEditValue(text)
    setEditing(true)
  }, [item.value])

  const handleEditConfirm = useCallback(() => {
    item.onEdit?.(editValue)
    setEditing(false)
  }, [item, editValue])

  const handleEditKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleEditConfirm()
      if (e.key === 'Escape') setEditing(false)
    },
    [handleEditConfirm],
  )

  return (
    <td
      colSpan={(item.span ?? 1) * 2 - 1}
      className={cn(enhanceDescriptionsValueVariants({ bordered }))}
    >
      {editing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleEditKeyDown}
          onBlur={handleEditConfirm}
          autoFocus
          className="w-full px-1 py-0.5 text-sm border border-primary-500 rounded outline-none bg-background text-foreground"
        />
      ) : (
        <>
          <span className="flex-1">{item.value}</span>
          {item.copyable && (
            <button
              type="button"
              onClick={handleCopy}
              className={cn(enhanceDescriptionsActionVariants())}
              aria-label="复制"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-success-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
          {item.editable && (
            <button
              type="button"
              onClick={handleEditStart}
              className={cn(enhanceDescriptionsActionVariants())}
              aria-label="编辑"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          )}
        </>
      )}
    </td>
  )
}

/** 增强详情面板组件 */
export const EnhanceDescriptions = forwardRef<HTMLDivElement, EnhanceDescriptionsProps>(
  (props, ref) => {
    const {
      title,
      items,
      columns = 3,
      bordered = true,
      collapsible = false,
      defaultCollapsedRows,
      className,
      ...rest
    } = props

    const [expanded, setExpanded] = useState(false)
    const rows = buildRows(items, columns)
    const collapsedRows = defaultCollapsedRows ?? rows.length
    const needCollapse = collapsible && rows.length > collapsedRows
    const visibleRows = needCollapse && !expanded ? rows.slice(0, collapsedRows) : rows

    return (
      <div ref={ref} className={cn(enhanceDescriptionsVariants({ bordered }), className)} {...rest}>
        {title && <div className={cn(enhanceDescriptionsTitleVariants())}>{title}</div>}
        <div className={cn(enhanceDescriptionsGridVariants())}>
          <table className="w-full border-collapse">
            <tbody>
              {visibleRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <th className={cn(enhanceDescriptionsLabelVariants({ bordered }))}>
                        {item.label}
                      </th>
                      <ValueCell item={item} bordered={bordered} />
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {needCollapse && (
          <div
            role="button"
            tabIndex={0}
            className={cn(enhanceDescriptionsCollapseVariants())}
            onClick={() => setExpanded((v) => !v)}
            onKeyDown={(e) => { if (e.key === 'Enter') setExpanded((v) => !v) }}
          >
            {expanded ? (
              <>收起 <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>展开更多 <ChevronDown className="w-4 h-4" /></>
            )}
          </div>
        )}
      </div>
    )
  },
)

EnhanceDescriptions.displayName = 'EnhanceDescriptions'
