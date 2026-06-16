import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SearchInput } from './index'

describe('SearchInput', () => {
  it('渲染默认状态 - 显示搜索输入框', () => {
    render(<SearchInput />)
    expect(screen.getByPlaceholderText('搜索...')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <SearchInput className="custom-search" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-search')).toBe(true)
  })

  it('ref 转发到 input 元素', () => {
    const ref = createRef<HTMLInputElement>()
    render(<SearchInput ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('onChange 回调在输入时触发', () => {
    const onChange = vi.fn()
    render(<SearchInput onChange={onChange} />)
    const input = screen.getByPlaceholderText('搜索...')
    fireEvent.change(input, { target: { value: '测试' } })
    expect(onChange).toHaveBeenCalledWith('测试')
  })

  it('onSearch 回调在按 Enter 时触发', () => {
    const onSearch = vi.fn()
    render(<SearchInput onSearch={onSearch} defaultValue="关键词" />)
    const input = screen.getByPlaceholderText('搜索...')
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onSearch).toHaveBeenCalledWith('关键词')
  })

  it('disabled 状态禁用输入', () => {
    render(<SearchInput disabled />)
    const input = screen.getByPlaceholderText('搜索...')
    expect(input).toBeDisabled()
  })

  it('allowClear 显示清空按钮', () => {
    render(<SearchInput defaultValue="测试" allowClear />)
    const clearBtn = screen.getByLabelText('清空')
    expect(clearBtn).toBeInTheDocument()
  })

  it('点击清空按钮清空输入', () => {
    const onChange = vi.fn()
    render(<SearchInput defaultValue="测试" allowClear onChange={onChange} />)
    fireEvent.click(screen.getByLabelText('清空'))
    expect(onChange).toHaveBeenCalledWith('')
  })

  it('自定义 placeholder', () => {
    render(<SearchInput placeholder="请输入搜索内容" />)
    expect(screen.getByPlaceholderText('请输入搜索内容')).toBeInTheDocument()
  })
})
