import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BatchOperation } from './index'
import type { BatchAction } from './types'

const actions: BatchAction[] = [
  { label: '批量删除', onClick: vi.fn(), danger: true },
  { label: '批量导出', onClick: vi.fn() },
]

describe('BatchOperation', () => {
  it('selectedCount > 0 时渲染操作栏', () => {
    render(<BatchOperation selectedCount={3} actions={actions} />)
    expect(screen.getByText(/已选择/)).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('selectedCount 为 0 时不渲染', () => {
    const { container } = render(<BatchOperation selectedCount={0} actions={actions} />)
    expect(container.firstChild).toBeNull()
  })

  it('className 合并', () => {
    const { container } = render(
      <BatchOperation selectedCount={3} actions={actions} className="custom-batch" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-batch')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<BatchOperation selectedCount={3} actions={actions} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('操作按钮点击触发 onClick 回调', () => {
    const onClick = vi.fn()
    const testActions: BatchAction[] = [
      { label: '删除', onClick, danger: true },
    ]
    render(<BatchOperation selectedCount={2} actions={testActions} />)
    fireEvent.click(screen.getByText('删除'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('onClear 回调在点击清空时触发', () => {
    const onClear = vi.fn()
    render(<BatchOperation selectedCount={3} actions={actions} onClear={onClear} />)
    fireEvent.click(screen.getByText('清空'))
    expect(onClear).toHaveBeenCalledTimes(1)
  })

  it('danger 按钮渲染为危险样式', () => {
    render(<BatchOperation selectedCount={3} actions={actions} />)
    const dangerBtn = screen.getByText('批量删除')
    expect(dangerBtn).toBeInTheDocument()
  })

  it('disabled 操作按钮不可点击', () => {
    const onClick = vi.fn()
    const disabledActions: BatchAction[] = [
      { label: '禁用操作', onClick, disabled: true },
    ]
    render(<BatchOperation selectedCount={1} actions={disabledActions} />)
    const btn = screen.getByText('禁用操作')
    expect(btn).toBeDisabled()
  })
})
