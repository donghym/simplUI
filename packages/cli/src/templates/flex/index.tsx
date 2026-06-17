import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { flexVariants } from './flex-variants'
import type { FlexProps } from './types'

export type { FlexProps, FlexJustify, FlexAlign, FlexWrap } from './types'

/**
 * Flex 弹性布局组件
 *
 * 基于 CSS Flexbox 的容器组件，用于快速构建灵活的布局。
 *
 * ### 何时使用
 * - 需要在不同方向上排列子元素
 * - 需要对齐和分布子元素
 * - 需要响应式布局
 *
 * ### 示例
 * ```tsx
 * <Flex justify="space-between" align="center" gap="gap-4">
 *   <div>左侧</div>
 *   <div>右侧</div>
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      vertical = false,
      justify = 'flex-start',
      align = 'flex-start',
      wrap = 'nowrap',
      gap,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    // gap 为数字时转换为 px，字符串直接使用
    const gapClass = gap !== undefined
      ? typeof gap === 'number'
        ? `gap-[${gap}px]`
        : gap
      : ''

    return (
      <div
        ref={ref}
        className={cn(
          flexVariants({ vertical, justify, align, wrap }),
          gapClass,
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Flex.displayName = 'Flex'