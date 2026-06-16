import { cva } from 'class-variance-authority'

/** Collapse 组件的 cva 变体配置 */
export const collapseVariants = cva(
  'sui-collapse',
  {
    variants: {
      bordered: {
        true: 'border border-border rounded-md',
        false: 'border-none',
      },
    },
    defaultVariants: {
      bordered: true,
    },
  },
)

/** Collapse 面板的 cva 变体配置 */
export const collapsePanelVariants = cva(
  'sui-collapse-panel',
  {
    variants: {
      bordered: {
        true: 'border-b border-border last:border-b-0',
        false: '',
      },
    },
    defaultVariants: {
      bordered: true,
    },
  },
)

/** Collapse 面板内容的 cva 变体配置 */
export const collapseContentVariants = cva(
  'sui-collapse-panel__content overflow-hidden transition-all duration-200',
  {
    variants: {
      expanded: {
        true: 'max-h-auto',
        false: 'max-h-0',
      },
    },
    defaultVariants: {
      expanded: false,
    },
  },
)