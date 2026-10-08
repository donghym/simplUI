import type { CSSProperties, ReactNode } from 'react'

export interface SplitterPanelProps {
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
