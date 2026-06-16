import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ColorPicker } from './index'

describe('ColorPicker', () => {
  it('renders with default value', () => {
    render(<ColorPicker defaultValue="#ff0000" data-testid="picker" />)
    expect(screen.getByDisplayValue('#ff0000')).toBeInTheDocument()
  })

  it('calls onChange when color selected', async () => {
    const onChange = vi.fn()
    render(<ColorPicker onChange={onChange} />)
    fireEvent.click(document.querySelector('.sui-color-picker__trigger')!)
    const swatch = await waitFor(() => document.querySelector('[title="#f5222d"]'))
    expect(swatch).toBeInTheDocument()
    fireEvent.click(swatch!)
    expect(onChange).toHaveBeenCalled()
  })

  it('supports controlled value', () => {
    const { rerender } = render(<ColorPicker value="#ff0000" />)
    expect(screen.getByDisplayValue('#ff0000')).toBeInTheDocument()
    rerender(<ColorPicker value="#00ff00" />)
    expect(screen.getByDisplayValue('#00ff00')).toBeInTheDocument()
  })

  it('does not open when disabled', () => {
    render(<ColorPicker disabled />)
    fireEvent.click(document.querySelector('.sui-color-picker__trigger')!)
    expect(document.querySelector('.sui-color-picker__dropdown')).not.toBeInTheDocument()
  })

  it('hides text when showText=false', () => {
    render(<ColorPicker showText={false} />)
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<ColorPicker ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
