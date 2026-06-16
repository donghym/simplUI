import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Watermark } from './index'

describe('Watermark', () => {
  it('renders children', () => {
    render(
      <Watermark content="Test">
        <div data-testid="content">Content</div>
      </Watermark>,
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('renders watermark overlay', () => {
    render(
      <Watermark content="Test">
        <div>Content</div>
      </Watermark>,
    )
    expect(document.querySelector('.sui-watermark__overlay')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Watermark content="Test" className="my-watermark">
        <div>Content</div>
      </Watermark>,
    )
    expect(document.querySelector('.my-watermark')).toBeInTheDocument()
  })

  it('supports array content', () => {
    render(
      <Watermark content={['Line 1', 'Line 2']}>
        <div>Content</div>
      </Watermark>,
    )
    expect(document.querySelector('.sui-watermark__overlay')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Watermark ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders with custom font size', () => {
    render(
      <Watermark content="Test" fontSize={16}>
        <div>Content</div>
      </Watermark>,
    )
    expect(document.querySelector('.sui-watermark__overlay')).toBeInTheDocument()
  })
})
