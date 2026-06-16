import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AvatarGroup } from './index'
import type { AvatarItem } from './types'

const avatars: AvatarItem[] = [
  { name: '张三' },
  { name: '李四' },
  { name: '王五' },
  { src: 'https://example.com/avatar.png', name: '赵六' },
  { icon: <span>A</span>, name: '钱七' },
]

describe('AvatarGroup', () => {
  it('渲染默认状态 - 显示头像', () => {
    render(<AvatarGroup avatars={avatars} />)
    expect(screen.getByText('张')).toBeInTheDocument()
    expect(screen.getByText('李')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <AvatarGroup avatars={avatars} className="custom-group" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-group')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<AvatarGroup avatars={avatars} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('maxCount 限制显示数量并显示超出计数', () => {
    render(<AvatarGroup avatars={avatars} maxCount={2} />)
    expect(screen.getByText('+3')).toBeInTheDocument()
  })

  it('onExcessClick 回调在点击超出计数时触发', () => {
    const onExcessClick = vi.fn()
    render(<AvatarGroup avatars={avatars} maxCount={2} onExcessClick={onExcessClick} />)
    fireEvent.click(screen.getByText('+3'))
    expect(onExcessClick).toHaveBeenCalledTimes(1)
  })

  it('图片头像渲染 img 元素', () => {
    render(<AvatarGroup avatars={[{ src: 'https://example.com/a.png', name: '用户' }]} />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/a.png')
  })

  it('name 首字母大写显示', () => {
    render(<AvatarGroup avatars={[{ name: 'alice' }]} />)
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('icon 头像渲染自定义图标', () => {
    render(<AvatarGroup avatars={[{ icon: <span>IC</span> }]} />)
    expect(screen.getByText('IC')).toBeInTheDocument()
  })
})
