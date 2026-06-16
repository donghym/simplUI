import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './index'

describe('App', () => {
  it('renders with default props', () => {
    render(
      <App>
        <div data-testid="content">Content</div>
      </App>,
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
    expect(document.querySelector('.sui-app')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <App>
        <div data-testid="child1">Child 1</div>
        <div data-testid="child2">Child 2</div>
      </App>,
    )
    expect(screen.getByTestId('child1')).toBeInTheDocument()
    expect(screen.getByTestId('child2')).toBeInTheDocument()
  })

  it('applies default styles (width: 100%, minHeight: 100vh)', () => {
    render(
      <App>
        <div data-testid="content">Content</div>
      </App>,
    )
    const appContainer = document.querySelector('.sui-app') as HTMLElement | null
    expect(appContainer?.classList.contains('w-full')).toBe(true)
    expect(appContainer?.classList.contains('min-h-screen')).toBe(true)
  })

  it('applies custom className via cn()', () => {
    render(
      <App className="my-app custom-class">
        <div>Content</div>
      </App>,
    )
    expect(document.querySelector('.my-app')).toBeInTheDocument()
    expect(document.querySelector('.custom-class')).toBeInTheDocument()
    expect(document.querySelector('.sui-app')).toBeInTheDocument()
  })

  it('applies custom style merged with default styles', () => {
    render(
      <App style={{ background: 'red', padding: '20px' }}>
        <div data-testid="content">Content</div>
      </App>,
    )
    const appContainer = document.querySelector('.sui-app') as HTMLElement | null
    expect(appContainer?.style.background).toBe('red')
    expect(appContainer?.style.padding).toBe('20px')
    expect(appContainer?.classList.contains('w-full')).toBe(true)
  })

  it('forwards ref to div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<App ref={ref}><div /></App>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.classList.contains('sui-app')).toBe(true)
  })

  it('handles empty children gracefully', () => {
    render(<App>{null}</App>)
    expect(document.querySelector('.sui-app')).toBeInTheDocument()
  })

  it('supports nested App components', () => {
    render(
      <App className="outer">
        <App className="inner">
          <div data-testid="nested">Nested</div>
        </App>
      </App>,
    )
    expect(document.querySelector('.outer')).toBeInTheDocument()
    expect(document.querySelector('.inner')).toBeInTheDocument()
    expect(screen.getByTestId('nested')).toBeInTheDocument()
  })
})