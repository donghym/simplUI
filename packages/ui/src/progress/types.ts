import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { progressVariants } from './progress-variants'

/** 进度条状态 */
export type ProgressStatus = 'normal' | 'success' | 'error'

/** 进度条形状 */
export type ProgressShape = 'line' | 'circle'

/** 进度条组件属性 */
export interface ProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof progressVariants> {
  /** 当前进度百分比，范围 0-100 */
  percent: number
  /** 进度条形状。line 为线性进度条，circle 为圆形进度条 */
  progressShape?: ProgressShape
  /** 进度条状态。normal 为默认色，success 为成功色，error 为错误色 */
  status?: ProgressStatus
  /** 是否显示进度文字 */
  showText?: boolean
  /** 进度条宽度（仅 line 形状），单位 px */
  strokeWidth?: number
  /** 圆形进度条直径（仅 circle 形状），单位 px */
  circleSize?: number
  /** 自定义格式化函数，用于自定义进度文字显示 */
  format?: (percent: number) => ReactNode
  /** 步进进度，用于分步进度条 */
  steps?: number
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}
