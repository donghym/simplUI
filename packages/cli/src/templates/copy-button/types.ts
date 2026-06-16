import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { copyButtonVariants } from './copy-button-variants'

/**
 * CopyButton 一键复制组件 Props
 *
 * 点击复制文本到剪贴板，成功/失败状态反馈。
 */
export interface CopyButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'onCopy'>,
    VariantProps<typeof copyButtonVariants> {
  /** 要复制的文本内容 */
  text: string
  /** 复制结果回调，参数为是否成功 */
  onCopy?: (success: boolean) => void
  /** 是否显示 tooltip 提示，默认 true */
  showTooltip?: boolean
  /** tooltip 文本配置 */
  tooltipText?: { success: string; error: string; default: string }
  /** 自定义图标 */
  icon?: ReactNode
  /** 成功状态持续时间毫秒，默认 2000 */
  successDuration?: number
}
