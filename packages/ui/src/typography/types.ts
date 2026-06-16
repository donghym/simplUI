import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { typographyVariants } from './typography-variants'

/** 文本类型，控制颜色 */
export type TextType = 'secondary' | 'success' | 'warning' | 'danger'

/** 标题级别 */
export type TitleLevel = 1 | 2 | 3 | 4 | 5

/**
 * Text Props
 *
 * 行内文本组件，支持多种类型颜色。
 */
export interface TextProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  /** 文本类型，控制颜色，默认不传为默认文字颜色 */
  type?: TextType
  /** 删除线样式 */
  delete?: boolean
  /** 下划线样式 */
  underline?: boolean
  /** 加粗 */
  strong?: boolean
  /** 斜体 */
  italic?: boolean
  /** 标记样式（黄色背景） */
  mark?: boolean
  /** 代码样式 */
  code?: boolean
  /** 键盘样式 */
  keyboard?: boolean
  /** 自定义类名 */
  className?: string
}

/**
 * Title Props
 *
 * 标题组件，对应 h1-h5 标签。
 */
export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** 标题级别，对应 h1-h5，默认 1 */
  level?: TitleLevel
  /** 自定义类名 */
  className?: string
}

/**
 * Paragraph Props
 *
 * 段落组件，支持省略号截断。
 */
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /** 省略号截断，为 true 时单行截断，为数字时多行截断 */
  ellipsis?: boolean | number
  /** 自定义类名 */
  className?: string
}