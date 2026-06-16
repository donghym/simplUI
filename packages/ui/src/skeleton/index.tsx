import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { skeletonRootVariants, skeletonVariants } from './skeleton-variants'
import type { SkeletonProps, SkeletonElementProps } from './types'

/** 骨架屏单个元素组件 */
const SkeletonElement = forwardRef<HTMLDivElement, SkeletonElementProps>(
  (props, ref) => {
    const {
      className,
      variant = 'text',
      width,
      height,
      active = true,
      style,
      ...rest
    } = props

    // 将 width/height 转换为样式对象
    const elementStyle = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    }

    return (
      <div
        ref={ref}
        style={elementStyle}
        className={cn(
          skeletonVariants({ variant, active }),
          className
        )}
        {...rest}
      />
    )
  }
)
SkeletonElement.displayName = 'SkeletonElement'

/** 骨架屏组件 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const {
      className,
      loading = true,
      children,
      active = true,
      avatar = false,
      avatarShape = 'circle',
      avatarSize = 40,
      title = true,
      titleWidth = '38%',
      paragraph = true,
      paragraphRows = 3,
      paragraphLastWidth = '60%',
      ...rest
    } = props

    // loading 为 false 时直接渲染 children
    if (!loading && children) {
      return <>{children}</>
    }

    // 生成段落行
    const renderParagraphRows = () => {
      if (!paragraph) return null
      const rows = []
      for (let i = 0; i < paragraphRows; i++) {
        const isLast = i === paragraphRows - 1
        rows.push(
          <SkeletonElement
            key={i}
            variant="text"
            active={active}
            width={isLast ? paragraphLastWidth : '100%'}
            className="mb-2"
          />
        )
      }
      return rows
    }

    return (
      <div ref={ref} className={cn(skeletonRootVariants(), className)} aria-busy={loading || undefined} {...rest}>
        {/* 头像占位 */}
        {avatar && (
          <SkeletonElement
            variant={avatarShape === 'circle' ? 'circle' : 'rect'}
            active={active}
            width={avatarSize}
            height={avatarSize}
            className="flex-shrink-0"
          />
        )}

        {/* 内容区域 */}
        <div className="flex-1">
          {/* 标题占位 */}
          {title && (
            <SkeletonElement
              variant="text"
              active={active}
              width={titleWidth}
              className="mb-2"
            />
          )}

          {/* 段落占位 */}
          {renderParagraphRows()}
        </div>
      </div>
    )
  }
)
Skeleton.displayName = 'Skeleton'

export { SkeletonElement }
export type { SkeletonElementProps } from './types'
