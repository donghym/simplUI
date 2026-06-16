import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { avatarVariants } from './avatar-variants'

/**
 * Avatar 头像组件属性
 *
 * 用于展示用户头像，支持图片、文字回退、图标回退三种模式。
 * 通过 size/shape prop 控制尺寸和形状。
 */
export interface AvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof avatarVariants> {
  /**
   * 图片源地址
   *
   * 传入后渲染为 img 元素，图片居中裁切填充。
   * 图片加载失败时触发 onError 回调，并回退到 children / icon / alt 首字符。
   */
  src?: string

  /**
   * 响应式图片的 srcSet 属性
   *
   * 透传到 img 元素的 srcSet，用于不同分辨率下加载不同尺寸的图片。
   */
  srcSet?: string

  /**
   * 图片的 alt 属性
   *
   * 同时作为文字回退源：不传 src 或图片加载失败时，取 alt 的首字符作为文本回退显示。
   */
  alt?: string

  /**
   * 回退图标
   *
   * 当 src 未传入或图片加载失败时显示的图标。
   * 优先级：children > icon > alt 首字符。
   */
  icon?: ReactNode

  /**
   * 图片加载失败回调
   *
   * img 元素 onerror 事件触发时调用。
   * 返回 false 可阻止默认的文字/图标回退行为，
   * 此时头像保持空状态（灰色背景，无内容）。
   */
  onError?: () => boolean | void
}