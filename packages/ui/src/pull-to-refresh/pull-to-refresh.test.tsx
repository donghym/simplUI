import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PullToRefresh } from './index'

describe('PullToRefresh', () => {
  it('渲染默认状态', () => {
    render(
      <PullToRefresh refreshing={false} onRefresh={vi.fn()}>
        <div>内容</div>
      </PullToRefresh>,
    )
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(
      <PullToRefresh refreshing={false} onRefresh={vi.fn()} className="custom-pull">
        <div>内容</div>
      </PullToRefresh>,
    )
    const container = screen.getByText('内容').closest('.sui-pull-to-refresh')
    expect(container?.className).toContain('sui-pull-to-refresh')
    expect(container?.className).toContain('custom-pull')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <PullToRefresh ref={ref} refreshing={false} onRefresh={vi.fn()}>
        <div>内容</div>
      </PullToRefresh>,
    )
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('refreshing 状态显示刷新中文本', () => {
    render(
      <PullToRefresh refreshing={true} onRefresh={vi.fn()}>
        <div>内容</div>
      </PullToRefresh>,
    )
    expect(screen.getByText('刷新中...')).toBeInTheDocument()
  })

  it('disabled 状态不显示下拉提示', () => {
    render(
      <PullToRefresh refreshing={false} onRefresh={vi.fn()} disabled>
        <div>内容</div>
      </PullToRefresh>,
    )
    // disabled 状态下不应出现下拉提示文字
    expect(screen.queryByText('下拉刷新')).not.toBeInTheDocument()
  })

  it('自定义 indicator 渲染', () => {
    render(
      <PullToRefresh
        refreshing={true}
        onRefresh={vi.fn()}
        indicator={(status) => <span>状态: {status}</span>}
      >
        <div>内容</div>
      </PullToRefresh>,
    )
    expect(screen.getByText('状态: refreshing')).toBeInTheDocument()
  })
})
