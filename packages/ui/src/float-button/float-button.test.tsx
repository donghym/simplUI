import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FloatButton } from './index'

describe('FloatButton', () => {
  it('renders with icon', () => {
    render(<FloatButton icon={<span data-testid="icon">收藏</span>} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onClick = vi.fn()
    render(<FloatButton icon={<span>收藏</span>} onClick={onClick} />)
    fireEvent.click(screen.getByText('收藏').parentElement!)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders description', () => {
    render(<FloatButton icon={<span>收藏</span>} description="Help" />)
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('shows tooltip on hover', () => {
    render(<FloatButton icon={<span>收藏</span>} tooltip="Tooltip" />)
    fireEvent.mouseEnter(screen.getByText('收藏').parentElement!)
    expect(screen.getByText('Tooltip')).toBeInTheDocument()
  })

  it('applies primary type style', () => {
    render(<FloatButton icon={<span data-testid="icon">收藏</span>} type="primary" />)
    const el = screen.getByTestId('icon').parentElement
    expect(el?.className).toContain('bg-primary-500')
  })

  it('applies square shape', () => {
    render(<FloatButton icon={<span data-testid="icon">收藏</span>} shapeVariant="square" />)
    const el = screen.getByTestId('icon').parentElement
    expect(el?.className).toContain('rounded-lg')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<FloatButton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

describe('FloatButton.Group', () => {
  it('renders children', () => {
    const { container } = render(
      <FloatButton.Group trigger="click">
        <FloatButton icon={<span>A</span>} />
        <FloatButton icon={<span>B</span>} />
      </FloatButton.Group>,
    )
    const trigger = container.querySelector('.sui-float-button')
    if (trigger) fireEvent.click(trigger)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })
})