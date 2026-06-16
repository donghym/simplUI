import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { Breadcrumb } from '../breadcrumb/index'
import { Spin } from '../spin/index'
import {
  pageContainerVariants,
  pageContainerHeaderVariants,
  pageContainerTitleVariants,
  pageContainerContentVariants,
  pageContainerBreadcrumbVariants,
  pageContainerFooterVariants,
} from './page-container-variants'
import type { PageContainerProps, PageContainerBreadcrumbItem } from './types'

/**
 * 渲染面包屑区域
 */
function renderBreadcrumb(items: PageContainerBreadcrumbItem[]) {
  const breadcrumbItems = items.map((item) => ({
    title: item.title,
    href: item.path,
  }))

  return (
    <div className={cn(pageContainerBreadcrumbVariants())}>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  )
}

/**
 * 渲染头部区域（标题 + 操作按钮）
 */
function renderHeader(title: string | React.ReactNode, actions: React.ReactNode[]) {
  return (
    <div className={cn(pageContainerHeaderVariants())}>
      {title && <h2 className={cn(pageContainerTitleVariants())}>{title}</h2>}
      {actions.length > 0 && (
        <div className="flex items-center gap-2 shrink-0">
          {actions.map((action, index) => (
            <span key={index}>{action}</span>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * PageContainer 页面容器组件
 *
 * 提供页面级布局容器，包含面包屑、标题、操作栏、内容区域和页脚。
 * 内容区域自适应高度，支持 loading 遮罩。
 */
const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>((props, ref) => {
  const {
    className,
    title,
    breadcrumb,
    headerActions,
    footer,
    loading = false,
    children,
    ...rest
  } = props

  const hasBreadcrumb = breadcrumb && breadcrumb.length > 0
  const hasHeader = title || (headerActions && headerActions.length > 0)
  const actions = headerActions ?? []

  return (
    <div
      ref={ref}
      className={cn(pageContainerVariants(), className)}
      {...rest}
    >
      {/* 面包屑区域 */}
      {hasBreadcrumb && renderBreadcrumb(breadcrumb)}

      {/* 头部区域 */}
      {hasHeader && renderHeader(title as React.ReactNode, actions)}

      {/* 内容区域 */}
      <div className={cn(pageContainerContentVariants())}>
        <Spin spinning={loading}>
          {children}
        </Spin>
      </div>

      {/* 页脚区域 */}
      {footer && (
        <div className={cn(pageContainerFooterVariants())}>
          {footer}
        </div>
      )}
    </div>
  )
})

PageContainer.displayName = 'PageContainer'

export { PageContainer }
export type { PageContainerProps, PageContainerBreadcrumbItem } from './types'
export { pageContainerVariants } from './page-container-variants'

export default PageContainer
