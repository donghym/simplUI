import React, { forwardRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import type { WatermarkProps } from './types'

export type { WatermarkProps }

function generateWatermarkDataUrl(
  content: string | string[],
  color: string,
  fontSize: number,
  fontFamily: string,
  rotate: number,
  gapX: number,
  gapY: number,
): string {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  const text = Array.isArray(content) ? content.join(' ') : content
  ctx.font = `${fontSize}px ${fontFamily}`
  const metrics = ctx.measureText(text)
  const textWidth = metrics.width
  const textHeight = fontSize

  const rad = (rotate * Math.PI) / 180
  const sin = Math.abs(Math.sin(rad))
  const cos = Math.abs(Math.cos(rad))

  const width = textWidth * cos + textHeight * sin + gapX
  const height = textWidth * sin + textHeight * cos + gapY

  canvas.width = width
  canvas.height = height

  ctx.font = `${fontSize}px ${fontFamily}`
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  ctx.save()
  ctx.translate(width / 2, height / 2)
  ctx.rotate(rad)
  ctx.fillText(text, 0, 0)
  ctx.restore()

  return canvas.toDataURL()
}

/**
 * Watermark 水印组件
 *
 * 用于在页面上添加水印。
 *
 * ### 何时使用
 * - 需要保护页面内容，防止截图泄露
 * - 需要标识页面来源或版权信息
 *
 * ### 示例
 * ```tsx
 * <Watermark content="Confidential">
 *   <div>Page content</div>
 * </Watermark>
 * ```
 */
export const Watermark = forwardRef<HTMLDivElement, WatermarkProps>(({
  content = 'Watermark',
  children,
  style,
  className,
  color = 'rgba(0,0,0,0.12)',
  fontSize = 16,
  fontFamily = 'sans-serif',
  rotate = -22,
  gapX = 100,
  gapY = 100,
  opacity = 1,
  fullScreen = false,
}, ref) => {
  const dataUrl = useMemo(
    () => generateWatermarkDataUrl(content, color, fontSize, fontFamily, rotate, gapX, gapY),
    [content, color, fontSize, fontFamily, rotate, gapX, gapY],
  )

  const watermarkStyle: React.CSSProperties = {
    position: fullScreen ? 'fixed' : 'absolute',
    inset: 0,
    backgroundImage: `url(${dataUrl})`,
    backgroundRepeat: 'repeat',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity,
  } /* 动态背景图+定位，允许保留 */

  return (
    <div
      ref={ref}
      className={cn('sui-watermark relative inline-block w-full', className)}
      style={style}
    >
      {children}
      <div className="sui-watermark__overlay" style={watermarkStyle /* 动态背景图+定位，允许保留 */} />
    </div>
  )
})

Watermark.displayName = 'Watermark'
