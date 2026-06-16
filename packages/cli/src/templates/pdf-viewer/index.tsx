import { forwardRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { pdfViewerVariants } from './pdf-viewer-variants'
import type { PDFViewerProps } from './types'

/** 缩放比例步进 */
const SCALE_STEP = 25
const SCALE_MIN = 25
const SCALE_MAX = 300

export const PDFViewer = forwardRef<HTMLDivElement, PDFViewerProps>((props, ref) => {
  const {
    className,
    src,
    fileName,
    defaultScale = 100,
    showToolbar = true,
    showPageNumber = true,
    onError,
    ...rest
  } = props

  const [scale, setScale] = useState(defaultScale)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + SCALE_STEP, SCALE_MAX))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - SCALE_STEP, SCALE_MIN))
  }, [])

  const handleFitWidth = useCallback(() => {
    setScale(100)
  }, [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = src
    link.download = fileName ?? 'document.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [src, fileName])

  const handleLoad = useCallback(() => {
    setLoading(false)
    setHasError(false)
  }, [])

  const handleError = useCallback(() => {
    setLoading(false)
    setHasError(true)
    onError?.(new Error('PDF 加载失败'))
  }, [onError])

  return (
    <div
      ref={ref}
      className={cn(pdfViewerVariants(), className)}
      {...rest}
    >
      {/* 工具栏 */}
      {showToolbar && (
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded px-2 py-1 text-xs font-medium text-foreground hover:bg-muted disabled:opacity-50"
              onClick={handleZoomOut}
              disabled={scale <= SCALE_MIN}
              aria-label="缩小"
            >
              -
            </button>
            <span className="min-w-[3rem] text-center text-xs text-muted-foreground">
              {scale}%
            </span>
            <button
              type="button"
              className="rounded px-2 py-1 text-xs font-medium text-foreground hover:bg-muted disabled:opacity-50"
              onClick={handleZoomIn}
              disabled={scale >= SCALE_MAX}
              aria-label="放大"
            >
              +
            </button>
            <button
              type="button"
              className="rounded px-2 py-1 text-xs font-medium text-foreground hover:bg-muted"
              onClick={handleFitWidth}
              aria-label="适应宽度"
            >
              适应
            </button>
          </div>

          <div className="flex items-center gap-2">
            {showPageNumber && (
              <span className="text-xs text-muted-foreground">
                {fileName ?? 'PDF 文档'}
              </span>
            )}
            <button
              type="button"
              className="rounded px-2 py-1 text-xs font-medium text-foreground hover:bg-muted"
              onClick={handleDownload}
              aria-label="下载"
            >
              下载
            </button>
          </div>
        </div>
      )}

      {/* 内容区 */}
      <div className="relative min-h-[400px] bg-muted/30">
        {/* 加载状态 */}
        {loading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
              <span className="text-xs text-muted-foreground">加载中...</span>
            </div>
          </div>
        )}

        {/* 错误状态 */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-danger-500">
              <span className="text-sm">PDF 加载失败</span>
              <button
                type="button"
                className="rounded px-3 py-1 text-xs font-medium text-primary-600 hover:bg-muted"
                onClick={() => {
                  setHasError(false)
                  setLoading(true)
                }}
              >
                重试
              </button>
            </div>
          </div>
        )}

        {/* PDF 嵌入 */}
        <iframe
          src={src}
          className="h-full w-full"
          style={{ minHeight: 400, transform: `scale(${scale / 100})`, transformOrigin: 'top left', width: `${10000 / scale}%`, height: `${10000 / scale}%` } /* iframe 动态缩放计算，允许保留 */}
          onLoad={handleLoad}
          onError={handleError}
          title={fileName ?? 'PDF 预览'}
        />
      </div>
    </div>
  )
})

PDFViewer.displayName = 'PDFViewer'

export type { PDFViewerProps } from './types'
export { pdfViewerVariants } from './pdf-viewer-variants'
