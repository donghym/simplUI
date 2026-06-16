import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { BackTop } from './index'
import { ArrowUp } from 'lucide-react'

const meta: Meta<typeof BackTop> = {
  title: '其他/BackTop 回到顶部',
  component: BackTop,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `返回页面顶部的操作按钮。\n\n- 长页辅助：用于内容较长的页面，方便用户快速回到顶部。\n- 自定义阈值：可设置滚动距离阈值，控制按钮的显示时机。\n- 平滑滚动：支持配置滚动动画时长，提升交互体验。`,
      },
    },
  },
  argTypes: {
    visibilityHeight: {
      control: 'number',
      description: '显示回到顶部按钮的滚动高度阈值，默认 400',
    },
    duration: {
      control: 'number',
      description: '滚动持续时间（毫秒），默认 450',
    },
    getContainer: {
      control: false,
      description: '滚动到顶部的目标容器，默认 window',
    },
  },
}

export default meta
type Story = StoryObj<typeof BackTop>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '基础用法，页面滚动超过指定高度后，右下角出现返回顶部按钮。',
      },
    },
  },
  render: () => (
    <div>
      <div className="h-[2000px] p-4">
        <p className="text-center text-gray-500">向下滚动查看回到顶部按钮</p>
      </div>
      <BackTop visibilityHeight={400} />
    </div>
  ),
}

export const CustomIcon: Story = {
  args: {
    visibilityHeight: 200,
    icon: <ArrowUp className="h-5 w-5" />,
  },
}

export const CustomDuration: Story = {
  args: {
    visibilityHeight: 100,
    duration: 300,
  },
}

export const WithClickCallback: Story = {
  args: {
    visibilityHeight: 100,
    onClick: fn(),
  },
}

export const DemoPage: Story = {
  parameters: {
    docs: {
      description: {
        story: '模拟长页面的完整示例，向下滚动可查看回到顶部按钮的显示与交互效果。',
      },
    },
  },
  render: () => (
    <div className="h-[200vh] p-4">
      <p className="text-center">向下滚动查看返回顶部按钮</p>
      <BackTop visibilityHeight={200} />
    </div>
  ),
}