import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { thoughtChainVariants } from './thought-chain-variants'

/** 思维步骤状态 */
export type ThoughtStepStatus = 'waiting' | 'running' | 'done' | 'error'

/** 思维步骤数据 */
export interface ThoughtStep {
  /** 步骤标题 */
  title: string
  /** 步骤内容，展开后显示 */
  content?: ReactNode
  /** 步骤状态 */
  status: ThoughtStepStatus
}

/**
 * ThoughtChain Props
 *
 * AI 思维链组件，拆解 AI 思考步骤，支持分步加载和展开/收起。
 */
export interface ThoughtChainProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof thoughtChainVariants> {
  /** 思维步骤数组 */
  steps: ThoughtStep[]
  /** 是否可折叠每个步骤，默认 true */
  collapsible?: boolean
  /** 默认全部展开，默认 false */
  defaultExpandAll?: boolean
}
