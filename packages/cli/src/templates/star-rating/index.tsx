import { forwardRef, useState, useCallback, useMemo } from 'react'
import { Star } from 'lucide-react'
import { cn } from '../lib/utils'
import { starRatingVariants, starRatingItemVariants } from './star-rating-variants'
import type { StarRatingProps } from './types'

export const StarRating = forwardRef<HTMLDivElement, StarRatingProps>((props, ref) => {
  const {
    className,
    value: valueProp,
    defaultValue = 0,
    onChange,
    allowHalf = true,
    disabled,
    readonly,
    count = 5,
    character,
    ...rest
  } = props

  const isControlled = valueProp !== undefined
  const [innerValue, setInnerValue] = useState(defaultValue)
  const [hoverValue, setHoverValue] = useState(0)

  const currentValue = isControlled ? valueProp : innerValue
  const displayValue = hoverValue > 0 ? hoverValue : currentValue

  const handleClick = useCallback(
    (newValue: number) => {
      if (readonly || disabled) return
      if (!isControlled) setInnerValue(newValue)
      onChange?.(newValue)
    },
    [isControlled, onChange, readonly, disabled],
  )

  const handleHover = useCallback(
    (newValue: number) => {
      if (readonly || disabled) return
      setHoverValue(newValue)
    },
    [readonly, disabled],
  )

  const stars = useMemo(
    () => Array.from({ length: count }, (_, i) => i),
    [count],
  )

  const icon = character
    ? <span className="text-2xl leading-none">{character}</span>
    : <Star className="h-6 w-6 fill-current" />

  return (
    <div
      ref={ref}
      role="radiogroup"
      aria-label="评分"
      aria-disabled={disabled}
      className={cn(
        'sui-star-rating',
        starRatingVariants({ disabled }),
        className,
      )}
      onMouseLeave={() => setHoverValue(0)}
      {...rest}
    >
      {stars.map((index) => {
        const isFilled = displayValue >= index + 1
        const isHalf = allowHalf && displayValue > index && displayValue < index + 1

        const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const isLeftHalf = e.clientX - rect.left < rect.width / 2
          handleHover(isLeftHalf && allowHalf ? index + 0.5 : index + 1)
        }

        const handleStarClick = (e: React.MouseEvent<HTMLSpanElement>) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const isLeftHalf = e.clientX - rect.left < rect.width / 2
          handleClick(isLeftHalf && allowHalf ? index + 0.5 : index + 1)
        }

        return (
          <span
            key={index}
            role="radio"
            aria-checked={isFilled}
            tabIndex={disabled || readonly ? -1 : 0}
            onMouseMove={handleMouseMove}
            onClick={handleStarClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleClick(index + 1)
              }
            }}
            className={cn(
              starRatingItemVariants({ readonly }),
            )}
          >
            {/* 背景星（灰色） */}
            <span className="block text-muted-foreground/30">{icon}</span>
            {/* 填充星（覆盖层） */}
            {(isFilled || isHalf) && (
              <span
                className={cn(
                  'absolute inset-0 overflow-hidden text-warning-500',
                  isHalf && 'w-1/2',
                )}
              >
                <span className="transition-transform duration-200">{icon}</span>
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
})

StarRating.displayName = 'StarRating'

export type { StarRatingProps } from './types'
export { starRatingVariants, starRatingItemVariants } from './star-rating-variants'
