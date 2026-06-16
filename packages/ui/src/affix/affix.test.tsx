import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Affix } from './index'

describe('Affix', () => {
  it('renders with default props', () => {
    render(
      <Affix>
        <div data-testid="content">Content</div>
      </Affix>,
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <Affix offsetTop={0}>
        <div data-testid="content">Content</div>
      </Affix>,
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('calls onChange when affixed state changes', () => {
    const onChange = vi.fn()
    render(
      <Affix offsetTop={100} onChange={onChange}>
        <div>Content</div>
      </Affix>,
    )
    // 初始状态可能触发一次
    expect(onChange).toHaveBeenCalled()
  })

  it('applies custom className via cn()', () => {
    render(
      <Affix offsetTop={0} className="my-affix">
        <div>Content</div>
      </Affix>,
    )
    expect(document.querySelector('.my-affix')).toBeInTheDocument()
    expect(document.querySelector('.sui-affix')).toBeInTheDocument()
  })

  it('forwards ref to wrapper div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Affix ref={ref}><div /></Affix>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports offsetBottom prop', () => {
    render(
      <Affix offsetBottom={50}>
        <div data-testid="bottom-content">Bottom Content</div>
      </Affix>,
    )
    expect(screen.getByTestId('bottom-content')).toBeInTheDocument()
  })

  it('supports custom target container', () => {
    const target = vi.fn(() => window)
    render(
      <Affix offsetTop={0} target={target}>
        <div data-testid="target-content">Target Content</div>
      </Affix>,
    )
    expect(screen.getByTestId('target-content')).toBeInTheDocument()
    expect(target).toHaveBeenCalled()
  })

  it('applies custom style', () => {
    render(
      <Affix offsetTop={0} style={{ background: 'red' }}>
        <div data-testid="styled-content">Styled Content</div>
      </Affix>,
    )
    const wrapper = screen.getByTestId('styled-content').closest('.sui-affix') as HTMLElement | null
    expect(wrapper?.style.background).toBe('red')
  })
})