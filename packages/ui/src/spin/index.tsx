import { forwardRef, useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  spinVariants,
  spinIconVariants,
  spinTipVariants,
  spinContainerVariants,
  spinMaskVariants,
} from './spin-variants'
import type { SpinProps, SpinSize } from './types'

/**
 * 默认加载指示器
 */
function DefaultIndicator({ spinSize }: { spinSize: SpinSize }) {
  return <Loader2 className={spinIconVariants({ spinSize })} aria-hidden="true" />
}

/**
 * Spin 加载指示器
 *
 * 用于显示加载状态，支持独立使用和包裹内容两种模式。
 * 独立使用时直接显示加载动画，包裹内容时显示遮罩层。
 * 支持延迟显示，避免快速加载时的闪烁。
 */
const Spin = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    className,
    spinning = true,
    delay = 0,
    indicator,
    children,
    tip,
    spinSize = 'default',
    ...rest
  } = props

  const [delayedSpinning, setDelayedSpinning] = useState(delay > 0 ? false : spinning)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  // 处理延迟显示逻辑
  useEffect(() => {
    if (delay > 0) {
      if (spinning) {
        // spinning 变为 true 时，延迟 delay 毫秒后再显示
        timerRef.current = setTimeout(() => {
          setDelayedSpinning(true)
        }, delay)
      } else {
        // spinning 变为 false 时，立即隐藏
        if (timerRef.current) {
          clearTimeout(timerRef.current)
          timerRef.current = undefined
        }
        setDelayedSpinning(false)
      }
    } else {
      setDelayedSpinning(spinning)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = undefined
      }
    }
  }, [spinning, delay])

  // 渲染加载指示器
  const renderIndicator = () => (
    <div
      className={cn(spinVariants({ spinSize: spinSize ?? 'default' }), className)}
      role="status"
      aria-live="polite"
      aria-busy={delayedSpinning || undefined}
      {...rest}
    >
      {indicator || <DefaultIndicator spinSize={spinSize ?? 'default'} />}
      {tip && <span className={spinTipVariants({ spinSize: spinSize ?? 'default' })}>{tip}</span>}
    </div>
  )

  // 无 children 时，独立显示加载指示器
  if (!children) {
    if (!delayedSpinning) {
      return null
    }
    return renderIndicator()
  }

  // 有 children 时，作为容器包裹内容
  return (
    <div
      ref={ref}
      className={cn(spinContainerVariants({ spinning: delayedSpinning }))}
      aria-busy={delayedSpinning || undefined}
    >
      {children}
      {delayedSpinning && (
        <div className={cn(spinMaskVariants({ visible: delayedSpinning }))}>
          <div className={cn(spinVariants({ spinSize: spinSize ?? 'default' }), className)} role="status" aria-live="polite" {...rest}>
            {indicator || <DefaultIndicator spinSize={spinSize ?? 'default'} />}
            {tip && <span className={spinTipVariants({ spinSize: spinSize ?? 'default' })}>{tip}</span>}
          </div>
        </div>
      )}
    </div>
  )
})

Spin.displayName = 'Spin'

export { Spin }
export type { SpinProps, SpinSize } from './types'
export { spinVariants, spinIconVariants, spinTipVariants, spinContainerVariants, spinMaskVariants } from './spin-variants'

export default Spin
