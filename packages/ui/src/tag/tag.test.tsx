import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Tag } from './index'

describe('Tag', () => {
  it('使用默认变体渲染', () => {
    render(<Tag data-testid="tag">标签</Tag>)
    const tag = screen.getByTestId('tag')
    expect(tag).toBeInTheDocument()
    expect(tag.tagName).toBe('SPAN')
    expect(tag.textContent).toBe('标签')
    // 默认变体应有灰色背景类
    expect(tag.className).toContain('bg-muted')
  })

  it.each(['default', 'primary', 'success', 'warning', 'danger'] as const)(
    '渲染变体 %s 并包含正确的颜色类',
    (variant) => {
      render(
        <Tag variant={variant} data-testid="tag">
          {variant}
        </Tag>,
      )
      const tag = screen.getByTestId('tag')
      // 每个变体都应有对应的背景色类
      expect(tag.className).toContain('bg-')
    },
  )

  it('closable=true 时显示关闭按钮', () => {
    render(
      <Tag closable data-testid="tag">
        可关闭
      </Tag>,
    )
    const closeButton = screen.getByRole('button', { name: '移除标签' })
    expect(closeButton).toBeInTheDocument()
  })

  it('closable=false 时不显示关闭按钮', () => {
    render(
      <Tag data-testid="tag">
        不可关闭
      </Tag>,
    )
    const closeButton = screen.queryByRole('button', { name: '移除标签' })
    expect(closeButton).not.toBeInTheDocument()
  })

  it('点击关闭按钮时触发 onClose 回调', () => {
    const handleClose = vi.fn()
    render(
      <Tag closable onClose={handleClose} data-testid="tag">
        可关闭
      </Tag>,
    )
    const closeButton = screen.getByRole('button', { name: '移除标签' })
    fireEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('点击关闭按钮时不触发标签自身的 onClick', () => {
    const handleClose = vi.fn()
    const handleClick = vi.fn()
    render(
      <Tag closable onClose={handleClose} onClick={handleClick} data-testid="tag">
        可关闭
      </Tag>,
    )
    // 点击标签内容区域不应触发关闭回调
    const tag = screen.getByTestId('tag')
    fireEvent.click(tag)
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClose).not.toHaveBeenCalled()

    // 点击关闭按钮不应触发 onClick
    const closeButton = screen.getByRole('button', { name: '移除标签' })
    fireEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('渲染前置图标', () => {
    render(
      <Tag icon={<span data-testid="icon">*</span>} data-testid="tag">
        带图标
      </Tag>,
    )
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    expect(screen.getByText('带图标')).toBeInTheDocument()
  })

  it('合并用户 className 通过 cn() 和 twMerge', () => {
    render(
      <Tag className="mt-4 bg-danger-500" data-testid="tag">
        自定义
      </Tag>,
    )
    const tag = screen.getByTestId('tag')
    expect(tag.className).toContain('mt-4')
    // twMerge 会用 bg-danger-500 覆盖默认的 bg-muted（冲突的后出现的优先）
    expect(tag.className).toContain('bg-danger-500')
  })
})