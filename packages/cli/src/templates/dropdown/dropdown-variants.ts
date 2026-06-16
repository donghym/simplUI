import { cva } from 'class-variance-authority'

/**
 * Dropdown 容器变体配置
 *
 * base 定义下拉菜单容器的基础样式：相对定位、inline-block。
 */
export const dropdownVariants = cva('relative inline-block')

/**
 * DropdownMenu 下拉菜单列表变体配置
 *
 * base 定义菜单列表的基础样式：圆角、阴影、背景色。
 * placement 变体定义不同弹出方向对应的定位样式。
 */
export const dropdownMenuVariants = cva(
  'absolute z-50 min-w-[120px] rounded-md border border-border bg-background shadow-lg py-1',
  {
    variants: {
      placement: {
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        bottomLeft: 'top-full left-0 mt-2',
        bottomRight: 'top-full right-0 mt-2',
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        topLeft: 'bottom-full left-0 mb-2',
        topRight: 'bottom-full right-0 mb-2',
      },
    },
    defaultVariants: { placement: 'bottomLeft' },
  },
)

/**
 * DropdownItem 菜单项变体配置
 *
 * base 定义菜单项的基础样式：padding、字体、交互状态。
 * destructive 变体定义破坏性操作时的红色文本样式。
 */
export const dropdownItemVariants = cva(
  'cursor-pointer px-4 py-2 text-sm text-foreground hover:bg-muted ' +
    'transition-colors select-none flex items-center gap-2',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
      destructive: {
        true: 'text-danger-500 hover:bg-danger-50/50',
        false: '',
      },
    },
    defaultVariants: { disabled: false, destructive: false },
  },
)