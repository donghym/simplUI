import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { WiredElement } from './index'

describe('WiredElement', () => {
  it('渲染 card 类型默认状态', () => {
    render(<WiredElement elementType="card">卡片</WiredElement>)
    expect(screen.getByText('卡片')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(<WiredElement elementType="card" className="custom-wired">内容</WiredElement>)
    const el = screen.getByText('内容').closest('.sui-wired-element')
    expect(el?.className).toContain('sui-wired-element')
    expect(el?.className).toContain('custom-wired')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<WiredElement elementType="card" ref={ref}>内容</WiredElement>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('button 类型点击触发回调', () => {
    const onClick = vi.fn()
    render(<WiredElement elementType="button" onClick={onClick}>按钮</WiredElement>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('input 类型触发 onChange 回调', () => {
    const onChange = vi.fn()
    render(<WiredElement elementType="input" onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } })
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  it('input 类型 placeholder 显示', () => {
    render(<WiredElement elementType="input" placeholder="请输入" />)
    expect(screen.getByPlaceholderText('请输入')).toBeInTheDocument()
  })
})
