import React, { forwardRef, Children, isValidElement, useMemo } from 'react'
import { cn } from '../lib/utils'
import {
  descriptionsTitleVariants,
  descriptionsLabelVariants,
  descriptionsContentVariants,
  descriptionsBorderedLabelVariants,
  descriptionsBorderedContentVariants,
} from './descriptions-variants'
import type { DescriptionsProps, DescriptionsItemProps } from './types'

export type { DescriptionsProps, DescriptionsItemProps }

/**
 * DescriptionsItem 描述列表项
 */
export const DescriptionsItem = forwardRef<HTMLTableCellElement, DescriptionsItemProps>(({
  label,
  children,
  span = 1,
  style,
  className,
}, ref) => {
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
 */
const DescriptionsInner = forwardRef<HTMLDivElement, DescriptionsProps & React.HTMLAttributes<HTMLDivElement>>(({
  title,
  bordered = false,
  column = 3,
  componentSize = 'default',
  layout = 'horizontal',
  children,
  style,
  className,
  ...rest
}, ref) => {
  const items = useMemo(() => {
    return Children.toArray(children).filter(
      (child): child is React.ReactElement<DescriptionsItemProps> =>
        isValidElement(child) && child.type === DescriptionsItem,
    )
  }, [children])

  const rows = useMemo(() => {
    const result: React.ReactElement<DescriptionsItemProps>[][] = []
    let currentRow: React.ReactElement<DescriptionsItemProps>[] = []
    let currentSpan = 0
    items.forEach((item) => {
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
  }, [items, column])

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
