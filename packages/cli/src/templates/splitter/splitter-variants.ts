import { cva } from 'class-variance-authority'

/** 分割面板容器变体 */
export const splitterVariants = cva(
  'sui-splitter flex h-full',
  {
    variants: {
      direction: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: { direction: 'horizontal' },
  },
)

/** 分割面板子面板变体 */
export const splitterPaneVariants = cva(
  'sui-splitter-pane overflow-auto',
  {
    variants: {
      direction: {
        horizontal: 'h-full',
        vertical: 'w-full',
      },
    },
    defaultVariants: { direction: 'horizontal' },
  },
)

/** 分割条变体 */
export const splitterBarVariants = cva(
  'sui-splitter-bar shrink-0 bg-[#f0f0f0] hover:bg-[#d9d9d9] transition-colors flex items-center justify-center',
  {
    variants: {
      direction: {
        horizontal: 'w-1 cursor-col-resize',
        vertical: 'h-1 cursor-row-resize',
      },
    },
    defaultVariants: { direction: 'horizontal' },
  },
)