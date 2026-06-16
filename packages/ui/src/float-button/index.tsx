import React, { forwardRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { floatButtonVariants, floatButtonTooltipVariants } from './float-button-variants'
import type { FloatButtonProps, FloatButtonGroupProps } from './types'

export type { FloatButtonProps, FloatButtonGroupProps }

/**
 * FloatButton 悬浮按钮组件
 *
 * 用于在页面中悬浮展示的重要操作按钮。
 *
 * ### 何时使用
 * - 用于全局功能入口，如返回顶部、客服、反馈等
 * - 固定在页面可视区域的按钮
 *
 * ### 示例
 * ```tsx
 * <FloatButton icon={<CustomerServiceOutlined />} onClick={() => {}} />
 * ```
 */
const FloatButton = forwardRef<HTMLDivElement, FloatButtonProps>(({
  icon,
  description,
  type = 'default',
  shapeVariant = 'circle',
  onClick,
  style,
  className,
  tooltip,
  placement = 'right',
}, ref) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const showTooltip = useCallback(() => setTooltipVisible(true), [])
  const hideTooltip = useCallback(() => setTooltipVisible(false), [])

  return (
    <div
      ref={ref}
      className={cn(floatButtonVariants({ type, shapeVariant }), `sui-float-button--${type}`, className)}
      style={style}
      onClick={onClick}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {icon}
      {description && (
        <span className="text-xs whitespace-nowrap">{description}</span>
      )}
      {tooltip && tooltipVisible && (
        <div className={floatButtonTooltipVariants({ placement })}>
          {tooltip}
        </div>
      )}
    </div>
  )
})

FloatButton.displayName = 'FloatButton'

/**
 * FloatButton.Group 悬浮按钮组
 */
export const FloatButtonGroup = forwardRef<HTMLDivElement, FloatButtonGroupProps>(({
  trigger,
  type = 'default',
  shapeVariant = 'circle',
  style,
  className,
  children,
}, ref) => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((prev) => !prev), [])
  const show = useCallback(() => setOpen(true), [])
  const hide = useCallback(() => setOpen(false), [])

  return (
    <div
      ref={ref}
      className={cn('sui-float-button-group relative inline-flex flex-col items-center gap-2', className)}
      style={style}
      onMouseEnter={trigger === 'hover' ? show : undefined}
      onMouseLeave={trigger === 'hover' ? hide : undefined}
    >
      {open && (
        <div className="sui-float-button-group__menu flex flex-col gap-2 mb-2">
          {children}
        </div>
      )}
      <FloatButton
        icon={
          <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
          </svg>
        }
        type={type}
        shapeVariant={shapeVariant}
        onClick={trigger === 'click' ? toggle : undefined}
      />
    </div>
  )
})

FloatButtonGroup.displayName = 'FloatButtonGroup'

const FloatButtonWithGroup = Object.assign(FloatButton, { Group: FloatButtonGroup })
export { FloatButtonWithGroup as FloatButton }
