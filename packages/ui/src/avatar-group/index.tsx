import { forwardRef, useCallback } from 'react'
import { Avatar } from '../avatar'
import { cn } from '../lib/utils'
import {
  avatarGroupVariants,
  avatarGroupItemVariants,
  avatarGroupExcessVariants,
} from './avatar-group-variants'
import type { AvatarGroupProps, AvatarItem } from './types'

/** 渲染单个头像 */
const renderAvatar = (avatar: AvatarItem, index: number) => {
  const { src, name, icon } = avatar
  return (
    <Avatar
      key={index}
      src={src}
      alt={name}
      icon={icon}
      className={avatarGroupItemVariants()}
    />
  )
}

/** 堆叠头像组组件 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      className,
      avatars,
      maxCount = 4,
      onExcessClick,
      ...rest
    } = props

    const visibleAvatars = avatars.slice(0, maxCount)
    const excessCount = avatars.length - maxCount

    const handleExcessClick = useCallback(() => {
      onExcessClick?.()
    }, [onExcessClick])

    return (
      <div
        ref={ref}
        className={cn(avatarGroupVariants(), className)}
        {...rest}
      >
        {visibleAvatars.map((avatar, index) => renderAvatar(avatar, index))}
        {excessCount > 0 && (
          <span
            className={avatarGroupExcessVariants()}
            onClick={handleExcessClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleExcessClick()
              }
            }}
            aria-label={`还有 ${excessCount} 人`}
          >
            +{excessCount}
          </span>
        )}
      </div>
    )
  },
)

AvatarGroup.displayName = 'AvatarGroup'

export type { AvatarGroupProps, AvatarItem } from './types'
export {
  avatarGroupVariants,
  avatarGroupItemVariants,
  avatarGroupExcessVariants,
} from './avatar-group-variants'
