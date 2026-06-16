import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Result } from './index'
import type { ResultStatus } from './types'

describe('Result', () => {
  it('renders with default status (info)', () => {
    render(<Result data-testid="result" />)
    const el = screen.getByTestId('result')
    expect(el.className).toContain('sui-result--info')
  })

  it.each(['success', 'error', 'info', 'warning', '404', '403', '500'] as ResultStatus[])(
    'renders status %s with correct class',
    (status) => {
      render(<Result status={status} data-testid="result" />)
      const el = screen.getByTestId('result')
      expect(el.className).toContain(`sui-result--${status}`)
    },
  )

  it('renders title correctly', () => {
    render(<Result title="操作成功" />)
    expect(screen.getByText('操作成功')).toBeInTheDocument()
  })

  it('renders subTitle correctly', () => {
    render(<Result title="标题" subTitle="这是副标题" />)
    expect(screen.getByText('标题')).toBeInTheDocument()
    expect(screen.getByText('这是副标题')).toBeInTheDocument()
  })

  it('renders custom icon', () => {
    render(<Result icon={<span data-testid="custom-icon">Custom</span>} />)
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('renders extra content', () => {
    render(<Result extra={<button>返回首页</button>} />)
    expect(screen.getByText('返回首页')).toBeInTheDocument()
  })

  it('merges user className via cn()', () => {
    render(<Result className="custom-class" data-testid="result" />)
    const el = screen.getByTestId('result')
    expect(el.className).toContain('sui-result')
    expect(el.className).toContain('custom-class')
  })

  it('has correct aria attributes', () => {
    render(<Result status="success" data-testid="result" />)
    const el = screen.getByTestId('result')
    expect(el.getAttribute('role')).toBe('status')
    expect(el.getAttribute('aria-label')).toBe('success result')
  })

  it('forwards ref to div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Result ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})