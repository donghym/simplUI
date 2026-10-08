import { forwardRef, HTMLAttributes } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  listVariants,
  listItemVariants,
  listItemMetaVariants,
  listHeaderVariants,
  listFooterVariants,
  listDividerVariants,
} from './list-variants'
import type { ListProps, ListItemProps, ListItemMetaProps } from './types'

export const ListItemMeta = forwardRef<HTMLDivElement, ListItemMetaProps>((props, ref) => {
  const { className, title, description, avatar, ...rest } = props
  return (
    <div ref={ref} className={cn(listItemMetaVariants(), className)} {...rest}>
      {avatar && <div className="flex-shrink-0">{avatar}</div>}
      <div className="flex flex-col gap-1 min-w-0">
        {title && <div className="text-foreground font-medium truncate">{title}</div>}
        {description && <div className="text-muted-foreground text-sm truncate">{description}</div>}
      </div>
    </div>
  )
})
ListItemMeta.displayName = 'ListItemMeta'

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const { className, prefix, suffix, children, disabled, onClick, ...rest } = props
  const isClickable = Boolean(onClick) && !disabled

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    onClick?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
    }
  }

  return (
    <div
      ref={ref}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(listItemVariants({ disabled, clickable: isClickable }), className)}
      {...rest}
    >
      {prefix && <div className="flex-shrink-0">{prefix}</div>}
      <div className="flex-1 min-w-0">{children}</div>
      {suffix && <div className="flex-shrink-0">{suffix}</div>}
    </div>
  )
})
ListItem.displayName = 'ListItem'

export const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    className,
    dataSource,
    renderItem,
    header,
    footer,
    bordered,
    loading,
    emptyContent,
    children,
    ...rest
  } = props

  const isEmpty = !children && (!dataSource || dataSource.length === 0)
  const showItems = dataSource && renderItem ? dataSource.map((item, index) => renderItem(item, index)) : children

  return (
    <div ref={ref} role="list" className={cn(listVariants({ bordered, loading }), className)} {...rest}>
      {header && <div className={cn(listHeaderVariants())}>{header}</div>}
      {loading ? (
        <div className="flex items-center justify-center py-8" role="status">
          <Loader2 className="h-6 w-6 animate-spin text-primary-500" aria-hidden="true" />
        </div>
      ) : isEmpty ? (
        <div className="flex items-center justify-center py-8 text-muted-foreground">{emptyContent || '暂无数据'}</div>
      ) : (
        <div className="flex flex-col">{showItems}</div>
      )}
      {footer && !loading && <div className={cn(listFooterVariants())}>{footer}</div>}
    </div>
  )
})
List.displayName = 'List'

export const ListDivider = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...rest } = props
  return <div ref={ref} className={cn(listDividerVariants(), className)} {...rest} />
})
ListDivider.displayName = 'ListDivider'