import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cardVariants } from './card-variants'

/** 卡片变体：default 带边框、filled 带背景色、borderless 无边框无背景 */
export type CardVariant = 'default' | 'filled' | 'borderless'

/**
 * Card 卡片组件 Props
 *
 * 通用内容容器，用于信息展示与分组。
 * 支持标题、封面图、底部操作区、加载态与悬停效果。
 */
export interface CardProps extends VariantProps<typeof cardVariants> {
  /** 卡片变体：default 带边框白色背景、filled 浅灰背景、borderless 无边框无背景 */
  variant?: CardVariant
  /** 卡片标题，显示在卡片头部左侧 */
  title?: ReactNode
  /** 卡片头部右侧操作区，放置链接或操作按钮 */
  extra?: ReactNode
  /** 封面图片 URL，显示在头部与主体内容之间，宽度撑满卡片 */
  cover?: string
  /** 底部操作区，数组每项对应一个操作按钮/链接，等分布局 */
  actions?: ReactNode[]
  /** 鼠标悬停时显示阴影效果，暗示可交互，默认 false */
  hoverable?: boolean
  /** 加载中状态，true 时内容区显示脉冲骨架屏占位 */
  loading?: boolean
  /** 卡片主体内容，任意 React 节点 */
  children?: ReactNode
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
}