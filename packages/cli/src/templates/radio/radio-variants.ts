import { cva } from 'class-variance-authority'

/**
 * Radio 圆点 cva 变体配置
 *
 * 定义单选框视觉圆圈的样式：选中时蓝色边框+中心实心圆点、
 * 未选中时灰色边框、禁用时灰色半透明。用 rounded-full 实现圆形。
 */
export const radioDotVariants = cva(
  'relative inline-flex items-center justify-center h-4 w-4 rounded-full border border-solid ' +
    'transition-colors duration-200 select-none shrink-0 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ' +
    'focus-visible:ring-offset-1',
  {
    variants: {
      checked: {
        true: 'border-primary-500',
        false: 'border-border hover:border-primary-500',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50 border-border',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
)

/**
 * Radio 内圆点 cva 变体配置
 *
 * 定义选中时在圆圈中央显示的实心圆点样式。
 * 未选中时不渲染，选中时显示蓝色圆点。
 */
export const radioInnerVariants = cva(
  'h-2 w-2 rounded-full bg-primary-500 transition-transform duration-200',
  {
    variants: {
      checked: {
        true: 'scale-100',
        false: 'scale-0',
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
)

/**
 * RadioGroup cva 变体配置
 *
 * 定义单选框组的容器布局样式，支持水平/垂直排列方向。
 * 默认垂直排列，间距为 gap-y-2。
 */
export const radioGroupVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col gap-y-2',
      horizontal: 'flex-row flex-wrap gap-x-4 gap-y-2',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})