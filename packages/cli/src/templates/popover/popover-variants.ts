import { cva } from 'class-variance-authority'

/**
 * Popover 变体配置
 *
 * base 定义浮层卡片的基础样式：圆角、阴影、背景色和最大宽度。
 * placement 变体定义箭头指向方向对应的 margin 偏移位置。
 */
export const popoverVariants = cva(
  'absolute z-50 min-w-[120px] max-w-[360px] rounded-md border border-border ' +
    'bg-background shadow-lg',
  {
    variants: {
      placement: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        topLeft: 'bottom-full left-0 mb-2',
        topRight: 'bottom-full right-0 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        bottomLeft: 'top-full left-0 mt-2',
        bottomRight: 'top-full right-0 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
      },
    },
    defaultVariants: { placement: 'top' },
  },
)

/**
 * 箭头变体配置
 *
 * 4 个基础方向的箭头样式，使用 CSS border 技巧绘制三角形。
 * 箭头方向指向触发元素（与 placement 相反）。
 * 例如：placement=top（浮层在上方），箭头指向下方（朝向触发元素）。
 */
export const arrowVariants = cva(
  'absolute w-2 h-2 rotate-45 bg-background border border-border',
  {
    variants: {
      arrowPlacement: {
        // 浮层在上方，箭头在浮层底部，指向下（朝向触发元素）
        top: '-bottom-1 left-1/2 -translate-x-1/2 border-b-0 border-r-0',
        // 浮层在下方，箭头在浮层顶部，指向上（朝向触发元素）
        bottom: '-top-1 left-1/2 -translate-x-1/2 border-t-0 border-l-0',
        // 浮层在左侧，箭头在浮层右边，指向右（朝向触发元素）
        left: '-right-1 top-1/2 -translate-y-1/2 border-r-0 border-t-0',
        // 浮层在右侧，箭头在浮层左边，指向左（朝向触发元素）
        right: '-left-1 top-1/2 -translate-y-1/2 border-l-0 border-b-0',
      },
    },
  },
)