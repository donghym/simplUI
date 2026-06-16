import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Collapse, CollapsePanel } from './index'

describe('Collapse', () => {
  it('renders panels correctly', () => {
    render(
      <Collapse data-testid="collapse">
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
        <CollapsePanel panelKey="2" header="Panel 2">Content 2</CollapsePanel>
      </Collapse>,
    )
    expect(screen.getByText('Panel 1')).toBeInTheDocument()
    expect(screen.getByText('Panel 2')).toBeInTheDocument()
  })

  it('expands panel on click', () => {
    render(
      <Collapse>
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    fireEvent.click(screen.getByText('Panel 1'))
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('collapses panel on second click', () => {
    render(
      <Collapse>
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    fireEvent.click(screen.getByText('Panel 1'))
    fireEvent.click(screen.getByText('Panel 1'))
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('calls onChange when panel toggled', () => {
    const onChange = vi.fn()
    render(
      <Collapse onChange={onChange}>
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    fireEvent.click(screen.getByText('Panel 1'))
    expect(onChange).toHaveBeenCalledWith(['1'])
  })

  it('accordion mode allows only one panel open', () => {
    render(
      <Collapse accordion>
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
        <CollapsePanel panelKey="2" header="Panel 2">Content 2</CollapsePanel>
      </Collapse>,
    )
    fireEvent.click(screen.getByText('Panel 1'))
    fireEvent.click(screen.getByText('Panel 2'))
    expect(screen.getByText('Content 2')).toBeInTheDocument()
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('disabled panel cannot be expanded', () => {
    render(
      <Collapse>
        <CollapsePanel panelKey="1" header="Panel 1" disabled>Content 1</CollapsePanel>
      </Collapse>,
    )
    fireEvent.click(screen.getByText('Panel 1'))
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
  })

  it('shows bordered style when bordered=true', () => {
    render(
      <Collapse bordered data-testid="collapse">
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    const el = screen.getByTestId('collapse')
    expect(el.className).toContain('border')
  })

  it('hides border when bordered=false', () => {
    render(
      <Collapse bordered={false} data-testid="collapse">
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    const el = screen.getByTestId('collapse')
    expect(el.className).toContain('border-none')
  })

  it('merges user className via cn()', () => {
    render(
      <Collapse className="custom-collapse" data-testid="collapse">
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    const el = screen.getByTestId('collapse')
    expect(el.className).toContain('sui-collapse')
    expect(el.className).toContain('custom-collapse')
  })

  it('has correct aria attributes', () => {
    render(
      <Collapse>
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    const button = screen.getByText('Panel 1').closest('button')
    expect(button?.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(screen.getByText('Panel 1'))
    expect(button?.getAttribute('aria-expanded')).toBe('true')
  })

  it('forwards ref to div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Collapse ref={ref}>
        <CollapsePanel panelKey="1" header="Panel 1">Content 1</CollapsePanel>
      </Collapse>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})