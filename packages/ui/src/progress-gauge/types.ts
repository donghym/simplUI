import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { progressGaugeVariants } from './progress-gauge-variants'

/** 仪表盘类型 */
export type GaugeType = 'arc' | 'circle'

/** ProgressGauge 组件属性 */
export interface ProgressGaugeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressGaugeVariants> {
  /** 当前值，0-100 */
  value: number
  /** 最大值，默认 100 */
  max?: number
  /** 仪表盘类型。arc 为半圆弧形，circle 为完整圆形，默认 'arc' */
  type?: GaugeType
  /** 是否显示刻度线，默认 false */
  showScale?: boolean
  /** 渐变色配置 */
  gradient?: { from: string; to: string }
  /** 格式化显示值函数 */
  format?: (value: number) => string
  /** 仪表盘宽度像素，默认 200 */
  width?: number
  /** 线条宽度像素，默认 8 */
  strokeWidth?: number
}
