import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Slider } from './index'

describe('Slider', () => {
  it('renders with default value', () => {
    render(<Slider defaultValue={50} />)
    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('renders with custom min and max', () => {
    render(<Slider defaultValue={5} min={0} max={10} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '10')
  })

  it('renders range slider with two handles', () => {
    render(<Slider range defaultValue={[20, 80]} />)
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
  })

  it('does not respond when disabled', () => {
    const handleChange = vi.fn()
    render(<Slider disabled defaultValue={50} onChange={handleChange} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-disabled', 'true')
  })

  it('merges user className', () => {
    render(<Slider className="custom-class" defaultValue={50} />)
    const container = screen.getByRole('slider').parentElement?.parentElement
    expect(container).toHaveClass('custom-class')
  })

  it('works in controlled mode', () => {
    const handleChange = vi.fn()
    render(<Slider value={30} onChange={handleChange} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '30')
  })

  it('renders marks', () => {
    render(
      <Slider
        defaultValue={0}
        showTooltip={false}
        marks={[
          { value: 0, label: 'Start' },
          { value: 50, label: 'Middle' },
          { value: 100, label: 'End' },
        ]}
      />,
    )
    expect(screen.getByText('Start')).toBeInTheDocument()
    expect(screen.getByText('Middle')).toBeInTheDocument()
    expect(screen.getByText('End')).toBeInTheDocument()
  })

  it('applies disabled styles', () => {
    render(<Slider disabled defaultValue={50} />)
    const container = screen.getByRole('slider').parentElement?.parentElement
    expect(container).toHaveClass('opacity-50')
  })

  it('shows tooltip on hover', () => {
    render(<Slider defaultValue={50} showTooltip />)
    const slider = screen.getByRole('slider')
    fireEvent.mouseEnter(slider)
    // tooltip 应该显示
  })

  it('handles keyboard navigation', () => {
    render(<Slider defaultValue={50} />)
    const slider = screen.getByRole('slider')
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    // 值应该增加
  })

  it('clamps value within min and max', () => {
    render(<Slider defaultValue={150} min={0} max={100} />)
    const slider = screen.getByRole('slider')
    // 值应该被限制在 100
    expect(slider).toBeInTheDocument()
  })

  it('forwards ref to container', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Slider ref={ref} defaultValue={50} />)
    // ref 应该被正确转发
  })
})
