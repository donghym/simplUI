import { forwardRef, useState, useCallback, useMemo } from 'react'
import { Star } from 'lucide-react'
import { cn } from '../lib/utils'
import { rateVariants, starVariants } from './rate-variants'
import type { RateProps, StarProps } from './types'

/** 渲染单个星星 */
function StarItem({
  index, value, allowHalf, readonly, disabled, character, onHover, onClick,
}: StarProps) {
  const isFilled = value >= index + 1
  const isHalf = allowHalf && value > index && value < index + 1

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (readonly || disabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const isLeftHalf = e.clientX - rect.left < rect.width / 2
    onHover?.(isLeftHalf && allowHalf ? index + 0.5 : index + 1)
  }

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (readonly || disabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const isLeftHalf = e.clientX - rect.left < rect.width / 2
    onClick?.(isLeftHalf && allowHalf ? index + 0.5 : index + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (readonly || disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.(index + 1)
    }
  }

  const icon = character ?? <Star className="h-6 w-6 fill-current" />

  return (
    <span
      role="radio"
      aria-label={`${index + 1}星`}
      aria-checked={isHalf ? 'mixed' as const : isFilled}
      tabIndex={disabled || readonly ? -1 : 0}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => onHover?.(0)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        starVariants({ filled: isFilled || isHalf, readonly }),
        'relative',
      )}
    >
      {/* 背景星（灰色） */}
      <span className="block">{icon}</span>
      {/* 填充星（覆盖层） */}
      {(isFilled || isHalf) && (
        <span
          className={cn(
            'absolute inset-0 overflow-hidden',
            isHalf && 'w-1/2',
          )}
          style={{ clipPath: isHalf ? 'inset(0 50% 0 0)' : undefined } /* 动态裁剪路径，允许保留 */}
        >
          <span className="text-warning-500">{icon}</span>
        </span>
      )}
    </span>
  )
}

export const Rate = forwardRef<HTMLDivElement, RateProps>((props, ref) => {
  const {
    className, value, defaultValue = 0, onChange,
    count = 5, allowHalf, readonly, disabled, character, tooltips,
    ...rest
  } = props

  const [innerValue, setInnerValue] = useState(defaultValue)
  const [hoverValue, setHoverValue] = useState(0)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : innerValue
  const displayValue = hoverValue > 0 ? hoverValue : currentValue

  const handleClick = useCallback(
    (newValue: number) => {
      if (readonly || disabled) return
      if (!isControlled) setInnerValue(newValue)
      onChange?.(newValue)
    },
    [isControlled, onChange, readonly, disabled],
  )

  const handleHover = useCallback((newValue: number) => {
    if (readonly || disabled) return
    setHoverValue(newValue)
  }, [readonly, disabled])

  const stars = useMemo(
    () => Array.from({ length: count }, (_, i) => i),
    [count],
  )

  // 当前提示文本
  const tooltip = useMemo(() => {
    if (!tooltips || tooltips.length === 0) return null
    const index = Math.ceil(displayValue) - 1
    return index >= 0 && index < tooltips.length ? tooltips[index] : null
  }, [tooltips, displayValue])

  return (
    <div
      ref={ref}
      role="radiogroup"
      aria-label="评分"
      aria-disabled={disabled}
      className={cn('sui-rate', rateVariants({ disabled }), className)}
      {...rest}
    >
      {stars.map((index) => (
        <StarItem
          key={index}
          index={index}
          value={displayValue}
          allowHalf={allowHalf}
          readonly={readonly}
          disabled={disabled}
          character={character}
          onHover={handleHover}
          onClick={handleClick}
        />
      ))}
      {tooltip && (
        <span className="ml-2 text-sm text-muted-foreground">{tooltip}</span>
      )}
    </div>
  )
})
Rate.displayName = 'Rate'

export type { RateProps } from './types'
export { rateVariants, starVariants } from './rate-variants'
