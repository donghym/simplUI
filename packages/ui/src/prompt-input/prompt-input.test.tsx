import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PromptInput } from './index'

describe('PromptInput', () => {
  it('渲染默认状态', () => {
    render(<PromptInput />)
    expect(screen.getByPlaceholderText('输入提示词...')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<PromptInput className="custom-prompt" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-prompt')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<PromptInput ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('disabled 状态禁用输入和发送', () => {
    render(<PromptInput disabled />)
    expect(screen.getByPlaceholderText('输入提示词...')).toBeDisabled()
  })

  it('onChange 回调触发', () => {
    const onChange = vi.fn()
    render(<PromptInput onChange={onChange} />)
    fireEvent.change(screen.getByPlaceholderText('输入提示词...'), {
      target: { value: 'hello' },
    })
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  it('onSend 回调通过发送按钮触发', () => {
    const onSend = vi.fn()
    render(<PromptInput value="测试内容" onSend={onSend} />)
    fireEvent.click(screen.getByText('发送'))
    expect(onSend).toHaveBeenCalledWith('测试内容')
  })
})
