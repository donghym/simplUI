import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MarkdownEditor } from './index'

describe('MarkdownEditor', () => {
  it('渲染默认状态', () => {
    render(<MarkdownEditor />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<MarkdownEditor className="custom-md" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-md')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<MarkdownEditor ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('onChange 回调触发', () => {
    const onChange = vi.fn()
    render(<MarkdownEditor onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '# 标题' } })
    expect(onChange).toHaveBeenCalledWith('# 标题')
  })

  it('disabled 状态禁用输入', () => {
    render(<MarkdownEditor disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('模式切换按钮切换到预览模式', () => {
    render(<MarkdownEditor value="# 标题" />)
    fireEvent.click(screen.getByText('预览'))
    // 预览模式下不应有 textarea
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
})
