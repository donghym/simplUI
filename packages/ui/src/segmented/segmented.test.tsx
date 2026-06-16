import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Segmented } from './index'

describe('Segmented', () => {
  it('renders options', () => {
    render(<Segmented options={['A', 'B', 'C']} />)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('selects option on click', () => {
    render(<Segmented options={['A', 'B', 'C']} />)
    fireEvent.click(screen.getByText('B'))
    expect(screen.getByText('B').className).toContain('bg-white')
  })

  it('calls onChange', () => {
    const onChange = vi.fn()
    render(<Segmented options={['A', 'B', 'C']} onChange={onChange} />)
    fireEvent.click(screen.getByText('B'))
    expect(onChange).toHaveBeenCalledWith('B')
  })

  it('supports controlled value', () => {
    const { rerender } = render(<Segmented options={['A', 'B', 'C']} value="A" />)
    expect(screen.getByText('A').className).toContain('bg-white')
    rerender(<Segmented options={['A', 'B', 'C']} value="B" />)
    expect(screen.getByText('B').className).toContain('bg-white')
  })

  it('supports defaultValue', () => {
    render(<Segmented options={['A', 'B', 'C']} defaultValue="B" />)
    expect(screen.getByText('B').className).toContain('bg-white')
  })

  it('does not change when disabled', () => {
    const onChange = vi.fn()
    render(<Segmented options={['A', 'B', 'C']} disabled onChange={onChange} />)
    fireEvent.click(screen.getByText('B'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('supports object options', () => {
    render(
      <Segmented
        options={[
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b', disabled: true },
        ]}
      />,
    )
    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
  })

  it('does not select disabled option', () => {
    const onChange = vi.fn()
    render(
      <Segmented
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b', disabled: true },
        ]}
        onChange={onChange}
      />,
    )
    fireEvent.click(screen.getByText('B'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Segmented ref={ref} options={['A']} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
