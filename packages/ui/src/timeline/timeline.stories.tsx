import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from './index'

const meta: Meta<typeof Timeline> = {
  title: '数据展示/Timeline 时间轴',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Timeline>

/** 基础用法 - 使用 items 数组 */
export const Default: Story = {
  args: {
    items: [
      { status: 'completed', title: 'Order Placed', description: 'Completed', time: 'May 28, 10:24 AM' },
      { status: 'active', title: 'Processing', description: 'In Progress', time: 'May 29, 02:15 PM' },
      { status: 'pending', title: 'Shipping', description: 'Pending', time: 'Estimated: May 30' },
    ],
  },
}

/** 全部完成状态 */
export const AllCompleted: Story = {
  args: {
    items: [
      { status: 'completed', title: 'Order Placed', description: 'Completed', time: 'May 28, 10:24 AM' },
      { status: 'completed', title: 'Processing', description: 'Completed', time: 'May 29, 02:15 PM' },
      { status: 'completed', title: 'Shipping', description: 'Completed', time: 'May 30, 09:00 AM' },
      { status: 'completed', title: 'Delivered', description: 'Completed', time: 'May 31, 14:30 PM' },
    ],
  },
}

/** 待处理状态 */
export const AllPending: Story = {
  args: {
    items: [
      { status: 'pending', title: 'Order Placed', description: 'Pending', time: 'Waiting...' },
      { status: 'pending', title: 'Processing', description: 'Pending', time: 'Waiting...' },
      { status: 'pending', title: 'Shipping', description: 'Pending', time: 'Waiting...' },
    ],
  },
}

/** 混合状态 */
export const MixedStatus: Story = {
  args: {
    items: [
      { status: 'completed', title: '需求分析', description: '已完成', time: '2024-01-15' },
      { status: 'completed', title: 'UI设计', description: '已完成', time: '2024-01-20' },
      { status: 'active', title: '前端开发', description: '进行中', time: '2024-01-25' },
      { status: 'pending', title: '后端开发', description: '待开始', time: '预计 2024-02-01' },
      { status: 'pending', title: '测试上线', description: '待开始', time: '预计 2024-02-15' },
    ],
  },
}

/** 无描述和时间 */
export const Simple: Story = {
  args: {
    items: [
      { status: 'completed', title: '步骤一' },
      { status: 'completed', title: '步骤二' },
      { status: 'active', title: '步骤三' },
      { status: 'pending', title: '步骤四' },
    ],
  },
}

/** 只有标题和时间 */
export const WithTimeOnly: Story = {
  args: {
    items: [
      { status: 'completed', title: '项目启动', time: '2024-01-01' },
      { status: 'completed', title: '需求评审', time: '2024-01-15' },
      { status: 'active', title: '开发阶段', time: '2024-02-01' },
      { status: 'pending', title: '测试阶段', time: '2024-03-01' },
    ],
  },
}
