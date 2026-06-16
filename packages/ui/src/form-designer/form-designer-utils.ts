import type { FormItemConfig, FormItemType } from './types'

/** 类型标签映射 */
const TYPE_LABELS: Record<FormItemType, string> = {
  input: '输入框', select: '下拉选择', checkbox: '复选框', radio: '单选框',
  textarea: '文本域', number: '数字输入', date: '日期选择', switch: '开关',
}

/** 获取类型标签 */
export function getTypeLabel(type: FormItemType): string {
  return TYPE_LABELS[type]
}

/** 生成唯一 ID */
export function generateId(): string {
  return `field_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
}

/** 创建默认表单项配置 */
export function createDefaultItem(type: FormItemType): FormItemConfig {
  return {
    id: generateId(),
    name: `${type}_${Date.now()}`,
    label: getTypeLabel(type),
    type,
    placeholder: type === 'input' || type === 'textarea' || type === 'number' ? `请输入${getTypeLabel(type)}` : undefined,
    options: (type === 'select' || type === 'radio' || type === 'checkbox')
      ? [{ label: '选项1', value: 'opt1' }, { label: '选项2', value: 'opt2' }]
      : undefined,
  }
}

export { DRAG_MIME, setDragData, getDragData, exportToJson } from './form-designer-dnd'
export type { DragPayload } from './form-designer-dnd'
