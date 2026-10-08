import { forwardRef, Children } from 'react'
import { cn } from '../lib/utils'
import { spaceVariants } from './space-variants'
import type { SpaceProps } from './types'

/** 对齐映射 */
const ALIGN_CLASS: Record<string, string> = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
}

/** 间距大小到 Tailwind gap 类的映射 */
const GAP_CLASS: Record<string, string> = { small: 'gap-2', middle: 'gap-4', large: 'gap-6' }

/**
 * Space 间距组件
 *
 * 水平或垂直排列子元素，支持预设间距、换行和分隔线。
 */
const Space = forwardRef<HTMLDivElement, SpaceProps>(({
  direction = 'horizontal',
  componentSize = 'small',
  align = 'center',
  wrap = false,
  split,
  className,
  children,
  ...rest
}, ref) => {
  const items = Children.toArray(children).filter(Boolean)

  return (
    <div
      ref={ref}
      className={cn('sui-space', spaceVariants({ direction }), ALIGN_CLASS[align], GAP_CLASS[componentSize], wrap && 'flex-wrap', className)}
      {...rest}
    >
      {items.map((child, i) => (
        <span key={i} className="inline-flex">
          {child}
          {split && i < items.length - 1 && <span className="inline-flex">{split}</span>}
        </span>
      ))}
    </div>
  )
})

Space.displayName = 'Space'

export { Space }
export type { SpaceProps, SpaceDirection, SpaceSize, SpaceAlign } from './types'
export { spaceVariants } from './space-variants'
export default Space