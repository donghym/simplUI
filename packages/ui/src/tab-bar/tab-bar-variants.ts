import { cva } from 'class-variance-authority'

/**
 * TabBar 容器 cva 变体配置
 *
 * 控制底部标签栏的布局与视觉样式。
 * variant 控制标签项选中态颜色，fixed 控制是否固定底部。
 */
export const tabBarVariants = cva(
  'sui-tab-bar flex items-stretch justify-around w-full bg-background',
  {
    variants: {
      variant: {
        default: '',
        primary: '',
      },
      fixed: {
        true: 'fixed bottom-0 left-0 right-0 z-50',
        false: '',
      },
      bordered: {
        true: 'border-t border-border',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        fixed: true,
        bordered: true,
        class: 'safe-area-bottom',
      },
    ],
    defaultVariants: { variant: 'default', fixed: false, bordered: true },
  },
)

/** 单个标签项样式 */
export const tabBarItemVariants = cva(
  'flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 px-1 cursor-pointer select-none ' +
    'transition-colors duration-200 relative min-w-0',
  {
    variants: {
      active: {
        true: 'text-primary-500',
        false: 'text-muted-foreground',
      },
      disabled: {
        true: 'text-muted-foreground/40 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: { active: false, disabled: false },
  },
)

/** 角标圆点样式 */
export const badgeDotClass =
  'absolute top-0.5 right-1/2 translate-x-4 w-1.5 h-1.5 rounded-full bg-danger-500'

/** 角标数字样式 */
export const badgeNumberClass =
  'absolute -top-0.5 right-1/2 translate-x-3 min-w-[16px] h-4 px-1 ' +
  'flex items-center justify-center rounded-full bg-danger-500 text-white text-[10px] ' +
  'leading-none font-medium'
