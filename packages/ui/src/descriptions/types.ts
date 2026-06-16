import type { CSSProperties, ReactNode } from 'react'

export interface DescriptionsItemProps {
  /** 标签 */
  label?: ReactNode
  /** 内容 */
  children: ReactNode
  /** 占据列数 */
  span?: number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface DescriptionsProps {
  /** 标题 */
  title?: ReactNode
  /** 是否显示边框 */
  bordered?: boolean
  /** 一列的描述项数量 */
  column?: number
  /** 列表的大小 */
  componentSize?: 'default' | 'middle' | 'small'
  /** 描述布局 */
  layout?: 'horizontal' | 'vertical'
  /** 子元素 */
  children: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
