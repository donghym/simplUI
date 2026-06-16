import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TabBar } from './index'

const items = [
  { key: 'home', label: '首页', icon: <span>H</span> },
  { key: 'msg', label: '消息', icon: <span>M</span> },
  { key: 'me', label: '我的', icon: <span>Me</span>, disabled: true },
]

describe('TabBar', () => {
  it('渲染默认状态', () => {
    render(<TabBar items={items} />)
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('消息')).toBeInTheDocument()
    expect(screen.getByText('我的')).toBeInTheDocument()
  })

  it('className 合并', () => {
    render(<TabBar items={items} className="custom-tabbar" />)
    const tablist = screen.getByRole('tablist')
    expect(tablist.className).toContain('sui-tab-bar')
    expect(tablist.className).toContain('custom-tabbar')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<TabBar items={items} ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('点击触发 onChange 回调', () => {
    const onChange = vi.fn()
    render(<TabBar items={items} onChange={onChange} />)
    fireEvent.click(screen.getByText('消息'))
    expect(onChange).toHaveBeenCalledWith('msg')
  })

  it('disabled 项点击不触发回调', () => {
    const onChange = vi.fn()
    render(<TabBar items={items} onChange={onChange} />)
    fireEvent.click(screen.getByText('我的'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('受控模式 activeKey 控制选中项', () => {
    render(<TabBar items={items} activeKey="msg" />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
  })
})
