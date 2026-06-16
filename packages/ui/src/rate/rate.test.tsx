import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Rate } from './index'

describe('Rate', () => {
  it('renders with default 5 stars', () => {
    render(<Rate />)
    const stars = screen.getAllByRole('radio')
    expect(stars).toHaveLength(5)
  })

  it('renders with custom count', () => {
    render(<Rate count={10} />)
    const stars = screen.getAllByRole('radio')
    expect(stars).toHaveLength(10)
  })

  it('renders with default value', () => {
    render(<Rate defaultValue={3} />)
    const container = screen.getByRole('radiogroup')
    expect(container).toBeInTheDocument()
  })

  it('clicks star to change value', () => {
    const handleChange = vi.fn()
    render(<Rate onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    fireEvent.click(stars[2]!)
    expect(handleChange).toHaveBeenCalledWith(3)
  })

  it('supports half star selection', () => {
    const handleChange = vi.fn()
    render(<Rate allowHalf onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    // 点击星星左半部分
    fireEvent.click(stars[2]!, { clientX: 0 })
    expect(handleChange).toHaveBeenCalled()
  })

  it('does not respond when disabled', () => {
    const handleChange = vi.fn()
    render(<Rate disabled onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    fireEvent.click(stars[2]!)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('does not respond when readonly', () => {
    const handleChange = vi.fn()
    render(<Rate readonly onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    fireEvent.click(stars[2]!)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('renders tooltips on hover', () => {
    render(<Rate defaultValue={3} tooltips={['差', '一般', '好', '很好', '极好']} />)
    const container = screen.getByRole('radiogroup')
    expect(container).toHaveTextContent('好')
  })

  it('merges user className', () => {
    render(<Rate className="custom-class" />)
    const container = screen.getByRole('radiogroup')
    expect(container).toHaveClass('custom-class')
  })

  it('works in controlled mode', () => {
    const handleChange = vi.fn()
    render(<Rate value={2} onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    fireEvent.click(stars[4]!)
    expect(handleChange).toHaveBeenCalledWith(5)
  })

  it('supports keyboard navigation with Enter', () => {
    const handleChange = vi.fn()
    render(<Rate onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    fireEvent.keyDown(stars[2]!, { key: 'Enter' })
    expect(handleChange).toHaveBeenCalledWith(3)
  })

  it('supports keyboard navigation with Space', () => {
    const handleChange = vi.fn()
    render(<Rate onChange={handleChange} />)
    const stars = screen.getAllByRole('radio')
    fireEvent.keyDown(stars[2]!, { key: ' ' })
    expect(handleChange).toHaveBeenCalledWith(3)
  })

  it('forwards ref to container', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Rate ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('applies disabled styles', () => {
    render(<Rate disabled />)
    const container = screen.getByRole('radiogroup')
    expect(container).toHaveClass('opacity-50')
  })
})
