import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { menuVariants } from './menu-variants'

/** 菜单模式 */
export type MenuMode = 'horizontal' | 'vertical' | 'inline'

/** 选中的 key */
export type MenuSelectedKey = string | number

/**
 * Menu Props
 *
 * 导航菜单，支持水平/垂直/内联模式。
 */
export interface MenuProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'>, VariantProps<typeof menuVariants> {
  /** 菜单模式，默认 'vertical' */
  mode?: MenuMode
  /** 当前选中菜单项的 key（受控） */
  selectedKey?: MenuSelectedKey
  /** 默认选中菜单项的 key（非受控） */
  defaultSelectedKey?: MenuSelectedKey
  /** 选中菜单项回调 */
  onSelect?: (key: MenuSelectedKey) => void
}

/**
 * MenuItem Props
 *
 * 单个菜单项。
 */
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  /** 菜单项唯一标识 */
  itemKey: MenuSelectedKey
  /** 图标 */
  icon?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

/**
 * SubMenu Props
 *
 * 子菜单，可展开/收起。
 */
export interface SubMenuProps extends Omit<HTMLAttributes<HTMLLIElement>, 'title'> {
  /** 唯一标识 */
  itemKey: MenuSelectedKey
  /** 标题 */
  title: ReactNode
  /** 图标 */
  icon?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
}