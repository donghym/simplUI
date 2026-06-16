import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect, useRef } from 'react'
import { Image } from './index'

const meta: Meta<typeof Image> = {
  title: '数据展示/Image 图片',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Image 图片组件用于展示图片内容，支持预览、懒加载、占位图和加载失败回退等功能。\n\n- 用于需要预览大图的商品图、相册展示\n- 用于图片懒加载优化长列表页面性能\n- 用于需要加载状态或失败回退的图片场景\n- 支持自定义预览源图，实现缩略图与高清图分离',
      },
    },
  },
  argTypes: {
    preview: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Image>

const placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'200\' viewBox=\'0 0 300 200\'%3E%3Crect fill=\'%23f3f4f6\' width=\'300\' height=\'200\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'14\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EPlaceholder%3C/text%3E%3C/svg%3E'

export const Basic: Story = {
  args: {
    src: placeholderSrc,
    width: 300,
    height: 200,
  },
}

export const Preview: Story = {
  args: {
    src: placeholderSrc,
    width: 300,
    height: 200,
    preview: true,
  },
}

export const Placeholder: Story = {
  args: {
    src: placeholderSrc,
    width: 300,
    height: 200,
    placeholder: <span className="text-gray-400">Loading...</span>,
  },
}

export const Fallback: Story = {
  args: {
    src: 'invalid-url',
    width: 300,
    height: 200,
    fallback: <span className="text-gray-400">Load Failed</span>,
  },
}

export const CustomPreviewSrc: Story = {
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'200\' viewBox=\'0 0 300 200\'%3E%3Crect fill=\'%23f3f4f6\' width=\'300\' height=\'200\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'14\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EPlaceholder%3C/text%3E%3C/svg%3E',
    previewSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Crect fill=\'%23f3f4f6\' width=\'800\' height=\'600\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'14\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EPlaceholder%3C/text%3E%3C/svg%3E',
    width: 300,
    height: 200,
    preview: true,
  },
}

const img1 = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'200\' viewBox=\'0 0 300 200\'%3E%3Crect fill=\'%23dbeafe\' width=\'300\' height=\'200\'/%3E%3Ctext fill=\'%233b82f6\' font-family=\'sans-serif\' font-size=\'16\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EImage 1%3C/text%3E%3C/svg%3E'
const img2 = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'200\' viewBox=\'0 0 300 200\'%3E%3Crect fill=\'%23dcfce7\' width=\'300\' height=\'200\'/%3E%3Ctext fill=\'%2322c55e\' font-family=\'sans-serif\' font-size=\'16\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EImage 2%3C/text%3E%3C/svg%3E'
const img3 = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'200\' viewBox=\'0 0 300 200\'%3E%3Crect fill=\'%23fef9c3\' width=\'300\' height=\'200\'/%3E%3Ctext fill=\'%23eab308\' font-family=\'sans-serif\' font-size=\'16\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EImage 3%3C/text%3E%3C/svg%3E'

export const PreviewGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Image src={img1} width={200} height={140} preview />
      <Image src={img2} width={200} height={140} preview />
      <Image src={img3} width={200} height={140} preview />
    </div>
  ),
}

const lazyColors = [
  { bg: '%23dbeafe', text: '%233b82f6', label: 'Lazy 1' },
  { bg: '%23dcfce7', text: '%2322c55e', label: 'Lazy 2' },
  { bg: '%23fef9c3', text: '%23eab308', label: 'Lazy 3' },
  { bg: '%23fce7f3', text: '%23ec4899', label: 'Lazy 4' },
  { bg: '%23e0e7ff', text: '%236366f1', label: 'Lazy 5' },
  { bg: '%23fecaca', text: '%23ef4444', label: 'Lazy 6' },
  { bg: '%23d1fae5', text: '%23059669', label: 'Lazy 7' },
  { bg: '%23bfdbfe', text: '%232563eb', label: 'Lazy 8' },
]

const makeSvgSrc = (bg: string, text: string, label: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='${bg}' width='300' height='200'/%3E%3Ctext fill='${text}' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E${label}%3C/text%3E%3C/svg%3E`

export const LazyLoad: Story = {
  parameters: {
    docs: {
      description: {
        story: '演示图片懒加载效果，使用 IntersectionObserver 监听图片进入视口时才加载，适用于长列表或大量图片的页面优化。',
      },
    },
  },
  render: () => {
    const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute('data-index'))
            if (entry.isIntersecting) {
              setVisibleIndices((prev) => new Set(prev).add(index))
            }
          })
        },
        { rootMargin: '100px' },
      )

      itemRefs.current.forEach((el) => {
        if (el) observer.observe(el)
      })

      return () => observer.disconnect()
    }, [])

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">向下滚动查看图片懒加载效果（IntersectionObserver）</p>
        <div className="space-y-6 max-h-[400px] overflow-y-auto p-2 border border-border rounded-md">
          {lazyColors.map((item, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className="flex items-center gap-4"
            >
              {visibleIndices.has(index) ? (
                <Image
                  src={makeSvgSrc(item.bg, item.text, item.label)}
                  width={200}
                  height={130}
                  placeholder={<span className="text-gray-400 text-sm">Loading...</span>}
                />
              ) : (
                <div
                  className="flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded"
                  style={{ width: 200, height: 130 }}
                >
                  Loading...
                </div>
              )}
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
}
