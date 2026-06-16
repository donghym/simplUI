import type { UploadFileStatus } from './types'

/**
 * 上传文件对象
 *
 * 封装原生 File 及上传过程中的状态信息，
 * 用于在文件列表中追踪单个文件的元信息与上传进度。
 */
export interface UploadFile {
  /** 文件唯一标识，组件内部自动生成 */
  uid: string
  /** 文件名，取自原生 File.name */
  name: string
  /** 文件大小（字节），取自原生 File.size */
  size: number
  /** 文件 MIME 类型，取自原生 File.type */
  type: string
  /** 上传状态：uploading 上传中、done 完成、error 失败，未开始上传时为 undefined */
  status?: UploadFileStatus
  /** 上传进度百分比，0-100，仅在 status=uploading 时有意义 */
  percent?: number
  /** 上传完成后服务端返回的文件访问 URL */
  url?: string
  /** 文件缩略图 data URL，用于图片列表预览 */
  thumbUrl?: string
  /** 原生 File 对象引用 */
  originFileObj?: File
  /** 服务端成功响应数据，由 customRequest 的 onSuccess 传入 */
  response?: unknown
  /** 上传失败时的错误对象 */
  error?: Error
}

/** 自定义上传请求的回调参数 */
export interface CustomRequestOptions {
  /** 待上传的原生 File 对象 */
  file: File
  /** 进度回调，传入 0-100 的百分比值 */
  onProgress: (percent: number) => void
  /** 成功回调，传入服务端响应数据 */
  onSuccess: (response: unknown) => void
  /** 失败回调，传入错误对象 */
  onError: (error: Error) => void
}

/** 文件列表变化时的回调参数 */
export interface UploadChangeInfo {
  /** 本次触发变化的文件 */
  file: UploadFile
  /** 当前完整的文件列表 */
  fileList: UploadFile[]
}
