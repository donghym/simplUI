import { forwardRef, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { proFormListItemVariants, proFormListActionsVariants } from './pro-form-variants'
import { Button } from '../button/index'
import type { ProFormListProps } from './types'

/** ProFormList 动态表单项列表 */
export const ProFormList = forwardRef<HTMLDivElement, ProFormListProps>(({
  name,
  label,
  initialCount = 1,
  addButtonText = '添加一项',
  removeButtonText = '删除',
  maxItems,
  children,
}, ref) => {
  const [items, setItems] = useState<Array<{ key: number }>>(
    () => Array.from({ length: initialCount }, (_, i) => ({ key: i })),
  )
  const nextKey = useState(initialCount)[0]

  const addItem = () => {
    if (maxItems !== undefined && items.length >= maxItems) return
    setItems((prev) => [...prev, { key: prev.length + nextKey }])
  }

  const removeItem = (index: number) => {
    if (items.length <= 1) return
    setItems((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div ref={ref}>
      {label && (
        <div className="text-sm text-foreground mb-2 font-medium">{label}</div>
      )}
      {items.map((item, index) => (
        <div key={item.key} className={cn(proFormListItemVariants())}>
          <div className="flex-1">
            {children(index, `${name}[${index}]`)}
          </div>
          {items.length > 1 && (
            <div className={cn(proFormListActionsVariants(), 'ml-3 self-start')}>
              <Button
                variant="link"
                className="text-danger"
                onClick={() => removeItem(index)}
                icon={<Trash2 className="h-4 w-4" />}
              >
                {removeButtonText}
              </Button>
            </div>
          )}
        </div>
      ))}
      {maxItems === undefined || items.length < maxItems ? (
        <Button
          variant="dashed"
          className="w-full mt-2"
          onClick={addItem}
          icon={<Plus className="h-4 w-4" />}
        >
          {addButtonText}
        </Button>
      ) : null}
    </div>
  )
})

ProFormList.displayName = 'ProFormList'
