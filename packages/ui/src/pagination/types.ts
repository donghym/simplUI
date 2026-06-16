import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { paginationVariants } from './pagination-variants'

/** 分页组件当前页变化时的回调函数类型 */
export type PaginationOnChange = (page: number, pageSize: number) => void

/** 分页组件每页条数变化时的回调函数类型 */
export type PaginationOnPageSizeChange = (pageSize: number, page: number) => void

/** 分页组件 Props 接口 */
export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange'>,
    VariantProps<typeof paginationVariants> {
  /** 当前页码，从 1 开始计数。受控模式下必须提供 */
  current?: number
  /** 默认当前页码，从 1 开始计数。非受控模式下的初始值，默认 1 */
  defaultCurrent?: number
  /** 数据总数，用于计算总页数 */
  total?: number
  /** 每页条数。受控模式下必须提供 */
  pageSize?: number
  /** 默认每页条数。非受控模式下的初始值，默认 10 */
  defaultPageSize?: number
  /** 每页条数切换器的选项列表，默认 [10, 20, 50, 100] */
  pageSizeOptions?: number[]
  /** 是否显示每页条数切换器。默认 false */
  showSizeChanger?: boolean
  /** 是否显示快速跳转输入框。默认 false */
  showQuickJumper?: boolean
  /** 是否显示总数文本。默认 false */
  showTotal?: boolean
  /** 页码发生变化时的回调 */
  onChange?: PaginationOnChange
  /** 每页条数发生变化时的回调 */
  onPageSizeChange?: PaginationOnPageSizeChange
  /** 是否禁用分页。默认 false */
  disabled?: boolean
  /** 是否使用简洁模式，只显示当前页和总页数。默认 false */
  simple?: boolean
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}