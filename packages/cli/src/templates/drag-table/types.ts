import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { dragTableVariants } from './drag-table-variants'

/** 拖拽表格列配置 */
export interface DragTableColumn<T> {
  /** 列标题 */
  title: string
  /** 数据字段名 */
  dataIndex: string
  /** 列宽度 */
  width?: number | string
  /** 自定义渲染函数 */
  render?: (value: unknown, record: T, index: number) => ReactNode
}

/** DragTable 组件属性 */
export interface DragTableProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onChange' | 'draggable' | 'onDragEnd'>,
    VariantProps<typeof dragTableVariants> {
  /** 列配置数组 */
  columns: DragTableColumn<T>[]
  /** 数据源 */
  dataSource: T[]
  /** 数据变化回调，拖拽排序后触发（已废弃，请使用 onDragEnd） */
  onChange?: (newData: T[]) => void
  /** 拖拽结束回调，参数为排序后的新数据 */
  onDragEnd?: (newData: T[]) => void
  /** 行数据唯一标识字段名，默认 'key' */
  rowKey?: string
  /** 是否允许拖拽。false 禁用，'row' 仅行拖拽，'column' 仅列拖拽，true 全部启用，默认 true */
  draggable?: boolean | 'row' | 'column'
  /** 是否显示拖拽手柄。true 时首列显示默认拖拽图标，也可传入自定义 ReactNode，默认 true */
  dragHandle?: boolean | ReactNode
  /** 是否禁用拖拽，默认 false */
  disabled?: boolean
  /** 是否显示边框，默认 true */
  bordered?: boolean
  /** 自定义 className */
  className?: string
}
