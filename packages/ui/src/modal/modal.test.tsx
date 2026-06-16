import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { createRef } from 'react'
import Modal from './index'

describe('Modal', () => {
  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('open=true 时渲染弹窗', () => {
    render(
      <Modal open onClose={() => {}} title="测试标题">
        <p>内容</p>
      </Modal>,
    )

    expect(screen.getByText('测试标题')).toBeInTheDocument()
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('open=false 时不渲染', () => {
    const { container } = render(
      <Modal open={false} onClose={() => {}}>
        <p>内容</p>
      </Modal>,
    )

    expect(container.textContent).toBe('')
  })

  it('点击关闭按钮触发 onClose', () => {
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose} title="标题">
        内容
      </Modal>,
    )

    fireEvent.click(screen.getByLabelText('关闭'))
    expect(onClose).toHaveBeenCalled()
  })

  it('点击遮罩层触发 onClose（默认 maskClosable=true）', () => {
    const onClose = vi.fn()
    const { container } = render(
      <Modal open onClose={onClose}>
        内容
      </Modal>,
    )

    // 第一个 div 是遮罩层
    const overlay = container.querySelector('.fixed.inset-0.z-40')
    expect(overlay).toBeInTheDocument()
    fireEvent.click(overlay!)
    expect(onClose).toHaveBeenCalled()
  })

  it('maskClosable=false 时点击遮罩不关闭', () => {
    const onClose = vi.fn()
    const { container } = render(
      <Modal open onClose={onClose} maskClosable={false}>
        内容
      </Modal>,
    )

    const overlay = container.querySelector('.fixed.inset-0.z-40')
    fireEvent.click(overlay!)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closable=false 隐藏关闭按钮', () => {
    render(
      <Modal open onClose={() => {}} title="标题" closable={false}>
        内容
      </Modal>,
    )

    expect(screen.queryByLabelText('关闭')).not.toBeInTheDocument()
  })

  it('render footer', () => {
    render(
      <Modal open onClose={() => {}} footer={<button>确定</button>}>
        内容
      </Modal>,
    )

    expect(screen.getByText('确定')).toBeInTheDocument()
  })

  it('用户 className 合并', () => {
    const { container } = render(
      <Modal open onClose={() => {}} className="custom-modal">
        内容
      </Modal>,
    )

    expect(container.querySelector('.custom-modal')).toBeInTheDocument()
  })

  it('ESC 键触发 onClose', () => {
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose}>
        内容
      </Modal>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('关闭后触发 afterClose 回调', async () => {
    vi.useFakeTimers()
    const afterClose = vi.fn()
    const { rerender } = render(
      <Modal open onClose={() => {}} afterClose={afterClose}>
        内容
      </Modal>,
    )

    rerender(
      <Modal open={false} onClose={() => {}} afterClose={afterClose}>
        内容
      </Modal>,
    )

    vi.advanceTimersByTime(200)
    expect(afterClose).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('ref 正确转发到 Modal 面板 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Modal open onClose={() => {}} ref={ref}>
        内容
      </Modal>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.getAttribute('role')).toBe('dialog')
  })

  it('Modal 有 role="dialog" 和 aria-modal="true"', () => {
    render(
      <Modal open onClose={() => {}} title="标题">
        内容
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })
})