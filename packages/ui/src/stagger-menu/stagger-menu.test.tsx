import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { StaggerMenu } from './index'

const items = [
  { label: '选项一', onClick: vi.fn() },
  { label: '选项二', onClick: vi.fn() },
  { label: '禁用项', disabled: true, onClick: vi.fn() },
]

describe('StaggerMenu', () => {
  it('渲染默认展开状态', () => {
    render(<StaggerMenu items={items} />)
    expect(screen.getByText('选项一')).toBeInTheDocument()
    expect(screen.getByText('选项二')).toBeInTheDocument()
    expect(screen.getByText('禁用项')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(<StaggerMenu items={items} className="custom-menu" />)
    const menu = screen.getByText('选项一').closest('.sui-stagger-menu')
    expect(menu?.className).toContain('sui-stagger-menu')
    expect(menu?.className).toContain('custom-menu')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<StaggerMenu items={items} ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('禁用项点击不触发回调', () => {
    const onClick = vi.fn()
    const localItems = [
      { label: '可用', onClick: vi.fn() },
      { label: '禁用', disabled: true, onClick },
    ]
    render(<StaggerMenu items={localItems} />)
    fireEvent.click(screen.getByText('禁用'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('正常项点击触发回调', () => {
    const onClick = vi.fn()
    render(<StaggerMenu items={[{ label: '点击', onClick }]} />)
    fireEvent.click(screen.getByText('点击'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('open=false 时菜单收起', () => {
    render(<StaggerMenu items={items} open={false} />)
    const firstItem = screen.getByText('选项一')
    expect(firstItem.className).toContain('opacity-0')
  })

  it.each(['down', 'up', 'left', 'right'] as const)(
    'direction=%s 应用正确的收起动画类',
    (direction) => {
      render(<StaggerMenu items={items} open={false} direction={direction} />)
      const firstItem = screen.getByText('选项一')
      expect(firstItem.className).toContain('opacity-0')
      if (direction === 'down') {
        expect(firstItem.className).toContain('-translate-y-2.5')
      } else if (direction === 'up') {
        expect(firstItem.className).toContain('translate-y-2.5')
      } else if (direction === 'left') {
        expect(firstItem.className).toContain('translate-x-2.5')
      } else if (direction === 'right') {
        expect(firstItem.className).toContain('-translate-x-2.5')
      }
    },
  )

  it('aria-disabled 属性正确设置', () => {
    render(<StaggerMenu items={items} />)
    const disabledItem = screen.getByText('禁用项')
    expect(disabledItem).toHaveAttribute('aria-disabled', 'true')
    const normalItem = screen.getByText('选项一')
    // 非禁用项不设置 aria-disabled 属性
    expect(normalItem).not.toHaveAttribute('aria-disabled')
  })

  it('role="menuitem" 正确设置', () => {
    render(<StaggerMenu items={items} />)
    const menuItems = screen.getAllByRole('menuitem')
    expect(menuItems).toHaveLength(3)
  })
})