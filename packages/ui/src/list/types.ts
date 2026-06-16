import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { listVariants, listItemVariants } from './list-variants'

/** 列表组件 Props 接口 */
export interface ListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof listVariants> {
  /** 列表数据源，配合 renderItem 渲染列表项 */
  dataSource?: unknown[]
  /** 自定义渲染列表项的函数，接收 item 和 index 参数 */
  renderItem?: (item: unknown, index: number) => ReactNode
  /** 列表头部内容 */
  header?: ReactNode
  /** 列表底部内容 */
  footer?: ReactNode
  /** 是否显示分割线。默认 false */
  bordered?: boolean
  /** 是否显示加载状态。默认 false */
  loading?: boolean
  /** 空状态时显示的内容 */
  emptyContent?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/** 列表项组件 Props 接口 */
export interface ListItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'prefix'>, VariantProps<typeof listItemVariants> {
  /** 列表项左侧内容 */
  prefix?: ReactNode
  /** 列表项右侧内容 */
  suffix?: ReactNode
  /** 列表项主内容 */
  children?: ReactNode
  /** 是否禁用该列表项。默认 false */
  disabled?: boolean
  /** 点击回调函数 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/** 列表项元信息组件 Props 接口 */
export interface ListItemMetaProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 列表项标题 */
  title?: ReactNode
  /** 列表项描述 */
  description?: ReactNode
  /** 列表项头像或图标 */
  avatar?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}