import { cva } from 'class-variance-authority'

/**
 * 按钮组件样式变体
 * 使用新的状态色系统：
 * - primary / primary-hover / primary-focus / primary-disabled
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium select-none ' +
    'transition-colors duration-200 whitespace-nowrap ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus ' +
    'focus-visible:ring-offset-1 ' +
    'disabled:pointer-events-none disabled:opacity-50 ' +
    'h-[40px] px-4 text-sm rounded-md',
  {
    variants: {
      variant: {
        // 默认按钮：白底 + 灰边框，hover 变主色边框
        default:
          'bg-background text-foreground border border-solid border-border ' +
          'hover:border-primary hover:text-primary ' +
          'active:border-primary-600',
        // 主按钮：实心主色，hover 变亮
        primary:
          'bg-primary text-white border border-solid border-primary ' +
          'hover:bg-primary-hover ' +
          'active:border-primary-600',
        // 虚线按钮
        dashed:
          'bg-background text-foreground border border-dashed border-border ' +
          'hover:border-primary hover:text-primary',
        // 链接按钮
        link:
          'bg-transparent text-primary border border-transparent ' +
          'hover:underline underline-offset-4 px-0',
        // 文字按钮
        text:
          'bg-transparent text-foreground border border-transparent ' +
          'hover:bg-muted',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
