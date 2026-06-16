import { cva } from 'class-variance-authority'

export const codeEditorVariants = cva(
  'rounded-md border border-border bg-white overflow-hidden font-mono text-sm',
  {
    variants: {
      readonly: {
        true: 'bg-muted',
        false: '',
      },
    },
    defaultVariants: {
      readonly: false,
    },
  },
)
