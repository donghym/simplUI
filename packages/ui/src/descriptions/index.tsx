import React, { forwardRef, Children, isValidElement, useMemo, useState, useCallback } from 'react'
import { Copy, Check, Pencil, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  descriptionsTitleVariants,
  descriptionsLabelVariants,
  descriptionsContentVariants,
  descriptionsBorderedLabelVariants,
  descriptionsBorderedContentVariants,
  enhancedDescriptionsVariants,
  enhancedDescriptionsTitleVariants,
  enhancedDescriptionsGridVariants,
  enhancedDescriptionsLabelVariants,
  enhancedDescriptionsValueVariants,
  enhancedDescriptionsActionVariants,
  enhancedDescriptionsCollapseVariants,
} from './descriptions-variants'
import type { DescriptionsProps, DescriptionsItemProps, DescriptionsItemConfig } from './types'

export type { DescriptionsProps, DescriptionsItemProps, DescriptionsItemConfig }

/** 将 items 按列数分行（用于 items 配置模式） */
function buildRows(items: DescriptionsItemConfig[], columns: number): DescriptionsItemConfig[][] {
  const rows: DescriptionsItemConfig[][] = []
  let currentRow: DescriptionsItemConfig[] = []
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

/** 值单元格（支持复制和编辑） */
function ValueCell({ item, bordered }: { item: DescriptionsItemConfig; bordered: boolean }) {
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
      className={cn(enhancedDescriptionsValueVariants({ bordered }))}
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
              className={cn(enhancedDescriptionsActionVariants())}
              aria-label="复制"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-success-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
          {item.editable && (
            <button
              type="button"
              onClick={handleEditStart}
              className={cn(enhancedDescriptionsActionVariants())}
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

/**
 * DescriptionsItem 描述列表项（children 模式）
 */
export const DescriptionsItem = forwardRef<HTMLTableCellElement, DescriptionsItemProps>(({
  label,
  children,
  span = 1,
  copyable,
  editable,
  onEdit,
  style,
  className,
}, ref) => {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const text = typeof children === 'string' ? children : String(children)
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [children])

  const handleEditStart = useCallback(() => {
    const text = typeof children === 'string' ? children : String(children)
    setEditValue(text)
    setEditing(true)
  }, [children])

  const handleEditConfirm = useCallback(() => {
    onEdit?.(editValue)
    setEditing(false)
  }, [onEdit, editValue])

  const handleEditKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleEditConfirm()
      if (e.key === 'Escape') setEditing(false)
    },
    [handleEditConfirm],
  )

  if (copyable || editable) {
    return (
      <td ref={ref} className={cn('sui-descriptions__item', className)} colSpan={span * 2} style={style}>
        <span className="sui-descriptions__label">{label}</span>
        <span className="sui-descriptions__content">
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
              <span className="flex-1">{children}</span>
              {copyable && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center w-6 h-6 rounded text-muted-foreground hover:text-primary-500 hover:bg-muted transition-colors duration-150"
                  aria-label="复制"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-success-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
              {editable && (
                <button
                  type="button"
                  onClick={handleEditStart}
                  className="inline-flex items-center justify-center w-6 h-6 rounded text-muted-foreground hover:text-primary-500 hover:bg-muted transition-colors duration-150"
                  aria-label="编辑"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          )}
        </span>
      </td>
    )
  }

  return (
    <td ref={ref} className={cn('sui-descriptions__item', className)} colSpan={span * 2} style={style}>
      <span className="sui-descriptions__label">{label}</span>
      <span className="sui-descriptions__content">{children}</span>
    </td>
  )
})
DescriptionsItem.displayName = 'DescriptionsItem'

/**
 * Descriptions 描述列表组件
 * 成组展示多个只读字段，常见于详情页的信息展示。
 * 支持 children 模式和 items 配置模式。
 * items 模式支持可复制、可编辑、可折叠功能。
 */
const DescriptionsInner = forwardRef<HTMLDivElement, DescriptionsProps & React.HTMLAttributes<HTMLDivElement>>(({
  title,
  bordered = false,
  column = 3,
  componentSize = 'default',
  layout = 'horizontal',
  children,
  items,
  columns = 3,
  collapsible = false,
  defaultCollapsedRows,
  style,
  className,
  ...rest
}, ref) => {
  const [expanded, setExpanded] = useState(false)

  // items 配置模式
  if (items && items.length > 0) {
    const rows = buildRows(items, columns)
    const collapsedRows = defaultCollapsedRows ?? rows.length
    const needCollapse = collapsible && rows.length > collapsedRows
    const visibleRows = needCollapse && !expanded ? rows.slice(0, collapsedRows) : rows

    return (
      <div ref={ref} className={cn(enhancedDescriptionsVariants({ bordered }), className)} style={style} {...rest}>
        {title && <div className={cn(enhancedDescriptionsTitleVariants())}>{title}</div>}
        <div className={cn(enhancedDescriptionsGridVariants())}>
          <table className="w-full border-collapse">
            <tbody>
              {visibleRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <th className={cn(enhancedDescriptionsLabelVariants({ bordered }))}>
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
            className={cn(enhancedDescriptionsCollapseVariants())}
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
  }

  // children 模式
  const childItems = useMemo(() => {
    return Children.toArray(children).filter(
      (child): child is React.ReactElement<DescriptionsItemProps> =>
        isValidElement(child) && child.type === DescriptionsItem,
    )
  }, [children])

  const rows = useMemo(() => {
    const result: React.ReactElement<DescriptionsItemProps>[][] = []
    let currentRow: React.ReactElement<DescriptionsItemProps>[] = []
    let currentSpan = 0
    childItems.forEach((item) => {
      const span = item.props.span ?? 1
      if (currentSpan + span > column) {
        result.push(currentRow)
        currentRow = [item]
        currentSpan = span
      } else {
        currentRow.push(item)
        currentSpan += span
      }
    })
    if (currentRow.length > 0) result.push(currentRow)
    return result
  }, [childItems, column])

  const renderCell = (item: React.ReactElement<DescriptionsItemProps>, itemIndex: number) => {
    const { label, children: content, span = 1 } = item.props
    if (bordered) {
      return (
        <React.Fragment key={itemIndex}>
          <th className={descriptionsBorderedLabelVariants()} colSpan={1}>{label}</th>
          <td className={descriptionsBorderedContentVariants()} colSpan={span * 2 - 1}>{content}</td>
        </React.Fragment>
      )
    }
    if (layout === 'vertical') {
      return (
        <td key={itemIndex} colSpan={span * 2} className="pb-4">
          <div className={descriptionsLabelVariants({ layout: 'vertical' })}>{label}</div>
          <div className={descriptionsContentVariants()}>{content}</div>
        </td>
      )
    }
    return (
      <td key={itemIndex} colSpan={span * 2} className="pb-4">
        <span className={descriptionsLabelVariants({ layout: 'horizontal' })}>{label}</span>
        <span className={descriptionsContentVariants()}>{content}</span>
      </td>
    )
  }

  return (
    <div ref={ref} className={cn('sui-descriptions', bordered && 'sui-descriptions--bordered', `sui-descriptions--${componentSize}`, className)} style={style} {...rest}>
      {title && <div className={descriptionsTitleVariants()}>{title}</div>}
      <div className="sui-descriptions__view">
        <table className="w-full table-auto border-collapse">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>{row.map(renderCell)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
})
DescriptionsInner.displayName = 'Descriptions'
export const Descriptions = Object.assign(DescriptionsInner, { Item: DescriptionsItem })

// 导出 EnhanceDescriptions 作为别名保持向后兼容
export { Descriptions as EnhanceDescriptions }
