import { forwardRef, Children } from 'react'
import { cn } from '../lib/utils'
import {
  cardVariants,
  cardHeadClass,
  cardCoverClass,
  cardBodyClass,
  skeletonClass,
  cardActionsClass,
} from './card-variants'
import type { CardProps } from './types'

/**
 * Card 卡片组件
 *
 * 通用内容容器，用于信息展示与分组。
 * 支持标题、封面图、底部操作区、加载骨架屏与悬停阴影效果。
 */
const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant,
  title,
  extra,
  cover,
  actions,
  hoverable = false,
  loading = false,
  children,
  className,
  ...rest
}, ref) => {
  const hasTitle = Boolean(title) || Boolean(extra)

  return (
    <div
      ref={ref}
      className={cn(
        'sui-card',
        cardVariants({ variant }),
        hoverable && 'cursor-pointer transition-shadow duration-200 hover:shadow-md',
        className,
      )}
      {...rest}
    >
      {hasTitle && (
        <div className={cardHeadClass}>
          {title ? <span className="text-base text-foreground">{title}</span> : <span />}
          {extra ? <span className="text-sm text-muted-foreground">{extra}</span> : null}
        </div>
      )}

      {cover && (
        <img
          src={cover}
          alt={typeof title === 'string' ? title : 'cover'}
          className={cardCoverClass}
        />
      )}

      <div className={cardBodyClass}>
        {loading ? (
          <div className="flex flex-col gap-3" aria-busy="true">
            <div className={cn(skeletonClass, 'w-3/4')} />
            <div className={cn(skeletonClass, 'w-full')} />
            <div className={cn(skeletonClass, 'w-1/2')} />
          </div>
        ) : (
          children
        )}
      </div>

      {actions && actions.length > 0 && (
        <div className={cardActionsClass}>
          {Children.toArray(actions).map((action, index) => (
            <span
              key={index}
              className="flex flex-1 items-center justify-center py-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              {action}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})

Card.displayName = 'Card'

export { Card }
export type { CardProps, CardVariant } from './types'
export { cardVariants } from './card-variants'
export default Card