import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Image } from './index'

describe('Image', () => {
  it('renders image', () => {
    render(<Image src="https://via.placeholder.com/150" alt="test" data-testid="img" />)
    expect(screen.getByTestId('img')).toBeInTheDocument()
  })

  it('calls onLoad', () => {
    const onLoad = vi.fn()
    render(<Image src="https://via.placeholder.com/150" onLoad={onLoad} data-testid="img" />)
    fireEvent.load(screen.getByTestId('img'))
    expect(onLoad).toHaveBeenCalledTimes(1)
  })

  it('calls onError', () => {
    const onError = vi.fn()
    render(<Image src="invalid" onError={onError} data-testid="img" />)
    fireEvent.error(screen.getByTestId('img'))
    expect(onError).toHaveBeenCalledTimes(1)
  })

  it('shows fallback on error', () => {
    render(<Image src="invalid" fallback={<span data-testid="fallback">Error</span>} data-testid="img" />)
    fireEvent.error(screen.getByTestId('img'))
    expect(screen.getByTestId('fallback')).toBeInTheDocument()
  })

  it('opens preview on click when preview=true', () => {
    render(<Image src="https://via.placeholder.com/150" preview data-testid="img" />)
    fireEvent.click(screen.getByTestId('img'))
    expect(document.querySelector('.sui-image-preview')).toBeInTheDocument()
  })

  it('does not open preview when preview=false', () => {
    render(<Image src="https://via.placeholder.com/150" data-testid="img" />)
    fireEvent.click(screen.getByTestId('img'))
    expect(document.querySelector('.sui-image-preview')).not.toBeInTheDocument()
  })

  it('closes preview on click overlay', () => {
    render(<Image src="https://via.placeholder.com/150" preview data-testid="img" />)
    fireEvent.click(screen.getByTestId('img'))
    const overlay = document.querySelector('.sui-image-preview') as HTMLElement
    fireEvent.click(overlay)
    expect(document.querySelector('.sui-image-preview')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Image src="https://via.placeholder.com/150" className="my-image" data-testid="img" />)
    expect(screen.getByTestId('img').parentElement?.className).toContain('my-image')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Image ref={ref} src="" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
