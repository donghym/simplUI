import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { tooltipVariants } from './tooltip-variants'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export type TooltipTrigger = 'hover' | 'focus' | 'click'

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof tooltipVariants> {
  /** 提示内容，支持 React 节点 */
  content: ReactNode
  /** 气泡卡片弹出位置。默认 'top' */
  placement?: TooltipPlacement
  /** 触发方式。默认 'hover' */
  trigger?: TooltipTrigger
  /** 是否受控显示 */
  open?: boolean
  /** 非受控默认打开状态 */
  defaultOpen?: boolean
  /** 打开/关闭变化时的回调 */
  onOpenChange?: (open: boolean) => void
  /** 是否显示箭头。默认 true */
  arrow?: boolean
  /** 气泡卡片打开延迟（毫秒）。默认 100 */
  openDelay?: number
  /** 气泡卡片关闭延迟（毫秒）。默认 100 */
  closeDelay?: number
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
  /** 子元素，必须是单个可交互元素 */
  children: ReactNode
}
