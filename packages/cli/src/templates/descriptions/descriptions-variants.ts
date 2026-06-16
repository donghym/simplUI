import { cva } from 'class-variance-authority'

/** 描述列表标题变体 */
export const descriptionsTitleVariants = cva(
  'sui-descriptions__title text-base font-medium mb-4 text-[#262626]',
)

/** 描述列表标签变体 */
export const descriptionsLabelVariants = cva(
  'sui-descriptions__label text-[#595959] text-sm mr-2 inline-block',
  {
    variants: {
      layout: {
        horizontal: '',
        vertical: 'mb-1',
      },
    },
    defaultVariants: { layout: 'horizontal' },
  },
)

/** 描述列表内容变体 */
export const descriptionsContentVariants = cva(
  'sui-descriptions__content text-[#262626] text-sm',
)

/** 描述列表边框标签变体 */
export const descriptionsBorderedLabelVariants = cva(
  'sui-descriptions__label px-4 py-2 border border-[#f0f0f0] bg-[#fafafa] text-[#595959] font-normal text-left',
)

/** 描述列表边框内容变体 */
export const descriptionsBorderedContentVariants = cva(
  'sui-descriptions__content px-4 py-2 border border-[#f0f0f0] text-[#262626]',
)