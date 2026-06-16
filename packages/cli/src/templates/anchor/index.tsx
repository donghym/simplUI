import { forwardRef, useEffect, useRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { anchorVariants, anchorLinkVariants, anchorSubLinkVariants, anchorIndicatorVariants } from './anchor-variants'
import type { AnchorProps, AnchorLinkItem, AnchorLinkProps } from './types'

/**
 * AnchorLink 锚点链接子组件
 */
const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>((props, ref) => {
  const { href, title, active, disabled, onClick, className, ...rest } = props

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) return
    e.preventDefault()
    onClick?.(e, href)
  }

  return (
    <a
      ref={ref}
      href={`#${href}`}
      className={cn(anchorLinkVariants({ active, disabled }), className)}
      onClick={handleClick}
      aria-current={active ? 'true' : undefined}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {title}
    </a>
  )
})
AnchorLink.displayName = 'AnchorLink'

/**
 * Anchor 锚点导航
 *
 * 用于页面内快速导航，支持监听滚动自动高亮当前锚点。
 * 点击锚点平滑滚动到对应位置。
 */
const Anchor = forwardRef<HTMLDivElement, AnchorProps>((props, ref) => {
  const {
    className,
    items,
    activeKey: controlledActiveKey,
    defaultActiveKey,
    onChange,
    offsetTop = 0,
    smooth = true,
    getContainer,
    ...rest
  } = props

  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey ?? '')
  const isControlled = controlledActiveKey !== undefined
  const activeKey = isControlled ? controlledActiveKey : internalActiveKey

  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const indicatorRef = useRef<HTMLDivElement>(null)

  const setActiveKey = useCallback(
    (key: string) => {
      if (!isControlled) setInternalActiveKey(key)
      onChange?.(key)
    },
    [isControlled, onChange]
  )

  // 滚动到目标位置
  const scrollTo = useCallback(
    (key: string) => {
      const element = document.getElementById(key)
      if (!element) return

      const container = getContainer?.() || window
      const elementTop = element.getBoundingClientRect().top
      const containerTop =
        container === window ? 0 : (container as HTMLElement).getBoundingClientRect().top
      const scrollTop =
        container === window ? window.scrollY : (container as HTMLElement).scrollTop
      const targetTop = scrollTop + elementTop - containerTop - offsetTop

      if (smooth) {
        if (container === window) {
          window.scrollTo({ top: targetTop, behavior: 'smooth' })
        } else {
          ;(container as HTMLElement).scrollTo({ top: targetTop, behavior: 'smooth' })
        }
      } else {
        if (container === window) {
          window.scrollTo(0, targetTop)
        } else {
          ;(container as HTMLElement).scrollTop = targetTop
        }
      }

      setActiveKey(key)
    },
    [offsetTop, smooth, getContainer, setActiveKey]
  )

  // 更新指示器位置
  useEffect(() => {
    const activeLink = linkRefs.current.get(activeKey)
    if (activeLink && indicatorRef.current) {
      const linkRect = activeLink.getBoundingClientRect()
      const containerRect = activeLink.parentElement?.getBoundingClientRect()
      if (containerRect) {
        indicatorRef.current.style.top = `${activeLink.offsetTop}px`
        indicatorRef.current.style.height = `${linkRect.height}px`
      }
    }
  }, [activeKey])

  // 渲染链接项
  const renderLinks = (items: AnchorLinkItem[], level = 0): React.ReactNode => {
    return items.map((item) => (
      <div key={item.key}>
        <AnchorLink
          ref={(el) => {
            if (el) linkRefs.current.set(item.key, el)
          }}
          href={item.key}
          title={item.title}
          active={activeKey === item.key}
          onClick={() => scrollTo(item.key)}
        />
        {item.children && item.children.length > 0 && (
          <div className={cn(anchorSubLinkVariants())}>{renderLinks(item.children, level + 1)}</div>
        )}
      </div>
    ))
  }

  return (
    <div ref={ref} role="navigation" aria-label="锚点导航" className={cn('sui-anchor', anchorVariants(), className)} {...rest}>
      <div ref={indicatorRef} className={cn(anchorIndicatorVariants())} aria-hidden="true" />
      {renderLinks(items)}
    </div>
  )
})

Anchor.displayName = 'Anchor'

export { Anchor, AnchorLink }
export type { AnchorProps, AnchorLinkItem, AnchorLinkProps } from './types'
export { anchorVariants, anchorLinkVariants, anchorSubLinkVariants, anchorIndicatorVariants } from './anchor-variants'

export default Anchor
