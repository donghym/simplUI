import { forwardRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { tagVariants } from './tag-variants'
import type { TagProps } from './types'

/**
 * Tag 标签组件
 *
 * 用于标记、分类或筛选的小型标签，支持 5 种语义变体和关闭操作。
 * 使用 forwardRef 转发 span 元素引用。
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const { className, variant, closable, onClose, icon, children, onClick, onKeyDown, ...rest } =
    props

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    // 阻止点击关闭按钮时冒泡到标签本身的 onClick
    e.stopPropagation()
    onClose?.(e)
  }

  // 关闭按钮支持键盘 Enter/Space 触发，浏览器自动触发 click，
  // 此处仅需阻止事件冒泡到外层 span 的 onKeyDown
  const handleCloseKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation()
    }
  }

  return (
    <span
      ref={ref}
      className={cn(
        'sui-tag',
        tagVariants({ variant }),
        className,
      )}
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children && <span>{children}</span>}
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          onKeyDown={handleCloseKeyDown}
          aria-label="移除标签"
          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full
            hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-primary-500 focus-visible:ring-offset-1
            transition-colors duration-200 cursor-pointer"
        >
          <X className="h-3 w-3" aria-hidden="true" />
        </button>
      )}
    </span>
  )
})

Tag.displayName = 'Tag'

export type { TagProps, TagVariant } from './types'
export { tagVariants } from './tag-variants'
export default Tag