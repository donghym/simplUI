import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { dropdownVariants, dropdownMenuVariants, dropdownItemVariants } from './dropdown-variants'

/** 下拉菜单弹出方向 */
export type DropdownPlacement = 'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight'

/** 下拉菜单项的唯一标识 */
export type DropdownItemKey = string | number

/**
 * Dropdown Props
 *
 * 下拉菜单组件，点击触发元素后弹出菜单列表。
 * 支持受控和非受控两种模式，支持 6 个弹出方向。
 */
export interface DropdownProps extends VariantProps<typeof dropdownVariants> {
  /** 触发元素，Dropdown 会包裹此子元素作为触发区域 */
  children: ReactNode
  /** 下拉菜单内容，通常为 DropdownMenu 组件 */
  menu?: ReactNode
  /** 弹出位置，相对触发元素的方位，默认 'bottomLeft' */
  placement?: DropdownPlacement
  /** 是否可见（受控模式），传入时接管 open 状态 */
  open?: boolean
  /** 可见性变化回调（受控模式），在弹出/关闭时触发 */
  onOpenChange?: (open: boolean) => void
  /** 默认是否可见（非受控模式），默认 false */
  defaultOpen?: boolean
  /** 是否禁用下拉菜单，true 时点击触发元素不会打开菜单 */
  disabled?: boolean
  /** 自定义类名，通过 cn() 合并到下拉菜单容器上 */
  className?: string
}

/**
 * DropdownMenu Props
 *
 * 下拉菜单列表容器。
 */
export interface DropdownMenuProps extends VariantProps<typeof dropdownMenuVariants> {
  /** 菜单项列表 */
  children?: ReactNode
  /** 自定义类名，通过 cn() 合并到菜单容器上 */
  className?: string
}

/**
 * DropdownItem Props
 *
 * 单个下拉菜单项。
 */
export interface DropdownItemProps extends VariantProps<typeof dropdownItemVariants> {
  /** 菜单项唯一标识 */
  itemKey: DropdownItemKey
  /** 菜单项文本内容 */
  children?: ReactNode
  /** 图标内容，显示在文本左侧 */
  icon?: ReactNode
  /** 是否禁用，true 时不可点击且视觉降级 */
  disabled?: boolean
  /** 是否为破坏性操作样式，true 时文本显示危险色 */
  destructive?: boolean
  /** 点击回调，参数为 itemKey */
  onClick?: (key: DropdownItemKey) => void
  /** 自定义类名，通过 cn() 合并到菜单项上 */
  className?: string
}

/**
 * DropdownDivider Props
 *
 * 下拉菜单分割线，用于分隔不同类型的菜单项。
 */
export interface DropdownDividerProps {
  /** 自定义类名 */
  className?: string
}