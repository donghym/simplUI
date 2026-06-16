import { cva } from 'class-variance-authority'

export const markdownEditorVariants = cva(
  'rounded-md border border-border bg-white overflow-hidden',
  {
    variants: {
      mode: {
        edit: '',
        preview: '',
        split: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      mode: 'split',
      disabled: false,
    },
  },
)
