import type { HTMLAttributes } from 'react'

/** 栅格对齐方式 */
export type RowAlign = 'top' | 'middle' | 'bottom'
export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

/** 响应式断点对应的列数 */
export interface ColResponsive {
  /** 列数，0-24 */
  span?: number
  /** 偏移列数 */
  offset?: number
}

/**
 * Row Props
 *
 * 栅格行容器，基于 CSS flexbox 实现 24 列栅格系统。
 */
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /** 列间距，单位 px；传入数组 [水平, 垂直] 可分别控制，默认 0 */
  gutter?: number | [number, number]
  /** 垂直对齐方式，默认 'top' */
  align?: RowAlign
  /** 水平对齐方式，默认 'start' */
  justify?: RowJustify
  /** 是否自动换行，默认 true */
  wrap?: boolean
}

/**
 * Col Props
 *
 * 栅格列，基于 24 列系统。不支持 push/pull（v4 简化）。
 */
export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  /** 占据列数 0-24，0 时 display:none，默认 24 */
  span?: number
  /** 左侧偏移列数 */
  offset?: number
  /** 弹性布局 flex 属性 */
  flex?: string | number
  /** 排序，越小越靠前 */
  order?: number
  /** <576px 响应式列数 */
  xs?: number | ColResponsive
  /** ≥576px 响应式列数 */
  sm?: number | ColResponsive
  /** ≥768px 响应式列数 */
  md?: number | ColResponsive
  /** ≥992px 响应式列数 */
  lg?: number | ColResponsive
  /** ≥1200px 响应式列数 */
  xl?: number | ColResponsive
  /** ≥1600px 响应式列数 */
  xxl?: number | ColResponsive
}