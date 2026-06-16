import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ActionSheet } from './index'

const actions = [
  { label: '拍照', onClick: vi.fn() },
  { label: '相册', onClick: vi.fn() },
  { label: '删除', danger: true, onClick: vi.fn() },
  { label: '禁用', disabled: true, onClick: vi.fn() },
]

describe('ActionSheet', () => {
  it('open=false 时不渲染', () => {
    render(<ActionSheet open={false} onClose={vi.fn()} actions={actions} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('open=true 渲染面板', () => {
    render(<ActionSheet open={true} onClose={vi.fn()} actions={actions} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('拍照')).toBeInTheDocument()
    expect(screen.getByText('相册')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(<ActionSheet open={true} onClose={vi.fn()} actions={actions} className="custom-sheet" />)
    const dialog = screen.getByRole('dialog')
    expect(dialog.className).toContain('custom-sheet')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ActionSheet open={true} onClose={vi.fn()} actions={actions} ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('点击取消按钮触发 onClose', () => {
    const onClose = vi.fn()
    render(<ActionSheet open={true} onClose={onClose} actions={actions} />)
    fireEvent.click(screen.getByText('取消'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('禁用项点击不触发回调', () => {
    const onClick = vi.fn()
    const localActions = [
      { label: '禁用项', disabled: true, onClick },
    ]
    render(<ActionSheet open={true} onClose={vi.fn()} actions={localActions} />)
    fireEvent.click(screen.getByText('禁用项'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
