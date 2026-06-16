import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import React from 'react'
import { Badge } from './index'
import { Bell, Mail, ShoppingCart, User } from 'lucide-react'
import { Button } from '../button/index'

const meta: Meta<typeof Badge> = {
  title: '数据展示/Badge 徽标数',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '徽标数用于展示消息、通知或状态的数字标记。适用于图标角标、待办提醒、状态指示等场景，支持数字溢出、小红点和独立使用。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: '语义变体，控制徽标背景色，默认 danger',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { count: 5 },
  render: (args) => (
    <Badge {...args}>
      <Mail className="h-6 w-6 text-gray-600" />
    </Badge>
  ),
}

export const WithOverflow: Story = {
  args: { count: 200, overflowCount: 99 },
  render: (args) => (
    <Badge {...args}>
      <Bell className="h-6 w-6 text-gray-600" />
    </Badge>
  ),
}

export const Dot: Story = {
  args: { dot: true },
  render: (args) => (
    <Badge {...args}>
      <Mail className="h-6 w-6 text-gray-600" />
    </Badge>
  ),
}

export const ShowZero: Story = {
  args: { count: 0, showZero: true },
  render: (args) => (
    <Badge {...args}>
      <Bell className="h-6 w-6 text-gray-600" />
    </Badge>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <Badge count={5} variant="default"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="primary"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="success"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="warning"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="danger"><Bell className="h-6 w-6 text-gray-600" /></Badge>
    </div>
  ),
}

export const Standalone: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Badge count={25} />
      <Badge count={4} variant="primary" />
      <Badge count={0} showZero />
      <Badge count={109} overflowCount={99} />
      <Badge dot />
    </div>
  ),
}

export const WithDifferentIcons: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <Badge count={5}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={0} showZero>
        <Bell className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge dot>
        <ShoppingCart className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={12} variant="primary">
        <User className="h-6 w-6 text-gray-600" />
      </Badge>
    </div>
  ),
}

export const OverflowThresholds: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <Badge count={99}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={100}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={99} overflowCount={10}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
    </div>
  ),
}

export const DynamicCount: Story = {
  render: () => {
    const [count, setCount] = useState(5)
    return (
      <div className="flex items-center gap-4">
        <Badge count={count}>
          <Mail className="h-6 w-6 text-gray-600" />
        </Badge>
        <Button onClick={() => setCount((c) => Math.max(0, c - 1))}>-</Button>
        <Button onClick={() => setCount((c) => c + 1)}>+</Button>
      </div>
    )
  },
}

export const StatusDot: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <Badge dot variant="success">
        <span className="text-sm text-gray-700">成功</span>
      </Badge>
      <Badge dot variant="primary">
        <span className="text-sm text-gray-700">处理中</span>
      </Badge>
      <Badge dot variant="warning">
        <span className="text-sm text-gray-700">警告</span>
      </Badge>
      <Badge dot variant="danger">
        <span className="text-sm text-gray-700">错误</span>
      </Badge>
    </div>
  ),
}

export const Ribbon: Story = {
  render: () => {
    const ribbonStyle: React.CSSProperties = {
      position: 'absolute',
      top: 12,
      right: -30,
      width: 120,
      textAlign: 'center',
      color: '#fff',
      fontSize: 12,
      lineHeight: '20px',
      transform: 'rotate(45deg)',
      borderRadius: 2,
    }

    return (
      <div className="flex flex-wrap gap-8">
        <div className="relative overflow-hidden w-64 rounded-lg border border-border shadow-sm">
          <div style={{ ...ribbonStyle, backgroundColor: 'var(--color-primary, #3b82f6)' }}>热销</div>
          <div className="p-4">
            <h4 className="text-sm font-medium">商品 A</h4>
            <p className="text-xs text-muted-foreground mt-1">这是带有热销角标的卡片</p>
          </div>
        </div>
        <div className="relative overflow-hidden w-64 rounded-lg border border-border shadow-sm">
          <div style={{ ...ribbonStyle, backgroundColor: 'var(--color-danger, #ef4444)' }}>新品</div>
          <div className="p-4">
            <h4 className="text-sm font-medium">商品 B</h4>
            <p className="text-xs text-muted-foreground mt-1">这是带有新品角标的卡片</p>
          </div>
        </div>
        <div className="relative overflow-hidden w-64 rounded-lg border border-border shadow-sm">
          <div style={{ ...ribbonStyle, backgroundColor: 'var(--color-success, #22c55e)' }}>折扣</div>
          <div className="p-4">
            <h4 className="text-sm font-medium">商品 C</h4>
            <p className="text-xs text-muted-foreground mt-1">这是带有折扣角标的卡片</p>
          </div>
        </div>
      </div>
    )
  },
}
