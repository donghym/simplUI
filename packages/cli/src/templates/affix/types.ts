import type { CSSProperties, ReactNode } from 'react'

export interface AffixProps {
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number
  /** 固定状态改变时触发的回调函数 */
  onChange?: (affixed: boolean) => void
  /** 子元素 */
  children: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 指定滚动容器 */
  target?: () => Window | HTMLElement | null
}
