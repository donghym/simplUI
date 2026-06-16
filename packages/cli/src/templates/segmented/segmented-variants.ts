import { cva } from 'class-variance-authority'

/**
 * Segmented 容器变体配置
 *
 * 分段控制器外层容器的基础样式。
 */
export const segmentedVariants = cva(
  'inline-flex rounded-md bg-[#f5f5f5] p-0.5',
)

/**
 * Segmented 选项项变体配置
 *
 * 定义每个选项项的视觉状态，包括激活、禁用和尺寸。
 */
export const segmentedItemVariants = cva(
  'flex items-center gap-1 whitespace-nowrap border-none rounded transition-all duration-200',
  {
    variants: {
      /** 是否激活状态 */
      active: {
        /** 激活时显示白色背景和主题色文字 */
        true: 'bg-white text-primary-600 font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] ring-1 ring-gray-200',
        /** 非激活时显示透明背景 */
        false: 'bg-transparent text-[#595959] font-normal shadow-none',
      },
      /** 是否禁用状态 */
      disabled: {
        /** 禁用时不可点击，灰色文字 */
        true: 'cursor-not-allowed text-[#bfbfbf]',
        /** 正常时可点击 */
        false: 'cursor-pointer',
      },
      /** 选项尺寸 */
      size: {
        /** 大尺寸 */
        large: 'px-4 py-1.5 text-base',
        /** 中等尺寸，默认 */
        middle: 'px-3 py-1 text-sm',
        /** 小尺寸 */
        small: 'px-2 py-0.5 text-xs',
      },
    },
    compoundVariants: [
      /** 激活且禁用时的复合样式 */
      { active: true, disabled: true, className: 'bg-white text-[#bfbfbf]' },
    ],
    defaultVariants: { active: false, disabled: false, size: 'middle' },
  },
)