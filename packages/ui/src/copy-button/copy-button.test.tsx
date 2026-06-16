import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CopyButton } from './index'

// 模拟 clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
})

describe('CopyButton', () => {
  it('渲染默认状态 - 显示复制按钮', () => {
    render(<CopyButton text="hello" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <CopyButton text="hello" className="custom-copy" />,
    )
    const btn = container.querySelector('.custom-copy')
    expect(btn).toBeInTheDocument()
  })

  it('ref 转发到 button 元素', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<CopyButton text="hello" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('点击触发 onCopy 回调', async () => {
    const onCopy = vi.fn()
    render(<CopyButton text="hello" onCopy={onCopy} />)
    fireEvent.click(screen.getByRole('button'))
    // 等待异步操作
    await vi.waitFor(() => {
      expect(onCopy).toHaveBeenCalledWith(true)
    })
  })

  it('showTooltip 为 true 时显示提示文本', () => {
    render(<CopyButton text="hello" showTooltip />)
    expect(screen.getByText('点击复制')).toBeInTheDocument()
  })

  it('showTooltip 为 false 时不显示提示文本', () => {
    render(<CopyButton text="hello" showTooltip={false} />)
    expect(screen.queryByText('点击复制')).not.toBeInTheDocument()
  })

  it('自定义 tooltipText 配置', () => {
    render(
      <CopyButton
        text="hello"
        showTooltip
        tooltipText={{ success: '复制成功', error: '失败', default: '点我复制' }}
      />,
    )
    expect(screen.getByText('点我复制')).toBeInTheDocument()
  })

  it('自定义 icon 渲染', () => {
    render(<CopyButton text="hello" icon={<span>ICON</span>} />)
    expect(screen.getByText('ICON')).toBeInTheDocument()
  })
})
