import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Carousel } from './index'
import { cn } from '../lib/utils'

const meta: Meta<typeof Carousel> = {
  title: '数据展示/Carousel 走马灯',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Carousel 走马灯组件用于循环播放一组内容，支持自动播放、指示器和手势拖拽。\n\n- 用于首页 Banner 轮播、广告位展示\n- 用于图片相册、作品集的滑动浏览\n- 用于公告、新闻的滚动展示\n- 支持自动播放和手动切换两种交互模式',
      },
    },
  },
  argTypes: {
    autoplay: { control: 'boolean' },
    autoplayInterval: { control: 'number' },
    dots: { control: 'boolean' },
    arrows: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Basic: Story = {
  args: {
    children: (
      <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">4</div>
      </>
    ),
  },
}

export const Autoplay: Story = {
  args: {
    autoplay: true,
    autoplayInterval: 2000,
    children: (
      <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
      </>
    ),
  },
}

export const NoDots: Story = {
  args: {
    dots: false,
    children: (
      <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
      </>
    ),
  },
}

export const Draggable: Story = {
  args: {
    draggable: true,
    children: (
      <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
      </>
    ),
  },
}

export const FadeTransition: Story = {
  render: () => {
    const slides = [
      { bg: 'bg-indigo-700', label: '1' },
      { bg: 'bg-emerald-700', label: '2' },
      { bg: 'bg-amber-700', label: '3' },
    ]
    const [active, setActive] = useState(0)
    return (
      <div className="relative h-40 overflow-hidden rounded-lg">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center text-2xl text-white transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <div className={cn('h-40 w-full', slide.bg, 'flex items-center justify-center')}>
              Slide {slide.label}
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={cn('w-2.5 h-2.5 rounded-full transition-colors', i === active ? 'bg-white' : 'bg-white/40')}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    )
  },
}

export const CustomNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: '演示自定义导航控制，包含上一页/下一页按钮和底部指示点，展示如何完全自定义走马灯的导航交互。',
      },
    },
  },
  render: () => {
    const slides = [
      { bg: 'bg-slate-700', label: '1' },
      { bg: 'bg-slate-600', label: '2' },
      { bg: 'bg-slate-500', label: '3' },
    ]
    const [active, setActive] = useState(0)
    const goNext = () => setActive((prev) => (prev + 1) % slides.length)
    const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length)
    return (
      <div className="relative h-40 overflow-hidden rounded-lg">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={cn('h-40 w-full', slide.bg, 'flex items-center justify-center text-2xl text-white transition-transform duration-300')}
            style={{ transform: `translateX(${(i - active) * 100}%)` }}
          >
            Slide {slide.label}
          </div>
        ))}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 bg-white/90 hover:bg-white rounded-md shadow text-sm font-medium text-gray-700"
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 bg-white/90 hover:bg-white rounded-md shadow text-sm font-medium text-gray-700"
        >
          Next →
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={cn('w-2.5 h-2.5 rounded-full transition-colors', i === active ? 'bg-white' : 'bg-white/40')}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    )
  },
}
