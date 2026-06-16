import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { badgeVariants } from './badge-variants'
import type { BadgeProps } from './types'

/**
 * Badge 徽标组件
 *
 * 在子元素右上角显示数字徽标或状态圆点，用于通知数量、状态标记等场景。
 * 支持 5 种语义变体、数字封顶、仅圆点模式、零值隐藏。
 * 使用 forwardRef 转发 span 元素引用。
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    className,
    count,
    overflowCount = 99,
    dot = false,
    showZero = false,
    variant,
    children,
    ...rest
  } = props

  // 判断是否应显示徽标：dot 模式始终显示；数字模式下 count 存在且 (showZero 或 count > 0)
  const shouldShow = dot || (count !== undefined && (showZero || count > 0))

  // 格式化显示数字，超出封顶值时显示 "{overflowCount}+"
  const displayCount =
    count !== undefined && count > overflowCount
      ? `${overflowCount}+`
      : count

  return (
    <span
      ref={ref}
      className={cn(
        'sui-badge',
        'relative inline-flex',
        className,
      )}
      {...rest}
    >
      {children}
      {shouldShow && (
        <sup
          aria-hidden={dot ? true : undefined}
          className={cn(
            badgeVariants(variant ? { variant } : undefined),
            dot && 'min-w-0 w-2 h-2 p-0 text-[0px]',
          )}
        >
          {!dot ? displayCount : null}
        </sup>
      )}
    </span>
  )
})

Badge.displayName = 'Badge'

export type { BadgeProps, BadgeVariant } from './types'
export { badgeVariants } from './badge-variants'
export default Badge