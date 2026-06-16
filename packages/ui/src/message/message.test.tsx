import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Message, messageApi } from './index'

describe('Message', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    // 清理命令式 API 残留的 DOM 节点
    const container = document.getElementById('simplui-message-container')
    if (container) container.remove()
  })

  it('使用默认类型 info 渲染，包含图标和内容', () => {
    render(<Message content="操作成功" />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert.textContent).toContain('操作成功')
    // 默认 info 类型应为蓝色背景
    expect(alert.className).toContain('bg-primary-50')
  })

  it.each(['success', 'error', 'warning', 'info', 'loading'] as const)(
    '渲染类型 %s 并包含正确的颜色类',
    (type) => {
      render(<Message type={type} content={type} />)
      const alert = screen.getByRole('alert')
      expect(alert).toBeInTheDocument()
      // 每种类型都应有对应的背景色类
      expect(alert.className).toContain('bg-')
    },
  )

  it('duration 到期后自动隐藏', () => {
    const handleClose = vi.fn()
    render(<Message content="3 秒后消失" duration={3000} onClose={handleClose} />)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    // 前进 3000ms
    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('duration=0 时不自动关闭', () => {
    render(<Message content="不会自动关闭" duration={0} />)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    // 前进任意时间，消息仍应存在
    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('点击关闭按钮触发 onClose 回调', () => {
    const handleClose = vi.fn()
    render(<Message content="可关闭" onClose={handleClose} />)

    const closeButton = screen.getByRole('button', { name: '关闭消息' })
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('closable=false 时不显示关闭按钮', () => {
    render(<Message content="不可关闭" closable={false} />)
    const closeButton = screen.queryByRole('button', { name: '关闭消息' })
    expect(closeButton).not.toBeInTheDocument()
  })

  it('合并用户 className 通过 cn() 和 twMerge', () => {
    render(<Message content="自定义样式" className="mt-8 bg-danger-500" />)
    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('mt-8')
    // twMerge 用 bg-danger-500 覆盖默认的 bg-primary-50
    expect(alert.className).toContain('bg-danger-500')
    expect(alert.className).not.toContain('bg-primary-50')
  })

  it('渲染自定义图标，忽略类型默认图标', () => {
    render(
      <Message
        content="自定义图标"
        type="success"
        icon={<span data-testid="custom-icon">*</span>}
      />,
    )
    const icon = screen.getByTestId('custom-icon')
    expect(icon).toBeInTheDocument()
  })

  it('loading 类型渲染旋转 spinner 图标', () => {
    render(<Message type="loading" content="加载中..." />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    // loading 应有 animate-spin 类
    expect(alert.innerHTML).toContain('animate-spin')
  })

  it('messageApi.success 在 document.body 中渲染消息', () => {
    act(() => {
      messageApi.success('命令式成功消息')
    })

    const container = document.getElementById('simplui-message-container')
    expect(container).toBeInTheDocument()
    expect(container!.textContent).toContain('命令式成功消息')
  })

  it('messageApi 返回的销毁函数可手动关闭消息', () => {
    let destroy: () => void
    act(() => {
      destroy = messageApi.info('手动关闭', 0)
    })

    const container = document.getElementById('simplui-message-container')
    expect(container!.textContent).toContain('手动关闭')

    act(() => {
      destroy()
    })

    expect(container!.textContent).not.toContain('手动关闭')
  })

  it('messageApi.error 渲染错误消息', () => {
    act(() => {
      messageApi.error('操作失败', 5000)
    })

    const container = document.getElementById('simplui-message-container')
    expect(container).toBeInTheDocument()
    expect(container!.textContent).toContain('操作失败')
    // 错误类型应有红色背景
    expect(container!.innerHTML).toContain('bg-danger-50')
  })
})