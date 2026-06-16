import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Menu, MenuItem, SubMenu } from './index'

describe('Menu', () => {
  it('渲染菜单项', () => {
    render(
      <Menu>
        <MenuItem itemKey="1">菜单项 1</MenuItem>
        <MenuItem itemKey="2">菜单项 2</MenuItem>
      </Menu>,
    )

    expect(screen.getByText('菜单项 1')).toBeInTheDocument()
    expect(screen.getByText('菜单项 2')).toBeInTheDocument()
  })

  it('点击菜单项触发 onSelect', () => {
    const onSelect = vi.fn()
    render(
      <Menu onSelect={onSelect}>
        <MenuItem itemKey="home">首页</MenuItem>
      </Menu>,
    )

    fireEvent.click(screen.getByText('首页'))
    expect(onSelect).toHaveBeenCalledWith('home')
  })

  it('受控模式 selectedKey', () => {
    render(
      <Menu selectedKey="2">
        <MenuItem itemKey="1" data-testid="item1">A</MenuItem>
        <MenuItem itemKey="2" data-testid="item2">B</MenuItem>
      </Menu>,
    )

    expect(screen.getByTestId('item2').className).toContain('bg-primary-50')
  })

  it('水平模式', () => {
    const { container } = render(
      <Menu mode="horizontal">
        <MenuItem itemKey="1">A</MenuItem>
      </Menu>,
    )

    const ul = container.querySelector('ul')!
    expect(ul.className).toContain('flex-row')
  })

  it('禁用菜单项不触发选择', () => {
    const onSelect = vi.fn()
    render(
      <Menu onSelect={onSelect}>
        <MenuItem itemKey="1" disabled>
          禁用
        </MenuItem>
      </Menu>,
    )

    fireEvent.click(screen.getByText('禁用'))
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('SubMenu 展开/收起', () => {
    render(
      <Menu>
        <SubMenu itemKey="sub" title="子菜单">
          <MenuItem itemKey="sub1">子项 1</MenuItem>
        </SubMenu>
      </Menu>,
    )

    // 初始子项不可见
    expect(screen.queryByText('子项 1')).not.toBeInTheDocument()

    // 点击展开
    fireEvent.click(screen.getByText('子菜单'))
    expect(screen.getByText('子项 1')).toBeInTheDocument()
  })

  it('用户 className 合并', () => {
    render(
      <Menu className="custom-menu">
        <MenuItem itemKey="1">A</MenuItem>
      </Menu>,
    )

    expect(document.querySelector('.custom-menu')).toBeInTheDocument()
  })

  it('图标渲染', () => {
    render(
      <Menu>
        <MenuItem itemKey="1" icon={<span data-testid="icon">icon</span>}>
          搜索
        </MenuItem>
      </Menu>,
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})