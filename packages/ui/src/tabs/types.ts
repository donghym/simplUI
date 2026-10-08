import type { ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { tabsVariants } from './tabs-variants'

/** 选项卡变体：line 下划线指示器、card 卡片式、edgeless 无边框按钮式 */
export type TabsVariant = 'line' | 'card' | 'edgeless'

/** 选项卡位置：top 上方、bottom 下方、left 左侧、right 右侧 */
export type TabsPosition = 'top' | 'bottom' | 'left' | 'right'

/**
 * TabPane 选项卡面板属性
 *
 * 每个 TabPane 必须提供唯一 key 和标签文本 tab。
 * TabPane 本身不渲染 DOM，仅作为数据载体传递给 Tabs 父组件。
 */
export interface TabPaneProps {
  /** 选项卡唯一标识，对应 activeKey，必须全局唯一 */
  key: string
  /** 选项卡标签文本，显示在选项卡头部，支持 ReactNode */
  tab: ReactNode
  /** 是否禁用该选项卡，禁用后不可点击切换，半透明显示 */
  disabled?: boolean
  /** 选项卡面板内容，仅在当前选项卡激活时渲染 */
  children?: ReactNode
}

/**
 * Tabs 选项卡组件属性
 *
 * 提供多标签页切换功能，支持受控/非受控两种模式。
 * 子节点须为 TabPane 组件。
 */
export interface TabsProps extends VariantProps<typeof tabsVariants> {
  /** 选项卡变体：line 带下划线指示器（默认）、card 卡片式带边框、edgeless 无边框按钮式 */
  variant?: TabsVariant
  /** 当前激活的选项卡 key，传入后进入受控模式，切换需配合 onChange 更新 */
  activeKey?: string
  /** 默认激活的选项卡 key，仅在非受控模式下生效 */
  defaultActiveKey?: string
  /** 选项卡切换回调，参数为被激活的 tabPane 的 key */
  onChange?: (activeKey: string) => void
  /** 选项卡位置：top 顶部（默认）、bottom 底部、left 左侧、right 右侧 */
  tabPosition?: TabsPosition
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
  /** 子节点，使用 TabPane 组件定义每个选项卡 */
  children?: ReactNode
}