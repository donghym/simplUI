import type { Meta, StoryObj } from '@storybook/react'
import { useState, useCallback } from 'react'
import { InfiniteScroll } from './index'

const meta: Meta<typeof InfiniteScroll> = {
  title: '数据展示/InfiniteScroll 无限滚动',
  component: InfiniteScroll,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: '是否正在加载',
    },
    hasMore: {
      control: 'boolean',
      description: '是否还有更多数据',
    },
    loadingText: {
      control: 'text',
      description: '加载中提示文本',
    },
    noMoreText: {
      control: 'text',
      description: '无更多数据提示文本',
    },
    threshold: {
      control: 'number',
      description: '触发距离像素，默认 100',
    },
  },
}

export default meta
type Story = StoryObj<typeof InfiniteScroll>

export const Basic: Story = {
  render: () => {
    const [items, setItems] = useState(() =>
      Array.from({ length: 10 }, (_, i) => `项目 ${i + 1}`)
    )
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const loadMore = useCallback(() => {
      if (loading) return
      setLoading(true)
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 5 }, (_, i) => `项目 ${prev.length + i + 1}`),
        ])
        setLoading(false)
        if (items.length >= 30) {
          setHasMore(false)
        }
      }, 1000)
    }, [loading, items.length])

    return (
      <div className="h-96 overflow-auto border border-border rounded-lg">
        <InfiniteScroll
          loading={loading}
          hasMore={hasMore}
          onLoadMore={loadMore}
        >
          {items.map((item, index) => (
            <div key={index} className="border-b border-border px-4 py-3 text-sm">
              {item}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    )
  },
}

export const NoMoreData: Story = {
  render: () => {
    const items = Array.from({ length: 5 }, (_, i) => `项目 ${i + 1}`)
    return (
      <div className="h-64 overflow-auto border border-border rounded-lg">
        <InfiniteScroll
          loading={false}
          hasMore={false}
          onLoadMore={() => {}}
        >
          {items.map((item, index) => (
            <div key={index} className="border-b border-border px-4 py-3 text-sm">
              {item}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    )
  },
}

export const CustomText: Story = {
  render: () => {
    const [items, setItems] = useState(() =>
      Array.from({ length: 5 }, (_, i) => `数据 ${i + 1}`)
    )
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const loadMore = useCallback(() => {
      if (loading) return
      setLoading(true)
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 3 }, (_, i) => `数据 ${prev.length + i + 1}`),
        ])
        setLoading(false)
        if (items.length >= 15) {
          setHasMore(false)
        }
      }, 800)
    }, [loading, items.length])

    return (
      <div className="h-80 overflow-auto border border-border rounded-lg">
        <InfiniteScroll
          loading={loading}
          hasMore={hasMore}
          onLoadMore={loadMore}
          loadingText="正在获取数据..."
          noMoreText="已加载全部数据"
        >
          {items.map((item, index) => (
            <div key={index} className="border-b border-border px-4 py-3 text-sm">
              {item}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    )
  },
}
