import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Avatar } from './index'

describe('Avatar', () => {
  it('默认渲染空头像（无内容）', () => {
    render(<Avatar data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeInTheDocument()
    // 默认应有圆形和尺寸样式
    expect(avatar.className).toContain('rounded-full')
    expect(avatar.className).toContain('h-10')
    expect(avatar.className).toContain('w-10')
  })

  it('传入 src 时渲染 img 元素', () => {
    render(<Avatar src="/avatar.png" alt="User" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    const img = avatar.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/avatar.png')
    expect(img).toHaveAttribute('alt', 'User')
  })

  it('传入 srcSet 时透传到 img 元素', () => {
    render(
      <Avatar src="/avatar.png" srcSet="/avatar@2x.png 2x" data-testid="avatar" />,
    )
    const img = screen.getByTestId('avatar').querySelector('img')
    expect(img).toHaveAttribute('srcSet', '/avatar@2x.png 2x')
  })

  it('不传 src 时显示 children 文字', () => {
    render(<Avatar data-testid="avatar">U</Avatar>)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('U')
    expect(avatar.querySelector('img')).not.toBeInTheDocument()
  })

  it('不传 src 且有 icon 时显示 icon', () => {
    render(<Avatar icon={<span data-testid="icon">*</span>} data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar.querySelector('img')).not.toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('不传 src 时 children 优先级高于 icon', () => {
    render(
      <Avatar icon={<span data-testid="icon">*</span>} data-testid="avatar">
        U
      </Avatar>,
    )
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('U')
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
  })

  it('不传 src/children/icon 时显示 alt 首字符', () => {
    render(<Avatar alt="Alice" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveTextContent('A')
  })

  it('图片加载失败后回退到 children', () => {
    render(
      <Avatar src="broken.png" alt="User" data-testid="avatar">
        ZZ
      </Avatar>,
    )
    const img = screen.getByTestId('avatar').querySelector('img')
    // 模拟图片加载失败
    fireEvent.error(img!)
    // 回退到 children 文字
    expect(screen.getByTestId('avatar')).toHaveTextContent('ZZ')
    expect(screen.getByTestId('avatar').querySelector('img')).not.toBeInTheDocument()
  })

  it('图片加载失败时触发 onError 回调', () => {
    const handleError = vi.fn()
    render(
      <Avatar src="broken.png" onError={handleError} data-testid="avatar">
        ZZ
      </Avatar>,
    )
    const img = screen.getByTestId('avatar').querySelector('img')
    fireEvent.error(img!)
    expect(handleError).toHaveBeenCalledTimes(1)
  })

  it('onError 返回 false 时阻止回退，保持 img 元素', () => {
    const handleError = vi.fn(() => false)
    render(
      <Avatar src="broken.png" onError={handleError} data-testid="avatar">
        ZZ
      </Avatar>,
    )
    const img = screen.getByTestId('avatar').querySelector('img')
    fireEvent.error(img!)
    expect(handleError).toHaveBeenCalledTimes(1)
    // img 元素仍然存在（被阻止回退）
    expect(screen.getByTestId('avatar').querySelector('img')).toBeInTheDocument()
  })

  it('合并用户 className 通过 cn() 和 twMerge', () => {
    render(<Avatar className="h-16 w-16" data-testid="avatar" />)
    const avatar = screen.getByTestId('avatar')
    // 用户自定义尺寸覆盖默认 38px
    expect(avatar.className).toContain('h-16')
    expect(avatar.className).toContain('w-16')
  })

  it('转发 ref 到 span 元素', () => {
    const ref = { current: null as HTMLSpanElement | null }
    render(<Avatar ref={(el) => { ref.current = el }} data-testid="avatar" />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})