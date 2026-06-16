import { cva } from 'class-variance-authority'

export const layoutVariants = cva('flex', {
  variants: {
    // hasSider 为 true 时触发水平布局
    hasSider: { true: 'flex-row', false: 'flex-col' },
  },
  defaultVariants: { hasSider: false },
})

/**
 * Sider 样式
 *
 * 主题切换：
 * - dark 主题：深色背景白色文字
 * - light 主题：白色背景深色文字
 */
export const siderVariants = cva(
  'relative transition-all duration-200 overflow-auto flex-shrink-0 min-h-full',
  {
    variants: {
      theme: {
        dark: 'text-white bg-gray-900',
        light: 'text-foreground bg-background border-r border-border',
      },
    },
    defaultVariants: { theme: 'dark' },
  },
)