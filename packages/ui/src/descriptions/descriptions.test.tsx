import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Descriptions } from './index'

describe('Descriptions', () => {
  it('renders title', () => {
    render(
      <Descriptions title="User Info">
        <Descriptions.Item label="Name">Zhang San</Descriptions.Item>
      </Descriptions>,
    )
    expect(screen.getByText('User Info')).toBeInTheDocument()
  })

  it('renders items', () => {
    render(
      <Descriptions>
        <Descriptions.Item label="Name">Zhang San</Descriptions.Item>
        <Descriptions.Item label="Age">28</Descriptions.Item>
      </Descriptions>,
    )
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Zhang San')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('28')).toBeInTheDocument()
  })

  it('applies bordered class', () => {
    render(
      <Descriptions bordered data-testid="desc">
        <Descriptions.Item label="Name">Zhang San</Descriptions.Item>
      </Descriptions>,
    )
    expect(screen.getByTestId('desc').className).toContain('sui-descriptions--bordered')
  })

  it('supports custom column', () => {
    render(
      <Descriptions column={2}>
        <Descriptions.Item label="A">1</Descriptions.Item>
        <Descriptions.Item label="B">2</Descriptions.Item>
        <Descriptions.Item label="C">3</Descriptions.Item>
      </Descriptions>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('supports span', () => {
    render(
      <Descriptions column={3}>
        <Descriptions.Item label="A" span={2}>1</Descriptions.Item>
        <Descriptions.Item label="B">2</Descriptions.Item>
      </Descriptions>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Descriptions ref={ref}><Descriptions.Item label="A">1</Descriptions.Item></Descriptions>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
