import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { hoverCardVariants } from './hover-card-variants'

/**
 * HoverCard 悬浮动效卡片 Props
 *
 * 悬浮上浮、阴影放大、轻微旋转效果。
 */
export interface HoverCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hoverCardVariants> {
  /** 卡片内容 */
  children: ReactNode
  /** 上浮距离像素，默认 8 */
  lift?: number
  /** 阴影大小，默认 'lg' */
  shadow?: 'sm' | 'md' | 'lg' | 'xl'
  /** 旋转角度，默认 0 */
  rotate?: number
}
