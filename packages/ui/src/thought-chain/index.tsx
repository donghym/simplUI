import { forwardRef, useState, useCallback } from 'react'
import { Loader2, Check, X, Minus, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  thoughtChainVariants,
  thoughtStepVariants,
  thoughtStepIconVariants,
  thoughtStepContentVariants,
} from './thought-chain-variants'
import type { ThoughtChainProps, ThoughtStep, ThoughtStepStatus } from './types'

/** 状态图标映射 */
const statusIcon: Record<ThoughtStepStatus, React.ReactNode> = {
  waiting: <Minus className="h-3.5 w-3.5" />,
  running: <Loader2 className="h-3.5 w-3.5 animate-spin" />,
  done: <Check className="h-3.5 w-3.5" />,
  error: <X className="h-3.5 w-3.5" />,
}

/** 单个步骤组件 */
function StepItem({
  step,
  isLast,
  collapsible,
  expanded,
  onToggle,
}: {
  step: ThoughtStep
  isLast: boolean
  collapsible: boolean
  expanded: boolean
  onToggle: () => void
}) {
  const hasContent = step.content !== undefined
  const isClickable = collapsible && hasContent

  return (
    <div className={cn(thoughtStepVariants())}>
      {/* 连接线 */}
      {!isLast && (
        <div className="absolute left-[13px] top-7 h-[calc(100%-28px)] w-0.5 bg-border" />
      )}

      {/* 状态图标 */}
      <div className={cn(thoughtStepIconVariants({ status: step.status }))}>
        {statusIcon[step.status]}
      </div>

      {/* 内容区 */}
      <div className={cn(thoughtStepContentVariants())}>
        <div
          className={cn(
            'text-sm font-medium text-foreground',
            step.status === 'waiting' && 'text-muted-foreground',
            isClickable && 'cursor-pointer select-none',
          )}
          onClick={isClickable ? onToggle : undefined}
          role={isClickable ? 'button' : undefined}
          tabIndex={isClickable ? 0 : undefined}
          aria-expanded={isClickable ? expanded : undefined}
        >
          <span className="flex items-center gap-2">
            {step.title}
            {isClickable && (
              <ChevronDown
                size={14}
                className={cn(
                  'text-muted-foreground transition-transform',
                  expanded && 'rotate-180',
                )}
              />
            )}
          </span>
        </div>

        {/* 展开内容 */}
        {hasContent && expanded && (
          <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {step.content}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * ThoughtChain AI 思维链
 *
 * 拆解 AI 思考步骤，支持分步加载、展开/收起。
 */
const ThoughtChain = forwardRef<HTMLDivElement, ThoughtChainProps>(({
  steps,
  collapsible = true,
  defaultExpandAll = false,
  className,
  ...rest
}, ref) => {
  // 初始化展开状态
  const [expandedSet, setExpandedSet] = useState<Set<number>>(() => {
    if (defaultExpandAll) {
      return new Set(steps.map((_, i) => i))
    }
    return new Set<number>()
  })

  const handleToggle = useCallback((index: number) => {
    setExpandedSet((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }, [])

  return (
    <div ref={ref} className={cn(thoughtChainVariants(), className)} {...rest}>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          step={step}
          isLast={index === steps.length - 1}
          collapsible={collapsible}
          expanded={expandedSet.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
})

ThoughtChain.displayName = 'ThoughtChain'

export { ThoughtChain }
export type { ThoughtChainProps, ThoughtStep, ThoughtStepStatus } from './types'
export { thoughtChainVariants } from './thought-chain-variants'

export default ThoughtChain
