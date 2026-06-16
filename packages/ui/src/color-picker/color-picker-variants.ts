import { cva } from 'class-variance-authority'

/** 颜色选择器触发器变体 */
export const colorPickerTriggerVariants = cva(
  'rounded-md border border-[#d9d9d9] flex items-center justify-center transition-[border-color] duration-200 shrink-0 overflow-hidden',
  {
    variants: {
      size: {
        small: 'w-6 h-6',
        medium: 'w-8 h-8',
        large: 'w-10 h-10',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: { size: 'medium', disabled: false },
  },
)

/** 颜色选择器输入框变体 */
export const colorPickerInputVariants = cva(
  'w-20 border border-[#d9d9d9] rounded-md px-2 py-1 text-[#262626] outline-none font-mono transition-[border-color,box-shadow] duration-200 focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.15)]',
  {
    variants: {
      size: {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-base',
      },
    },
    defaultVariants: { size: 'medium' },
  },
)

/** 预设色块变体 */
export const presetSwatchVariants = cva(
  'w-[18px] h-[18px] rounded-sm cursor-pointer transition-transform duration-150 bg-[var(--swatch-color)]',
  {
    variants: {
      selected: {
        true: 'scale-[1.15] border-2 border-[#1677ff]',
        false: 'border border-[rgba(0,0,0,0.08)]',
      },
    },
    defaultVariants: { selected: false },
  },
)
