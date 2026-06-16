import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EnhanceTimeline } from './index'
import type { EnhanceTimelineItem } from './types'

const items: EnhanceTimelineItem[] = [
  { title: '创建订单', time: '10:00', content: '用户下单', status: 'success' },
  { title: '支付完成', time: '10:05', content: '支付成功', status: 'success' },
  { title: '发货中', time: '11:00', content: '仓库处理中', status: 'processing' },
  { title: '已签收', time: '14:00', status: 'default' },
]

describe('EnhanceTimeline', () => {
  it('渲染默认状态 - 显示时间线节点', () => {
    render(<EnhanceTimeline items={items} />)
    expect(screen.getByText('创建订单')).toBeInTheDocument()
    expect(screen.getByText('支付完成')).toBeInTheDocument()
    expect(screen.getByText('发货中')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <EnhanceTimeline items={items} className="custom-timeline" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-timeline')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<EnhanceTimeline items={items} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('节点内容正确显示', () => {
    render(<EnhanceTimeline items={items} />)
    expect(screen.getByText('用户下单')).toBeInTheDocument()
    expect(screen.getByText('支付成功')).toBeInTheDocument()
  })

  it('节点时间正确显示', () => {
    render(<EnhanceTimeline items={items} />)
    expect(screen.getByText('10:00')).toBeInTheDocument()
    expect(screen.getByText('10:05')).toBeInTheDocument()
  })

  it('mode 为 alternate 时交替布局', () => {
    const { container } = render(
      <EnhanceTimeline items={items} mode="alternate" />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('collapsible 超过数量时显示折叠按钮', () => {
    const manyItems: EnhanceTimelineItem[] = Array.from({ length: 8 }, (_, i) => ({
      title: `步骤${i + 1}`,
    }))
    render(<EnhanceTimeline items={manyItems} collapsible collapseCount={3} />)
    expect(screen.getByText(/展开更多/)).toBeInTheDocument()
  })

  it('点击折叠按钮展开更多节点', () => {
    const manyItems: EnhanceTimelineItem[] = Array.from({ length: 8 }, (_, i) => ({
      title: `步骤${i + 1}`,
    }))
    render(<EnhanceTimeline items={manyItems} collapsible collapseCount={3} />)
    fireEvent.click(screen.getByText(/展开更多/))
    expect(screen.getByText('步骤8')).toBeInTheDocument()
  })
})
