import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { morphButtonVariants } from './morph-button-variants'

/**
 * MorphButton 形变流体按钮 Props
 *
 * hover/click 形态渐变、流体动效。
 */
export interface MorphButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof morphButtonVariants> {
  /** 按钮内容 */
  children?: ReactNode
  /** 原生 button type，默认 'button' */
  htmlType?: 'button' | 'submit' | 'reset'
  /** 禁用状态 */
  disabled?: boolean
  /** 点击回调 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
