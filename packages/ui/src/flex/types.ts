import type { HTMLAttributes, ReactNode } from 'react'

/** Flex 主轴对齐方式 */
export type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'

/** Flex 交叉轴对齐方式 */
export type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

/** Flex 换行方式 */
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

/**
 * FlexProps 弹性布局组件属性
 *
 * 基于 CSS Flexbox 的容器组件，用于快速构建灵活的布局。
 */
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /** 垂直排列。true 时 flexDirection 为 column，默认 false */
  vertical?: boolean
  /** 主轴对齐方式。对应 Tailwind justify-* 类，默认 'flex-start' */
  justify?: FlexJustify
  /** 交叉轴对齐方式。对应 Tailwind items-* 类，默认 'flex-start' */
  align?: FlexAlign
  /** 是否自动换行。对应 Tailwind flex-wrap/nowrap/wrap-reverse，默认 'nowrap' */
  wrap?: FlexWrap
  /** 项目之间的间距。数字时转换为 px，字符串直接使用，用户也可通过 className 覆盖 */
  gap?: number | string
  /** 子元素 */
  children?: ReactNode
}