import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './index'

const meta: Meta<typeof Divider> = {
  title: '布局/Divider 分割线',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '分割线方向，horizontal 为水平线、vertical 为竖线，默认 horizontal',
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: '分割线样式，solid=实线 dashed=虚线 dotted=点线，默认 solid',
    },
    orientation: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: '文字位置，仅 type=horizontal 且存在 children 时生效，默认 center',
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  args: {
    type: 'horizontal',
    variant: 'solid',
  },
}

export const WithText: Story = {
  args: { children: '或' },
}

export const LeftText: Story = {
  args: { children: '区域 A', orientation: 'left' },
}

export const RightText: Story = {
  args: { children: '结束', orientation: 'right' },
}

export const Dashed: Story = {
  args: { variant: 'dashed' },
}

export const Dotted: Story = {
  args: { variant: 'dotted' },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span>首页</span>
      <Divider type="vertical" />
      <span>产品</span>
      <Divider type="vertical" />
      <span>关于</span>
    </div>
  ),
}
