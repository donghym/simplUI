import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { tabBarVariants } from './tab-bar-variants'

/** 角标类型 */
export type BadgeType = 'dot' | 'number'

/** TabBar 项配置 */
export interface TabBarItem {
  /** 唯一标识 */
  key: string
  /** 标签文字 */
  label: string
  /** 图标 */
  icon: ReactNode
  /** 选中态图标 */
  activeIcon?: ReactNode
  /** 角标配置 */
  badge?: {
    /** 角标类型 */
    type: BadgeType
    /** 角标数字，type 为 number 时有效 */
    count?: number
  }
  /** 是否禁用 */
  disabled?: boolean
}

/** TabBar 组件属性 */
export interface TabBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof tabBarVariants> {
  /** 标签项配置数组 */
  items: TabBarItem[]
  /** 当前选中项 key（受控模式） */
  activeKey?: string
  /** 默认选中项 key（非受控模式） */
  defaultActiveKey?: string
  /** 选中变化回调 */
  onChange?: (activeKey: string) => void
  /** 是否固定在底部，默认 false */
  fixed?: boolean
  /** 是否显示边框，默认 true */
  bordered?: boolean
}
