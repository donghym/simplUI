import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { QRCode } from './index'

describe('QRCode', () => {
  it('renders qr code image', () => {
    render(<QRCode value="https://example.com" data-testid="qrcode" />)
    expect(screen.getByAltText('QR Code')).toBeInTheDocument()
  })

  it('calls onRefresh when expired', () => {
    const onRefresh = vi.fn()
    render(<QRCode value="https://example.com" status="expired" onRefresh={onRefresh} />)
    fireEvent.click(screen.getByText('点击刷新'))
    expect(onRefresh).toHaveBeenCalledTimes(1)
  })

  it('shows loading state', () => {
    render(<QRCode value="https://example.com" status="loading" data-testid="qrcode" />)
    expect(screen.queryByAltText('QR Code')).not.toBeInTheDocument()
  })

  it('shows scanned state', () => {
    render(<QRCode value="https://example.com" status="scanned" />)
    expect(screen.getByText('已扫描')).toBeInTheDocument()
  })

  it('applies custom size', () => {
    render(<QRCode value="https://example.com" size={200} data-testid="qrcode" />)
    const img = screen.getByAltText('QR Code')
    expect(img.style.width).toBe('200px')
  })

  it('applies custom className', () => {
    render(<QRCode value="https://example.com" className="my-qrcode" />)
    expect(document.querySelector('.my-qrcode')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<QRCode ref={ref} value="test" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
