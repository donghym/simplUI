import { cva } from 'class-variance-authority'

/**
 * Row 栅格行变体
 *
 * 基于 flexbox 的 24 列栅格行容器样式变体。
 * gutter 通过负 margin 实现列间距，不在 cva 中处理（动态值）。
 */
export const rowVariants = cva('sui-row flex', {
  variants: {
    /** 垂直对齐方式 */
    align: {
      top: 'items-start',
      middle: 'items-center',
      bottom: 'items-end',
    },
    /** 水平对齐方式 */
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      'space-around': 'justify-around',
      'space-between': 'justify-between',
    },
    /** 是否自动换行 */
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    align: 'top',
    justify: 'start',
    wrap: true,
  },
})

/**
 * Col 栅格列变体
 *
 * 基于 24 列栅格系统的列样式。
 * span/offset/flex/order/responsive 通过 grid-utils.ts 动态计算，
 * cva 只处理基础样式。
 */
export const colVariants = cva('sui-col box-border', {
  variants: {},
  defaultVariants: {},
})