import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { stepsVariants, stepItemVariants } from './steps-variants'

/** 步骤状态 */
export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

/** 步骤条方向 */
export type StepsDirection = 'horizontal' | 'vertical'

/** 步骤条尺寸 */
export type StepsSize = 'default' | 'small'

/** 步骤条变体 */
export type StepsVariant = 'default' | 'outlined' | 'inline'

/** 标签放置位置 */
export type LabelPlacement = 'horizontal' | 'vertical'

/** 步骤项属性 */
export interface StepItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'status'>,
    VariantProps<typeof stepItemVariants> {
  /** 步骤标题 */
  title: ReactNode
  /** 步骤描述 */
  description?: ReactNode
  /** 步骤图标，默认显示序号 */
  icon?: ReactNode
  /** 步骤状态 */
  status?: StepStatus
  /** 子标题 */
  subTitle?: ReactNode
  /** 是否禁用点击 */
  disabled?: boolean
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/** 步骤条组件属性 */
export interface StepsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'>,
    VariantProps<typeof stepsVariants> {
  /** 当前步骤索引（从 0 开始） */
  current?: number
  /** 当前步骤的状态，默认自动根据 current 计算 */
  status?: StepStatus
  /** 步骤条方向 */
  direction?: StepsDirection
  /** 步骤条尺寸 */
  stepSize?: StepsSize
  /** 步骤条变体 */
  variant?: StepsVariant
  /** 标签放置位置 */
  labelPlacement?: LabelPlacement
  /** 是否使用点状步骤条 */
  progressDot?: boolean | ((dot: ReactNode, { index, status }: { index: number; status: StepStatus }) => ReactNode)
  /** 当前步骤进度百分比（0-100） */
  percent?: number
  /** 步骤项数组，用于快速生成步骤条 */
  items?: Array<{
    title: ReactNode
    description?: ReactNode
    icon?: ReactNode
    status?: StepStatus
    subTitle?: ReactNode
    disabled?: boolean
  }>
  /** 子元素（StepItem） */
  children?: ReactNode
  /** 点击步骤时的回调 */
  onChange?: (current: number) => void
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}