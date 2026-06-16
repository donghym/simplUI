import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TagInput } from './index'

describe('TagInput', () => {
  it('渲染默认状态 - 显示输入框', () => {
    render(<TagInput />)
    expect(screen.getByPlaceholderText('请输入标签')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <TagInput className="custom-tag-input" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-tag-input')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TagInput ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('value 显示已有标签', () => {
    render(<TagInput value={['标签1', '标签2']} onChange={vi.fn()} />)
    expect(screen.getByText('标签1')).toBeInTheDocument()
    expect(screen.getByText('标签2')).toBeInTheDocument()
  })

  it('按 Enter 添加新标签', () => {
    const onChange = vi.fn()
    render(<TagInput value={[]} onChange={onChange} />)
    const input = screen.getByPlaceholderText('请输入标签')
    fireEvent.change(input, { target: { value: '新标签' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChange).toHaveBeenCalledWith(['新标签'])
  })

  it('点击删除按钮移除标签', () => {
    const onChange = vi.fn()
    render(<TagInput value={['标签1', '标签2']} onChange={onChange} />)
    const deleteBtn = screen.getByLabelText('删除标签 标签1')
    fireEvent.click(deleteBtn)
    expect(onChange).toHaveBeenCalledWith(['标签2'])
  })

  it('disabled 状态禁用输入和删除', () => {
    render(<TagInput value={['标签1']} onChange={vi.fn()} disabled />)
    const input = screen.getByPlaceholderText('请输入标签')
    expect(input).toBeDisabled()
    expect(screen.queryByLabelText('删除标签 标签1')).not.toBeInTheDocument()
  })

  it('maxTags 限制标签数量', () => {
    render(<TagInput value={['标签1', '标签2']} onChange={vi.fn()} maxTags={2} />)
    const input = screen.getByPlaceholderText('已达标签上限')
    expect(input).toBeDisabled()
  })

  it('allowDuplicate 为 false 时不允许重复标签', () => {
    const onChange = vi.fn()
    render(<TagInput value={['已有']} onChange={onChange} />)
    const input = screen.getByPlaceholderText('请输入标签')
    fireEvent.change(input, { target: { value: '已有' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChange).not.toHaveBeenCalled()
  })

  it('allowClear 显示清空按钮', () => {
    render(<TagInput value={['标签1']} onChange={vi.fn()} allowClear />)
    expect(screen.getByLabelText('清空所有标签')).toBeInTheDocument()
  })

  it('status 为 error 时设置 aria-invalid', () => {
    const { container } = render(<TagInput status="error" />)
    const root = container.firstChild as HTMLElement
    expect(root.getAttribute('aria-invalid')).toBe('true')
  })
})
