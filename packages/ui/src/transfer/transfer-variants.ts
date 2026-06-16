import { cva } from 'class-variance-authority'

/** 穿梭框列表变体 */
export const transferListVariants = cva(
  'sui-transfer__list flex-1 border border-[#d9d9d9] rounded-lg flex flex-col',
)

/** 穿梭框列表头变体 */
export const transferHeaderVariants = cva(
  'sui-transfer__header px-3 py-2 border-b border-[#d9d9d9] font-medium bg-gray-100',
)

/** 穿梭框列表项变体 */
export const transferItemVariants = cva(
  'sui-transfer__item px-3 py-1.5 rounded flex items-center gap-2',
  {
    variants: {
      selected: {
        true: 'bg-[#e6f4ff]',
        false: 'bg-transparent',
      },
      disabled: {
        true: 'text-[#bfbfbf] cursor-not-allowed',
        false: 'text-[#262626] cursor-pointer',
      },
    },
    defaultVariants: { selected: false, disabled: false },
  },
)
