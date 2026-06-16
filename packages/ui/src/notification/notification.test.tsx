import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Notification, notificationApi } from './index'

describe('Notification', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    // 清理命令式 API 残留的 DOM 节点
    const containerIds = [
      'simplui-notification-container-top-right',
      'simplui-notification-container-top-left',
      'simplui-notification-container-bottom-right',
      'simplui-notification-container-bottom-left',
    ]
    containerIds.forEach((id) => {
      const container = document.getElementById(id)
      if (container) container.remove()
    })
  })

  it('使用默认类型 info 渲染，包含标题和描述', () => {
    render(<Notification title="通知标题" description="通知描述内容" />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert.textContent).toContain('通知标题')
    expect(alert.textContent).toContain('通知描述内容')
  })

  it.each(['success', 'error', 'warning', 'info'] as const)(
    '渲染类型 %s 并包含正确的边框颜色类',
    (type) => {
      render(<Notification type={type} title={type} description="测试" />)
      const alert = screen.getByRole('alert')
      expect(alert).toBeInTheDocument()
      // 每种类型都应有对应的边框色类
      expect(alert.className).toContain('border-')
    },
  )

  it('duration 到期后自动隐藏', () => {
    const handleClose = vi.fn()
    render(<Notification title="测试" description="4.5 秒后消失" duration={4500} onClose={handleClose} />)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    // 前进 4500ms
    act(() => {
      vi.advanceTimersByTime(4500)
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('duration=0 时不自动关闭', () => {
    render(<Notification title="测试" description="不会自动关闭" duration={0} />)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    // 前进任意时间，通知仍应存在
    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('点击关闭按钮触发 onClose 回调', () => {
    const handleClose = vi.fn()
    render(<Notification title="测试" description="可关闭" onClose={handleClose} />)

    const closeButton = screen.getByRole('button', { name: '关闭通知' })
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('closable=false 时不显示关闭按钮', () => {
    render(<Notification title="测试" description="不可关闭" closable={false} />)
    const closeButton = screen.queryByRole('button', { name: '关闭通知' })
    expect(closeButton).not.toBeInTheDocument()
  })

  it('合并用户 className 通过 cn() 和 twMerge', () => {
    render(<Notification title="测试" description="自定义样式" className="mt-8 w-96" />)
    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('mt-8')
    expect(alert.className).toContain('w-96')
  })

  it('渲染自定义图标，忽略类型默认图标', () => {
    render(
      <Notification
        title="测试"
        description="自定义图标"
        type="success"
        icon={<span data-testid="custom-icon">*</span>}
      />,
    )
    const icon = screen.getByTestId('custom-icon')
    expect(icon).toBeInTheDocument()
  })

  it('渲染 action 操作按钮区域', () => {
    render(
      <Notification
        title="测试"
        description="带操作"
        action={<button data-testid="action-btn">确认</button>}
      />,
    )
    const actionBtn = screen.getByTestId('action-btn')
    expect(actionBtn).toBeInTheDocument()
  })

  it('notificationApi.success 在 document.body 中渲染通知', () => {
    act(() => {
      notificationApi.success({ title: '成功', description: '操作已完成' })
    })

    const container = document.getElementById('simplui-notification-container-top-right')
    expect(container).toBeInTheDocument()
    expect(container!.textContent).toContain('成功')
    expect(container!.textContent).toContain('操作已完成')
  })

  it('notificationApi 返回的销毁函数可手动关闭通知', () => {
    let destroy: () => void
    act(() => {
      destroy = notificationApi.info({ title: '提示', description: '手动关闭', duration: 0 })
    })

    const container = document.getElementById('simplui-notification-container-top-right')
    expect(container!.textContent).toContain('手动关闭')

    act(() => {
      destroy()
    })

    expect(container!.textContent).not.toContain('手动关闭')
  })

  it('notificationApi.error 渲染错误通知', () => {
    act(() => {
      notificationApi.error({ title: '错误', description: '操作失败' })
    })

    const container = document.getElementById('simplui-notification-container-top-right')
    expect(container).toBeInTheDocument()
    expect(container!.textContent).toContain('错误')
    expect(container!.textContent).toContain('操作失败')
  })

  it('notificationApi 支持 placement 指定显示位置', () => {
    act(() => {
      notificationApi.info({ title: '左上', description: '测试', placement: 'top-left' })
    })

    const container = document.getElementById('simplui-notification-container-top-left')
    expect(container).toBeInTheDocument()
    expect(container!.textContent).toContain('左上')
  })

  it('notificationApi.warning 渲染警告通知', () => {
    act(() => {
      notificationApi.warning({ title: '警告', description: '请注意' })
    })

    const container = document.getElementById('simplui-notification-container-top-right')
    expect(container).toBeInTheDocument()
    expect(container!.textContent).toContain('警告')
  })
})
