import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Popconfirm } from './index'

describe('Popconfirm', () => {
  it('renders trigger', () => {
    render(
      <Popconfirm title="确认？">
        <button>删除</button>
      </Popconfirm>,
    )
    expect(screen.getByText('删除')).toBeInTheDocument()
  })

  it('opens on click', () => {
    render(
      <Popconfirm title="确认删除？">
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    expect(screen.getByText('确认删除？')).toBeInTheDocument()
  })

  it('calls onConfirm when ok clicked', () => {
    const onConfirm = vi.fn()
    render(
      <Popconfirm title="确认？" onConfirm={onConfirm}>
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    fireEvent.click(screen.getByText('确定'))
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it('calls onCancel when cancel clicked', () => {
    const onCancel = vi.fn()
    render(
      <Popconfirm title="确认？" onCancel={onCancel}>
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    fireEvent.click(screen.getByText('取消'))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('closes after confirm', () => {
    render(
      <Popconfirm title="确认？">
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    expect(screen.getByText('确认？')).toBeInTheDocument()
    fireEvent.click(screen.getByText('确定'))
    expect(screen.queryByText('确认？')).not.toBeInTheDocument()
  })

  it('supports custom okText and cancelText', () => {
    render(
      <Popconfirm title="确认？" okText="Yes" cancelText="No">
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    expect(screen.getByText('Yes')).toBeInTheDocument()
    expect(screen.getByText('No')).toBeInTheDocument()
  })

  it('supports description', () => {
    render(
      <Popconfirm title="确认？" description="此操作不可撤销">
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    expect(screen.getByText('此操作不可撤销')).toBeInTheDocument()
  })

  it('does not open when disabled', () => {
    render(
      <Popconfirm title="确认？" disabled>
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    expect(screen.queryByText('确认？')).not.toBeInTheDocument()
  })

  it('calls onOpenChange', () => {
    const onOpenChange = vi.fn()
    render(
      <Popconfirm title="确认？" onOpenChange={onOpenChange}>
        <button>删除</button>
      </Popconfirm>,
    )
    fireEvent.click(screen.getByText('删除'))
    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSpanElement>()
    render(<Popconfirm ref={ref}><button>X</button></Popconfirm>)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})
