import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TabBar } from './index'
import type { TabBarItem } from './types'

import { Home, Search, ShoppingCart, User } from 'lucide-react'

const meta: Meta<typeof TabBar> = {
  title: '导航/TabBar 底部标签栏',
  component: TabBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

/** 包装组件，将 TabBar 固定在底部 */
const TabBarWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative h-[400px] w-full border border-gray-200 rounded-lg overflow-hidden">
    <div className="absolute bottom-0 left-0 right-0">
      {children}
    </div>
  </div>
)

export default meta
type Story = StoryObj<typeof TabBar>

const baseItems: TabBarItem[] = [
  { key: 'home', label: '首页', icon: <Home size={20} />, activeIcon: <Home size={20} /> },
  { key: 'search', label: '搜索', icon: <Search size={20} /> },
  { key: 'cart', label: '购物车', icon: <ShoppingCart size={20} />, badge: { type: 'number', count: 5 } },
  { key: 'me', label: '我的', icon: <User size={20} />, activeIcon: <User size={20} /> },
]

/** 基础用法 */
export const Default: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('home')
    return (
      <TabBarWrapper>
        <TabBar items={baseItems} activeKey={activeKey} onChange={setActiveKey} />
      </TabBarWrapper>
    )
  },
}

/** 带角标 */
export const WithBadge: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('home')
    const items: TabBarItem[] = [
      { key: 'home', label: '首页', icon: <Home size={20} /> },
      { key: 'msg', label: '消息', icon: <ShoppingCart size={20} />, badge: { type: 'number', count: 3 } },
      { key: 'notify', label: '通知', icon: <Search size={20} />, badge: { type: 'dot' } },
      { key: 'me', label: '我的', icon: <User size={20} /> },
    ]
    return (
      <TabBarWrapper>
        <TabBar items={items} activeKey={activeKey} onChange={setActiveKey} />
      </TabBarWrapper>
    )
  },
}

/** 固定底部 */
export const Fixed: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('home')
    return (
      <div className="relative h-64 border border-border rounded-lg overflow-hidden">
        <div className="p-4 text-sm text-muted-foreground">页面内容区域</div>
        <TabBar items={baseItems} activeKey={activeKey} onChange={setActiveKey} fixed />
      </div>
    )
  },
}

/** 禁用项 */
export const WithDisabled: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('home')
    const items: TabBarItem[] = [
      { key: 'home', label: '首页', icon: <Home size={20} /> },
      { key: 'search', label: '搜索', icon: <Search size={20} /> },
      { key: 'locked', label: '锁定', icon: <User size={20} />, disabled: true },
      { key: 'me', label: '我的', icon: <User size={20} /> },
    ]
    return <TabBar items={items} activeKey={activeKey} onChange={setActiveKey} />
  },
}

/** 无边框 */
export const NoBorder: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('home')
    return <TabBar items={baseItems} activeKey={activeKey} onChange={setActiveKey} bordered={false} />
  },
}

/** 大数字角标 */
export const LargeBadge: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('home')
    const items: TabBarItem[] = [
      { key: 'home', label: '首页', icon: <Home size={20} /> },
      { key: 'msg', label: '消息', icon: <ShoppingCart size={20} />, badge: { type: 'number', count: 120 } },
      { key: 'cart', label: '购物车', icon: <Search size={20} />, badge: { type: 'number', count: 0 } },
      { key: 'me', label: '我的', icon: <User size={20} /> },
    ]
    return <TabBar items={items} activeKey={activeKey} onChange={setActiveKey} />
  },
}
