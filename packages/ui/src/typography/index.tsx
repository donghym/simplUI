import { forwardRef, createElement, Ref } from 'react'
import { cn } from '../lib/utils'
import { typographyVariants, TITLE_SIZE_MAP } from './typography-variants'
import type { TextProps, TitleProps, ParagraphProps } from './types'

/**
 * Text 行内文本
 *
 * 支持 4 种文本类型（secondary/success/warning/danger）及 6 种内联样式。
 * 根据内联样式动态渲染不同 HTML 标签：code -> <code>, keyboard -> <kbd>, delete -> <del>, mark -> <mark>, 默认 -> <span>
 */
const Text = forwardRef<HTMLElement, TextProps>(({
  type,
  delete: del,
  underline,
  strong,
  italic,
  mark,
  code,
  keyboard,
  className,
  children,
  ...rest
}, ref) => {
  // 根据内联样式决定渲染标签，优先级：code > keyboard > delete > mark > span
  const tag = code ? 'code' : keyboard ? 'kbd' : del ? 'del' : mark ? 'mark' : 'span'

  return createElement(
    tag,
    {
      ref,
      className: cn(
        'sui-typography-text',
        typographyVariants({ type }),
        underline && 'underline',
        strong && 'font-bold',
        italic && 'italic',
        code && 'font-mono bg-muted text-danger-500 px-1 py-0.5 rounded text-sm',
        keyboard && 'font-mono bg-muted text-foreground px-1 py-0.5 rounded text-xs border border-border',
        mark && 'bg-warning-200 px-0.5',
        className,
      ),
      ...rest,
    },
    children,
  )
})

Text.displayName = 'Text'

/**
 * Title 标题
 *
 * 对应 h1-h5，不同级别有不同的字号和字重。
 */
const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ level = 1, className, ...rest }, ref) => {
  const tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

  return createElement(
    tag,
    {
      ref: ref as Ref<HTMLHeadingElement>,
      className: cn('sui-typography-title', TITLE_SIZE_MAP[level] || TITLE_SIZE_MAP[1], className),
      ...rest,
    },
  )
})

Title.displayName = 'Title'

/**
 * Paragraph 段落
 *
 * 支持省略号截断。
 */
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ ellipsis, className, ...rest }, ref) => {
  const ellipsisClass =
    ellipsis === true
      ? 'overflow-hidden text-ellipsis whitespace-nowrap'
      : typeof ellipsis === 'number'
        ? 'overflow-hidden text-ellipsis'
        : ''

  return (
    <p
      ref={ref}
      className={cn(
        'sui-typography-paragraph',
        'mb-4 text-base leading-relaxed',
        ellipsisClass,
        typeof ellipsis === 'number' ? `[display:-webkit-box] [-webkit-line-clamp:${ellipsis}] [-webkit-box-orient:vertical]` : '',
        className,
      )}
      {...rest}
    />
  )
})

Paragraph.displayName = 'Paragraph'

const Typography = { Text, Title, Paragraph }
export { Text, Title, Paragraph, Typography }
export type { TextProps, TitleProps, ParagraphProps, TextType, TitleLevel } from './types'
export { typographyVariants, TITLE_SIZE_MAP } from './typography-variants'
export default Typography