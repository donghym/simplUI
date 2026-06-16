import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Popover } from './index'
import type { PopoverPlacement } from './types'

describe('Popover', () => {
  it('默认状态下浮层不可见', () => {
    render(
      <Popover content="气泡内容">
        <button>触发器</button>
      </Popover>,
    )
    expect(screen.queryByText('气泡内容')).not.toBeInTheDocument()
  })

  it('click 触发后浮层出现，再次点击关闭', async () => {
    render(
      <Popover content="气泡内容">
        <button>触发器</button>
      </Popover>,
    )
    const trigger = screen.getByText('触发器')
    fireEvent.click(trigger)
    expect(screen.getByText('气泡内容')).toBeInTheDocument()

    fireEvent.click(trigger)
    await waitFor(() => {
      expect(screen.queryByText('气泡内容')).not.toBeInTheDocument()
    })
  })

  it('受控模式 open/onOpenChange 可控制浮层显隐', () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <Popover content="受控内容" open={false} onOpenChange={onOpenChange}>
        <button>触发器</button>
      </Popover>,
    )
    expect(screen.queryByText('受控内容')).not.toBeInTheDocument()

    rerender(
      <Popover content="受控内容" open={true} onOpenChange={onOpenChange}>
        <button>触发器</button>
      </Popover>,
    )
    expect(screen.getByText('受控内容')).toBeInTheDocument()
  })

  it('defaultOpen=true 时浮层初始可见', () => {
    render(
      <Popover content="默认打开" defaultOpen>
        <button>触发器</button>
      </Popover>,
    )
    expect(screen.getByText('默认打开')).toBeInTheDocument()
  })

  it('按 ESC 键关闭浮层', async () => {
    render(
      <Popover content="ESC 关闭测试" defaultOpen>
        <button>触发器</button>
      </Popover>,
    )
    expect(screen.getByText('ESC 关闭测试')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    await waitFor(() => {
      expect(screen.queryByText('ESC 关闭测试')).not.toBeInTheDocument()
    })
  })

  it('点击浮层外部关闭', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Popover content="点击外部关闭" defaultOpen>
          <button>触发器</button>
        </Popover>
        <button>外部按钮</button>
      </div>,
    )
    expect(screen.getByText('点击外部关闭')).toBeInTheDocument()

    await user.click(screen.getByText('外部按钮'))
    await waitFor(() => {
      expect(screen.queryByText('点击外部关闭')).not.toBeInTheDocument()
    })
  })

  it('渲染标题和内容', () => {
    render(
      <Popover title="气泡标题" content="气泡内容" defaultOpen>
        <button>触发器</button>
      </Popover>,
    )
    expect(screen.getByText('气泡标题')).toBeInTheDocument()
    expect(screen.getByText('气泡内容')).toBeInTheDocument()
  })

  it.each(['top', 'bottom', 'left', 'right'] as const)(
    'placement=%s 时浮层正常渲染',
    (placement: PopoverPlacement) => {
      render(
        <Popover content="内容" placement={placement} defaultOpen>
          <button>触发器</button>
        </Popover>,
      )
      const popover = screen.getByRole('dialog')
      expect(popover).toBeInTheDocument()
      expect(popover.className).toContain('absolute')
    },
  )

  it('合并用户 className 到浮层容器', () => {
    render(
      <Popover content="自定义类名" className="my-custom bg-danger-100" defaultOpen>
        <button>触发器</button>
      </Popover>,
    )
    const popover = screen.getByRole('dialog')
    expect(popover.className).toContain('my-custom')
    expect(popover.className).toContain('bg-danger-100')
  })

  it('arrow=false 时不渲染箭头', () => {
    render(
      <Popover content="无箭头" arrow={false} defaultOpen>
        <button>触发器</button>
      </Popover>,
    )
    const popover = screen.getByRole('dialog')
    const arrowEl = popover.querySelector('[aria-hidden="true"]')
    expect(arrowEl).toBeNull()
  })

  it('hover 触发方式下鼠标移入显示、移出隐藏', async () => {
    const user = userEvent.setup()
    render(
      <Popover content="hover 内容" trigger="hover">
        <button data-testid="hover-trigger">hover 触发器</button>
      </Popover>,
    )
    expect(screen.queryByText('hover 内容')).not.toBeInTheDocument()

    await user.hover(screen.getByTestId('hover-trigger'))
    expect(screen.getByText('hover 内容')).toBeInTheDocument()

    await user.unhover(screen.getByTestId('hover-trigger'))
    await waitFor(() => {
      expect(screen.queryByText('hover 内容')).not.toBeInTheDocument()
    })
  })
})