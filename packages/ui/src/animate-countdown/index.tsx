import { forwardRef, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../lib/utils'
import {
  animateCountdownVariants,
  countdownDigitClass,
  countdownFlipClass,
} from './animate-countdown-variants'
import type { AnimateCountdownProps } from './types'

/** 计算时间差 */
function getDiff(target: Date) {
  const now = Date.now()
  const diff = target.getTime() - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds, finished: false }
}

/** 翻转数字块 */
function FlipDigit({ value, label }: { value: number; label: string }) {
  const [current, setCurrent] = useState(value)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (value !== current) {
      setFlipping(true)
      const timer = setTimeout(() => {
        setCurrent(value)
        setFlipping(false)
      }, 250)
      return () => clearTimeout(timer)
    }
  }, [value, current])

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={countdownDigitClass}>
        <span
          className={cn(
            countdownFlipClass,
            flipping && 'animate-pulse',
          )}
        >
          {String(current).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

/** 分隔符 */
function Separator() {
  return <span className="text-2xl font-bold text-muted-foreground self-start mt-3">:</span>
}

export const AnimateCountdown = forwardRef<HTMLDivElement, AnimateCountdownProps>((props, ref) => {
  const {
    className,
    variant,
    targetDate,
    format,
    onFinish,
    ...rest
  } = props

  const [diff, setDiff] = useState(() => getDiff(targetDate))
  const finishedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateDiff = useCallback(() => {
    const newDiff = getDiff(targetDate)
    setDiff(newDiff)
    if (newDiff.finished && !finishedRef.current) {
      finishedRef.current = true
      onFinish?.()
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [targetDate, onFinish])

  useEffect(() => {
    updateDiff()
    if (!finishedRef.current) {
      timerRef.current = setInterval(updateDiff, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [updateDiff])

  const { days, hours, minutes, seconds, finished } = diff

  if (format) {
    return (
      <div
        ref={ref}
        className={cn(
          'sui-animate-countdown',
          animateCountdownVariants({ variant }),
          className,
        )}
        {...rest}
      >
        {format({ days, hours, minutes, seconds })}
      </div>
    )
  }

  if (finished) {
    return (
      <div
        ref={ref}
        className={cn(
          'sui-animate-countdown',
          animateCountdownVariants({ variant }),
          className,
        )}
        {...rest}
      >
        <span className="text-lg font-medium text-success-500">已结束</span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        'sui-animate-countdown',
        animateCountdownVariants({ variant }),
        className,
      )}
      {...rest}
    >
      {days > 0 && <FlipDigit value={days} label="天" />}
      {days > 0 && <Separator />}
      <FlipDigit value={hours} label="时" />
      <Separator />
      <FlipDigit value={minutes} label="分" />
      <Separator />
      <FlipDigit value={seconds} label="秒" />
    </div>
  )
})

AnimateCountdown.displayName = 'AnimateCountdown'

export type { AnimateCountdownProps } from './types'
export { animateCountdownVariants } from './animate-countdown-variants'
