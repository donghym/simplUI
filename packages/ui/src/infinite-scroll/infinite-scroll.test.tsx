import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { InfiniteScroll } from './index'

// 模拟 IntersectionObserver
beforeEach(() => {
  const mockObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
  vi.stubGlobal('IntersectionObserver', mockObserver)
})

describe('InfiniteScroll', () => {
  it('渲染默认状态', () => {
    render(
      <InfiniteScroll loading={false} hasMore={true} onLoadMore={vi.fn()}>
        <div>内容</div>
      </InfiniteScroll>,
    )
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <InfiniteScroll loading={false} hasMore={true} onLoadMore={vi.fn()} className="custom-scroll">
        <div>内容</div>
      </InfiniteScroll>,
    )
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-scroll')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <InfiniteScroll ref={ref} loading={false} hasMore={true} onLoadMore={vi.fn()}>
        <div>内容</div>
      </InfiniteScroll>,
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('loading 状态显示加载文本', () => {
    render(
      <InfiniteScroll loading={true} hasMore={true} onLoadMore={vi.fn()}>
        <div>内容</div>
      </InfiniteScroll>,
    )
    expect(screen.getByText('加载中...')).toBeInTheDocument()
  })

  it('hasMore=false 显示无更多数据', () => {
    render(
      <InfiniteScroll loading={false} hasMore={false} onLoadMore={vi.fn()}>
        <div>内容</div>
      </InfiniteScroll>,
    )
    expect(screen.getByText('没有更多了')).toBeInTheDocument()
  })

  it('自定义加载文本', () => {
    render(
      <InfiniteScroll loading={true} hasMore={true} onLoadMore={vi.fn()} loadingText="正在加载">
        <div>内容</div>
      </InfiniteScroll>,
    )
    expect(screen.getByText('正在加载')).toBeInTheDocument()
  })
})
