import { forwardRef, isValidElement } from 'react'
import { cn } from '../lib/utils'
import {
  emptyVariants,
  emptyImageVariants,
  emptyDescriptionVariants,
  emptyContentVariants,
} from './empty-variants'
import { EmptyImage, type EmptyProps } from './types'

/**
 * Empty 空状态组件
 * 用于展示空状态，常用于列表、表格等无数据时的占位展示
 */
export const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const {
    image = EmptyImage.PRESENTED_IMAGE_SIMPLE,
    imageStyle,
    description = '暂无数据',
    imageClassName,
    descriptionClassName,
    contentClassName,
    children,
    className,
    ...rest
  } = props

  // 渲染图片区域
  const renderImage = () => {
    if (!image) {
      return null
    }

    // 如果是 React 元素，直接渲染
    if (isValidElement(image)) {
      return (
        <div className={cn(emptyImageVariants(), imageClassName)} style={imageStyle}>
          {image}
        </div>
      )
    }

    // 如果是字符串 URL，渲染 img 标签
    if (typeof image === 'string') {
      return (
        <div className={cn(emptyImageVariants(), imageClassName)} style={imageStyle}>
          <img src={image} alt="empty" className="h-auto max-w-full" aria-hidden="true" />
        </div>
      )
    }

    return null
  }

  // 渲染描述区域
  const renderDescription = () => {
    if (description === null || description === undefined) {
      return null
    }
    return (
      <div className={cn(emptyDescriptionVariants(), descriptionClassName)}>{description}</div>
    )
  }

  // 渲染内容区域（子元素）
  const renderContent = () => {
    if (!children) {
      return null
    }
    return <div className={cn(emptyContentVariants(), contentClassName)}>{children}</div>
  }

  return (
    <div ref={ref} role="status" aria-label="空状态" className={cn('sui-empty', emptyVariants(), className)} {...rest}>
      {renderImage()}
      {renderDescription()}
      {renderContent()}
    </div>
  )
})

Empty.displayName = 'Empty'

export { EmptyImage } from './types'
export type { EmptyProps, EmptyImageType } from './types'
