import { forwardRef } from 'react'
import { cn } from '../lib/utils'
import type { FlexProps, FlexJustify, FlexAlign, FlexWrap } from './types'

export type { FlexProps, FlexJustify, FlexAlign, FlexWrap }

/** justify 映射到 Tailwind 类名 */
const justifyMap: Record<FlexJustify, string> = {
  'flex-start': 'justify-start',
  'center': 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
}

/** align 映射到 Tailwind 类名 */
const alignMap: Record<FlexAlign, string> = {
  'flex-start': 'items-start',
  'center': 'items-center',
  'flex-end': 'items-end',
  'stretch': 'items-stretch',
  'baseline': 'items-baseline',
}

/** wrap 映射到 Tailwind 类名 */
const wrapMap: Record<FlexWrap, string> = {
  'wrap': 'flex-wrap',
  'nowrap': 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

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
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          vertical ? 'flex-col' : 'flex-row',
          justifyMap[justify],
          alignMap[align],
          wrapMap[wrap],
          gap,
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