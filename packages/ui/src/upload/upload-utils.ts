import type { UploadFile } from './upload-types'

let uidCounter = 0

/** 生成唯一文件 ID */
export function generateUid(): string {
  uidCounter += 1
  return `upload-${Date.now()}-${uidCounter}`
}

/** 将原生 File 转换为 UploadFile */
export function fileToUploadFile(file: File): UploadFile {
  return {
    uid: generateUid(),
    name: file.name,
    size: file.size,
    type: file.type,
    originFileObj: file,
  }
}

/** 生成图片缩略图 URL */
export function generateThumbUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      resolve('')
      return
    }
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}