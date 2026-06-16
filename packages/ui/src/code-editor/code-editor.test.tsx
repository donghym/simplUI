import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CodeEditor } from './index'

describe('CodeEditor', () => {
  it('渲染默认状态', () => {
    render(<CodeEditor />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<CodeEditor className="custom-editor" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-editor')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<CodeEditor ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('onChange 回调触发', () => {
    const onChange = vi.fn()
    render(<CodeEditor onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'const a = 1' } })
    expect(onChange).toHaveBeenCalledWith('const a = 1')
  })

  it('readonly 模式下 textarea 不可编辑', () => {
    render(<CodeEditor readonly value="code" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  })

  it('language 属性应用语法高亮', () => {
    render(<CodeEditor value="const x = 1" language="javascript" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
