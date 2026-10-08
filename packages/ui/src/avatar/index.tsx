import { forwardRef, useState } from 'react'
import { cn } from '../lib/utils'
import { avatarVariants } from './avatar-variants'
import type { AvatarProps } from './types'

/**
 * Avatar 头像组件
 *
 * 展示用户头像，支持三种内容模式：
 * - src 传入且正常加载：渲染 img 元素，图片居中裁切
 * - src 未传入或加载失败、children 存在：显示 children 文字（如姓名首字母）
 * - src 未传入或加载失败、children 不存在、icon 存在：显示 icon 图标
 * - src 未传入或加载失败、children/icon 均不存在、alt 存在：显示 alt 首字符
 *
 * 使用 forwardRef 转发 span 元素引用。
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    className,
    src,
    srcSet,
    alt,
    icon,
    onError,
    size,
    shape,
    children,
    ...rest
  } = props

  // 追踪图片是否加载失败
  const [hasError, setHasError] = useState(false)

  // 判断是否应显示图片：src 存在且未发生错误
  const showImage = Boolean(src) && !hasError

  /**
   * 处理 img 元素 onerror 事件
   *
   * 先调用用户传入的 onError 回调，若返回 false 则不更新状态，
   * 保持图片显示（用户自行处理重试等逻辑）。
   */
  const handleImgError = () => {
    if (onError) {
      const preventFallback = onError() === false
      if (preventFallback) return
    }
    setHasError(true)
  }

  /**
   * 渲染回退内容
   *
   * 优先级：children > icon > alt 首字符
   */
  const renderFallback = () => {
    if (children) return children
    if (icon) return icon
    if (alt) return alt.charAt(0).toUpperCase()
    return null
  }

  return (
    <span
      ref={ref}
      className={cn(
        'sui-avatar',
        avatarVariants({ size, shape }),
        className,
      )}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          srcSet={srcSet}
          alt={alt ?? ''}
          onError={handleImgError}
          className="h-full w-full object-cover"
        />
      ) : (
        renderFallback()
      )}
    </span>
  )
})

Avatar.displayName = 'Avatar'

export type { AvatarProps } from './types'
export { avatarVariants } from './avatar-variants'
export default Avatar