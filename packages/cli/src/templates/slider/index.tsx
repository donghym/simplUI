import { forwardRef, useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { cn } from '../lib/utils'
import { sliderVariants, sliderTrackVariants, sliderHandleVariants, sliderMarkVariants } from './slider-variants'
import { clamp, snapToStep } from './slider-utils'
import type { SliderProps } from './types'

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    className, value, defaultValue = 0, onChange,
    min = 0, max = 100, step = 1, disabled, range, marks, showTooltip = true, componentSize,
    ...rest
  } = props

  const isControlled = value !== undefined
  const initialValue = useMemo(() => isControlled ? value : defaultValue, [isControlled, value, defaultValue])
  const [innerValue, setInnerValue] = useState<number | [number, number]>(initialValue)
  const [dragging, setDragging] = useState<number | null>(null)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const currentValue = isControlled ? value : innerValue
  const containerRef = useRef<HTMLDivElement>(null)

  const getValues = useCallback((): [number, number?] => {
    if (range && Array.isArray(currentValue)) return [currentValue[0], currentValue[1]]
    return [currentValue as number]
  }, [currentValue, range])

  const [startValue, endValue] = useMemo(() => {
    const v = getValues()
    return [v[0], v[1] ?? v[0]]
  }, [getValues])

  const getPercent = useCallback((val: number) => ((val - min) / (max - min)) * 100, [min, max])
  const getValueFromPosition = useCallback((position: number) => {
    const percent = clamp(position, 0, 100) / 100
    return snapToStep(min + percent * (max - min), step, min)
  }, [min, max, step])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (disabled || dragging === null || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const position = ((e.clientX - rect.left) / rect.width) * 100
    const newValue = getValueFromPosition(position)

    if (range && Array.isArray(currentValue)) {
      const [start, end] = currentValue
      const newValues: [number, number] = dragging === 0
        ? [Math.min(newValue, end), end]
        : [start, Math.max(newValue, start)]
      if (!isControlled) setInnerValue(newValues)
      onChange?.(newValues)
    } else {
      if (!isControlled) setInnerValue(newValue)
      onChange?.(newValue)
    }
  }, [disabled, dragging, getValueFromPosition, range, currentValue, isControlled, onChange])

  const handleMouseUp = useCallback(() => setDragging(null), [])
  const startDrag = useCallback((index: number) => (e: React.MouseEvent) => {
    if (disabled) return
    e.preventDefault()
    setDragging(index)
  }, [disabled])

  useEffect(() => {
    if (dragging !== null) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [dragging, handleMouseMove, handleMouseUp])

  const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const position = ((e.clientX - rect.left) / rect.width) * 100
    const newValue = getValueFromPosition(position)

    if (range && Array.isArray(currentValue)) {
      const [start, end] = currentValue
      const newValues: [number, number] = newValue < (start + end) / 2 ? [newValue, end] : [start, newValue]
      if (!isControlled) setInnerValue(newValues)
      onChange?.(newValues)
    } else {
      if (!isControlled) setInnerValue(newValue)
      onChange?.(newValue)
    }
  }, [disabled, getValueFromPosition, range, currentValue, isControlled, onChange])

  const renderTooltip = (val: number, index: number) => {
    if (!showTooltip) return null
    const isVisible = dragging === index || hoverIndex === index
    return (
      <span
        className={cn(
          'absolute -top-8 -translate-x-1/2 px-2 py-1 text-xs bg-foreground text-white rounded transition-opacity duration-150',
          isVisible ? 'opacity-100' : 'opacity-0',
        )}
        style={{ left: `${getPercent(val)}%` }}
      >
        {val}
      </span>
    )
  }

  return (
    <div ref={containerRef} className={cn('sui-slider', sliderVariants({ disabled, componentSize }), className)} onClick={handleTrackClick} {...rest}>
      <div
        className={cn(sliderTrackVariants({ disabled }))}
        style={{ left: `${getPercent(startValue)}%`, width: `${getPercent(endValue) - getPercent(startValue)}%` }}
      />
      {marks?.map((mark) => {
        const percent = getPercent(mark.value)
        const isActive = mark.value >= startValue && mark.value <= endValue
        return (
          <div key={mark.value} className="absolute" style={{ left: `${percent}%` }}>
            <div className={cn(sliderMarkVariants({ active: isActive }))} />
            {mark.label && <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">{mark.label}</span>}
          </div>
        )
      })}
      <div ref={ref}>
        {renderTooltip(startValue, 0)}
        <div
          role="slider"
          aria-label="滑块"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={startValue}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onMouseDown={startDrag(0)}
          onMouseEnter={() => { if (!disabled) setHoverIndex(0) }}
          onMouseLeave={() => { if (!disabled) setHoverIndex(null) }}
          className={cn(sliderHandleVariants({ disabled, componentSize }))}
          style={{ left: `${getPercent(startValue)}%` }}
        />
        {range && (
          <>
            {renderTooltip(endValue, 1)}
            <div
              role="slider"
              aria-label="滑块"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={endValue}
              aria-disabled={disabled}
              tabIndex={disabled ? -1 : 0}
              onMouseDown={startDrag(1)}
              onMouseEnter={() => { if (!disabled) setHoverIndex(1) }}
              onMouseLeave={() => { if (!disabled) setHoverIndex(null) }}
              className={cn(sliderHandleVariants({ disabled, componentSize }))}
              style={{ left: `${getPercent(endValue)}%` }}
            />
          </>
        )}
      </div>
    </div>
  )
})
Slider.displayName = 'Slider'

export type { SliderProps, SliderMark } from './types'
export { sliderVariants, sliderTrackVariants, sliderHandleVariants, sliderMarkVariants } from './slider-variants'
