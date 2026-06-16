import { cva } from 'class-variance-authority'

/** 详情面板容器样式 */
export const enhanceDescriptionsVariants = cva('w-full bg-background rounded-lg', {
  variants: { bordered: { true: 'border border-border', false: '' } },
  defaultVariants: { bordered: true },
})
/** 详情面板标题样式 */
export const enhanceDescriptionsTitleVariants = cva('text-base font-semibold text-foreground mb-4 px-4 pt-4', { variants: {} })
/** 详情面板网格样式 */
export const enhanceDescriptionsGridVariants = cva('grid gap-0', { variants: {} })
/** 详情面板标签样式 */
export const enhanceDescriptionsLabelVariants = cva('text-sm text-muted-foreground px-4 py-2.5', {
  variants: { bordered: { true: 'border-b border-r border-border bg-muted/50', false: '' } },
  defaultVariants: { bordered: true },
})
/** 详情面板值样式 */
export const enhanceDescriptionsValueVariants = cva('text-sm text-foreground px-4 py-2.5 flex items-center gap-2', {
  variants: { bordered: { true: 'border-b border-border', false: '' } },
  defaultVariants: { bordered: true },
})
/** 详情面板操作按钮样式 */
export const enhanceDescriptionsActionVariants = cva(
  'inline-flex items-center justify-center w-6 h-6 rounded text-muted-foreground hover:text-primary-500 hover:bg-muted transition-colors duration-150',
  { variants: {} },
)
/** 详情面板折叠按钮样式 */
export const enhanceDescriptionsCollapseVariants = cva(
  'flex items-center justify-center py-2 text-sm text-primary-500 hover:text-primary-600 cursor-pointer transition-colors duration-150',
  { variants: {} },
)
