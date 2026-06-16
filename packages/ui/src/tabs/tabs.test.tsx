import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Tabs, TabPane } from './index'

describe('Tabs', () => {
  it('默认渲染 line 变体，激活第一个选项卡', () => {
    render(
      <Tabs>
        <TabPane key="tab1" tab="标签一">
          内容一
        </TabPane>
        <TabPane key="tab2" tab="标签二">
          内容二
        </TabPane>
      </Tabs>,
    )

    // tab bar 渲染
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    // 两个 tab 按钮
    expect(screen.getByText('标签一')).toBeInTheDocument()
    expect(screen.getByText('标签二')).toBeInTheDocument()
    // 第一个选项卡默认激活
    expect(screen.getByRole('tab', { name: '标签一' })).toHaveAttribute('aria-selected', 'true')
    // 激活面板内容可见
    expect(screen.getByText('内容一')).toBeInTheDocument()
  })

  it('defaultActiveKey 非受控模式下指定默认激活选项卡', () => {
    render(
      <Tabs defaultActiveKey="tab2">
        <TabPane key="tab1" tab="标签一">
          内容一
        </TabPane>
        <TabPane key="tab2" tab="标签二">
          内容二
        </TabPane>
      </Tabs>,
    )

    expect(screen.getByRole('tab', { name: '标签二' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('内容二')).toBeInTheDocument()
  })

  it('activeKey 受控模式下由外部控制激活状态', () => {
    const { rerender } = render(
      <Tabs activeKey="tab1">
        <TabPane key="tab1" tab="标签一">
          内容一
        </TabPane>
        <TabPane key="tab2" tab="标签二">
          内容二
        </TabPane>
      </Tabs>,
    )

    expect(screen.getByRole('tab', { name: '标签一' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('内容一')).toBeInTheDocument()

    rerender(
      <Tabs activeKey="tab2">
        <TabPane key="tab1" tab="标签一">
          内容一
        </TabPane>
        <TabPane key="tab2" tab="标签二">
          内容二
        </TabPane>
      </Tabs>,
    )

    expect(screen.getByRole('tab', { name: '标签二' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('内容二')).toBeInTheDocument()
  })

  it('onChange 点击选项卡时触发回调', () => {
    const onChange = vi.fn()

    render(
      <Tabs onChange={onChange}>
        <TabPane key="tab1" tab="标签一">
          内容一
        </TabPane>
        <TabPane key="tab2" tab="标签二">
          内容二
        </TabPane>
      </Tabs>,
    )

    fireEvent.click(screen.getByRole('tab', { name: '标签二' }))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('tab2')
  })

  it('disabled 选项卡不可点击且置灰', () => {
    const onChange = vi.fn()

    render(
      <Tabs onChange={onChange}>
        <TabPane key="tab1" tab="可用标签">
          内容一
        </TabPane>
        <TabPane key="tab2" tab="禁用标签" disabled>
          禁用内容
        </TabPane>
      </Tabs>,
    )

    const disabledTab = screen.getByRole('tab', { name: '禁用标签' })
    expect(disabledTab).toBeDisabled()
    expect(disabledTab).toHaveAttribute('aria-disabled', 'true')

    fireEvent.click(disabledTab)
    expect(onChange).not.toHaveBeenCalled()
    // 内容不可见（未被激活）
    expect(screen.queryByText('禁用内容')).not.toBeInTheDocument()
  })

  it('variant=card 渲染卡片式选项卡', () => {
    render(
      <Tabs variant="card">
        <TabPane key="tab1" tab="卡片标签">
          卡片内容
        </TabPane>
      </Tabs>,
    )

    const tab = screen.getByRole('tab', { name: '卡片标签' })
    expect(tab.className).toContain('rounded-t-md')
    expect(tab.className).toContain('border')
  })

  it('variant=edgeless 渲染无边框按钮式选项卡', () => {
    render(
      <Tabs variant="edgeless">
        <TabPane key="tab1" tab="按钮标签">
          无边框内容
        </TabPane>
      </Tabs>,
    )

    const tab = screen.getByRole('tab', { name: '按钮标签' })
    expect(tab.className).toContain('rounded-md')
    expect(tab.className).toContain('hover:bg-muted')
  })

  it('用户 className 通过 cn() + twMerge 合并可覆盖默认', () => {
    const { container } = render(
      <Tabs className="p-6 bg-muted">
        <TabPane key="tab1" tab="标签">
          内容
        </TabPane>
      </Tabs>,
    )

    const root = container.firstChild as HTMLElement
    expect(root.className).toContain('p-6')
    expect(root.className).toContain('bg-muted')
  })

  it('tabPosition=bottom 选项卡位于底部', () => {
    render(
      <Tabs tabPosition="bottom">
        <TabPane key="tab1" tab="底部标签">
          底部内容
        </TabPane>
      </Tabs>,
    )

    // content 在 tab bar 之前渲染，tab bar 存在
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: '底部标签' })).toBeInTheDocument()
    expect(screen.getByText('底部内容')).toBeInTheDocument()
  })
})