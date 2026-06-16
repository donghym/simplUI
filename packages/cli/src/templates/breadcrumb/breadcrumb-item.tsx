import { forwardRef, useState, useContext } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { breadcrumbItemVariants, breadcrumbLinkVariants, breadcrumbSeparatorVariants } from './breadcrumb-variants'
import { BreadcrumbContext } from './breadcrumb-context'
import { BreadcrumbSeparator } from './breadcrumb-separator'
import type { BreadcrumbItemProps, BreadcrumbItemType } from './types'

/**
 * 从配置渲染单个面包屑项（用于 items 数组方式）
 */
export function BreadcrumbItemFromConfig({
  item,
  isLast,
  separator,
}: {
  item: BreadcrumbItemType
  isLast: boolean
  separator: React.ReactNode
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const hasDropdown = Boolean(item.dropdownMenu)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (item.disabled) return
    if (hasDropdown) setDropdownOpen(!dropdownOpen)
    item.onClick?.(e)
  }

  const content = (
    <li className={cn(breadcrumbItemVariants({ disabled: item.disabled, isLast }))}>
      {item.href && !item.disabled ? (
        <a
          href={item.href}
          onClick={handleClick}
          className={cn(breadcrumbLinkVariants(), isLast && 'font-medium text-foreground')}
          aria-current={isLast ? 'page' : undefined}
        >
          {item.title}
        </a>
      ) : (
        <span
          onClick={handleClick}
          className={cn(hasDropdown && 'cursor-pointer', breadcrumbLinkVariants())}
          aria-current={isLast ? 'page' : undefined}
          {...(hasDropdown ? { role: 'button', 'aria-expanded': dropdownOpen, tabIndex: 0 } : {})}
        >
          {item.title}
          {hasDropdown && (
            <ChevronDown
              className={cn('h-3 w-3 ml-1 transition-transform', dropdownOpen && 'rotate-180')}
              aria-hidden="true"
            />
          )}
        </span>
      )}
      {dropdownOpen && hasDropdown && (
        <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg z-10 min-w-[120px]">
          {item.dropdownMenu}
        </div>
      )}
      {!isLast && (
        <span className={cn(breadcrumbSeparatorVariants())} aria-hidden="true">
          {separator}
        </span>
      )}
    </li>
  )

  return hasDropdown ? <div className="relative inline-flex">{content}</div> : content
}

/**
 * Breadcrumb.Item 单项组件
 * 用于 children 组合方式
 */
export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>((props, ref) => {
  const { className, href, onClick, disabled, isLast, dropdownMenu, children, ...rest } = props
  const context = useContext(BreadcrumbContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const hasDropdown = Boolean(dropdownMenu)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    if (hasDropdown) setDropdownOpen(!dropdownOpen)
    onClick?.(e)
  }

  const itemContent = (
    <li
      ref={ref}
      className={cn(breadcrumbItemVariants({ disabled, isLast }), className)}
      {...rest}
    >
      {href && !disabled ? (
        <a
          href={href}
          onClick={handleClick}
          className={cn(breadcrumbLinkVariants(), isLast && 'font-medium text-foreground')}
          aria-current={isLast ? 'page' : undefined}
        >
          {children}
        </a>
      ) : (
        <span
          onClick={handleClick}
          className={cn(hasDropdown && 'cursor-pointer', breadcrumbLinkVariants())}
          aria-current={isLast ? 'page' : undefined}
          {...(hasDropdown ? { role: 'button', 'aria-expanded': dropdownOpen, tabIndex: 0 } : {})}
        >
          {children}
          {hasDropdown && (
            <ChevronDown
              className={cn('h-3 w-3 ml-1 transition-transform', dropdownOpen && 'rotate-180')}
              aria-hidden="true"
            />
          )}
        </span>
      )}
      {dropdownOpen && hasDropdown && (
        <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg z-10 min-w-[120px]">
          {dropdownMenu}
        </div>
      )}
      {!isLast && <BreadcrumbSeparator>{context.separator}</BreadcrumbSeparator>}
    </li>
  )

  return hasDropdown ? <div className="relative inline-flex">{itemContent}</div> : itemContent
})
BreadcrumbItem.displayName = 'Breadcrumb.Item'