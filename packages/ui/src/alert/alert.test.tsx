import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Alert } from './index'

describe('Alert', () => {
  it('renders message', () => {
    render(<Alert message="Test message" />)
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Alert message="Title" description="Detail" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Detail')).toBeInTheDocument()
  })

  it('supports closable', () => {
    render(<Alert message="Closable" closable />)
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn()
    render(<Alert message="Closable" closable onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('hides after close', () => {
    render(<Alert message="Closable" closable data-testid="alert" />)
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByTestId('alert')).not.toBeInTheDocument()
  })

  it('renders custom action', () => {
    render(<Alert message="Alert" action={<button>Undo</button>} />)
    expect(screen.getByText('Undo')).toBeInTheDocument()
  })

  it('renders with different types', () => {
    const { rerender } = render(<Alert message="Info" type="info" data-testid="alert" />)
    expect(screen.getByTestId('alert').className).toContain('sui-alert--info')

    rerender(<Alert message="Success" type="success" data-testid="alert" />)
    expect(screen.getByTestId('alert').className).toContain('sui-alert--success')

    rerender(<Alert message="Warning" type="warning" data-testid="alert" />)
    expect(screen.getByTestId('alert').className).toContain('sui-alert--warning')

    rerender(<Alert message="Error" type="error" data-testid="alert" />)
    expect(screen.getByTestId('alert').className).toContain('sui-alert--error')
  })

  it('renders icon when showIcon is true', () => {
    render(<Alert message="With icon" showIcon data-testid="alert" />)
    expect(screen.getByTestId('alert').querySelector('.sui-alert__icon')).toBeInTheDocument()
  })

  it('applies banner class', () => {
    render(<Alert message="Banner" banner data-testid="alert" />)
    expect(screen.getByTestId('alert').className).toContain('sui-alert--banner')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Alert ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
