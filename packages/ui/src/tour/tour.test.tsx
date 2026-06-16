import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Tour } from './index'

describe('Tour', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders when open', () => {
    render(
      <Tour
        open
        steps={[{ title: 'Step 1', description: 'Description 1' }]}
      />,
    )
    expect(screen.getByText('Step 1')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(
      <Tour
        open={false}
        steps={[{ title: 'Step 1', description: 'Description 1' }]}
      />,
    )
    expect(screen.queryByText('Step 1')).not.toBeInTheDocument()
  })

  it('calls onClose when mask clicked', () => {
    const onClose = vi.fn()
    render(
      <Tour
        open
        steps={[{ title: 'Step 1', description: 'Description 1' }]}
        onClose={onClose}
      />,
    )
    fireEvent.click(document.querySelector('.sui-tour__mask')!)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onFinish when last step next clicked', () => {
    const onFinish = vi.fn()
    render(
      <Tour
        open
        steps={[{ title: 'Step 1', description: 'Description 1' }]}
        onFinish={onFinish}
      />,
    )
    fireEvent.click(screen.getByText('完成'))
    expect(onFinish).toHaveBeenCalledTimes(1)
  })

  it('navigates to next step', () => {
    const onChange = vi.fn()
    render(
      <Tour
        open
        steps={[
          { title: 'Step 1', description: 'Description 1' },
          { title: 'Step 2', description: 'Description 2' },
        ]}
        onChange={onChange}
      />,
    )
    fireEvent.click(screen.getByText('下一步'))
    expect(onChange).toHaveBeenCalledWith(1)
  })

  it('shows step counter', () => {
    render(
      <Tour
        open
        steps={[
          { title: 'Step 1', description: 'Description 1' },
          { title: 'Step 2', description: 'Description 2' },
        ]}
      />,
    )
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Tour ref={ref} open steps={[{ title: 'Step 1' }]} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('shows progress bar by default', () => {
    const { container } = render(
      <Tour open steps={[{ title: 'Step 1' }]} />,
    )
    expect(container.querySelector('.sui-tour__progress-track')).toBeInTheDocument()
  })

  it('hides progress bar when showProgress is false', () => {
    const { container } = render(
      <Tour open steps={[{ title: 'Step 1' }]} showProgress={false} />,
    )
    expect(container.querySelector('.sui-tour__progress-track')).not.toBeInTheDocument()
  })

  it('records finished state to localStorage when storageKey provided', () => {
    render(
      <Tour
        open
        steps={[{ title: 'Step 1' }]}
        storageKey="test-tour-key"
        onFinish={() => {}}
        onClose={() => {}}
      />,
    )
    fireEvent.click(screen.getByText('完成'))
    expect(localStorage.getItem('test-tour-key')).toBe('finished')
  })

  it('does not render when localStorage already has finished state', () => {
    localStorage.setItem('test-tour-key', 'finished')
    render(
      <Tour
        open
        steps={[{ title: 'Step 1' }]}
        storageKey="test-tour-key"
      />,
    )
    expect(screen.queryByText('Step 1')).not.toBeInTheDocument()
  })
})
