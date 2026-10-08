import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { spaceVariants } from './space-variants'

/** 间距方向 */
export type SpaceDirection = 'horizontal' | 'vertical'

/** 预设间距大小 */
export type SpaceSize = 'small' | 'middle' | 'large'

/** 水平对齐方式 */
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'

/**
 * Space Props
 *
 * 间距组件，用于设置子元素之间的间距。
 */
export interface SpaceProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof spaceVariants> {
  /** 间距方向，默认 'horizontal' */
  direction?: SpaceDirection
  /** 间距大小，small 对应 gap-2(8px)，middle 对应 gap-4(16px)，large 对应 gap-6(24px)，默认 'small' */
  componentSize?: SpaceSize
  /** 对齐方式，默认 'center' */
  align?: SpaceAlign
  /** 是否自动换行，默认 false */
  wrap?: boolean
  /** 是否用分隔线分隔，传入 ReactNode 时作为分隔线内容 */
  split?: React.ReactNode
  /** 自定义类名 */
  className?: string
}