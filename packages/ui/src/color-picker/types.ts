import type { CSSProperties, ReactNode } from 'react'

/** ColorPicker 组件属性 */
export interface ColorPickerProps {
  /** 当前选中颜色值（受控模式），HEX 格式如 '#1890ff' */
  value?: string
  /** 默认选中颜色值（非受控模式） */
  defaultValue?: string
  /** 颜色变化回调，拖动过程中实时触发 */
  onChange?: (value: string) => void
  /** 颜色选择完成回调，松开鼠标或关闭面板时触发 */
  onChangeComplete?: (value: string) => void
  /** 是否禁用，默认 false */
  disabled?: boolean
  /** 是否禁用透明度选择，默认 false */
  disabledAlpha?: boolean
  /** 是否允许清空选中颜色，默认 false */
  allowClear?: boolean
  /** 是否显示颜色文本，可传函数自定义显示内容，默认 false */
  showText?: boolean | ((color: string) => ReactNode)
  /** 选择器尺寸，默认 'medium' */
  size?: 'small' | 'medium' | 'large'
  /** 弹出面板位置，默认 'bottomLeft' */
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
  /** 颜色格式，默认 'hex' */
  format?: 'hex' | 'rgb' | 'hsb'
  /** 预设颜色分组 */
  presets?: { label: string; colors: string[]; defaultOpen?: boolean }[]
  /** 触发方式，默认 'click' */
  trigger?: 'click' | 'hover'
  /** 面板是否打开（受控模式） */
  open?: boolean
  /** 面板打开/关闭变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义 className */
  className?: string
}
