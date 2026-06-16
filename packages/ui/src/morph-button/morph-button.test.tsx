import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MorphButton } from './index'

describe('MorphButton', () => {
  it('渲染默认状态', () => {
    render(<MorphButton>点击</MorphButton>)
    const btn = screen.getByRole('button', { name: '点击' })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('type', 'button')
  })

  it('className 合并', () => {
    render(<MorphButton className="custom-class">按钮</MorphButton>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('sui-morph-button')
    expect(btn.className).toContain('custom-class')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<MorphButton ref={ref}>按钮</MorphButton>)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('BUTTON')
  })

  it('disabled 状态', () => {
    render(<MorphButton disabled>按钮</MorphButton>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
  })

  it('点击回调触发', () => {
    const onClick = vi.fn()
    render(<MorphButton onClick={onClick}>按钮</MorphButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('htmlType 变体切换', () => {
    render(<MorphButton htmlType="submit">提交</MorphButton>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })
})
