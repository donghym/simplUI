import type { MouseEventHandler } from 'react'

export interface IconProps {
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
  /** 内联样式对象，优先级低于 className */
  style?: React.CSSProperties
  /** 是否启用旋转动画。true 时图标持续旋转 */
  spin?: boolean
  /** 旋转角度。单位为度，如 rotate={90} 表示顺时针旋转 90 度 */
  rotate?: number
  /** 双色图标的主色和副色。格式为颜色字符串或 [主色, 副色] 数组 */
  twoToneColor?: string | [string, string]
  /** 点击事件回调函数 */
  onClick?: MouseEventHandler<HTMLSpanElement>
  /** 图标宽度。支持字符串（如 '2rem'）或数字（如 24，单位 px） */
  width?: string | number
  /** 图标高度。支持字符串（如 '2rem'）或数字（如 24，单位 px） */
  height?: string | number
  /** 图标尺寸。设置后同时应用于 width 和 height */
  size?: string | number
}

export interface CustomIconProps {
  /** 自定义 SVG 图标组件，必须接受 React.SVGProps<SVGSVGElement> */
  component: React.ComponentType<React.SVGProps<SVGSVGElement>>
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
  /** 内联样式对象，优先级低于 className */
  style?: React.CSSProperties
  /** 是否启用旋转动画。true 时图标持续旋转 */
  spin?: boolean
  /** 旋转角度。单位为度，如 rotate={90} 表示顺时针旋转 90 度 */
  rotate?: number
  /** 点击事件回调函数 */
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export interface IconFontOptions {
  /** 图标字体脚本 URL。支持单个 URL 或 URL 数组（用于多图标库） */
  scriptUrl: string | string[]
  /** 通用额外属性。应用到所有通过 createFromIconfontCN 创建的图标 */
  extraCommonProps?: Record<string, unknown>
}