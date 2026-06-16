import { cva } from 'class-variance-authority'

export const typographyVariants = cva('', {
  variants: {
    type: {
      secondary: 'text-muted-foreground',
      success: 'text-success-500',
      warning: 'text-warning-500',
      danger: 'text-danger-500',
    },
  },
})

/** 标题级别对应的 Tailwind 类名 */
export const TITLE_SIZE_MAP: Record<number, string> = {
  1: 'text-4xl font-bold leading-tight',
  2: 'text-3xl font-semibold leading-tight',
  3: 'text-2xl font-semibold leading-snug',
  4: 'text-xl font-medium leading-snug',
  5: 'text-lg font-medium leading-normal',
}