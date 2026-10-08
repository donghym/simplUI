import { forwardRef, useState, useRef, useCallback, type DragEvent, type MouseEvent, type ChangeEvent } from 'react'
import { UploadIcon, X, FileIcon, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { uploadAreaVariants, uploadListItemVariants } from './upload-variants'
import { fileToUploadFile, generateThumbUrl } from './upload-utils'
import type { UploadProps, UploadFileStatus } from './types'
import type { UploadFile } from './upload-types'

export const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    className, fileList: fileListProp, defaultFileList = [], onChange, customRequest,
    multiple = false, accept, maxSize, maxCount, beforeUpload, disabled = false,
    listType = 'text', onPreview, onRemove, children, dragClassName, ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null!)
  const [innerFileList, setInnerFileList] = useState<UploadFile[]>(defaultFileList)
  const [dragOver, setDragOver] = useState(false)
  const isControlled = fileListProp !== undefined
  const fileList = isControlled ? fileListProp : innerFileList
  const fileListRef = useRef(fileList)
  fileListRef.current = fileList

  const updateFileList = useCallback((newList: UploadFile[], changedFile: UploadFile) => {
    fileListRef.current = newList
    if (!isControlled) setInnerFileList(newList)
    onChange?.({ file: changedFile, fileList: newList })
  }, [isControlled, onChange])

  const patchFile = useCallback((uid: string, patch: Partial<UploadFile>): [UploadFile[], UploadFile] | null => {
    const cl = [...fileListRef.current]
    const i = cl.findIndex((f) => f.uid === uid)
    if (i === -1 || !cl[i]) return null
    const updated = { ...cl[i]!, ...patch }
    cl[i] = updated
    return [cl, updated]
  }, [])

  const doUpload = useCallback((uploadFile: UploadFile, file: File) => {
    const result = patchFile(uploadFile.uid, { status: 'uploading', percent: 0 })
    if (result) updateFileList(result[0], result[1])
    if (customRequest) {
      customRequest({
        file,
        onProgress: (p) => { const r = patchFile(uploadFile.uid, { percent: p }); if (r) updateFileList(r[0], r[1]) },
        onSuccess: (resp) => { const r = patchFile(uploadFile.uid, { status: 'done', percent: 100, response: resp }); if (r) updateFileList(r[0], r[1]) },
        onError: (err) => { const r = patchFile(uploadFile.uid, { status: 'error', error: err }); if (r) updateFileList(r[0], r[1]) },
      })
    } else {
      const r = patchFile(uploadFile.uid, { status: 'done', percent: 100 })
      if (r) updateFileList(r[0], r[1])
    }
  }, [customRequest, patchFile, updateFileList])

  const processFiles = useCallback(async (files: FileList | File[]) => {
    if (disabled) return
    const fileArray = Array.from(files)
    const currentList = fileListRef.current
    if (maxCount !== undefined) {
      const allowed = maxCount - currentList.length
      if (allowed <= 0) return
      fileArray.splice(allowed)
    }
    for (const file of fileArray) {
      if (maxSize !== undefined && file.size > maxSize) continue
      if (beforeUpload) {
        const originFiles = currentList.map((f) => f.originFileObj).filter(Boolean) as File[]
        if (await beforeUpload(file, originFiles) === false) continue
      }
      const uploadFile = fileToUploadFile(file)
      try { uploadFile.thumbUrl = await generateThumbUrl(file) } catch { /* 缩略图失败不影响上传 */ }
      const newList = [...fileListRef.current, uploadFile]
      updateFileList(newList, uploadFile)
      doUpload(uploadFile, file)
    }
  }, [disabled, maxCount, maxSize, beforeUpload, updateFileList, doUpload])

  const handleDragEnter = useCallback((e: DragEvent) => { e.preventDefault(); if (!disabled) setDragOver(true) }, [disabled])
  const handleDragOver = useCallback((e: DragEvent) => { e.preventDefault() }, [])
  const handleDragLeave = useCallback((e: DragEvent) => { e.preventDefault(); setDragOver(false) }, [])
  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault(); setDragOver(false)
    if (!disabled && e.dataTransfer.files.length > 0) processFiles(e.dataTransfer.files)
  }, [disabled, processFiles])

  const handleAreaClick = useCallback(() => { if (!disabled) inputRef.current?.click() }, [disabled])
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) { processFiles(e.target.files); e.target.value = '' }
  }, [processFiles])

  const handleRemove = useCallback(async (file: UploadFile, e: MouseEvent) => {
    e.stopPropagation()
    if (disabled) return
    if (onRemove) {
      const result = onRemove(file)
      if (result === false) return
      if (result instanceof Promise && await result === false) return
    }
    const newList = fileListRef.current.filter((f) => f.uid !== file.uid)
    updateFileList(newList, file)
  }, [disabled, onRemove, updateFileList])

  const handlePreview = useCallback((file: UploadFile, e: MouseEvent) => { e.stopPropagation(); onPreview?.(file) }, [onPreview])

  function renderFileItem(file: UploadFile): JSX.Element {
    const status: UploadFileStatus = file.status ?? 'default'
    const hasThumb = listType === 'picture' && Boolean(file.thumbUrl)

    if (listType === 'picture-card') {
      const hasImage = Boolean(file.thumbUrl) && status !== 'error'
      return (
        <div key={file.uid} className={cn(
          'relative flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-md border bg-white',
          status === 'uploading' && 'border-primary-300', status === 'done' && 'border-success-300',
          status === 'error' && 'border-danger-300 bg-danger-50', status === 'default' && 'border-border',
        )}>
          {hasImage ? (
            <>
              <img src={file.thumbUrl} alt={file.name} className="h-full w-full rounded-md object-cover" />
              {status === 'uploading' && <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/30"><Loader2 className="h-6 w-6 animate-spin text-white" /></div>}
            </>
          ) : (
            <div className="flex flex-col items-center gap-1 text-muted-foreground">
              {status === 'uploading' ? <Loader2 className="h-6 w-6 animate-spin" />
                : status === 'error' ? <AlertCircle className="h-6 w-6 text-danger-400" />
                : <FileIcon className="h-6 w-6" />}
              <span className="max-w-[80px] truncate text-xs">{file.name}</span>
            </div>
          )}
          {status !== 'uploading' && (
            <button type="button" onClick={(e) => handleRemove(file, e)} aria-label="Remove file"
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-white hover:bg-foreground">
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      )
    }

    return (
      <div key={file.uid} className={uploadListItemVariants({ status })}>
        {status === 'uploading' ? <Loader2 className="h-4 w-4 shrink-0 animate-spin text-primary-500" aria-hidden="true" />
          : status === 'error' ? <AlertCircle className="h-4 w-4 shrink-0 text-danger-400" aria-hidden="true" />
          : status === 'done' ? <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" aria-hidden="true" />
          : hasThumb ? <img src={file.thumbUrl} alt={file.name} className="h-8 w-8 shrink-0 cursor-pointer rounded object-cover"
            onClick={(e) => handlePreview(file, e)} />
          : <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
        <span className={cn('min-w-0 flex-1 truncate text-sm',
          status === 'error' && 'text-danger-600', hasThumb && 'cursor-pointer text-primary-600',
          status === 'default' && 'text-foreground')}
          title={file.name} onClick={hasThumb ? (e: MouseEvent) => handlePreview(file, e) : undefined}>{file.name}</span>
        {status !== 'uploading' && (
          <button type="button" onClick={(e) => handleRemove(file, e)} aria-label="Remove file"
            className="shrink-0 text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
        )}
      </div>
    )
  }

  const showUploadArea = !maxCount || fileList.length < maxCount

  return (
    <div ref={ref} className={cn('w-full', className)} {...rest}>
      <input ref={inputRef} type="file" className="hidden" multiple={multiple} accept={accept}
        onChange={handleInputChange} disabled={disabled} />
      {fileList.length > 0 && (
        <div className={cn('mb-3 gap-2', listType === 'picture-card' ? 'flex flex-row flex-wrap' : 'flex flex-col')}>
          {fileList.map(renderFileItem)}
        </div>
      )}
      {showUploadArea && (
        <div
          role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled || undefined}
          onClick={handleAreaClick}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleAreaClick() } }}
          onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}
          onDragOver={handleDragOver} onDrop={handleDrop}
          className={cn(uploadAreaVariants({ disabled, isDragOver: dragOver }), dragOver && dragClassName)}>
          {children ?? (
            <>
              <UploadIcon className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">点击或拖拽文件到此区域上传</span>
            </>
          )}
        </div>
      )}
    </div>
  )
})
Upload.displayName = 'Upload'

export type { UploadProps, UploadFileStatus } from './types'
export type { UploadFile, CustomRequestOptions, UploadChangeInfo } from './upload-types'
export { uploadAreaVariants, uploadListItemVariants } from './upload-variants'