/**
 * 24 栅格列配置
 *
 * antd 中 labelCol / wrapperCol 默认 { span: 5 } / { span: 19 }。
 * 也可传一个数字快速指定 span，或传对象覆盖 xs/sm/md/lg/xl/xxl。
 */
export type ColSpan = number | { span?: number; offset?: number }

/**
 * 响应式栅格列配置
 *
 * 支持按断点 (xs/sm/md/lg/xl/xxl) 设置不同的列宽，
 * 也可直接通过 span / offset 指定固定值。
 */
export interface ResponsiveCol extends Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', ColSpan>> {
  /** 列宽度，基于 24 栅格系统 */
  span?: number
  /** 列偏移量，基于 24 栅格系统 */
  offset?: number
}
