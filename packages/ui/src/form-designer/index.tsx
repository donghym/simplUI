import { forwardRef, useState, useCallback } from 'react'
import { GripVertical, Trash2, Copy, FileJson } from 'lucide-react'
import { cn } from '../lib/utils'
import { formDesignerVariants, paletteVariants, designAreaVariants, propertyPanelVariants, paletteItemVariants, designItemVariants } from './form-designer-variants'
import type { FormDesignerProps, FormItemConfig, FormItemType } from './types'
import { getTypeLabel, createDefaultItem, setDragData, getDragData, exportToJson } from './form-designer-utils'
import { FormPreview } from './form-designer-preview'

const ALL_TYPES: FormItemType[] = ['input', 'select', 'checkbox', 'radio', 'textarea', 'number', 'date', 'switch']

export const FormDesigner = forwardRef<HTMLDivElement, FormDesignerProps>((props, ref) => {
  const {
    className,
    items: itemsProp,
    defaultItems = [],
    onChange,
    availableTypes = ALL_TYPES,
    showPreview = true,
    showExport = true,
    ...rest
  } = props

  const isControlled = itemsProp !== undefined
  const [innerItems, setInnerItems] = useState<FormItemConfig[]>(defaultItems)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showPreviewPanel, setShowPreviewPanel] = useState(false)

  const items = isControlled ? itemsProp : innerItems
  const selectedItem = items.find((i) => i.id === selectedId) ?? null

  const updateItems = useCallback((next: FormItemConfig[]) => {
    if (!isControlled) setInnerItems(next)
    onChange?.(next)
  }, [isControlled, onChange])

  // 拖入设计区域
  const handleDesignDrop = useCallback((e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    const data = getDragData(e)
    if (!data) return

    if (data.source === 'palette') {
      const newItem = createDefaultItem(data.type)
      updateItems([...items, newItem])
      setSelectedId(newItem.id)
    } else if (data.source === 'design') {
      const fromIdx = data.index
      if (fromIdx < 0 || fromIdx >= items.length) return
      const next = [...items]
      const moved = next.splice(fromIdx, 1)[0]
      if (!moved) return
      next.push(moved)
      updateItems(next)
    }
  }, [items, updateItems])

  // 删除
  const handleDelete = useCallback((id: string) => {
    updateItems(items.filter((i) => i.id !== id))
    if (selectedId === id) setSelectedId(null)
  }, [items, selectedId, updateItems])

  // 复制
  const handleDuplicate = useCallback((item: FormItemConfig) => {
    const copy: FormItemConfig = { ...item, id: `field_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`, name: `${item.name}_copy` }
    updateItems([...items, copy])
  }, [items, updateItems])

  // 更新选中项属性
  const updateSelectedItem = useCallback((partial: Partial<FormItemConfig>) => {
    if (!selectedId) return
    updateItems(items.map((i) => i.id === selectedId ? { ...i, ...partial } : i))
  }, [items, selectedId, updateItems])

  // JSON 导出
  const handleExport = useCallback(() => {
    const json = exportToJson(items)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'form-schema.json'
    a.click()
    URL.revokeObjectURL(url)
  }, [items])

  return (
    <div ref={ref} className={cn(formDesignerVariants(), className)} {...rest}>
      {/* 左侧：组件面板 */}
      <div className={paletteVariants()}>
        <span className="text-xs font-medium text-muted-foreground mb-1">组件面板</span>
        {availableTypes.map((type) => (
          <div
            key={type}
            draggable
            onDragStart={(e) => setDragData(e, { source: 'palette', type })}
            className={paletteItemVariants()}
          >
            <GripVertical className="h-3 w-3 text-muted-foreground" />
            {getTypeLabel(type)}
          </div>
        ))}
      </div>

      {/* 中间：设计区域 */}
      <div className={designAreaVariants()}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">设计区域</span>
          <div className="flex gap-1">
            {showPreview && (
              <button type="button" className="text-xs text-primary-600 hover:underline" onClick={() => setShowPreviewPanel(!showPreviewPanel)}>
                {showPreviewPanel ? '隐藏预览' : '预览'}
              </button>
            )}
            {showExport && (
              <button type="button" className="text-xs text-primary-600 hover:underline flex items-center gap-0.5" onClick={handleExport}>
                <FileJson className="h-3 w-3" /> 导出 JSON
              </button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <div
            className="flex h-full items-center justify-center border-2 border-dashed border-border rounded-md text-sm text-muted-foreground"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDesignDrop}
          >
            拖拽组件到此处
          </div>
        ) : (
          <div
            className="flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDesignDrop}
          >
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={designItemVariants({ selected: item.id === selectedId })}
                onClick={() => setSelectedId(item.id)}
                draggable
                onDragStart={(e) => setDragData(e, { source: 'design', index: idx })}
              >
                <div className="flex items-center gap-2">
                  <GripVertical className="h-3 w-3 text-muted-foreground cursor-grab" />
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-muted-foreground">({getTypeLabel(item.type)})</span>
                  {item.required && <span className="text-xs text-danger-500">必填</span>}
                </div>
                <div className="flex items-center gap-1">
                  <button type="button" className="p-1 rounded hover:bg-muted" onClick={(e) => { e.stopPropagation(); handleDuplicate(item) }} aria-label="复制">
                    <Copy className="h-3 w-3" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-muted text-danger-500" onClick={(e) => { e.stopPropagation(); handleDelete(item.id) }} aria-label="删除">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 预览面板 */}
        {showPreviewPanel && showPreview && (
          <div className="mt-4 border-t border-border pt-3">
            <span className="text-xs font-medium text-muted-foreground mb-2 block">表单预览</span>
            <FormPreview items={items} />
          </div>
        )}
      </div>

      {/* 右侧：属性面板 */}
      <div className={propertyPanelVariants()}>
        <span className="text-xs font-medium text-muted-foreground mb-2 block">属性配置</span>
        {selectedItem ? (
          <div className="flex flex-col gap-2">
            <label className="text-xs text-muted-foreground">标签</label>
            <input className="h-7 rounded border border-border px-2 text-sm" value={selectedItem.label} onChange={(e) => updateSelectedItem({ label: e.target.value })} />
            <label className="text-xs text-muted-foreground">字段名</label>
            <input className="h-7 rounded border border-border px-2 text-sm" value={selectedItem.name} onChange={(e) => updateSelectedItem({ name: e.target.value })} />
            <label className="text-xs text-muted-foreground">占位文本</label>
            <input className="h-7 rounded border border-border px-2 text-sm" value={selectedItem.placeholder ?? ''} onChange={(e) => updateSelectedItem({ placeholder: e.target.value })} />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={selectedItem.required ?? false} onChange={(e) => updateSelectedItem({ required: e.target.checked })} />
              必填
            </label>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">选中表单项以编辑属性</span>
        )}
      </div>
    </div>
  )
})

FormDesigner.displayName = 'FormDesigner'

export type { FormDesignerProps, FormItemConfig, FormItemType } from './types'
export { formDesignerVariants } from './form-designer-variants'
