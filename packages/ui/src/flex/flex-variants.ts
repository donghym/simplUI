import { cva } from 'class-variance-authority'

/**
 * Flex 弹性布局变体
 *
 * 基于 CSS Flexbox 的容器组件样式变体。
 * gap 通过动态值处理，不在 cva 中定义。
 */
export const flexVariants = cva('flex', {
  variants: {
    /** 垂直排列 */
    vertical: {
      true: 'flex-col',
      false: 'flex-row',
    },
    /** 主轴对齐方式 */
    justify: {
      'flex-start': 'justify-start',
      'center': 'justify-center',
      'flex-end': 'justify-end',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly',
    },
    /** 交叉轴对齐方式 */
    align: {
      'flex-start': 'items-start',
      'center': 'items-center',
      'flex-end': 'items-end',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline',
    },
    /** 换行方式 */
    wrap: {
      'wrap': 'flex-wrap',
      'nowrap': 'flex-nowrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    vertical: false,
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'nowrap',
  },
})