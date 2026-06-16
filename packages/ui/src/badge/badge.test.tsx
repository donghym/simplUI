import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './index'

describe('Badge', () => {
  it('默认渲染数字徽标', () => {
    render(
      <Badge count={5} data-testid="badge">
        <button>消息</button>
      </Badge>,
    )
    const badge = screen.getByTestId('badge')
    expect(badge).toBeInTheDocument()
    // sup 元素显示数字 5
    const sup = badge.querySelector('sup')
    expect(sup).toBeInTheDocument()
    expect(sup?.textContent).toBe('5')
  })

  it('dot 模式显示圆点不显示数字', () => {
    render(
      <Badge dot data-testid="badge">
        <button>消息</button>
      </Badge>,
    )
    const badge = screen.getByTestId('badge')
    const sup = badge.querySelector('sup')
    expect(sup).toBeInTheDocument()
    // dot 模式 sup 内部无文字
    expect(sup?.textContent).toBe('')
    // dot 模式应有圆形样式类
    expect(sup?.className).toContain('w-2')
    expect(sup?.className).toContain('h-2')
  })

  it('count 超出 overflowCount 时显示封顶值', () => {
    render(
      <Badge count={150} overflowCount={99} data-testid="badge">
        <button>消息</button>
      </Badge>,
    )
    const sup = screen.getByTestId('badge').querySelector('sup')
    expect(sup?.textContent).toBe('99+')
  })

  it('count=0 且 showZero=false 时隐藏徽标', () => {
    render(
      <Badge count={0} data-testid="badge">
        <button>消息</button>
      </Badge>,
    )
    const sup = screen.getByTestId('badge').querySelector('sup')
    expect(sup).not.toBeInTheDocument()
  })

  it('count=0 且 showZero=true 时显示 0', () => {
    render(
      <Badge count={0} showZero data-testid="badge">
        <button>消息</button>
      </Badge>,
    )
    const sup = screen.getByTestId('badge').querySelector('sup')
    expect(sup).toBeInTheDocument()
    expect(sup?.textContent).toBe('0')
  })

  it('不传 children 时徽标独立渲染', () => {
    render(<Badge count={3} data-testid="badge" />)
    const badge = screen.getByTestId('badge')
    expect(badge).toBeInTheDocument()
    const sup = badge.querySelector('sup')
    expect(sup).toBeInTheDocument()
    expect(sup?.textContent).toBe('3')
  })

  it.each(['default', 'primary', 'success', 'warning', 'danger'] as const)(
    '渲染变体 %s 并包含正确的背景色类',
    (variant) => {
      render(
        <Badge variant={variant} count={1} data-testid="badge">
          <button>消息</button>
        </Badge>,
      )
      const sup = screen.getByTestId('badge').querySelector('sup')
      // 每个变体都应有对应的背景色类
      expect(sup?.className).toContain('bg-')
    },
  )

  it('合并用户 className 通过 cn() 和 twMerge', () => {
    render(
      <Badge className="mt-4 bg-danger-500" data-testid="badge">
        <button>消息</button>
      </Badge>,
    )
    const badge = screen.getByTestId('badge')
    expect(badge.className).toContain('mt-4')
  })
})