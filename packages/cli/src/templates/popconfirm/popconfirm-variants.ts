import { cva } from 'class-variance-authority'

export const popconfirmVariants = cva(
  'absolute z-50 min-w-[240px] max-w-[360px] rounded-lg border border-border ' +
    'bg-background shadow-lg',
  {
    variants: {
      placement: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2.5',
        topLeft: 'bottom-full left-0 mb-2.5',
        topRight: 'bottom-full right-0 mb-2.5',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2.5',
        bottomLeft: 'top-full left-0 mt-2.5',
        bottomRight: 'top-full right-0 mt-2.5',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2.5',
        leftTop: 'right-full top-0 mr-2.5',
        leftBottom: 'right-full bottom-0 mr-2.5',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2.5',
        rightTop: 'left-full top-0 ml-2.5',
        rightBottom: 'left-full bottom-0 ml-2.5',
      },
    },
    defaultVariants: { placement: 'top' },
  },
)

export const arrowVariants = cva(
  'absolute w-2.5 h-2.5 rotate-45 bg-background border-border',
  {
    variants: {
      arrowPlacement: {
        top: '-bottom-[5px] left-1/2 -translate-x-1/2 border-t-0 border-l-0',
        bottom: '-top-[5px] left-1/2 -translate-x-1/2 border-b-0 border-r-0',
        left: '-right-[5px] top-1/2 -translate-y-1/2 border-l-0 border-b-0',
        right: '-left-[5px] top-1/2 -translate-y-1/2 border-r-0 border-t-0',
      },
    },
  },
)
