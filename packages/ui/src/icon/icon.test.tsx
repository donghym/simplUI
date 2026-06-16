import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  Icon,
  createFromIconfontCN,
  setTwoToneColor,
  getTwoToneColor,
} from './index'

describe('Icon', () => {
  it('renders ArrowLeftOutlined', () => {
    render(<ArrowLeftOutlined data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders ArrowRightOutlined', () => {
    render(<ArrowRightOutlined data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders HomeOutlined', () => {
    render(<HomeOutlined data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('supports spin class', () => {
    render(<ArrowLeftOutlined spin data-testid="icon" />)
    const el = screen.getByTestId('icon')
    expect(el.className).toContain('sui-icon-spin')
  })

  it('supports rotate style', () => {
    render(<ArrowLeftOutlined rotate={90} data-testid="icon" />)
    const el = screen.getByTestId('icon')
    expect(el.style.transform).toBe('rotate(90deg)')
  })

  it('supports onClick', () => {
    const handleClick = vi.fn()
    render(<ArrowLeftOutlined onClick={handleClick} data-testid="icon" />)
    fireEvent.click(screen.getByTestId('icon'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('supports custom className', () => {
    render(<ArrowLeftOutlined className="my-icon" data-testid="icon" />)
    const el = screen.getByTestId('icon')
    expect(el.className).toContain('my-icon')
    expect(el.className).toContain('sui-icon')
  })

  it('supports custom style', () => {
    render(<ArrowLeftOutlined style={{ color: 'red' }} data-testid="icon" />)
    const el = screen.getByTestId('icon')
    expect(el.style.color).toBe('red')
  })

  it('Icon component renders custom component', () => {
    const CustomSvg = () => <svg data-testid="custom-svg" />
    render(<Icon component={CustomSvg} data-testid="icon" />)
    expect(screen.getByTestId('custom-svg')).toBeInTheDocument()
  })

  it('createFromIconfontCN returns a component', () => {
    const Iconfont = createFromIconfontCN({ scriptUrl: '//example.com/iconfont.js' })
    expect(Iconfont).toBeDefined()
    expect(Iconfont.displayName).toBe('Iconfont')
  })

  it('setTwoToneColor / getTwoToneColor works', () => {
    setTwoToneColor('#ff0000')
    expect(getTwoToneColor()).toBe('#ff0000')
    setTwoToneColor('#1677FF')
  })
})
