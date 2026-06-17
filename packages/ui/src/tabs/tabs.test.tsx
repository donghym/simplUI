import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Tabs, TabPane } from './index'

describe('Tabs', () => {
  it('渲染默认变体并正确显示第一个选项卡内容', () => {
    render(
      <Tabs>
        <TabPane key="tab1" tab="Tab 1">
          Content 1
        </TabPane>
        <TabPane key="tab2" tab="Tab 2">
          Content 2
        </TabPane>
      </Tabs>,
    )

    // 检查 tablist 存在
    const tablist = screen.getByRole('tablist')
    expect(tablist).toBeInTheDocument()

    // 检查两个 tab 按钮
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)

    // 第一个 tab 应该被选中
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')

    // 第一个 tab 的内容应该显示
    const tabpanel = screen.getByRole('tabpanel')
    expect(tabpanel).toHaveTextContent('Content 1')
  })

  it.each(['line', 'card', 'edgeless'] as const)(
    '渲染变体 %s 的类名正确',
    (variant) => {
      render(
        <Tabs variant={variant}>
          <TabPane key="tab1" tab="Tab 1">
            Content
          </TabPane>
        </Tabs>,
      )

      const tablist = screen.getByRole('tablist')
      expect(tablist).toBeInTheDocument()
      expect(tablist.className.length).toBeGreaterThan(0)
    },
  )

  it('通过 cn() 和 twMerge 合并用户 className', () => {
    render(
      <Tabs className="bg-muted">
        <TabPane key="tab1" tab="Tab 1">
          Content
        </TabPane>
      </Tabs>,
    )

    const container = screen.getByRole('tablist').parentElement
    expect(container).toBeInTheDocument()
    expect(container?.className).toContain('bg-muted')
  })

  it('点击切换触发 onChange 并更新内容', () => {
    const handleChange = vi.fn()

    render(
      <Tabs onChange={handleChange}>
        <TabPane key="tab1" tab="Tab 1">
          Content 1
        </TabPane>
        <TabPane key="tab2" tab="Tab 2">
          Content 2
        </TabPane>
      </Tabs>,
    )

    const tabs = screen.getAllByRole('tab')
    const secondTab = tabs[1]!

    // 点击第二个 tab
    fireEvent.click(secondTab)

    // onChange 应该被调用
    expect(handleChange).toHaveBeenCalledWith('tab2')

    // 第二个 tab 应该被选中
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')

    // 内容应该切换
    const tabpanel = screen.getByRole('tabpanel')
    expect(tabpanel).toHaveTextContent('Content 2')
  })

  it('disabled 状态下点击不触发切换', () => {
    const handleChange = vi.fn()

    render(
      <Tabs onChange={handleChange}>
        <TabPane key="tab1" tab="Tab 1">
          Content 1
        </TabPane>
        <TabPane key="tab2" tab="Tab 2" disabled>
          Content 2
        </TabPane>
      </Tabs>,
    )

    const tabs = screen.getAllByRole('tab')
    const secondTab = tabs[1]!

    // 第二个 tab 应该有 aria-disabled
    expect(secondTab).toHaveAttribute('aria-disabled', 'true')
    expect(secondTab).toBeDisabled()

    // 点击 disabled tab 不应该触发 onChange
    fireEvent.click(secondTab)
    expect(handleChange).not.toHaveBeenCalled()

    // 第一个 tab 仍然选中
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('ref 正确转发到容器 div 元素', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Tabs ref={ref}>
        <TabPane key="tab1" tab="Tab 1">
          Content
        </TabPane>
      </Tabs>,
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.classList.contains('sui-tabs')).toBe(true)
  })

  it('ARIA 属性正确设置', () => {
    render(
      <Tabs>
        <TabPane key="tab1" tab="Tab 1">
          Content 1
        </TabPane>
        <TabPane key="tab2" tab="Tab 2">
          Content 2
        </TabPane>
      </Tabs>,
    )

    const tabs = screen.getAllByRole('tab')
    const tabpanel = screen.getByRole('tabpanel')

    // 检查 aria-controls 和 aria-labelledby 关联
    expect(tabs[0]).toHaveAttribute('aria-controls', 'tabpanel-tab1')
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'tab-tab1')

    // 检查 id 属性
    expect(tabs[0]).toHaveAttribute('id', 'tab-tab1')
    expect(tabpanel).toHaveAttribute('id', 'tabpanel-tab1')
  })

  it('受控模式下 activeKey 控制选中状态', () => {
    const handleChange = vi.fn()

    render(
      <Tabs activeKey="tab2" onChange={handleChange}>
        <TabPane key="tab1" tab="Tab 1">
          Content 1
        </TabPane>
        <TabPane key="tab2" tab="Tab 2">
          Content 2
        </TabPane>
      </Tabs>,
    )

    const tabs = screen.getAllByRole('tab')
    const firstTab = tabs[0]!

    // 第二个 tab 应该被选中（由 activeKey 控制）
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')

    // 内容应该是第二个
    const tabpanel = screen.getByRole('tabpanel')
    expect(tabpanel).toHaveTextContent('Content 2')

    // 点击第一个 tab 触发 onChange，但内部状态不改变（受控）
    fireEvent.click(firstTab)
    expect(handleChange).toHaveBeenCalledWith('tab1')

    // 仍然显示第二个内容（因为是受控模式）
    expect(tabpanel).toHaveTextContent('Content 2')
  })

  it('defaultActiveKey 设置初始选中状态', () => {
    render(
      <Tabs defaultActiveKey="tab2">
        <TabPane key="tab1" tab="Tab 1">
          Content 1
        </TabPane>
        <TabPane key="tab2" tab="Tab 2">
          Content 2
        </TabPane>
      </Tabs>,
    )

    const tabs = screen.getAllByRole('tab')

    // 第二个 tab 应该被选中
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')

    // 内容应该是第二个
    const tabpanel = screen.getByRole('tabpanel')
    expect(tabpanel).toHaveTextContent('Content 2')
  })
})