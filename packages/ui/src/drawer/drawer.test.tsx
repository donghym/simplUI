import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { createRef } from 'react'
import { Drawer } from './index'

describe('Drawer', () => {
  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('open=true 时渲染抽屉', () => {
    render(
      <Drawer open onClose={() => {}} title="抽屉标题">
        <p>抽屉内容</p>
      </Drawer>,
    )

    expect(screen.getByText('抽屉标题')).toBeInTheDocument()
    expect(screen.getByText('抽屉内容')).toBeInTheDocument()
  })

  it('open=false 时不渲染', () => {
    const { container } = render(
      <Drawer open={false} onClose={() => {}}>
        <p>隐藏内容</p>
      </Drawer>,
    )

    expect(container.textContent).toBe('')
  })

  it('点击关闭按钮触发 onClose', () => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose} title="标题">
        内容
      </Drawer>,
    )

    fireEvent.click(screen.getByLabelText('关闭'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('点击遮罩层触发 onClose（默认 maskClosable=true）', () => {
    const onClose = vi.fn()
    const { container } = render(
      <Drawer open onClose={onClose}>
        内容
      </Drawer>,
    )

    const overlay = container.querySelector('.fixed.inset-0.z-40')
    expect(overlay).toBeInTheDocument()
    fireEvent.click(overlay!)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('maskClosable=false 时点击遮罩不关闭', () => {
    const onClose = vi.fn()
    const { container } = render(
      <Drawer open onClose={onClose} maskClosable={false}>
        内容
      </Drawer>,
    )

    const overlay = container.querySelector('.fixed.inset-0.z-40')
    fireEvent.click(overlay!)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closable=false 隐藏关闭按钮', () => {
    render(
      <Drawer open onClose={() => {}} title="标题" closable={false}>
        内容
      </Drawer>,
    )

    expect(screen.queryByLabelText('关闭')).not.toBeInTheDocument()
  })

  it('渲染 footer', () => {
    render(
      <Drawer open onClose={() => {}} footer={<button>确定</button>}>
        内容
      </Drawer>,
    )

    expect(screen.getByText('确定')).toBeInTheDocument()
  })

  it('用户 className 合并到面板', () => {
    const { container } = render(
      <Drawer open onClose={() => {}} className="custom-drawer">
        内容
      </Drawer>,
    )

    expect(container.querySelector('.custom-drawer')).toBeInTheDocument()
  })

  it('placement=left 时面板包含 left 定位类', () => {
    const { container } = render(
      <Drawer open onClose={() => {}} placement="left">
        内容
      </Drawer>,
    )

    const panel = container.querySelector('.left-0')
    expect(panel).toBeInTheDocument()
  })

  it('ESC 键触发 onClose', () => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose}>
        内容
      </Drawer>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ref 正确转发到 Drawer 面板 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Drawer open onClose={() => {}} ref={ref}>
        内容
      </Drawer>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.getAttribute('role')).toBe('dialog')
  })

  it('Drawer 有 role="dialog" 和 aria-modal="true"', () => {
    render(
      <Drawer open onClose={() => {}} title="标题">
        内容
      </Drawer>,
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })
})