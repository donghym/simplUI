import React, { forwardRef, useState, useCallback, useEffect, useMemo } from 'react'
import { cn } from '../lib/utils'
import type { TourProps } from './types'
import {
  maskVariants,
  highlightVariants,
  popupVariants,
  titleVariants,
  descriptionVariants,
  footerVariants,
  stepCounterVariants,
  btnGroupVariants,
  btnVariants,
  progressTrackVariants,
  progressFillVariants,
} from './tour-variants'

export type { TourProps, TourStep } from './types'

/** 获取目标元素 */
function getTargetElement(target?: string | (() => HTMLElement | null)): HTMLElement | null {
  if (!target) return null
  if (typeof target === 'string') return document.querySelector(target) as HTMLElement | null
  return target()
}

/** 检查 localStorage 是否已记录完成 */
function isTourFinished(storageKey?: string): boolean {
  if (!storageKey) return false
  try { return localStorage.getItem(storageKey) === 'finished' } catch { return false }
}

/** 标记导览已完成 */
function markTourFinished(storageKey?: string): void {
  if (!storageKey) return
  try { localStorage.setItem(storageKey, 'finished') } catch { /* 存储不可用时静默忽略 */ }
}

/**
 * Tour 漫游式引导组件
 * 用于引导用户了解产品功能的新手引导。
 */
export const Tour = forwardRef<HTMLDivElement, TourProps>(({
  steps,
  open: openProp = false,
  current: controlledCurrent,
  defaultCurrent = 0,
  onChange,
  onClose,
  onFinish,
  storageKey,
  showProgress = true,
  className,
}, ref) => {
  const isControlled = controlledCurrent !== undefined
  const [internalCurrent, setInternalCurrent] = useState(defaultCurrent)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  const current = isControlled ? controlledCurrent! : internalCurrent
  const step = steps[current]

  /* localStorage 记忆：若已标记完成则不渲染 */
  const open = openProp && !isTourFinished(storageKey)

  useEffect(() => {
    if (!open || !step?.target) { setTargetRect(null); return }
    const el = getTargetElement(step.target)
    if (el) setTargetRect(el.getBoundingClientRect())
  }, [open, current, step])

  const goNext = useCallback(() => {
    if (current < steps.length - 1) {
      const next = current + 1
      if (!isControlled) setInternalCurrent(next)
      onChange?.(next)
    } else {
      markTourFinished(storageKey)
      onFinish?.()
      onClose?.()
    }
  }, [current, steps.length, isControlled, onChange, onFinish, onClose, storageKey])

  const goPrev = useCallback(() => {
    if (current > 0) {
      const prev = current - 1
      if (!isControlled) setInternalCurrent(prev)
      onChange?.(prev)
    }
  }, [current, isControlled, onChange])

  /* 仅保留定位相关的 style */
  const popupPositionStyle = useMemo<React.CSSProperties>(() => {
    if (targetRect) {
      return {
        position: 'fixed',
        left: targetRect.left + targetRect.width / 2,
        top: targetRect.bottom + 8,
        transform: 'translateX(-50%)',
        zIndex: 1080,
      }
    }
    return {
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1080,
    }
  }, [targetRect])

  const highlightStyle = useMemo<React.CSSProperties | null>(() => {
    if (!targetRect) return null
    return {
      position: 'fixed',
      left: targetRect.left - 4,
      top: targetRect.top - 4,
      width: targetRect.width + 8,
      height: targetRect.height + 8,
      zIndex: 1071,
    }
  }, [targetRect])

  // 计算遮罩层的 clipPath，在目标元素位置镂空，允许点击穿透
  const maskClipPath = useMemo(() => {
    if (!targetRect) return undefined
    const x = targetRect.left - 4
    const y = targetRect.top - 4
    const w = targetRect.width + 8
    const h = targetRect.height + 8
    // 使用 polygon 创建一个覆盖整个屏幕但中间镂空的遮罩
    return `polygon(
      0% 0%, 100% 0%, 100% 100%, 0% 100%,
      0% ${y}px, ${x}px ${y}px, ${x}px ${y + h}px, ${x + w}px ${y + h}px, ${x + w}px ${y}px, 0% ${y}px
    )`
  }, [targetRect])

  const progressPercent = ((current + 1) / steps.length) * 100

  if (!open) return null

  return (
    <>
      {/* 遮罩层 - 使用 clipPath 在目标元素位置镂空，允许点击穿透到目标元素 */}
      <div
        className={cn(maskVariants())}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          clipPath: maskClipPath,
        }}
        onClick={onClose}
      />

      {/* 高亮框 — 定位计算 style 允许保留 */}
      {targetRect && highlightStyle && (
        <div
          className={cn(highlightVariants(), 'shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]')}
          style={highlightStyle /* 定位计算 style 允许保留 */}
        />
      )}

      {/* 弹窗 — 定位计算 style 允许保留 */}
      <div
        ref={ref}
        className={cn(popupVariants(), className)}
        style={popupPositionStyle /* 定位计算 style 允许保留 */}
      >
        {/* 进度条 */}
        {showProgress && (
          <div className={cn(progressTrackVariants())}>
            <div
              className={cn(progressFillVariants())}
              style={{ width: `${progressPercent}%` } /* 动态百分比，允许保留 */}
            />
          </div>
        )}

        {/* 标题 */}
        {step?.title && (
          <div className={cn(titleVariants(), step.className)}>{step.title}</div>
        )}

        {/* 描述 */}
        {step?.description && (
          <div className={cn(descriptionVariants())}>{step.description}</div>
        )}

        {/* 底部操作栏 */}
        <div className={cn(footerVariants())}>
          <span className={cn(stepCounterVariants())}>
            {current + 1} / {steps.length}
          </span>
          <div className={cn(btnGroupVariants())}>
            {current > 0 && (
              <button
                type="button"
                className={cn(btnVariants({ variant: 'default' }))}
                onClick={goPrev}
              >
                上一步
              </button>
            )}
            <button
              type="button"
              className={cn(btnVariants({ variant: 'primary' }))}
              onClick={goNext}
            >
              {current === steps.length - 1 ? '完成' : '下一步'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
})

Tour.displayName = 'Tour'
