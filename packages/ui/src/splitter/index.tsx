import React, { forwardRef, useState, useCallback, useRef, Children, isValidElement, useMemo } from 'react'
import { cn } from '../lib/utils'
import { splitterVariants, splitterBarVariants } from './splitter-variants'
import type { SplitterProps, SplitterPanelProps } from './types'

export type { SplitterProps, SplitterPanelProps }

/**
 * SplitterPanel 分隔面板项
 */
export const SplitterPanel = forwardRef<HTMLDivElement, SplitterPanelProps>(({
  children,
  style,
  className,
}, ref) => {
  return (
    <div ref={ref} className={cn('sui-splitter-panel flex-1 overflow-auto', className)} style={style}>
      {children}
    </div>
  )
})

SplitterPanel.displayName = 'SplitterPanel'

/**
 * Splitter 分隔面板组件
 *
 * 用于分割页面区域，支持拖拽调整大小。
 *
 * ### 何时使用
 * - 需要拖拽调整区域大小时
 * - 需要并排或上下排列多个面板时
 *
 * ### 示例
 * ```tsx
 * <Splitter>
 *   <Splitter.Panel>Left</Splitter.Panel>
 *   <Splitter.Panel>Right</Splitter.Panel>
 * </Splitter>
 * ```
 */
const Splitter = forwardRef<HTMLDivElement, SplitterProps>(({
  layout = 'horizontal',
  children,
  style,
  className,
}, ref) => {
  const isHorizontal = layout === 'horizontal'
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [sizes, setSizes] = useState<number[]>([])
  const draggingRef = useRef<{ index: number; startPos: number; startSizes: number[] } | null>(null)

  const panels = useMemo(() => {
    return Children.toArray(children).filter(
      (child): child is React.ReactElement<SplitterPanelProps> =>
        isValidElement(child) && child.type === SplitterPanel,
    )
  }, [children])

  const panelCount = panels.length

  const handleMouseDown = useCallback(
    (index: number, e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const total = isHorizontal ? rect.width : rect.height
      const currentSizes = panels.map((_, i) => {
        if (sizes[i] !== undefined) return sizes[i]
        return total / panelCount
      })
      draggingRef.current = {
        index,
        startPos: isHorizontal ? e.clientX : e.clientY,
        startSizes: currentSizes,
      }
    },
    [isHorizontal, panels, panelCount, sizes],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const dragState = draggingRef.current
      if (!dragState || !containerRef.current) return
      const { index, startPos, startSizes } = dragState
      const rect = containerRef.current.getBoundingClientRect()
      const total = isHorizontal ? rect.width : rect.height
      const delta = (isHorizontal ? e.clientX : e.clientY) - startPos

      const newSizes = [...startSizes]
      const currentSize = startSizes[index] ?? 0
      const nextSize = startSizes[index + 1] ?? 0
      newSizes[index] = Math.max(50, Math.min(total - 50, currentSize + delta))
      newSizes[index + 1] = Math.max(50, Math.min(total - 50, nextSize - delta))

      setSizes(newSizes)
    },
    [isHorizontal],
  )

  const handleMouseUp = useCallback(() => {
    draggingRef.current = null
  }, [])

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return (
    <div
      ref={(el) => { containerRef.current = el; if (ref) { if (typeof ref === 'function') { ref(el); } else { const r = ref; r.current = el; } } }}
      className={cn(splitterVariants({ layout }), className)}
      style={style}
    >
      {panels.map((panel, index) => (
        <React.Fragment key={index}>
          <div
            className="sui-splitter-panel-wrap overflow-auto"
            style={{
              flex: sizes[index] !== undefined ? `0 0 ${sizes[index]}px` : `1 1 ${100 / panelCount}%`,
            }}
          >
            {panel}
          </div>
          {index < panelCount - 1 && (
            <div
              className={splitterBarVariants({ layout })}
              onMouseDown={(e) => handleMouseDown(index, e)}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
})

Splitter.displayName = 'Splitter'
const SplitterWithPanel = Object.assign(Splitter, { Panel: SplitterPanel })
export { SplitterWithPanel as Splitter }
