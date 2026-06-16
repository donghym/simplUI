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
 * 参照 antd 设计：
 * - dark 主题：背景 #001529
 * - light 主题：背景 #fff，右边框
 */
export const siderVariants = cva(
  'relative transition-all duration-200 overflow-auto flex-shrink-0 min-h-full',
  {
    variants: {
      theme: {
        dark: 'text-white bg-[#001529]',
        light: 'text-foreground bg-background border-r border-border',
      },
    },
    defaultVariants: { theme: 'dark' },
  },
)