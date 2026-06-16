import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Splitter } from './index'

describe('Splitter', () => {
  it('renders panels', () => {
    render(
      <Splitter>
        <Splitter.Panel>Left</Splitter.Panel>
        <Splitter.Panel>Right</Splitter.Panel>
      </Splitter>,
    )
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('renders vertical layout', () => {
    render(
      <Splitter layout="vertical">
        <Splitter.Panel>Top</Splitter.Panel>
        <Splitter.Panel>Bottom</Splitter.Panel>
      </Splitter>,
    )
    expect(screen.getByText('Top')).toBeInTheDocument()
    expect(screen.getByText('Bottom')).toBeInTheDocument()
  })

  it('renders splitter bar', () => {
    render(
      <Splitter>
        <Splitter.Panel>A</Splitter.Panel>
        <Splitter.Panel>B</Splitter.Panel>
      </Splitter>,
    )
    expect(document.querySelector('.sui-splitter__bar')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Splitter className="my-splitter">
        <Splitter.Panel>A</Splitter.Panel>
      </Splitter>,
    )
    expect(document.querySelector('.my-splitter')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Splitter ref={ref}><Splitter.Panel>A</Splitter.Panel></Splitter>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders with default size', () => {
    render(
      <Splitter>
        <Splitter.Panel defaultSize="30%">Left</Splitter.Panel>
        <Splitter.Panel>Right</Splitter.Panel>
      </Splitter>,
    )
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })
})
