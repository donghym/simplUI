import React, { forwardRef, useState, useCallback, useMemo } from 'react'
import { cn } from '../lib/utils'
import { transferListVariants, transferHeaderVariants, transferItemVariants } from './transfer-variants'
import type { TransferProps, TransferItem } from './types'

export type { TransferProps, TransferItem }

interface RenderListParams {
  items: TransferItem[]
  selected: string[]
  toggle: (key: string) => void
  search: string
  setSearch: (v: string) => void
  title: React.ReactNode
  showSearch: boolean
  searchPlaceholder: string
  disabled: boolean
}

const renderList = ({ items, selected, toggle, search, setSearch, title, showSearch, searchPlaceholder, disabled }: RenderListParams) => (
  <div className={transferListVariants()}>
    <div className={transferHeaderVariants()}>{title}</div>
    {showSearch && (
      <div className="p-2">
        <input type="text" placeholder={searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="w-full px-2 py-1 border border-[#d9d9d9] rounded text-sm" />
      </div>
    )}
    <div className="sui-transfer__body flex-1 overflow-auto p-1">
      {items.map((item) => (
        <div
          key={item.key}
          className={cn(transferItemVariants({ selected: selected.includes(item.key), disabled: item.disabled || disabled }), selected.includes(item.key) && 'sui-transfer__item--selected', (item.disabled || disabled) && 'sui-transfer__item--disabled')}
          onClick={() => !item.disabled && toggle(item.key)}
        >
          <input type="checkbox" checked={selected.includes(item.key)} readOnly disabled={item.disabled || disabled} />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  </div>
)

/**
 * Transfer 穿梭框组件
 * 双栏穿梭选择框，用于在多个可选项中进行多选。
 */
export const Transfer = forwardRef<HTMLDivElement, TransferProps>(({
  dataSource,
  targetKeys: controlledTargetKeys,
  defaultTargetKeys = [],
  onChange,
  showSearch = false,
  searchPlaceholder = 'Search',
  titles = ['Source', 'Target'],
  style,
  className,
  disabled = false,
}, ref) => {
  const isControlled = controlledTargetKeys !== undefined
  const [internalTargetKeys, setInternalTargetKeys] = useState<string[]>(defaultTargetKeys)
  const [leftSelected, setLeftSelected] = useState<string[]>([])
  const [rightSelected, setRightSelected] = useState<string[]>([])
  const [leftSearch, setLeftSearch] = useState('')
  const [rightSearch, setRightSearch] = useState('')

  const targetKeys = isControlled ? controlledTargetKeys! : internalTargetKeys

  const leftData = useMemo(() => dataSource.filter((item) => !targetKeys.includes(item.key)), [dataSource, targetKeys])
  const rightData = useMemo(() => dataSource.filter((item) => targetKeys.includes(item.key)), [dataSource, targetKeys])

  const filteredLeft = useMemo(() => {
    if (!leftSearch) return leftData
    return leftData.filter((item) => String(item.title).toLowerCase().includes(leftSearch.toLowerCase()))
  }, [leftData, leftSearch])

  const filteredRight = useMemo(() => {
    if (!rightSearch) return rightData
    return rightData.filter((item) => String(item.title).toLowerCase().includes(rightSearch.toLowerCase()))
  }, [rightData, rightSearch])

  const moveToRight = useCallback(() => {
    if (disabled || leftSelected.length === 0) return
    const next = [...targetKeys, ...leftSelected]
    if (!isControlled) setInternalTargetKeys(next)
    onChange?.(next, 'right', leftSelected)
    setLeftSelected([])
  }, [disabled, leftSelected, targetKeys, isControlled, onChange])

  const moveToLeft = useCallback(() => {
    if (disabled || rightSelected.length === 0) return
    const next = targetKeys.filter((k) => !rightSelected.includes(k))
    if (!isControlled) setInternalTargetKeys(next)
    onChange?.(next, 'left', rightSelected)
    setRightSelected([])
  }, [disabled, rightSelected, targetKeys, isControlled, onChange])

  const toggleLeft = useCallback((key: string) => {
    if (disabled) return
    setLeftSelected((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key])
  }, [disabled])

  const toggleRight = useCallback((key: string) => {
    if (disabled) return
    setRightSelected((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key])
  }, [disabled])

  return (
    <div ref={ref} className={cn('sui-transfer flex items-center gap-4', disabled && 'sui-transfer--disabled', className)} style={style}>
      {renderList({ items: filteredLeft, selected: leftSelected, toggle: toggleLeft, search: leftSearch, setSearch: setLeftSearch, title: titles[0], showSearch, searchPlaceholder, disabled })}
      <div className="sui-transfer__operation flex flex-col gap-2">
        <button type="button" onClick={moveToRight} disabled={disabled || leftSelected.length === 0} className="px-3 py-1">&gt;</button>
        <button type="button" onClick={moveToLeft} disabled={disabled || rightSelected.length === 0} className="px-3 py-1">&lt;</button>
      </div>
      {renderList({ items: filteredRight, selected: rightSelected, toggle: toggleRight, search: rightSearch, setSearch: setRightSearch, title: titles[1], showSearch, searchPlaceholder, disabled })}
    </div>
  )
})
Transfer.displayName = 'Transfer'
