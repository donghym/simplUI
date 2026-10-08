import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { switchTrackVariants } from './switch-variants'

/**
 * Switch 组件 Props
 *
 * 双状态切换开关，支持受控/非受控模式、禁用、加载中、文本显示。
 * 点击或按 Space/Enter 键切换状态。
 */
export interface SwitchProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'>,
    VariantProps<typeof switchTrackVariants> {
  /** 受控模式下的选中状态，true 为开启 */
  checked?: boolean
  /** 非受控模式下的初始选中状态，默认 false */
  defaultChecked?: boolean
  /** 禁用状态，true 时不可交互、透明度降低 */
  disabled?: boolean
  /** 加载状态，true 时显示旋转图标、禁止交互 */
  loading?: boolean
  /** 开启状态时显示的内容 */
  checkedChildren?: ReactNode
  /** 关闭状态时显示的内容 */
  unCheckedChildren?: ReactNode
  /** 选中状态变化时触发，参数为变化后的 checked 值 */
  onChange?: (checked: boolean) => void
  /** 点击事件，参数为当前 checked 值 */
  onClick?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
}