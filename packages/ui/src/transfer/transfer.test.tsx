import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Transfer } from './index'

const dataSource = [
  { key: '1', title: 'Item 1' },
  { key: '2', title: 'Item 2' },
  { key: '3', title: 'Item 3' },
]

describe('Transfer', () => {
  it('renders source and target lists', () => {
    render(<Transfer dataSource={dataSource} />)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('moves item to right', () => {
    render(<Transfer dataSource={dataSource} />)
    fireEvent.click(screen.getByText('Item 1'))
    fireEvent.click(screen.getByText('>'))
    expect(screen.getAllByText('Item 1').length).toBe(1)
  })

  it('calls onChange', () => {
    const onChange = vi.fn()
    render(<Transfer dataSource={dataSource} onChange={onChange} />)
    fireEvent.click(screen.getByText('Item 1'))
    fireEvent.click(screen.getByText('>'))
    expect(onChange).toHaveBeenCalledWith(['1'], 'right', ['1'])
  })

  it('supports controlled targetKeys', () => {
    render(<Transfer dataSource={dataSource} targetKeys={['1']} />)
    expect(screen.getAllByText('Item 1').length).toBe(1)
  })

  it('does not move when disabled', () => {
    render(<Transfer dataSource={dataSource} disabled />)
    fireEvent.click(screen.getByText('Item 1'))
    expect(screen.getByText('>').parentElement?.querySelector('button')).toBeDisabled()
  })

  it('supports search', () => {
    render(<Transfer dataSource={dataSource} showSearch />)
    const inputs = screen.getAllByPlaceholderText('Search')
    const input = inputs[0]
    if (input) fireEvent.change(input, { target: { value: 'Item 1' } })
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.queryByText('Item 2')).not.toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Transfer ref={ref} dataSource={[]} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
