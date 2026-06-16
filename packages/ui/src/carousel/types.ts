import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

/** Carousel 组件 Props */
export interface CarouselProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** 自动播放。默认 false */
  autoplay?: boolean
  /** 自动播放间隔时间（毫秒）。默认 3000 */
  autoplayInterval?: number
  /** 是否显示指示器。默认 true */
  dots?: boolean
  /** 是否显示左右切换箭头。默认 false */
  arrows?: boolean
  /** 初始激活的幻灯片索引。默认 0 */
  initialIndex?: number
  /** 切换幻灯片时的回调 */
  onChange?: (index: number) => void
  /** 子元素（幻灯片内容） */
  children?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名，通过 cn() + twMerge 合并 */
  className?: string
}