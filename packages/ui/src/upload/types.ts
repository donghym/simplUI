import type { ReactNode } from 'react'
import type { UploadFile, CustomRequestOptions, UploadChangeInfo } from './upload-types'

export type { UploadFile, CustomRequestOptions, UploadChangeInfo } from './upload-types'

/** 上传文件状态：default 未上传、uploading 上传中、done 完成、error 失败 */
export type UploadFileStatus = 'default' | 'uploading' | 'done' | 'error'

/**
 * Upload 组件 Props
 *
 * 文件上传组件，支持点击选择、拖拽上传、文件列表展示。
 * 支持受控/非受控模式、多文件、文件类型与大小限制、自定义上传逻辑。
 */
export interface UploadProps {
  /** 文件列表（受控模式），与 onChange 配合使用，传入后组件不再自行维护 fileList 状态 */
  fileList?: UploadFile[]
  /** 非受控模式下的默认文件列表，仅组件初始化时生效 */
  defaultFileList?: UploadFile[]
  /** 文件列表变化时触发，携带触发变化的文件及完整列表 */
  onChange?: (info: UploadChangeInfo) => void
  /** 自定义上传请求函数，接收文件及进度/成功/失败回调 */
  customRequest?: (options: CustomRequestOptions) => void
  /** 上传地址 URL，提供后使用内置 fetch 执行上传 */
  action?: string
  /** 上传请求头部，配合 action 使用 */
  headers?: Record<string, string>
  /** 上传附加表单数据，配合 action 使用，键为字段名值为字段值 */
  data?: Record<string, string | Blob>
  /** 文件参数字段名，配合 action 使用，默认 'file' */
  name?: string
  /** 是否支持多选文件，默认 false，同时影响 input multiple 属性 */
  multiple?: boolean
  /** 接受的文件类型 MIME 或扩展名，如 'image/*' 或 '.png,.jpg' */
  accept?: string
  /** 单个文件最大大小（字节），超过此值的文件将被跳过 */
  maxSize?: number
  /** 最大文件数量，超过后不再接受新文件 */
  maxCount?: number
  /** 上传前检测函数，接收文件及当前文件列表，返回 false 或 Promise<false> 阻止上传 */
  beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<boolean>
  /** 是否禁用上传，true 时禁止点击和拖拽操作 */
  disabled?: boolean
  /** 文件列表展示类型：text 纯文本列表、picture 图文列表、picture-card 卡片列表 */
  listType?: 'text' | 'picture' | 'picture-card'
  /** 文件预览回调，点击文件时触发，通常用于打开大图或文件预览 */
  onPreview?: (file: UploadFile) => void
  /** 文件移除前回调，返回 false 或 Promise<false> 阻止移除 */
  onRemove?: (file: UploadFile) => boolean | Promise<boolean> | void
  /** 自定义触发上传区域的子内容，不传则显示默认上传图标与提示文案 */
  children?: ReactNode
  /** 自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式 */
  className?: string
  /** 拖拽悬停时额外追加的类名，仅在 drag over 时生效 */
  dragClassName?: string
}