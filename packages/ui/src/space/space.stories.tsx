import type { Meta, StoryObj } from '@storybook/react'
import { Space } from './index'

const meta: Meta<typeof Space> = {
  title: '布局/Space 间距',
  component: Space,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '间距方向，默认 horizontal',
    },
    componentSize: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: '间距大小，small=8px middle=16px large=24px，默认 small',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline'],
      description: '对齐方式，默认 center',
    },
    wrap: {
      control: 'boolean',
      description: '是否自动换行（仅 horizontal 有效），默认 false',
    },
    split: {
      control: false,
      description: '分隔符，传入 ReactNode 作为子元素之间的分隔内容',
    },
  },
}

export default meta
type Story = StoryObj<typeof Space>

export const Horizontal: Story = {
  render: () => (
    <Space>
      <span>项目 1</span>
      <span>项目 2</span>
      <span>项目 3</span>
    </Space>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Space direction="vertical">
      <span>行 1</span>
      <span>行 2</span>
      <span>行 3</span>
    </Space>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Space componentSize="small"><span>A</span><span>B</span><span>C</span></Space>
      <Space componentSize="middle"><span>A</span><span>B</span><span>C</span></Space>
      <Space componentSize="large"><span>A</span><span>B</span><span>C</span></Space>
    </div>
  ),
}

export const WithSplit: Story = {
  render: () => (
    <Space split={<span className="text-gray-300">|</span>}>
      <a className="cursor-pointer">首页</a>
      <a className="cursor-pointer">产品</a>
      <a className="cursor-pointer">关于</a>
    </Space>
  ),
}

export const Wrapping: Story = {
  render: () => (
    <Space wrap>
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className="px-2 py-1 bg-gray-100 rounded">项目 {i + 1}</span>
      ))}
    </Space>
  ),
}
