import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { breadcrumbVariants } from './breadcrumb-variants'
import { BreadcrumbContext } from './breadcrumb-context'
import { BreadcrumbItemFromConfig, BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbSeparator } from './breadcrumb-separator'
import type { BreadcrumbProps } from './types'

/**
 * Breadcrumb 容器组件
 * 支持两种使用方式：
 * 1. items 数组方式（推荐）：自动渲染分隔符和最后一项样式
 * 2. children 组合方式：需手动使用 Breadcrumb.Item 和 Breadcrumb.Separator
 */
const BreadcrumbBase = forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  const { className, items, separator = '/', children, ...rest } = props

  // items 数组方式
  if (items && items.length > 0) {
    return (
      <BreadcrumbContext.Provider value={{ separator }}>
        <nav ref={ref} aria-label="Breadcrumb" className={cn('sui-breadcrumb', breadcrumbVariants(), className)} {...rest}>
          <ol className="flex items-center flex-wrap gap-0 list-none m-0 p-0">
            {items.map((item, index) => (
              <BreadcrumbItemFromConfig
                key={index}
                item={item}
                isLast={index === items.length - 1}
                separator={separator}
              />
            ))}
          </ol>
        </nav>
      </BreadcrumbContext.Provider>
    )
  }

  // children 组合方式
  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      <nav ref={ref} aria-label="Breadcrumb" className={cn('sui-breadcrumb', breadcrumbVariants(), className)} {...rest}>
        <ol className="flex items-center flex-wrap gap-0 list-none m-0 p-0">
          {children}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  )
})
BreadcrumbBase.displayName = 'Breadcrumb'

// 复合组件导出
const Breadcrumb = Object.assign(BreadcrumbBase, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
})

// 子组件导出
export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator }

// 类型导出
export type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbSeparatorProps, BreadcrumbItemType } from './types'