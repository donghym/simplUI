import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { avatarGroupVariants } from './avatar-group-variants'

/** 头像项数据 */
export interface AvatarItem {
  /** 图片地址 */
  src?: string
  /** 显示名称（无 src 且无 icon 时显示首字符） */
  name?: string
  /** 回退图标 */
  icon?: ReactNode
}

/** AvatarGroup 组件属性 */
export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarGroupVariants> {
  /** 头像数据数组 */
  avatars: AvatarItem[]
  /** 最大显示数量，超出部分显示 +N。默认 4 */
  maxCount?: number
  /** 超出数量点击回调 */
  onExcessClick?: () => void
}
