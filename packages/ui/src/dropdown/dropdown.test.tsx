import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Dropdown, DropdownMenu, DropdownItem, DropdownDivider } from './index'
import type { DropdownPlacement } from './types'

describe('Dropdown', () => {
  it('默认状态下菜单不可见', () => {
    render(
      <Dropdown menu={<DropdownMenu><DropdownItem itemKey="1">菜单项</DropdownItem></DropdownMenu>}>
        <button>触发器</button>
      </Dropdown>,
    )
    expect(screen.queryByText('菜单项')).not.toBeInTheDocument()
  })

  it('点击触发元素后菜单出现，再次点击关闭', async () => {
    render(
      <Dropdown menu={<DropdownMenu><DropdownItem itemKey="1">菜单项</DropdownItem></DropdownMenu>}>
        <button>触发器</button>
      </Dropdown>,
    )
    const trigger = screen.getByText('触发器')
    fireEvent.click(trigger)
    expect(screen.getByText('菜单项')).toBeInTheDocument()

    fireEvent.click(trigger)
    await waitFor(() => {
      expect(screen.queryByText('菜单项')).not.toBeInTheDocument()
    })
  })

  it('受控模式 open/onOpenChange 可控制菜单显隐', () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <Dropdown
        menu={<DropdownMenu><DropdownItem itemKey="1">受控菜单项</DropdownItem></DropdownMenu>}
        open={false}
        onOpenChange={onOpenChange}
      >
        <button>触发器</button>
      </Dropdown>,
    )
    expect(screen.queryByText('受控菜单项')).not.toBeInTheDocument()

    rerender(
      <Dropdown
        menu={<DropdownMenu><DropdownItem itemKey="1">受控菜单项</DropdownItem></DropdownMenu>}
        open={true}
        onOpenChange={onOpenChange}
      >
        <button>触发器</button>
      </Dropdown>,
    )
    expect(screen.getByText('受控菜单项')).toBeInTheDocument()
  })

  it('defaultOpen=true 时菜单初始可见', () => {
    render(
      <Dropdown
        menu={<DropdownMenu><DropdownItem itemKey="1">默认打开</DropdownItem></DropdownMenu>}
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    expect(screen.getByText('默认打开')).toBeInTheDocument()
  })

  it('按 ESC 键关闭菜单', async () => {
    render(
      <Dropdown
        menu={<DropdownMenu><DropdownItem itemKey="1">ESC 关闭测试</DropdownItem></DropdownMenu>}
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    expect(screen.getByText('ESC 关闭测试')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    await waitFor(() => {
      expect(screen.queryByText('ESC 关闭测试')).not.toBeInTheDocument()
    })
  })

  it('点击菜单外部关闭', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Dropdown
          menu={<DropdownMenu><DropdownItem itemKey="1">点击外部关闭</DropdownItem></DropdownMenu>}
          defaultOpen
        >
          <button>触发器</button>
        </Dropdown>
        <button>外部按钮</button>
      </div>,
    )
    expect(screen.getByText('点击外部关闭')).toBeInTheDocument()

    await user.click(screen.getByText('外部按钮'))
    await waitFor(() => {
      expect(screen.queryByText('点击外部关闭')).not.toBeInTheDocument()
    })
  })

  it.each(['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'] as const)(
    'placement=%s 时菜单正常渲染',
    (placement: DropdownPlacement) => {
      render(
        <Dropdown
          menu={<DropdownMenu><DropdownItem itemKey="1">内容</DropdownItem></DropdownMenu>}
          placement={placement}
          defaultOpen
        >
          <button>触发器</button>
        </Dropdown>,
      )
      const menu = screen.getByRole('menu')
      expect(menu).toBeInTheDocument()
      expect(menu.className).toContain('absolute')
    },
  )

  it('disabled=true 时点击不会打开菜单', () => {
    render(
      <Dropdown
        menu={<DropdownMenu><DropdownItem itemKey="1">禁用菜单项</DropdownItem></DropdownMenu>}
        disabled
      >
        <button>触发器</button>
      </Dropdown>,
    )
    fireEvent.click(screen.getByText('触发器'))
    expect(screen.queryByText('禁用菜单项')).not.toBeInTheDocument()
  })

  it('DropdownItem 点击触发 onClick 回调', async () => {
    const onItemClick = vi.fn()
    render(
      <Dropdown
        menu={
          <DropdownMenu>
            <DropdownItem itemKey="item-1" onClick={onItemClick}>点击菜单项</DropdownItem>
          </DropdownMenu>
        }
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    await userEvent.setup().click(screen.getByText('点击菜单项'))
    expect(onItemClick).toHaveBeenCalledWith('item-1')
  })

  it('DropdownItem disabled=true 时点击不触发 onClick', async () => {
    const onItemClick = vi.fn()
    render(
      <Dropdown
        menu={
          <DropdownMenu>
            <DropdownItem itemKey="item-1" onClick={onItemClick} disabled>禁用菜单项</DropdownItem>
          </DropdownMenu>
        }
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    await userEvent.setup().click(screen.getByText('禁用菜单项'))
    expect(onItemClick).not.toHaveBeenCalled()
  })

  it('DropdownItem destructive=true 时显示危险样式', () => {
    render(
      <Dropdown
        menu={
          <DropdownMenu>
            <DropdownItem itemKey="item-1" destructive>删除操作</DropdownItem>
          </DropdownMenu>
        }
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    const item = screen.getByRole('menuitem')
    expect(item.className).toContain('text-danger-500')
  })

  it('DropdownDivider 渲染分割线', () => {
    render(
      <Dropdown
        menu={
          <DropdownMenu>
            <DropdownItem itemKey="item-1">菜单项1</DropdownItem>
            <DropdownDivider />
            <DropdownItem itemKey="item-2">菜单项2</DropdownItem>
          </DropdownMenu>
        }
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
    expect(divider.className).toContain('bg-border')
  })

  it('合并用户 className 到菜单容器', () => {
    render(
      <Dropdown
        menu={<DropdownMenu><DropdownItem itemKey="1">内容</DropdownItem></DropdownMenu>}
        className="my-custom"
        defaultOpen
      >
        <button>触发器</button>
      </Dropdown>,
    )
    const wrapper = screen.getByRole('button').parentElement
    expect(wrapper?.className).toContain('my-custom')
  })

  it('aria-expanded 属性正确设置', () => {
    render(
      <Dropdown menu={<DropdownMenu><DropdownItem itemKey="1">内容</DropdownItem></DropdownMenu>}>
        <button>触发器</button>
      </Dropdown>,
    )
    const wrapper = screen.getByRole('button').parentElement
    expect(wrapper).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(screen.getByText('触发器'))
    expect(wrapper).toHaveAttribute('aria-expanded', 'true')
  })
})