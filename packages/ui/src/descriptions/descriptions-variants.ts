import { cva } from 'class-variance-authority'

/** 描述列表标题变体 */
export const descriptionsTitleVariants = cva(
  'sui-descriptions__title text-base font-medium mb-4 text-foreground',
)

/** 描述列表标签变体 */
export const descriptionsLabelVariants = cva(
  'sui-descriptions__label text-muted-foreground text-sm mr-2 inline-block',
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
  'sui-descriptions__content text-foreground text-sm',
)

/** 描述列表边框标签变体 */
export const descriptionsBorderedLabelVariants = cva(
  'sui-descriptions__label px-4 py-2 border border-border bg-muted text-muted-foreground font-normal text-left',
)

/** 描述列表边框内容变体 */
export const descriptionsBorderedContentVariants = cva(
  'sui-descriptions__content px-4 py-2 border border-border text-foreground',
)

/** 详情面板容器变体（items 配置模式） */
export const enhancedDescriptionsVariants = cva('w-full bg-background rounded-lg', {
  variants: { bordered: { true: 'border border-border', false: '' } },
  defaultVariants: { bordered: true },
})

/** 详情面板标题变体 */
export const enhancedDescriptionsTitleVariants = cva('text-base font-semibold text-foreground mb-4 px-4 pt-4', { variants: {} })

/** 详情面板网格变体 */
export const enhancedDescriptionsGridVariants = cva('grid gap-0', { variants: {} })

/** 详情面板标签变体 */
export const enhancedDescriptionsLabelVariants = cva('text-sm text-muted-foreground px-4 py-2.5', {
  variants: { bordered: { true: 'border-b border-r border-border bg-muted/50', false: '' } },
  defaultVariants: { bordered: true },
})

/** 详情面板值变体 */
export const enhancedDescriptionsValueVariants = cva('text-sm text-foreground px-4 py-2.5 flex items-center gap-2', {
  variants: { bordered: { true: 'border-b border-border', false: '' } },
  defaultVariants: { bordered: true },
})

/** 详情面板操作按钮变体 */
export const enhancedDescriptionsActionVariants = cva(
  'inline-flex items-center justify-center w-6 h-6 rounded text-muted-foreground hover:text-primary-500 hover:bg-muted transition-colors duration-150',
  { variants: {} },
)

/** 详情面板折叠按钮变体 */
export const enhancedDescriptionsCollapseVariants = cva(
  'flex items-center justify-center py-2 text-sm text-primary-500 hover:text-primary-600 cursor-pointer transition-colors duration-150',
  { variants: {} },
)