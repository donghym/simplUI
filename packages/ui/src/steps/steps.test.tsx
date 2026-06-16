import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Steps } from './index'

describe('Steps', () => {
  it('默认渲染步骤条', () => {
    const { container } = render(
      <Steps
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(container.querySelector('.flex')).toBeInTheDocument()
    expect(screen.getByText('步骤 1')).toBeInTheDocument()
    expect(screen.getByText('步骤 2')).toBeInTheDocument()
  })

  it('渲染 items 数组', () => {
    render(
      <Steps
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
          { title: '步骤 3' },
        ]}
      />
    )
    expect(screen.getByText('步骤 1')).toBeInTheDocument()
    expect(screen.getByText('步骤 2')).toBeInTheDocument()
    expect(screen.getByText('步骤 3')).toBeInTheDocument()
  })

  it('current 指定当前步骤', () => {
    render(
      <Steps
        current={1}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
          { title: '步骤 3' },
        ]}
      />
    )
    // 步骤 1 应该是 finish 状态
    const step1Title = screen.getByText('步骤 1')
    expect(step1Title).toHaveClass('text-foreground')
    // 步骤 2 应该是 process 状态
    const step2Title = screen.getByText('步骤 2')
    expect(step2Title).toHaveClass('text-foreground')
  })

  it('垂直方向渲染', () => {
    const { container } = render(
      <Steps
        direction="vertical"
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(container.querySelector('.flex-col')).toBeInTheDocument()
  })

  it('小尺寸渲染', () => {
    const { container } = render(
      <Steps
        stepSize="small"
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(container.querySelector('.flex')).toBeInTheDocument()
  })

  it('outlined 变体渲染', () => {
    render(
      <Steps
        variant="outlined"
        current={1}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(screen.getByText('步骤 1')).toBeInTheDocument()
  })

  it('inline 变体渲染', () => {
    const { container } = render(
      <Steps
        variant="inline"
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(container.querySelector('.bg-muted')).toBeInTheDocument()
  })

  it('点状步骤条', () => {
    render(
      <Steps
        progressDot
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(screen.getByText('步骤 1')).toBeInTheDocument()
  })

  it('渲染描述', () => {
    render(
      <Steps
        items={[
          { title: '步骤 1', description: '这是步骤 1 的描述' },
          { title: '步骤 2', description: '这是步骤 2 的描述' },
        ]}
      />
    )
    expect(screen.getByText('这是步骤 1 的描述')).toBeInTheDocument()
    expect(screen.getByText('这是步骤 2 的描述')).toBeInTheDocument()
  })

  it('渲染子标题', () => {
    render(
      <Steps
        items={[
          { title: '步骤 1', subTitle: '00:00:08' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(screen.getByText('00:00:08')).toBeInTheDocument()
  })

  it('渲染自定义图标', () => {
    render(
      <Steps
        items={[
          { title: '步骤 1', icon: <span>Custom Icon</span> },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(screen.getByText('Custom Icon')).toBeInTheDocument()
  })

  it('status=error 显示错误样式', () => {
    render(
      <Steps
        current={1}
        status="error"
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
          { title: '步骤 3' },
        ]}
      />
    )
    // 步骤 2 应该是 error 状态
    const step2Title = screen.getByText('步骤 2')
    expect(step2Title).toHaveClass('text-danger-500')
  })

  it('percent 进度显示', () => {
    render(
      <Steps
        current={0}
        percent={50}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    expect(screen.getByText('步骤 1')).toBeInTheDocument()
  })

  it('可点击步骤条', async () => {
    const onChange = vi.fn()
    render(
      <Steps
        current={0}
        onChange={onChange}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
          { title: '步骤 3' },
        ]}
      />
    )

    await userEvent.click(screen.getByText('步骤 2'))
    expect(onChange).toHaveBeenCalledWith(1)
  })

  it('禁用步骤不可点击', async () => {
    const onChange = vi.fn()
    render(
      <Steps
        current={0}
        onChange={onChange}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2', disabled: true },
          { title: '步骤 3' },
        ]}
      />
    )

    await userEvent.click(screen.getByText('步骤 2'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(
      <Steps
        className="custom-class"
        items={[
          { title: '步骤 1' },
        ]}
      />
    )
    const root = container.querySelector('.custom-class')
    expect(root).toBeInTheDocument()
  })

  it('ref 转发到根元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Steps
        ref={ref}
        items={[
          { title: '步骤 1' },
        ]}
      />
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('显示步骤序号', () => {
    render(
      <Steps
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
          { title: '步骤 3' },
        ]}
      />
    )
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('完成状态显示勾选图标', () => {
    render(
      <Steps
        current={1}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
        ]}
      />
    )
    // 步骤 1 已完成，应该显示 Check 图标
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})