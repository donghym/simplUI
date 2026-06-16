import type { CSSProperties, ReactNode } from 'react'

export interface AppProps {
  /** 子元素 */
  children: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
