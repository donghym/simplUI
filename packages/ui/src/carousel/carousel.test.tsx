import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Carousel } from './index'

describe('Carousel', () => {
  it('renders children correctly', () => {
    render(
      <Carousel data-testid="carousel">
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>,
    )
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
  })

  it('shows first slide by default', () => {
    render(
      <Carousel data-testid="carousel">
        <div data-testid="slide-1">Slide 1</div>
        <div data-testid="slide-2">Slide 2</div>
      </Carousel>,
    )
    const slide1 = screen.getByTestId('slide-1').parentElement
    expect(slide1?.className).toContain('opacity-100')
  })

  it('shows dots when dots=true', () => {
    render(
      <Carousel dots>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    )
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBe(2)
  })

  it('hides dots when dots=false', () => {
    render(
      <Carousel dots={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    )
    const dots = screen.queryAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBe(0)
  })

  it('shows arrows when arrows=true', () => {
    render(
      <Carousel arrows>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    )
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('hides arrows when arrows=false', () => {
    render(
      <Carousel arrows={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    )
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument()
  })

  it('clicking next arrow changes slide', () => {
    render(
      <Carousel arrows>
        <div data-testid="slide-1">Slide 1</div>
        <div data-testid="slide-2">Slide 2</div>
      </Carousel>,
    )
    fireEvent.click(screen.getByLabelText('Next slide'))
    const slide2 = screen.getByTestId('slide-2').parentElement
    expect(slide2?.className).toContain('opacity-100')
  })

  it('clicking dot changes slide', () => {
    render(
      <Carousel dots>
        <div data-testid="slide-1">Slide 1</div>
        <div data-testid="slide-2">Slide 2</div>
      </Carousel>,
    )
    fireEvent.click(screen.getByLabelText('Go to slide 2'))
    const slide2 = screen.getByTestId('slide-2').parentElement
    expect(slide2?.className).toContain('opacity-100')
  })

  it('calls onChange when slide changes', () => {
    const onChange = vi.fn()
    render(
      <Carousel dots onChange={onChange}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    )
    fireEvent.click(screen.getByLabelText('Go to slide 2'))
    expect(onChange).toHaveBeenCalledWith(1)
  })

  it('merges user className via cn()', () => {
    render(
      <Carousel className="custom-carousel" data-testid="carousel">
        <div>Slide 1</div>
      </Carousel>,
    )
    const el = screen.getByTestId('carousel')
    expect(el.className).toContain('sui-carousel')
    expect(el.className).toContain('custom-carousel')
  })

  it('has correct aria attributes', () => {
    render(
      <Carousel data-testid="carousel">
        <div>Slide 1</div>
      </Carousel>,
    )
    const el = screen.getByTestId('carousel')
    expect(el.getAttribute('role')).toBe('region')
    expect(el.getAttribute('aria-label')).toBe('Carousel')
  })

  it('forwards ref to div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Carousel ref={ref}>
        <div>Slide 1</div>
      </Carousel>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})