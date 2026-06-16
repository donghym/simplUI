import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './index'

describe('Button', () => {
  it('渲染默认变体', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'button')
    expect(button.className).toContain('bg-background')
  })

  it.each(['default', 'primary', 'dashed', 'link', 'text'] as const)(
    '渲染变体 %s 的类名正确',
    (variant) => {
      render(<Button variant={variant}>Btn</Button>)
      const button = screen.getByRole('button', { name: 'Btn' })
      expect(button).toBeInTheDocument()
      expect(button.className.length).toBeGreaterThan(0)
    },
  )

  it('通过 cn() 和 twMerge 合并用户 className', () => {
    render(<Button className="bg-danger-500">Red</Button>)
    const button = screen.getByRole('button', { name: 'Red' })
    // twMerge 应该用 bg-danger-500 覆盖默认的 bg-white
    expect(button.className).toContain('bg-danger-500')
    expect(button.className).not.toContain('bg-white')
  })

  it('loading=true 时显示 Loader2 spinner', () => {
    const { container } = render(<Button loading>Loading</Button>)
    // Loader2 带有 animate-spin 类名
    const spinner = container.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
    // loading 时按钮有 aria-busy
    const button = screen.getByRole('button', { name: 'Loading' })
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(button.className).toContain('pointer-events-none')
  })

  it('loading 或 disabled 时不触发 onClick', () => {
    const handleClick = vi.fn()

    // loading 状态
    const { unmount: unmount1 } = render(
      <Button loading onClick={handleClick}>
        Btn
      </Button>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Btn' }))
    expect(handleClick).not.toHaveBeenCalled()
    unmount1()

    // disabled 状态
    const { unmount: unmount2 } = render(
      <Button disabled onClick={handleClick}>
        Btn
      </Button>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Btn' }))
    expect(handleClick).not.toHaveBeenCalled()
    unmount2()
  })

  it('提供 href 时渲染为 <a> 标签', () => {
    render(<Button href="https://example.com">Link</Button>)
    const link = screen.getByRole('link', { name: 'Link' })
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('target=_blank 时自动添加 rel="noopener noreferrer"', () => {
    render(
      <Button href="https://example.com" target="_blank">
        External
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'External' })
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('只传 icon 不传 children 时自动圆形', () => {
    const icon = <svg data-testid="icon" />
    render(<Button icon={icon} aria-label="icon btn" />)
    const button = screen.getByRole('button', { name: 'icon btn' })
    expect(button.className).toContain('rounded-full')
    expect(button.className).toContain('aspect-square')
    expect(button.className).toContain('p-0')
  })

  it('ref 正确转发到 button 元素', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current?.textContent).toBe('Ref')
  })

  it('asChild 通过 Radix Slot 透传', () => {
    render(
      <Button asChild>
        <div>Custom Element</div>
      </Button>,
    )
    const div = screen.getByText('Custom Element')
    expect(div.tagName).toBe('DIV')
    // Slot 会将 className 透传到子元素
    expect(div.className).toContain('inline-flex')
  })
})
