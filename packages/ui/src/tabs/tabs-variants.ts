import { cva } from 'class-variance-authority'

/**
 * 选项卡容器 cva 变体配置
 *
 * 控制选项卡容器（tab bar）的方向布局与视觉样式。
 * variant 控制指示器/边框样式，tabPosition 控制水平/垂直排列。
 */
export const tabsVariants = cva('flex gap-0', {
  variants: {
    variant: {
      line: 'border-border',
      card: '',
      edgeless: '',
    },
    tabPosition: {
      top: 'flex-row',
      bottom: 'flex-row',
      left: 'flex-col',
      right: 'flex-col',
    },
  },
  defaultVariants: { variant: 'line', tabPosition: 'top' },
})

/**
 * 单个选项卡按钮 cva 变体配置
 *
 * 控制每个 tab 项的选中态、禁用态和不同变体下的视觉差异。
 * 通过 compoundVariants 组合 variant + active 实现选中态样式。
 */
export const tabItemVariants = cva(
  'inline-flex items-center justify-center cursor-pointer select-none whitespace-nowrap ' +
    'h-[40px] px-4 text-sm transition-colors duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
  {
    variants: {
      variant: {
        line: 'border-b-2 border-transparent text-muted-foreground hover:text-foreground',
        card: 'rounded-t-md border border-transparent text-muted-foreground hover:text-foreground',
        edgeless: 'rounded-md text-muted-foreground hover:text-foreground hover:bg-muted',
      },
      active: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'line',
        active: true,
        class: 'border-primary-500 text-primary-500',
      },
      {
        variant: 'card',
        active: true,
        class: 'border-border border-b-background bg-background text-primary-500 font-medium',
      },
      {
        variant: 'edgeless',
        active: true,
        class: 'bg-primary-500/10 text-primary-500 font-medium',
      },
    ],
    defaultVariants: { variant: 'line', active: false, disabled: false },
  },
)

/** 选项卡内容容器样式 */
export const tabContentClass = 'p-4 text-sm text-foreground'