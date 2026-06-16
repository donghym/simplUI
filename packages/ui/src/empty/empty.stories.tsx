import type { Meta, StoryObj } from '@storybook/react'
import { Empty } from './index'

const meta: Meta<typeof Empty> = {
  title: '数据展示/Empty 空状态',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
      description: '描述文字，不传则显示默认文案"暂无数据"',
    },
    image: {
      control: 'text',
      description: '空状态图片地址，内置 PRESENTED_IMAGE_SIMPLE 和 PRESENTED_IMAGE_PAGE_SIMPLE 两种风格',
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  args: {},
}

export const WithDescription: Story = {
  args: {
    description: '没有找到数据，请尝试调整筛选条件。',
  },
}

export const CustomImage: Story = {
  args: {
    image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect fill=\'%23f3f4f6\' width=\'100\' height=\'100\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'14\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EEmpty%3C/text%3E%3C/svg%3E',
    description: '自定义空状态图片',
  },
}

export const WithDescriptionOnly: Story = {
  args: {
    description: '简洁空状态（小图）',
  },
}

export const WithChildren: Story = {
  render: () => (
    <Empty description="购物车中没有商品">
      <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded">
        添加商品
      </button>
    </Empty>
  ),
}

export const NoData: Story = {
  args: {
    description: '暂无数据',
  },
}

export const NoResults: Story = {
  args: {
    description: '未找到搜索结果',
  },
}

export const CustomIcon: Story = {
  render: () => (
    <Empty
      image={
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" fill="#f0f5ff" stroke="#d6e4ff" strokeWidth="2" />
          <path d="M40 55 L55 70 L80 45" stroke="#1677ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="60" cy="60" r="30" stroke="#adc6ff" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
        </svg>
      }
      description="自定义 SVG 图标空状态"
    >
      <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded">
        重试
      </button>
    </Empty>
  ),
}