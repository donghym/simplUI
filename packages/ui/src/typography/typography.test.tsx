import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Text, Title, Paragraph } from './index'

describe('Typography', () => {
  it('Text 渲染默认文本', () => {
    render(<Text>Hello</Text>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('Text 不同 type 对应不同颜色', () => {
    const { rerender } = render(<Text type="secondary" data-testid="text">Text</Text>)
    expect(screen.getByTestId('text').className).toContain('text-muted-foreground')

    rerender(<Text type="danger" data-testid="text">Text</Text>)
    expect(screen.getByTestId('text').className).toContain('text-danger-500')

    rerender(<Text type="success" data-testid="text">Text</Text>)
    expect(screen.getByTestId('text').className).toContain('text-success-500')
  })

  it('Text 支持 delete underline strong italic mark code keyboard', () => {
    render(
      <Text delete strong data-testid="text">
        Test
      </Text>,
    )
    expect(screen.getByTestId('text').tagName).toBe('DEL')
    expect(screen.getByTestId('text').className).toContain('font-bold')
  })

  it('Text 代码样式', () => {
    render(<Text code data-testid="text">code</Text>)
    expect(screen.getByTestId('text').tagName).toBe('CODE')
    expect(screen.getByTestId('text').className).toContain('bg-muted')
  })

  it('Title 按 level 使用对应标签和字体大小', () => {
    render(<Title level={1} data-testid="title">H1</Title>)
    expect(screen.getByTestId('title').tagName).toBe('H1')
    expect(screen.getByTestId('title').className).toContain('text-4xl')

    cleanup()

    render(<Title level={3} data-testid="title">H3</Title>)
    expect(screen.getByTestId('title').tagName).toBe('H3')
    expect(screen.getByTestId('title').className).toContain('text-2xl')
  })

  it('Paragraph 渲染段落', () => {
    render(<Paragraph data-testid="p">Paragraph content</Paragraph>)
    expect(screen.getByTestId('p').tagName).toBe('P')
    expect(screen.getByTestId('p').className).toContain('leading-relaxed')
  })

  it('Paragraph 单行省略 ellipsis=true', () => {
    render(
      <Paragraph ellipsis data-testid="p">
        Long text that should be truncated
      </Paragraph>,
    )
    expect(screen.getByTestId('p').className).toContain('overflow-hidden')
    expect(screen.getByTestId('p').className).toContain('text-ellipsis')
  })

  it('Paragraph 多行省略 ellipsis=3', () => {
    render(
      <Paragraph ellipsis={3} data-testid="p">
        Long text that should be truncated after three lines
      </Paragraph>,
    )
    expect(screen.getByTestId('p').className).toContain('-webkit-line-clamp:3')
  })

  it('用户 className 通过 cn() 合并', () => {
    render(<Text className="text-primary-500 mt-4" data-testid="text">Text</Text>)
    expect(screen.getByTestId('text').className).toContain('text-primary-500')
    expect(screen.getByTestId('text').className).toContain('mt-4')
  })
})
