import { cva } from 'class-variance-authority'

/**
 * 上传区域 cva
 *
 * 定义拖拽/点击上传区域的样式变体，
 * 包含默认、禁用、拖拽悬停三种状态。
 */
export const uploadAreaVariants = cva(
  'relative flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed ' +
    'border-border bg-background p-6 transition-colors duration-200 cursor-pointer ' +
    'hover:border-primary-400 hover:bg-primary-50',
  {
    variants: {
      /** 禁用状态 */
      disabled: {
        true: 'cursor-not-allowed opacity-50 hover:border-border hover:bg-background',
        false: '',
      },
      /** 拖拽文件悬停状态 */
      isDragOver: {
        true: 'border-primary-500 bg-primary-50',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
      isDragOver: false,
    },
  },
)

/**
 * 上传文件列表项 cva
 *
 * 定义文件列表中单个文件项的容器样式，
 * 根据上传状态切换边框颜色。
 */
export const uploadListItemVariants = cva(
  'flex items-center gap-2 rounded-md border bg-white px-3 py-2',
  {
    variants: {
      /** 文件上传状态 */
      status: {
        uploading: 'border-primary-300',
        done: 'border-success-300',
        error: 'border-danger-300 bg-danger-50',
        default: 'border-border',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
)