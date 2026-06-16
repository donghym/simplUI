import type { CSSProperties, ReactNode } from 'react'

export interface SplitterPanelProps {
  /** 面板默认尺寸 */
  defaultSize?: number | string
  /** 面板最小尺寸 */
  min?: number | string
  /** 面板最大尺寸 */
  max?: number | string
  /** 是否可折叠 */
  collapsible?: boolean | { start?: boolean; end?: boolean }
  /** 面板内容 */
  children: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface SplitterProps {
  /** 布局方向 */
  layout?: 'horizontal' | 'vertical'
  /** 子面板 */
  children: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
