import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { pageContainerVariants } from './page-container-variants'

/** PageContainer 面包屑项 */
export interface PageContainerBreadcrumbItem {
  /** 面包屑标题 */
  title: string
  /** 链接路径，不提供则为当前页（不可点击） */
  path?: string
}

/** PageContainer 组件属性 */
export interface PageContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof pageContainerVariants> {
  /** 页面标题。字符串或自定义 ReactNode */
  title?: string | ReactNode
  /** 面包屑数据数组。提供后渲染面包屑导航 */
  breadcrumb?: PageContainerBreadcrumbItem[]
  /** 头部操作区域，渲染在标题右侧 */
  headerActions?: ReactNode[]
  /** 页脚内容 */
  footer?: ReactNode
  /** 是否加载中。true 时内容区域显示 Spin 遮罩 */
  loading?: boolean
  /** 内容区域 */
  children?: ReactNode
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}
