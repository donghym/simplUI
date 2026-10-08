import { cva } from 'class-variance-authority'

// Spin 容器变体
export const spinVariants = cva('relative inline-flex flex-col items-center justify-center', {
  variants: {
    spinSize: { small: 'gap-1', default: 'gap-2', large: 'gap-2' },
  },
  defaultVariants: { spinSize: 'default' },
})

// Spin 图标变体
export const spinIconVariants = cva('animate-spin text-primary-500', {
  variants: {
    spinSize: { small: 'h-4 w-4', default: 'h-6 w-6', large: 'h-8 w-8' },
  },
  defaultVariants: { spinSize: 'default' },
})

// Spin 提示文字变体
export const spinTipVariants = cva('text-muted-foreground select-none', {
  variants: {
    spinSize: { small: 'text-xs', default: 'text-sm', large: 'text-base' },
  },
  defaultVariants: { spinSize: 'default' },
})

// Spin 容器包裹模式变体
export const spinContainerVariants = cva('relative', {
  variants: {
    spinning: { true: 'pointer-events-none', false: '' },
  },
  defaultVariants: { spinning: false },
})

// Spin 遮罩层变体
export const spinMaskVariants = cva(
  'absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-opacity duration-200',
  {
    variants: { visible: { true: 'opacity-100', false: 'opacity-0 pointer-events-none' } },
    defaultVariants: { visible: false },
  }
)
