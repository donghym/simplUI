/** 上传组件工具函数 */

/** 文件大小格式化 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const size = sizes[i] ?? 'B'
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${size}`
}

/** 获取文件扩展名 */
export function getFileExtension(filename: string): string {
  const lastDot = filename.lastIndexOf('.')
  if (lastDot === -1 || lastDot === 0) return ''
  return filename.slice(lastDot + 1).toLowerCase()
}

/** 检查文件类型是否匹配 */
export function isFileTypeMatch(file: File, accept: string): boolean {
  if (!accept) return true
  const acceptTypes = accept.split(',').map((t) => t.trim().toLowerCase())
  const extension = getFileExtension(file.name)
  const mimeType = file.type.toLowerCase()

  return acceptTypes.some((acceptType) => {
    if (acceptType.startsWith('.')) {
      return extension === acceptType.slice(1)
    }
    if (acceptType.endsWith('*')) {
      return mimeType.startsWith(acceptType.slice(0, -1))
    }
    return mimeType === acceptType || extension === acceptType
  })
}

/** 检查文件大小是否在限制内 */
export function isFileSizeValid(file: File, maxSize: number): boolean {
  if (maxSize <= 0) return true
  return file.size <= maxSize
}

/** 生成唯一 ID */
export function generateFileId(): string {
  return `file-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

/** 将 File 转为 Base64 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/** 获取图片预览 URL */
export function getImagePreviewUrl(file: File): string {
  if (file.type.startsWith('image/')) {
    return URL.createObjectURL(file)
  }
  return ''
}

/** 清理预览 URL */
export function revokePreviewUrl(url: string): void {
  if (url && url.startsWith('blob:')) {
    URL.revokeObjectURL(url)
  }
}