import { cva } from 'class-variance-authority'

/** Carousel 组件的 cva 变体配置 */
export const carouselVariants = cva(
  'sui-carousel relative w-full overflow-hidden',
  {
    variants: {},
    defaultVariants: {},
  },
)

/** Carousel 幻灯片的 cva 变体配置 */
export const carouselSlideVariants = cva(
  'sui-carousel__slide absolute inset-0 transition-opacity duration-300',
  {
    variants: {
      active: {
        true: 'opacity-100 z-10',
        false: 'opacity-0 z-0',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

/** Carousel 指示器的 cva 变体配置 */
export const carouselDotVariants = cva(
  'sui-carousel__dot w-2 h-2 rounded-full transition-colors cursor-pointer',
  {
    variants: {
      active: {
        true: 'bg-primary',
        false: 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)