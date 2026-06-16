import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Row, Col } from './index'

describe('Grid', () => {
  it('Row 渲染子元素', () => {
    render(
      <Row>
        <Col span={12}>Left</Col>
        <Col span={12}>Right</Col>
      </Row>,
    )

    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('Col 使用默认 span=24（全宽）', () => {
    const { container } = render(
      <Row>
        <Col>Full width</Col>
      </Row>,
    )

    const col = container.querySelector('.flex > div')!
    // 默认 span=24，宽度 100%
    expect(col.className).toContain('w-[100.0000%]')
  })

  it('Col span=12 宽度为 50%', () => {
    render(
      <Row>
        <Col span={12} data-testid="col">
          Half
        </Col>
      </Row>,
    )

    const col = screen.getByTestId('col')
    expect(col.className).toContain('w-[50.0000%]')
  })

  it('span=0 时隐藏列', () => {
    render(
      <Row>
        <Col span={0} data-testid="col">
          Hidden
        </Col>
      </Row>,
    )

    const col = screen.getByTestId('col')
    expect(col.className).toContain('hidden')
  })

  it('offset 生成左侧偏移', () => {
    render(
      <Row>
        <Col span={6} offset={6} data-testid="col">
          Offset
        </Col>
      </Row>,
    )

    const col = screen.getByTestId('col')
    expect(col.className).toContain('ml-[25.0000%]')
  })

  it('Row 对齐方式 align 生效', () => {
    render(
      <Row align="middle" data-testid="row">
        <Col span={12}>A</Col>
      </Row>,
    )

    const row = screen.getByTestId('row')
    expect(row.className).toContain('items-center')
  })

  it('Row justify 生效', () => {
    render(
      <Row justify="center" data-testid="row">
        <Col span={6}>C</Col>
      </Row>,
    )

    const row = screen.getByTestId('row')
    expect(row.className).toContain('justify-center')
  })

  it('用户 className 通过 cn() 合并', () => {
    render(
      <Row className="bg-danger-500" data-testid="row">
        <Col span={12}>Test</Col>
      </Row>,
    )

    const row = screen.getByTestId('row')
    expect(row.className).toContain('bg-danger-500')
  })

  it('响应式列类名生成', () => {
    render(
      <Row>
        <Col span={24} sm={12} md={8} lg={6} data-testid="col">
          Responsive
        </Col>
      </Row>,
    )

    const col = screen.getByTestId('col')
    expect(col.className).toContain('sm:w-[50.0000%]')
    expect(col.className).toContain('md:w-[33.3333%]')
    expect(col.className).toContain('lg:w-[25.0000%]')
  })

  it('gutter 生成负 margin', () => {
    render(
      <Row gutter={16} data-testid="row">
        <Col span={12}>A</Col>
        <Col span={12}>B</Col>
      </Row>,
    )

    const row = screen.getByTestId('row')
    expect(row.className).toContain('-mx-[8px]')
  })
})