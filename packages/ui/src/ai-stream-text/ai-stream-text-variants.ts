import { cva } from 'class-variance-authority'

/** 流式文本容器变体 */
export const aiStreamTextVariants = cva(
  'text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** 光标变体，闪烁动画 */
export const aiStreamCursorVariants = cva(
  'inline-block w-[2px] h-[1em] align-text-bottom bg-foreground ml-0.5 animate-[blink_1s_step-end_infinite]',
  {
    variants: {},
    defaultVariants: {},
  },
)
