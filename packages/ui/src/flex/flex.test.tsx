import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Flex } from './index'

describe('Flex', () => {
  it('renders children', () => {
    render(
      <Flex data-testid="flex">
        <span>item</span>
      </Flex>,
    )
    expect(screen.getByText('item')).toBeInTheDocument()
  })

  it('applies vertical flex direction', () => {
    render(<Flex vertical data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('flex-col')
  })

  it('applies justify style', () => {
    render(<Flex justify="center" data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('justify-center')
  })

  it('applies align style', () => {
    render(<Flex align="center" data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('items-center')
  })

  it('applies wrap style', () => {
    render(<Flex wrap="wrap" data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('flex-wrap')
  })

  it('applies string gap as className', () => {
    render(<Flex gap="gap-4" data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('gap-4')
  })

  it('merges custom className', () => {
    render(<Flex className="my-flex" data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('flex')
    expect(el.className).toContain('my-flex')
  })

  it('forwards ref to div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Flex ref={ref} data-testid="flex" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('applies default horizontal direction', () => {
    render(<Flex data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('flex-row')
  })

  it('applies default justify-start', () => {
    render(<Flex data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.className).toContain('justify-start')
  })
})