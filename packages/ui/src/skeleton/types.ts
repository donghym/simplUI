import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { skeletonVariants } from './skeleton-variants'

/** 骨架屏变体类型 */
export type SkeletonVariant = 'text' | 'circle' | 'rect'

/** SkeletonElement 组件属性 */
export interface SkeletonElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'width' | 'height'>,
    VariantProps<typeof skeletonVariants> {
  /** 骨架屏变体：text 横条形, circle 圆形, rect 方形。默认 text */
  variant?: SkeletonVariant
  /** 宽度，数字(px)或字符串(如 '100%') */
  width?: number | string
  /** 高度，数字(px)或字符串(如 '2rem') */
  height?: number | string
  /** 是否显示动画，默认 true */
  active?: boolean
  /** 自定义 className */
  className?: string
}

/** 头像形状类型 */
export type AvatarShape = 'circle' | 'square'

/** Skeleton 组件属性 */
export interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 是否显示加载状态，默认 true */
  loading?: boolean
  /** 实际内容，loading 为 false 时显示 */
  children?: ReactNode
  /** 是否显示动画，默认 true */
  active?: boolean
  /** 是否显示头像占位符，默认 false */
  avatar?: boolean
  /** 头像形状，默认 circle */
  avatarShape?: AvatarShape
  /** 头像尺寸(直径)，默认 40 */
  avatarSize?: number
  /** 是否显示标题占位符，默认 true */
  title?: boolean
  /** 标题宽度，默认 '38%' */
  titleWidth?: number | string
  /** 是否显示段落占位符，默认 true */
  paragraph?: boolean
  /** 段落行数，默认 3 */
  paragraphRows?: number
  /** 最后一行宽度，默认 '60%' */
  paragraphLastWidth?: number | string
  /** 自定义 className */
  className?: string
}
