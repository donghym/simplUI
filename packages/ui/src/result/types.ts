import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

/** Result 组件的状态类型 */
export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'

/** Result 组件 Props */
export interface ResultProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 结果状态，决定图标和颜色。默认 'info' */
  status?: ResultStatus
  /** 标题内容 */
  title?: ReactNode
  /** 副标题/描述内容 */
  subTitle?: ReactNode
  /** 自定义图标，覆盖默认图标 */
  icon?: ReactNode
  /** 额外操作区，通常放置按钮 */
  extra?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名，通过 cn() + twMerge 合并 */
  className?: string
}