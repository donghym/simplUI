import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard } from './index'

const meta: Meta<typeof HoverCard> = {
  title: '动效/HoverCard 悬浮动效卡片',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    lift: {
      control: 'number',
      description: '上浮距离像素',
    },
    shadow: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: '阴影大小',
    },
    rotate: {
      control: 'number',
      description: '旋转角度',
    },
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  args: {
    children: <div className="p-4 text-center">悬浮我试试</div>,
  },
}

export const WithLift: Story = {
  args: {
    lift: 16,
    children: <div className="p-4 text-center">上浮 16px</div>,
  },
}

export const WithRotate: Story = {
  args: {
    rotate: 3,
    children: <div className="p-4 text-center">旋转 3 度</div>,
  },
}

export const ShadowSizes: Story = {
  render: () => (
    <div className="flex gap-6 flex-wrap">
      <HoverCard shadow="sm">
        <div className="p-4 text-center w-40">小阴影</div>
      </HoverCard>
      <HoverCard shadow="md">
        <div className="p-4 text-center w-40">中阴影</div>
      </HoverCard>
      <HoverCard shadow="lg">
        <div className="p-4 text-center w-40">大阴影</div>
      </HoverCard>
      <HoverCard shadow="xl">
        <div className="p-4 text-center w-40">超大阴影</div>
      </HoverCard>
    </div>
  ),
}

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {['项目 A', '项目 B', '项目 C'].map((name) => (
        <HoverCard key={name} lift={8} rotate={1}>
          <div className="p-4">
            <h3 className="font-medium text-foreground">{name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">悬浮查看动效</p>
          </div>
        </HoverCard>
      ))}
    </div>
  ),
}

export const Combined: Story = {
  args: {
    lift: 12,
    rotate: 2,
    shadow: 'xl',
    children: <div className="p-6 text-center">上浮 + 旋转 + 大阴影</div>,
  },
}
