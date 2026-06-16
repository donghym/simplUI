import { cva } from 'class-variance-authority'

export const menuVariants = cva('list-none m-0 p-0', {
  variants: {
    mode: {
      horizontal: 'flex flex-row items-center border-b border-border',
      vertical: 'flex flex-col',
      inline: 'flex flex-col',
    },
  },
  defaultVariants: { mode: 'vertical' },
})

export const menuItemVariants = cva(
  'cursor-pointer px-4 py-2 text-sm transition-colors select-none flex items-center gap-2',
  {
    variants: {
      active: { true: 'bg-primary-50 text-primary-600 font-medium', false: 'text-inherit hover:bg-white/5' },
      disabled: { true: 'opacity-50 cursor-not-allowed', false: '' },
      mode: {
        horizontal: 'py-2 px-4 border-b-2 border-transparent',
        vertical: '',
        inline: 'pl-8',
      },
    },
    compoundVariants: [
      { active: true, mode: 'horizontal', className: 'border-b-2 border-primary-500' },
    ],
    defaultVariants: { active: false, disabled: false, mode: 'vertical' },
  },
)