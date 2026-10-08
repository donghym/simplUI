import React, { forwardRef, useState, useCallback } from 'react'
import { cn } from '../lib/utils'
import { imageVariants } from './image-variants'
import type { ImageProps } from './types'

export type { ImageProps }

/**
 * Image 图片组件
 *
 * 可预览的图片。
 *
 * ### 何时使用
 * - 需要展示图片时
 * - 需要图片预览功能时
 *
 * ### 示例
 * ```tsx
 * <Image src="https://example.com/image.jpg" alt="example" preview />
 * ```
 */
export const Image = forwardRef<HTMLDivElement, ImageProps>(({
  src,
  alt = '',
  width,
  height,
  placeholder,
  preview = false,
  previewSrc,
  fallback,
  style,
  className,
  onLoad,
  onError,
  ...rest
}, ref) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true)
      onLoad?.(e)
    },
    [onLoad],
  )

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setError(true)
      onError?.(e)
    },
    [onError],
  )

  const handlePreview = useCallback(() => {
    if (preview) setPreviewOpen(true)
  }, [preview])

  const closePreview = useCallback(() => {
    setPreviewOpen(false)
  }, [])

  if (error && fallback) {
    return (
      <div
        className={cn(imageVariants({ error: true }), 'flex items-center justify-center bg-muted', className)}
        style={{ width, height, ...style }}
      >
        {fallback}
      </div>
    )
  }

  return (
    <>
      <div
        ref={ref}
        className={cn(imageVariants({ preview }), className)}
        style={{ width, height, ...style }}
      >
        {!loaded && placeholder && (
          <div
            className="sui-image__placeholder absolute inset-0 flex items-center justify-center bg-muted"
          >
            {placeholder}
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className="object-cover"
          style={{ width, height }}
          onLoad={handleLoad}
          onError={handleError}
          onClick={handlePreview}
          {...rest}
        />
      </div>
      {previewOpen && (
        <div
          className="sui-image-preview fixed inset-0 z-[1080] bg-black/45 flex items-center justify-center cursor-zoom-out"
          onClick={closePreview}
        >
          <img
            src={previewSrc || src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  )
})

Image.displayName = 'Image'