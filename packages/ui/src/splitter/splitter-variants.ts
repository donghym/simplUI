import { cva } from 'class-variance-authority'

/** 分隔面板容器变体 */
export const splitterVariants = cva(
  'sui-splitter flex w-full h-full',
  {
    variants: {
      layout: {
        horizontal: 'sui-splitter--horizontal flex-row',
        vertical: 'sui-splitter--vertical flex-col',
      },
    },
    defaultVariants: { layout: 'horizontal' },
  },
)

/** 分隔条变体 */
export const splitterBarVariants = cva(
  'sui-splitter__bar shrink-0 bg-[#f0f0f0] transition-[background] duration-200',
  {
    variants: {
      layout: {
        horizontal: 'w-1 cursor-col-resize',
        vertical: 'h-1 cursor-row-resize',
      },
    },
    defaultVariants: { layout: 'horizontal' },
  },
)
