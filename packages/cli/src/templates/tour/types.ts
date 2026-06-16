import type { ReactNode } from 'react'

export interface TourStep {
  /** 目标元素选择器或获取元素的函数 */
  target?: string | (() => HTMLElement | null)
  /** 步骤标题 */
  title?: ReactNode
  /** 步骤描述 */
  description?: ReactNode
  /** 自定义类名 */
  className?: string
}

export interface TourProps {
  /** 步骤配置数组 */
  steps: TourStep[]
  /** 是否打开导览 */
  open?: boolean
  /** 当前步骤索引（受控模式） */
  current?: number
  /** 默认当前步骤索引，默认 0 */
  defaultCurrent?: number
  /** 步骤变化回调 */
  onChange?: (current: number) => void
  /** 关闭回调 */
  onClose?: () => void
  /** 全部步骤完成回调 */
  onFinish?: () => void
  /** localStorage 存储键。提供后，完成导览时记录状态，下次不再自动弹出 */
  storageKey?: string
  /** 是否显示步骤进度条，默认 true */
  showProgress?: boolean
  /** 自定义类名 */
  className?: string
}
