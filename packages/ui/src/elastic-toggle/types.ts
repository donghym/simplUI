import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { elasticToggleVariants } from './elastic-toggle-variants'

/**
 * ElasticToggle 弹性开关 Props
 *
 * 物理回弹效果、拖拽拉伸的开关组件。
 */
export interface ElasticToggleProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof elasticToggleVariants> {
  /** 当前值（受控模式） */
  checked?: boolean
  /** 默认值（非受控模式） */
  defaultChecked?: boolean
  /** 变化回调 */
  onChange?: (checked: boolean) => void
  /** 禁用状态 */
  disabled?: boolean
}
