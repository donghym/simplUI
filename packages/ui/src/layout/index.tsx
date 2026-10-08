import { createContext, useContext, useState, useEffect, forwardRef, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { layoutVariants, siderVariants } from './layout-variants'
import type { LayoutProps, HeaderProps, SiderProps, ContentProps, FooterProps } from './types'
import { BREAKPOINT_MAP } from './types'

interface LayoutContextValue {
  siderCollapsed: boolean
  setSiderCollapsed: (collapsed: boolean) => void
}

const LayoutContext = createContext<LayoutContextValue | null>(null)

function useLayoutContext() {
  return useContext(LayoutContext)
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ hasSider, className, children, ...rest }, ref) => {
  const existingContext = useLayoutContext()

  const [innerCollapsed, setInnerCollapsed] = useState(false)
  const collapsedContext = existingContext || {
    siderCollapsed: innerCollapsed,
    setSiderCollapsed: setInnerCollapsed,
  }

  return (
    <LayoutContext.Provider value={collapsedContext}>
      <div ref={ref} className={cn('sui-layout', layoutVariants({ hasSider }), 'min-w-0', className)} {...rest}>
        {children}
      </div>
    </LayoutContext.Provider>
  )
})

Layout.displayName = 'Layout'

/** Header 顶部区域，高度 64px，深色背景 */
const Header = forwardRef<HTMLElement, HeaderProps>(({ className, ...rest }, ref) => {
  return (
    <header
      ref={ref}
      className={cn('sui-layout-header', 'h-16 px-[50px] flex items-center bg-gray-900 text-white/85', className)}
      {...rest}
    />
  )
})

Header.displayName = 'Layout.Header'

/** Content 主要内容区域 */
const Content = forwardRef<HTMLElement, ContentProps>(({ className, ...rest }, ref) => {
  return <main ref={ref} className={cn('sui-layout-content', 'flex-1 bg-muted', className)} {...rest} />
})

Content.displayName = 'Layout.Content'

/** Footer 底部区域 */
const Footer = forwardRef<HTMLElement, FooterProps>(({ className, ...rest }, ref) => {
  return <footer ref={ref} className={cn('sui-layout-footer', 'text-center text-muted-foreground bg-muted py-6 px-[50px]', className)} {...rest} />
})

Footer.displayName = 'Layout.Footer'

/** Sider 侧边栏，支持折叠展开、响应式断点、亮暗主题 */
const Sider = forwardRef<HTMLElement, SiderProps>(({
  width = 200,
  collapsedWidth = 80,
  collapsible = false,
  collapsed: controlledCollapsed,
  defaultCollapsed = false,
  theme = 'dark',
  breakpoint,
  reverseArrow = false,
  trigger,
  onCollapse,
  onBreakpoint,
  className,
  triggerClassName,
  children,
  style,
  ...rest
}, ref) => {
  const context = useLayoutContext()
  const [innerCollapsed, setInnerCollapsed] = useState(defaultCollapsed)
  const [broken, setBroken] = useState(false)

  // 受控模式优先
  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : innerCollapsed

  // 计算当前宽度
  const currentWidth = collapsed ? collapsedWidth : width

  // 处理断点检测
  useEffect(() => {
    if (!breakpoint) return

    const checkBreakpoint = () => {
      const threshold = BREAKPOINT_MAP[breakpoint]
      const currentBroken = window.innerWidth <= threshold
      if (currentBroken !== broken) {
        setBroken(currentBroken)
        onBreakpoint?.(currentBroken)
      }
    }

    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [breakpoint, broken, onBreakpoint])

  useEffect(() => {
    if (!broken || !collapsible || collapsed) return
    if (controlledCollapsed === undefined) {
      setInnerCollapsed(true)
    }
    context?.setSiderCollapsed?.(true)
    onCollapse?.(true)
  }, [broken, collapsible, collapsed, controlledCollapsed, context, onCollapse])

  const toggleCollapsed = () => {
    const next = !collapsed
    if (controlledCollapsed === undefined) {
      setInnerCollapsed(next)
    }
    context?.setSiderCollapsed?.(next)
    onCollapse?.(next)
  }

  // 计算 CSS 宽度
  const cssWidth = typeof currentWidth === 'number' ? `${currentWidth}px` : currentWidth
  const mergedStyle: CSSProperties = { width: cssWidth, ...(style || {}) }

  // 是否显示触发器
  const showTrigger = collapsible && trigger !== null

  return (
    <aside
      ref={ref}
      className={cn('sui-layout-sider', siderVariants({ theme }), className)}
      style={mergedStyle}
      {...rest}
    >
      <div className="h-full flex flex-col">{children}</div>
      {showTrigger && (
        <button
          type="button"
          onClick={toggleCollapsed}
          className={cn(
            'sui-layout-sider-trigger',
            'absolute bottom-0 left-0 w-full h-12 flex items-center justify-center',
            theme === 'dark'
              ? 'text-white hover:text-white bg-gray-800'
              : 'text-muted-foreground hover:text-foreground border-t border-border bg-background',
            triggerClassName,
          )}
          aria-label={collapsed ? '展开侧边栏' : '收起侧边栏'}
          aria-expanded={!collapsed}
        >
          {trigger || (reverseArrow !== collapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />)}
        </button>
      )}
    </aside>
  )
})

Sider.displayName = 'Layout.Sider'

// 导出组合式 API
export { Layout, Header, Sider, Content, Footer }
export * from './types'
export { layoutVariants, siderVariants } from './layout-variants'

export default Object.assign(Layout, { Header, Sider, Content, Footer })