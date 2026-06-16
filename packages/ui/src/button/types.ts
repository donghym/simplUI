import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './button-variants'

/** 按钮变体类型，定义视觉风格 */
export type ButtonVariant = 'default' | 'primary' | 'dashed' | 'link' | 'text'

/**
 * Button 组件 Props
 *
 * 支持三种渲染模式：
 * - 默认：渲染为 <button> 元素
 * - href 存在：渲染为 <a> 元素
 * - asChild=true：使用 Radix Slot 透传 props 到子元素
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof buttonVariants> {
  /** 按钮变体，决定视觉风格，默认 'default' */
  variant?: ButtonVariant
  /** 加载状态，true 时显示 Loader2 spinner、禁止交互、aria-busy="true" */
  loading?: boolean
  /** 禁用状态，true 时 disabled 属性生效、onClick 不触发 */
  disabled?: boolean
  /** 撑满父容器宽度，true 时 width=100% */
  block?: boolean
  /** 图标内容，支持任意 ReactNode，loading 时会被 spinner 替换 */
  icon?: ReactNode
  /** 图标位置，默认 'left'，仅当 icon 存在时生效 */
  iconPosition?: 'left' | 'right'
  /** 使用 Radix Slot 透传 props 到子元素，true 时 children 必须是单个元素 */
  asChild?: boolean
  /** 原生 button type 属性，默认 'button' */
  htmlType?: 'button' | 'submit' | 'reset'
  /** 提供时渲染为 <a> 标签，此时 htmlType 无效 */
  href?: string
  /** 链接的 target 属性，_blank 时自动添加 rel="noopener noreferrer" */
  target?: HTMLAnchorElement['target']
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
  /** 点击事件，loading 或 disabled 时不会触发 */
  onClick?: React.MouseEventHandler<HTMLElement>
}