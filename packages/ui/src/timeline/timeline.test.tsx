import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Timeline, TimelineItem } from './index'

describe('Timeline', () => {
  it('默认渲染时间线', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem title="步骤 1" />
        <TimelineItem title="步骤 2" />
      </Timeline>
    )
    expect(container.querySelector('[role="list"]')).toBeInTheDocument()
  })

  it('渲染 items 数组', () => {
    render(
      <Timeline
        items={[
          { title: '步骤 1', status: 'completed' },
          { title: '步骤 2', status: 'active' },
          { title: '步骤 3', status: 'pending' },
        ]}
      />
    )
    expect(screen.getByText('步骤 1')).toBeInTheDocument()
    expect(screen.getByText('步骤 2')).toBeInTheDocument()
    expect(screen.getByText('步骤 3')).toBeInTheDocument()
  })

  it('显示 completed 状态节点', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem status="completed" title="已完成" />
      </Timeline>
    )
    // completed 状态使用 bg-slate-900 样式
    const dot = container.querySelector('.bg-slate-900')
    expect(dot).toBeInTheDocument()
  })

  it('显示 active 状态节点', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem status="active" title="进行中" />
      </Timeline>
    )
    // active 状态使用 border-slate-900 样式
    const dot = container.querySelector('.border-slate-900')
    expect(dot).toBeInTheDocument()
  })

  it('显示 pending 状态节点', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem status="pending" title="待处理" />
      </Timeline>
    )
    // pending 状态使用 border-gray-200 样式
    const dot = container.querySelector('.border-gray-200')
    expect(dot).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(
      <Timeline className="custom-class">
        <TimelineItem title="步骤 1" />
      </Timeline>
    )
    const root = container.querySelector('.custom-class')
    expect(root).toBeInTheDocument()
  })

  it('ref 转发到根元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Timeline ref={ref}>
        <TimelineItem title="步骤 1" />
      </Timeline>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('显示 description 描述', () => {
    render(
      <Timeline>
        <TimelineItem title="步骤 1" description="这是描述" />
      </Timeline>
    )
    expect(screen.getByText('这是描述')).toBeInTheDocument()
  })

  it('显示 time 时间', () => {
    render(
      <Timeline>
        <TimelineItem title="步骤 1" time="2024-01-01" />
      </Timeline>
    )
    expect(screen.getByText('2024-01-01')).toBeInTheDocument()
  })
})

describe('TimelineItem', () => {
  it('默认渲染时间线项', () => {
    render(<TimelineItem title="内容标题" />)
    expect(screen.getByText('内容标题')).toBeInTheDocument()
  })

  it('显示自定义图标', () => {
    render(
      <TimelineItem title="内容" icon={<span data-testid="custom-icon">自定义图标</span>} />
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('status=completed 时节点显示完成样式', () => {
    const { container } = render(<TimelineItem status="completed" title="内容" />)
    const dot = container.querySelector('.bg-slate-900')
    expect(dot).toBeInTheDocument()
  })

  it('status=active 时节点显示激活样式', () => {
    const { container } = render(<TimelineItem status="active" title="内容" />)
    const dot = container.querySelector('.border-slate-900')
    expect(dot).toBeInTheDocument()
  })

  it('status=pending 时节点显示待处理样式', () => {
    const { container } = render(<TimelineItem status="pending" title="内容" />)
    const dot = container.querySelector('.border-gray-200')
    expect(dot).toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(<TimelineItem className="custom-class" title="内容" />)
    const item = container.querySelector('.custom-class')
    expect(item).toBeInTheDocument()
  })

  it('ref 转发到元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<TimelineItem ref={ref} title="内容" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('显示索引数字', () => {
    const { container } = render(<TimelineItem title="内容" index={0} />)
    // index=0 时显示 1
    expect(container.textContent).toContain('1')
  })

  it('最后一项不显示连接线', () => {
    const { container } = render(<TimelineItem title="内容" isLast={true} />)
    // isLast 时没有连接线
    const line = container.querySelector('.absolute.left-\\[19px\\]')
    expect(line).toBeNull()
  })

  it('非最后一项显示连接线', () => {
    const { container } = render(<TimelineItem title="内容" isLast={false} />)
    // 非 isLast 时有连接线
    const line = container.querySelector('.absolute')
    expect(line).toBeInTheDocument()
  })
})