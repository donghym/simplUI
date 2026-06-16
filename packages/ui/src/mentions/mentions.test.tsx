import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Mentions } from './index'

describe('Mentions', () => {
  it('renders textarea', () => {
    render(<Mentions options={[]} placeholder="Type @ to mention" />)
    expect(screen.getByPlaceholderText('Type @ to mention')).toBeInTheDocument()
  })

  it('calls onChange', () => {
    const onChange = vi.fn()
    render(<Mentions options={[]} onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } })
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  it('shows dropdown when prefix typed', () => {
    render(
      <Mentions
        options={[
          { value: 'afc163', label: 'afc163' },
          { value: 'zombieJ', label: 'zombieJ' },
        ]}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '@a' } })
    expect(screen.getByText('afc163')).toBeInTheDocument()
  })

  it('selects option on click', () => {
    const onSelect = vi.fn()
    render(
      <Mentions
        options={[{ value: 'afc163', label: 'afc163' }]}
        onSelect={onSelect}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '@' } })
    fireEvent.click(screen.getByText('afc163'))
    expect(onSelect).toHaveBeenCalled()
  })

  it('supports custom prefix', () => {
    render(
      <Mentions
        prefix="#"
        options={[{ value: 'topic', label: 'topic' }]}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '#t' } })
    expect(screen.getByText('topic')).toBeInTheDocument()
  })

  it('does not show dropdown when disabled', () => {
    render(
      <Mentions
        disabled
        options={[{ value: 'afc163', label: 'afc163' }]}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '@a' } })
    expect(screen.queryByText('afc163')).not.toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Mentions ref={ref} options={[]} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
