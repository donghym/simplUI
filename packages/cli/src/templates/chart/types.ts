import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { chartVariants } from './chart-variants'

/**
 * Chart 组件属性
 */
export interface ChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof chartVariants> {
  /** 图表标题 */
  title?: ReactNode
  /** 图表描述 */
  description?: ReactNode
  /** 图表内容区域 */
  children: ReactNode
  /** 是否显示边框。默认 false */
  bordered?: boolean
  /** 是否显示加载状态 */
  loading?: boolean
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/**
 * ChartHeader 子组件属性
 */
export interface ChartHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 标题 */
  title?: ReactNode
  /** 描述 */
  description?: ReactNode
  /** 自定义 className */
  className?: string
}

/**
 * ChartBody 子组件属性
 */
export interface ChartBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** 子元素 */
  children?: ReactNode
  /** 自定义 className */
  className?: string
}
