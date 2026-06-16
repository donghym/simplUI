import { useCallback, useEffect, useRef, forwardRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { drawerVariants, overlayVariants } from './drawer-variants'
import type { DrawerProps } from './types'

/**
 * Drawer 抽屉面板
 *
 * 从屏幕边缘滑入的面板，支持四个方向弹出、ESC 关闭和遮罩点击关闭。
 */
const Drawer = forwardRef<HTMLDivElement, DrawerProps>(({
  open,
  onClose,
  title,
  placement = 'right',
  width = 378,
  height = 378,
  footer,
  maskClosable = true,
  closable = true,
  afterClose,
  className,
  children,
  ...rest
}, ref) => {
  const afterCloseRef = useRef(afterClose)
  afterCloseRef.current = afterClose

  // 打开时禁止 body 滚动
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // ESC 关闭
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    },
    [open, onClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // 关闭后回调，延迟 200ms 等待动画结束
  useEffect(() => {
    if (!open && afterCloseRef.current) {
      const timer = setTimeout(afterCloseRef.current, 200)
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!open) return null

  const handleMaskClick = () => {
    if (maskClosable) onClose()
  }

  // 根据 placement 决定使用 width 还是 height
  const isHorizontal = placement === 'left' || placement === 'right'
  const dimensionClass = isHorizontal
    ? typeof width === 'number'
      ? `w-[${width}px]`
      : `w-[${String(width)}]`
    : typeof height === 'number'
      ? `h-[${height}px]`
      : `h-[${String(height)}]`

  return (
    <>
      {/* 遮罩层 */}
      <div className={overlayVariants({ visible: open })} onClick={handleMaskClick} />

      {/* 抽屉面板 — 阻止点击冒泡到遮罩 */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(
          drawerVariants({ placement }),
          dimensionClass,
          className,
        )}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {/* 标题栏 */}
        {(title || closable) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {closable && (
              <button
                type="button"
                onClick={onClose}
                aria-label="关闭"
                className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* 内容区 — flex-1 填充剩余空间 */}
        <div className="flex-1 px-6 py-4 overflow-auto">{children}</div>

        {/* 底部操作区 */}
        {footer !== undefined && (
          <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border shrink-0">
            {footer}
          </div>
        )}
      </div>
    </>
  )
})

Drawer.displayName = 'Drawer'

export { Drawer }
export type { DrawerProps, DrawerPlacement } from './types'
export { drawerVariants } from './drawer-variants'

export default Drawer