import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { pdfViewerVariants } from './pdf-viewer-variants'

/** PDFViewer 组件属性 */
export interface PDFViewerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onError'>,
    VariantProps<typeof pdfViewerVariants> {
  /** PDF 文件 URL 或 Blob URL */
  src: string
  /** 文件名，用于下载时的默认文件名 */
  fileName?: string
  /** 初始缩放比例，默认 100 */
  defaultScale?: number
  /** 是否显示工具栏，默认 true */
  showToolbar?: boolean
  /** 是否显示页码，默认 true */
  showPageNumber?: boolean
  /** 加载错误回调 */
  onError?: (error: Error) => void
}
