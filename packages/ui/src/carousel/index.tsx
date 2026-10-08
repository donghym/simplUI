import { forwardRef, useState, useEffect, useCallback, Children } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { carouselVariants, carouselSlideVariants, carouselDotVariants } from './carousel-variants'
import type { CarouselProps } from './types'

export type { CarouselProps }

/**
 * Carousel 走马灯组件
 *
 * 用于展示一组内容，支持自动播放、手动切换。
 *
 * ### 何时使用
 * - 展示图片轮播
 * - 展示一组卡片内容
 *
 * ### 示例
 * ```tsx
 * <Carousel autoplay dots arrows>
 *   <div>幻灯片 1</div>
 *   <div>幻灯片 2</div>
 *   <div>幻灯片 3</div>
 * </Carousel>
 * ```
 */
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (props, ref) => {
    const {
      autoplay = false,
      autoplayInterval = 3000,
      dots = true,
      arrows = false,
      initialIndex = 0,
      onChange,
      children,
      className,
      ...rest
    } = props

    const childArray = Children.toArray(children)
    const totalSlides = childArray.length
    const [activeIndex, setActiveIndex] = useState(
      Math.min(initialIndex, totalSlides - 1),
    )

    const goTo = useCallback(
      (index: number) => {
        const newIndex = Math.max(0, Math.min(index, totalSlides - 1))
        setActiveIndex(newIndex)
        onChange?.(newIndex)
      },
      [totalSlides, onChange],
    )

    const goNext = useCallback(() => {
      goTo((activeIndex + 1) % totalSlides)
    }, [activeIndex, totalSlides, goTo])

    const goPrev = useCallback(() => {
      goTo((activeIndex - 1 + totalSlides) % totalSlides)
    }, [activeIndex, totalSlides, goTo])

    useEffect(() => {
      if (!autoplay || totalSlides <= 1) return
      const timer = setInterval(goNext, autoplayInterval)
      return () => clearInterval(timer)
    }, [autoplay, autoplayInterval, goNext, totalSlides])

    return (
      <div
        ref={ref}
        className={cn(carouselVariants(), className)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel"
        {...rest}
      >
        <div className="sui-carousel__track relative aspect-video">
          {childArray.map((child, index) => (
            <div
              key={index}
              className={cn(carouselSlideVariants({ active: index === activeIndex }))}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}`}
              aria-hidden={index !== activeIndex}
            >
              {child}
            </div>
          ))}
        </div>

        {arrows && totalSlides > 1 && (
          <>
            <button
              type="button"
              className="sui-carousel__arrow sui-carousel__arrow--prev absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="sui-carousel__arrow sui-carousel__arrow--next absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
              onClick={goNext}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </>
        )}

        {dots && totalSlides > 1 && (
          <div className="sui-carousel__dots absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {childArray.map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn(carouselDotVariants({ active: index === activeIndex }))}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    )
  },
)

Carousel.displayName = 'Carousel'