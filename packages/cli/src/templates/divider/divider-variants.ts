import { cva } from 'class-variance-authority'

/**
 * Divider cva 变体配置
 *
 * 仅管理分割线的方向（horizontal/vertical），线型由组件层根据 variant prop 动态处理，
 * 因为 horizontal 的线型作用在 border-bottom 而 vertical 作用在 border-left。
 */
export const dividerVariants = cva('shrink-0 border-border border', {
  variants: {
    type: {
      horizontal: 'w-full border-t-0 border-l-0 border-r-0 my-4',
      vertical: 'inline-block h-auto self-stretch border-t-0 border-r-0 border-b-0 mx-4 align-top',
    },
  },
  defaultVariants: { type: 'horizontal' },
})