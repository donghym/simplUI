import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tooltip } from './index'

describe('Tooltip', () => {
  it('renders with default placement top, hidden by default (opacity-0)', () => {
    render(
      <Tooltip content="Hello world">
        <button>Hover me</button>
      </Tooltip>,
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
    // Tooltip 默认渲染在 DOM 中，但使用 opacity-0 隐藏
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toBeInTheDocument()
    expect(tooltip.className).toContain('opacity-0')
  })

  it.each(['top', 'bottom', 'left', 'right'] as const)(
    'applies correct placement class for %s',
    (placement) => {
      render(
        <Tooltip content="Test" placement={placement} open={true}>
          <span>Trigger</span>
        </Tooltip>,
      )
      const tooltip = screen.getByRole('tooltip')
      // 检查 placement 对应的定位 class 是否存在
      const placementChecks: Record<string, string[]> = {
        top: ['bottom-full', 'left-1/2', '-translate-x-1/2'],
        bottom: ['top-full', 'left-1/2', '-translate-x-1/2'],
        left: ['right-full', 'top-1/2', '-translate-y-1/2'],
        right: ['left-full', 'top-1/2', '-translate-y-1/2'],
      }
      const expectedClasses = placementChecks[placement]
      if (expectedClasses) {
        expectedClasses.forEach((cls) => {
          expect(tooltip.className).toContain(cls)
        })
      }
    },
  )

  it('shows tooltip when controlled open prop is true', () => {
    render(
      <Tooltip content="Controlled content" open={true}>
        <button>Trigger</button>
      </Tooltip>,
    )
    expect(screen.getByRole('tooltip')).toHaveTextContent('Controlled content')
    expect(screen.getByRole('tooltip').className).toContain('opacity-100')
  })

  it('forwards ref to wrapper element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Tooltip content="Test" ref={ref}>
        <span>Trigger</span>
      </Tooltip>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('calls onOpenChange when toggled with click trigger', async () => {
    const onOpenChange = vi.fn()
    render(
      <Tooltip content="Click tooltip" trigger="click" onOpenChange={onOpenChange}>
        <button>Click me</button>
      </Tooltip>,
    )

    await userEvent.click(screen.getByText('Click me'))
    expect(onOpenChange).toHaveBeenCalledWith(true)

    await userEvent.click(screen.getByText('Click me'))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('closes when ESC key is pressed while open', async () => {
    const onOpenChange = vi.fn()
    render(
      <Tooltip content="Esc test" trigger="click" defaultOpen={true} onOpenChange={onOpenChange}>
        <button>Open</button>
      </Tooltip>,
    )

    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders arrow when arrow prop is true', () => {
    render(
      <Tooltip content="With arrow" arrow={true} open={true}>
        <button>Trigger</button>
      </Tooltip>,
    )
    // 箭头有 aria-hidden="true"，不找 role，找 className 特征
    expect(screen.getByRole('tooltip')).toContainHTML('rotate-45')
  })

  it('merges user className correctly', () => {
    render(
      <Tooltip content="Test" open={true} className="custom-class bg-danger">
        <button>Trigger</button>
      </Tooltip>,
    )
    expect(screen.getByRole('tooltip')).toHaveClass('custom-class')
  })
})
