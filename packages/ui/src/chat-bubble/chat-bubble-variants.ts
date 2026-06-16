import { cva } from 'class-variance-authority'

/** 气泡容器变体，根据角色控制对齐方向 */
export const chatBubbleVariants = cva(
  'flex gap-3 max-w-[80%]',
  {
    variants: {
      role: {
        user: 'ml-auto flex-row-reverse',
        assistant: 'mr-auto',
        system: 'mx-auto max-w-[90%]',
      },
    },
    defaultVariants: { role: 'assistant' },
  },
)

/** 气泡内容区变体，根据角色控制背景色和圆角 */
export const chatBubbleContentVariants = cva(
  'rounded-2xl px-4 py-3 text-sm leading-relaxed break-words',
  {
    variants: {
      role: {
        user: 'bg-primary text-primary-foreground rounded-br-sm',
        assistant: 'bg-muted text-foreground rounded-bl-sm',
        system: 'bg-muted/50 text-muted-foreground text-center italic rounded-lg',
      },
    },
    defaultVariants: { role: 'assistant' },
  },
)

/** 头像容器变体 */
export const chatBubbleAvatarVariants = cva(
  'shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border border-gray-400',
  {
    variants: {
      role: {
        user: 'bg-primary text-primary-foreground',
        assistant: 'bg-muted text-muted-foreground',
        system: 'hidden',
      },
    },
    defaultVariants: { role: 'assistant' },
  },
)

/** 加载动画圆点变体 */
export const chatBubbleDotVariants = cva(
  'inline-block w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce',
)
