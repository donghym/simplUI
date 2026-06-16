import { cva } from 'class-variance-authority'

/** 漫游引导卡片变体 */
export const tourVariants = cva(
  'sui-tour relative bg-white rounded-lg shadow-[0_6px_16px_rgba(0,0,0,0.08)] border border-[#f0f0f0] p-4 max-w-[350px]',
)

/** 漫游引导标题变体 */
export const tourTitleVariants = cva(
  'sui-tour__title text-base font-medium text-[#262626] mb-2',
)

/** 漫游引导内容变体 */
export const tourContentVariants = cva(
  'sui-tour__content text-sm text-[#595959] mb-4',
)

/** 漫游引导底部变体 */
export const tourFooterVariants = cva(
  'sui-tour__footer flex items-center justify-between',
)

/** 漫游引导指示器变体 */
export const tourIndicatorsVariants = cva(
  'sui-tour__indicators flex items-center gap-1',
)

/** 漫游引导指示点变体 */
export const tourDotVariants = cva(
  'sui-tour__dot w-2 h-2 rounded-full transition-colors',
  {
    variants: {
      active: {
        true: 'bg-[#1677ff]',
        false: 'bg-[#d9d9d9]',
      },
    },
    defaultVariants: { active: false },
  },
)

/** 漫游引导按钮变体 */
export const tourButtonVariants = cva(
  'sui-tour__button inline-flex items-center justify-center px-3 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-[#1677ff] text-white hover:bg-[#4096ff]',
        default: 'bg-white text-[#262626] border border-[#d9d9d9] hover:border-[#1677ff] hover:text-[#1677ff]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)