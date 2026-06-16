import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { stepFormVariants } from './step-form-variants'

/** 步骤配置 */
export interface StepFormStep {
  /** 步骤标题 */
  title: string
  /** 步骤描述 */
  description?: string
  /** 步骤内容，或接收表单上下文函数的渲染函数 */
  content: ReactNode | ((ctx: { setStepValue: (values: Record<string, unknown>) => void; values: Record<string, unknown> }) => ReactNode)
}

/** StepForm 组件属性 */
export interface StepFormProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepFormVariants> {
  /** 步骤配置数组 */
  steps: StepFormStep[]
  /** 当前步骤索引（受控模式） */
  current?: number
  /** 步骤变化回调 */
  onStepChange?: (current: number) => void
  /** 全部步骤完成回调，返回所有步骤的表单值 */
  onFinish?: (values: Record<string, unknown>) => void
  /** 上一步按钮文本，默认 '上一步' */
  prevText?: string
  /** 下一步按钮文本，默认 '下一步' */
  nextText?: string
  /** 完成按钮文本，默认 '提交' */
  finishText?: string
}
