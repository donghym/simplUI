import { cva } from 'class-variance-authority'

/** 穿梭框容器变体 */
export const transferVariants = cva(
  'sui-transfer flex gap-4',
)

/** 穿梭框列表变体 */
export const transferListVariants = cva(
  'sui-transfer__list flex flex-col border border-[#d9d9d9] rounded-lg overflow-hidden',
  {
    variants: {
      size: {
        small: 'w-[200px]',
        default: 'w-[250px]',
        large: 'w-[300px]',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

/** 穿梭框列表头部变体 */
export const transferHeaderVariants = cva(
  'sui-transfer__header flex items-center gap-2 px-3 py-2 bg-[#fafafa] border-b border-[#f0f0f0]',
  {
    variants: {
      size: {
        small: 'text-xs',
        default: 'text-sm',
        large: 'text-base',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

/** 穿梭框列表内容变体 */
export const transferBodyVariants = cva(
  'sui-transfer__body flex-1 overflow-auto p-2',
  {
    variants: {
      size: {
        small: 'max-h-[200px]',
        default: 'max-h-[250px]',
        large: 'max-h-[300px]',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

/** 穿梭框列表项变体 */
export const transferItemVariants = cva(
  'sui-transfer__item flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors',
  {
    variants: {
      selected: {
        true: 'bg-[#e6f4ff]',
        false: 'hover:bg-[#f5f5f5]',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: { selected: false, disabled: false },
  },
)

/** 穿梭框操作按钮区变体 */
export const transferOperationsVariants = cva(
  'sui-transfer__operations flex flex-col items-center justify-center gap-2',
)