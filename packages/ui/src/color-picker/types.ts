import type { CSSProperties, ReactNode } from 'react'

/** ColorPicker 组件属性 */
export interface ColorPickerProps {
  /** 当前选中颜色值（受控模式），HEX 格式如 '#1890ff' */
  value?: string
  /** 默认选中颜色值（非受控模式） */
  defaultValue?: string
  /** 颜色变化回调，拖动过程中实时触发 */
  onChange?: (value: string) => void
  /** 颜色选择完成回调，拖动结束或确认选择时触发 */
  onChangeComplete?: (value: string) => void
  /** 是否禁用，默认 false */
  disabled?: boolean
  /** 是否允许清空选中颜色，默认 false */
  allowClear?: boolean
  /** 是否显示颜色文本输入框，默认 true */
  showText?: boolean | ((color: string) => ReactNode)
  /** 选择器尺寸，默认 'medium' */
  size?: 'small' | 'medium' | 'large'
  /** 颜色格式，默认 'hex' */
  format?: 'hex' | 'rgb' | 'hsb'
  /** 预设颜色分组 */
  presets?: { label: string; colors: string[]; defaultOpen?: boolean }[]
  /** 面板是否打开（受控模式） */
  open?: boolean
  /** 面板打开/关闭变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义 className */
  className?: string
}
