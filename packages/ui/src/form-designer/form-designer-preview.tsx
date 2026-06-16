import type { FormItemConfig } from './types'

/** 表单预览渲染 */
export function FormPreview({ items }: { items: FormItemConfig[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-foreground">
            {item.label}
            {item.required && <span className="ml-0.5 text-danger-500">*</span>}
          </label>
          {renderControl(item)}
        </div>
      ))}
    </div>
  )
}

function renderControl(item: FormItemConfig) {
  switch (item.type) {
    case 'input':
      return <input className="h-8 rounded-md border border-border px-2 text-sm" placeholder={item.placeholder} disabled />
    case 'textarea':
      return <textarea className="rounded-md border border-border px-2 py-1 text-sm" placeholder={item.placeholder} rows={3} disabled />
    case 'number':
      return <input type="number" className="h-8 rounded-md border border-border px-2 text-sm" placeholder={item.placeholder} disabled />
    case 'select':
      return (
        <select className="h-8 rounded-md border border-border px-2 text-sm" disabled>
          <option>{item.placeholder ?? '请选择'}</option>
          {item.options?.map((o) => <option key={o.value}>{o.label}</option>)}
        </select>
      )
    case 'radio':
      return (
        <div className="flex gap-3">
          {item.options?.map((o) => (
            <label key={o.value} className="flex items-center gap-1 text-sm">
              <input type="radio" name={item.name} disabled /> {o.label}
            </label>
          ))}
        </div>
      )
    case 'checkbox':
      return (
        <div className="flex gap-3">
          {item.options?.map((o) => (
            <label key={o.value} className="flex items-center gap-1 text-sm">
              <input type="checkbox" disabled /> {o.label}
            </label>
          ))}
        </div>
      )
    case 'switch':
      return (
        <div className="h-6 w-11 rounded-full bg-muted" />
      )
    case 'date':
      return <input type="date" className="h-8 rounded-md border border-border px-2 text-sm" disabled />
    default:
      return null
  }
}
